import { Reporter } from "../Summary";
import fs, { writeFileSync } from "fs";
export class HtmlReporter implements Reporter {
  report(report: string): void {
    const html = `
    <div>
    <h1>Summary Report</h1>
    ${report}
    </div>
    `;
    writeFileSync("Report.html", html);
  }
}
