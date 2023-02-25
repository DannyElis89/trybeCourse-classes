import { StatusCodes } from 'http-status-codes';
import Team from '../database/models/team';
import Matches from '../database/models/matches';
import IMatchers, { Create, Goals } from '../interfaces/IMatchers';
import HandleError from '../utils/handleError';

export default class MatcherService {
  constructor(private model = Matches) {
    this.model = model;
  }

  async getAllMatchers(): Promise<IMatchers[]> {
    const matchers = await this.model.findAll({
      include: [
        {
          model: Team, as: 'teamHome', attributes: ['teamName'],
        },
        {
          model: Team, as: 'teamAway', attributes: ['teamName'],
        },
      ],
    });
    return matchers as unknown as IMatchers[];
  }

  async create(data: Create): Promise<Create> {
    const { homeTeam, awayTeam } = data;
    if (homeTeam === awayTeam) {
      throw new HandleError(
        StatusCodes.UNAUTHORIZED,
        'It is not possible to create a match with two equal teams',
      );
    }

    const homeT = await Team.findOne({ where: { id: homeTeam } });
    const awayT = await Team.findOne({ where: { id: awayTeam } });

    if (!homeT || !awayT) {
      throw new HandleError(
        StatusCodes.NOT_FOUND,
        'There is no team with such id!',
      );
    }

    const newMatcher = await this.model.create({ ...data, inProgress: 1 });

    return newMatcher;
  }

  async updateProgress(id: number): Promise<void> {
    await this.model.update({ inProgress: false }, { where: { id } });
  }

  async updateGoals(id: number, data: Goals): Promise<void> {
    await this.model.update({ ...data }, { where: { id } });
  }
}