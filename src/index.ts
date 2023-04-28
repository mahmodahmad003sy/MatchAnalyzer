import { Summary } from "./Summary";
import { MatchReader } from "./composotion/MatchReader";

const matchReader = MatchReader.readFromCsvFile("./football.csv");
matchReader.load();
const data = matchReader.matches;

const team = process.env.npm_config_team;

const summary = Summary.analyzeWinsAndBuildLogReporter(
  (team as string) || "No Team"
);

summary.analyzeAndReport(data);
