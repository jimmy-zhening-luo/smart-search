import type Directory from "../../directories/directory/Directory.js";

export default abstract class FileOperator<
  FileOperation extends "READ" | "WRITE",
  DirectoryType extends Directory<FileOperation>,
> {
  public readonly sanitizedName: string;
  protected readonly directory: DirectoryType;

  constructor(directory: DirectoryType, fileName: string) {
    try {
      this.directory = directory;
      this.sanitizedName = this.directory.sanitizeFilePath(fileName).fileName;
    }
    catch (e) {
      throw new EvalError(
        `File: ctor: Failed to instantiate base File with member directory set to: ${directory.fullPath}`,
        { cause: e },
      );
    }
  }

  protected async safePath(): Promise<string> {
    try {
      return await this.directory.safeFilePath(this.sanitizedName);
    }
    catch (e) {
      throw new EvalError(
        `File: protected async safePath: Failed to get safe (operable) path for file`,
        { cause: e },
      );
    }
  }
}
