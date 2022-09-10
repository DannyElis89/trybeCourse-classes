interface IMatchers {
  id: number;
  homeTeam: number;
  homeTeamGoals: number;
  awayTeam: number;
  awayTeamGoals: number;
  inProgress: boolean;
  teamHome: { teamName: string };
  teamAway: { teamName: string };
}

interface Create {
  id?: number;
  homeTeam: number;
  awayTeam: number;
  homeTeamGoals: number;
  awayTeamGoals: number;
  inProgress?: boolean;
}

interface Goals {
  homeTeamGoals: number;
  awayTeamGoals: number;
}

interface Matchers {
  getAllMatchers(): Promise<IMatchers[]>
  create(data: Create): Promise< Create | void>
  updateProgress(id: number): Promise<void>
  updateGoals(id: number, data: Goals): Promise<void>
}

export default IMatchers;
export {
  Matchers,
  Create,
  Goals,
};
