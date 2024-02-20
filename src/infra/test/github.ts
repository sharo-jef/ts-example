import type { User, GitHubRepository } from '../../repository/github';

export class TestGitHubRepository implements GitHubRepository {
  async getUser(username: string): Promise<User> {
    return {
      login: username,
      profilePage: `https://github.com/${username}`,
    };
  }
}
