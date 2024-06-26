import Directory from "./directory/Directory.js";

export default class InputDirectory extends Directory<"READ"> {
  public readonly operation = "READ";

  public ifNotExists(): void {
    try {
      throw new ReferenceError(
        `Cannot read from a non-existent file`,
      );
    }
    catch (e) {
      throw new EvalError(
        `InputDirectory: ifNotExists: Failed to create directory`,
        { cause: e },
      );
    }
  }
}
