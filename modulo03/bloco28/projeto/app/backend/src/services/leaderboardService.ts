import Matches from '../database/models/matches';
import Team from '../database/models/team';

import { Create } from '../interfaces/IMatchers';
import {
  MatchesTeamHome,
  ILeaderBoard,
  MatchesTeamAway,
  MatchesTeam,
} from '../interfaces/ILeaderBoard';

export default class LeaderBoardService {
  constructor(private model = Team) {
    this.model = model;
  }

  resultsGoalsHome = (matchers: Create[]): number[] => {
    const goalsFavorHome = matchers.reduce((acc, curr: Create) => acc + curr.homeTeamGoals, 0);
    const goalsOwnHome = matchers.reduce((acc, curr: Create) => acc + curr.awayTeamGoals, 0);

    return [goalsFavorHome, goalsOwnHome];
  };

  resultsGoalsAway = (matchers: Create[]): number[] => {
    const goalsFavorAway = matchers.reduce((acc, curr: Create) => acc + curr.awayTeamGoals, 0);
    const goalsOwnAway = matchers.reduce((acc, curr: Create) => acc + curr.homeTeamGoals, 0);

    return [goalsFavorAway, goalsOwnAway];
  };

  resultOfMatchersHome = (matchers: Create[]): number[] => {
    let homeVictories = 0;
    let homeDraws = 0;
    let homeLosses = 0;

    matchers.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamGoals > awayTeamGoals) homeVictories += 1;
      if (homeTeamGoals === awayTeamGoals) homeDraws += 1;
      if (homeTeamGoals < awayTeamGoals) homeLosses += 1;
    });

    const totalPoints = homeDraws + (3 * homeVictories);

    return [homeVictories, homeDraws, homeLosses, totalPoints];
  };

  resultOfMatchersAway = (matchers: Create[]): number[] => {
    let awayVictories = 0;
    let awayDraws = 0;
    let AwayLosses = 0;

    matchers.forEach(({ homeTeamGoals, awayTeamGoals }) => {
      if (homeTeamGoals < awayTeamGoals) awayVictories += 1;
      if (homeTeamGoals === awayTeamGoals) awayDraws += 1;
      if (homeTeamGoals > awayTeamGoals) AwayLosses += 1;
    });

    const totalPoints = awayDraws + (3 * awayVictories);

    return [awayVictories, awayDraws, AwayLosses, totalPoints];
  };

  formattedHome = ({ teamName, homeTeam }: MatchesTeamHome) => {
    const [homeVictories, homeDraws, homeLosses, hoomePoints] = this.resultOfMatchersHome(homeTeam);

    const [goalsFavorHome, goalsOwnHome] = this.resultsGoalsHome(homeTeam);
    return {
      name: teamName,
      totalPoints: hoomePoints,
      totalGames: homeTeam.length,
      totalVictories: homeVictories,
      totalDraws: homeDraws,
      totalLosses: homeLosses,
      goalsFavor: goalsFavorHome,
      goalsOwn: goalsOwnHome,
      goalsBalance: (goalsFavorHome - goalsOwnHome),
      efficiency: Number(((hoomePoints / (homeTeam.length * 3)) * 100).toFixed(2)),
    };
  };

  formattedAway = ({ teamName, awayTeam }: MatchesTeamAway) => {
    const [victoriesAway, drawsAway, lossesAway, pointsAway] = this.resultOfMatchersAway(awayTeam);

    const [goalsFavorAway, goalsOwnAway] = this.resultsGoalsAway(awayTeam);
    return {
      name: teamName,
      totalPoints: pointsAway,
      totalGames: awayTeam.length,
      totalVictories: victoriesAway,
      totalDraws: drawsAway,
      totalLosses: lossesAway,
      goalsFavor: goalsFavorAway,
      goalsOwn: goalsOwnAway,
      goalsBalance: (goalsFavorAway - goalsOwnAway),
      efficiency: Number(((pointsAway / (awayTeam.length * 3)) * 100).toFixed(2)),
    };
  };

  formatted = ({ teamName, awayTeam, homeTeam }: MatchesTeam) => {
    const [homeVictories, homeDraws, homeLosses, hoomePoints] = this.resultOfMatchersHome(homeTeam);
    const [goalsFavorHome, goalsOwnHome] = this.resultsGoalsHome(homeTeam);
    const [victoriesAway, drawsAway, lossesAway, pointsAway] = this.resultOfMatchersAway(awayTeam);
    const [goalsFavorAway, goalsOwnAway] = this.resultsGoalsAway(awayTeam);

    return {
      name: teamName,
      totalPoints: hoomePoints + pointsAway,
      totalGames: [...homeTeam, ...awayTeam].length,
      totalVictories: homeVictories + victoriesAway,
      totalDraws: homeDraws + drawsAway,
      totalLosses: homeLosses + lossesAway,
      goalsFavor: goalsFavorHome + goalsFavorAway,
      goalsOwn: goalsOwnHome + goalsOwnAway,
      goalsBalance: ((goalsFavorHome + goalsFavorAway) - (goalsOwnHome + goalsOwnAway)),
      efficiency: Number(
        (((hoomePoints + pointsAway) / ([...homeTeam, ...awayTeam].length * 3)) * 100).toFixed(2),
      ),
    };
  };

  orderMatchers = (team1: ILeaderBoard, team2: ILeaderBoard) => {
    if (team1.totalPoints < team2.totalPoints) { return 1; }
    if (team1.totalPoints > team2.totalPoints) { return -1; }

    if (team1.totalVictories < team2.totalVictories) { return 1; }
    if (team1.totalVictories > team2.totalVictories) { return -1; }

    if (team1.goalsBalance < team2.goalsBalance) { return 1; }
    if (team1.goalsBalance > team2.goalsBalance) { return -1; }

    if (team1.goalsFavor < team2.goalsFavor) { return 1; }
    if (team1.goalsFavor > team2.goalsFavor) { return -1; }

    if (team1.goalsOwn < team2.goalsOwn) { return 1; }
    if (team1.goalsOwn > team2.goalsOwn) { return -1; }

    return 0;
  };

  async getFinishedMatchersHome(): Promise<ILeaderBoard[]> {
    const matchers = await this.model.findAll({
      include: [{ model: Matches, as: 'homeTeam', where: { inProgress: 0 } }],
    });

    const fineshedMatches = matchers as unknown as MatchesTeamHome[];
    const leaderBoardHome = fineshedMatches.map(this.formattedHome);

    return leaderBoardHome.sort(this.orderMatchers);
  }

  async getFinishedmatchersAway(): Promise<ILeaderBoard[]> {
    const matchers = await this.model.findAll({
      include: [{ model: Matches, as: 'awayTeam', where: { inProgress: 0 } }],
    });

    const fineshedMatches = matchers as unknown as MatchesTeamAway[];
    const leaderBoardHome = fineshedMatches.map(this.formattedAway);

    return leaderBoardHome.sort(this.orderMatchers);
  }

  async getFinishedMatchers(): Promise<ILeaderBoard[]> {
    const matchers = await this.model.findAll({ include: [
      { model: Matches, as: 'awayTeam', where: { inProgress: 0 } },
      { model: Matches, as: 'homeTeam', where: { inProgress: 0 } },
    ] });

    const fineshedMatches = matchers as unknown as MatchesTeam[];
    const leadeBoard = fineshedMatches.map(this.formatted);

    return leadeBoard.sort(this.orderMatchers);
  }
}
