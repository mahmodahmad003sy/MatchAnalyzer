import { MatchResult } from "../enum/MatchResult";
import { parseStringToDate } from "../utils";
import { FileReader } from "./FileReader";
type MatchData = [Date, string, string, number, number, MatchResult, string];
export class MatchReader extends FileReader<MatchData> {
  data: MatchData[] = [];

  mapRaw(row: string[]): MatchData {
    return [
      parseStringToDate(row[0]),
      row[1],
      row[2],
      parseInt(row[3]),
      parseInt(row[4]),
      row[5] as MatchResult,
      row[6],
    ];
  }
}
