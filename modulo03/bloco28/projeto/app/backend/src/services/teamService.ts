import Team from '../database/models/team';
import ITeam from '../interfaces/ITeam';

class TeamService {
  constructor(private model = Team) {
    this.model = model;
  }

  async listAll(): Promise<ITeam[]> {
    return this.model.findAll();
  }

  async findById(id: number): Promise<ITeam | null> {
    return this.model.findOne({ where: { id } });
  }
}

export default TeamService;
