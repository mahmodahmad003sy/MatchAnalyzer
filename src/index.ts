import { CsvFileReader } from "./composotion/CsvFileReader";
import { MatchReader } from "./composotion/MatchReader";

const reader = new CsvFileReader("./football.csv");
const matchReader = new MatchReader(reader);
matchReader.load();

const data = matchReader.matches;

console.log({ data });
