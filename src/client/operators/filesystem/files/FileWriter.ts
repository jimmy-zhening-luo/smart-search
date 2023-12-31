import { promises as fs } from "fs";
import type OutputDirectory from "../directories/OutputDirectory.js";
import FileOperator from "./file/FileOperator.js";

export default class FileWriter extends FileOperator<"WRITE", OutputDirectory> {
  public async write(
    content: Promise<Response>,
  ): Promise<void> {
    try {
      const buffer: Buffer = Buffer.from(
        await (
          await content
        )
          .arrayBuffer(),
      );

      await fs.writeFile(
        await this.safePath(),
        buffer,
      );
    }
    catch (e) {
      throw new EvalError(
        `OutputFile: async save: Failed to save file`,
        { cause: e },
      );
    }
  }
}
