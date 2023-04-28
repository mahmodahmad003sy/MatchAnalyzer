import { WinAnalysis } from "./analyzers/WinsAnlysis";
import { MatchData } from "./composotion/MatchReader";
import { ConsoleReporter } from "./reporters/ConsoleReporter";

export interface Analyzer {
  runs(data: MatchData[]): string;
}

export interface Reporter {
  report(report: string): void;
}

export class Summary {
  static analyzeWinsAndBuildLogReporter(teamName: string): Summary {
    return new Summary(new WinAnalysis(teamName), new ConsoleReporter());
  }
  constructor(public analyzer: Analyzer, public reporter: Reporter) {}

  /**
   * @param matches input as array of MatchData
   * @returns void
   * @example const matchData:MatchData[]=[]
   *          const summary= new Summary(new WinAnalysis("teamName"),new ConsoleReporter())
   *          summary.analyzeAndReport(matchData)
   * @example const summary = Summary.analyzeWinsAndBuildLogReporter((team as string) || "No Team");
   *summary.analyzeAndReport(data);
   *
   */
  analyzeAndReport(matches: MatchData[]) {
    const report = this.analyzer.runs(matches);
    this.reporter.report(report);
  }
}
