import { Create } from './IMatchers';

interface ILeaderBoard {
  name: string,
  totalPoints: number,
  totalGames: number,
  totalVictories: number,
  totalDraws: number,
  totalLosses: number,
  goalsFavor: number,
  goalsOwn: number,
  goalsBalance: number,
  efficiency: number,
}

interface MatchesTeamHome {
  id?: number,
  teamName: string,
  homeTeam: Create[]
}

interface MatchesTeamAway {
  id?: number,
  teamName: string,
  awayTeam: Create[]
}

interface MatchesTeam {
  id?: number,
  teamName: string,
  homeTeam: Create[],
  awayTeam: Create[]
}

interface LeaderBoard {
  getFinishedMatchersHome(): Promise<ILeaderBoard[]>
  getFinishedmatchersAway(): Promise<ILeaderBoard[]>
  getFinishedMatchers(): Promise<ILeaderBoard[]>
}

export default LeaderBoard;
export {
  ILeaderBoard,
  MatchesTeamHome,
  MatchesTeamAway,
  MatchesTeam,
};
