import { MatchResult } from "../enum/MatchResult";
import { parseStringToDate } from "../utils";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  data: string[][];
  read(): void;
}

export type MatchData = [
  Date,
  string,
  string,
  number,
  number,
  MatchResult,
  string
];

export class MatchReader {
  static readFromCsvFile(fileName: string): MatchReader {
    return new MatchReader(new CsvFileReader(fileName));
  }

  matches: MatchData[] = [];
  constructor(public reader: DataReader) {}
  load() {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): MatchData => {
      return [
        parseStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatchResult,
        row[6],
      ];
    });
  }
}
