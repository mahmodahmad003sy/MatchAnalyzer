export class Match {
  constructor(
    private date: Date,
    private firstTeam: string,
    private secondTeam: string,
    private firstGoals: number,
    private secondGoals: number,
    private winner: string,
    private ref: string
  ) {}

  getMatch = () => {
    return {
      date: this.date,
      firsTeam: this.firstTeam,
      secTeam: this.secondTeam,
      firstGoals: this.firstGoals,
      secondGoals: this.secondGoals,
      winner: this.winner,
      ref: this.ref,
    };
  };
}
