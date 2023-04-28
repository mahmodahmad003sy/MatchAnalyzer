import { Analyzer } from "../Summary";
import { MatchData } from "../composotion/MatchReader";
import { MatchResult } from "../enum/MatchResult";

export class WinAnalysis implements Analyzer {
  constructor(public teamName: string) {}
  runs(data: MatchData[]): string {
    let wins = 0;
    data.map((match) => {
      if (
        (match[1] == this.teamName && match[5] == MatchResult.Home) ||
        (match[2] == this.teamName && match[5] == MatchResult.Away)
      )
        wins = wins + 1;
    });
    return `${this.teamName} wins ${wins} matches`;
  }
}
