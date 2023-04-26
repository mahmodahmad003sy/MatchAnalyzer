import fs from "fs";
export abstract class FileReader<T> {
  data: T[] = [];

  constructor(public fileName: string) {}
  abstract mapRaw(row: string[]): T;
  read = (): void => {
    this.data = fs
      .readFileSync(this.fileName, { encoding: "utf-8" })
      .split("\n")
      .map((row) => row.split(","))
      .map(this.mapRaw);
  };
}
