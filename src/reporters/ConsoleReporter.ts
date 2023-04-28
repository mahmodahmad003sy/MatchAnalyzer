import { Reporter } from "../Summary";

export class ConsoleReporter implements Reporter {
  report(report: string): void {
    console.log(report);
  }
}
