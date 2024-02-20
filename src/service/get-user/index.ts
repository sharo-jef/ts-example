import type { Response } from 'express';
import type { GitHubRepository } from '../../repository/github';
import { Logger } from '../../lib/logger';

export class GetUserService {
  constructor(private readonly gitHubRepository: GitHubRepository) {}

  async exec(username: string, res: Response) {
    const response = await this.gitHubRepository.getUser(username);
    Logger.debug(JSON.stringify(response));
    res.send(JSON.stringify(response));
  }
}
