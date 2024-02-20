import { Logger } from '../../lib/logger';
import type { GitHubRepository } from '../../repository/github';
import type { Job } from '../type';

export class GetUserJob implements Job {
  constructor(private readonly gitHubRepository: GitHubRepository) {}

  async exec(): Promise<void> {
    Logger.info(await this.gitHubRepository.getUser('sharo-jef'));
  }
}
