import { Octokit } from '@octokit/core';
import type { User, GitHubRepository } from '../../repository/github';

export class ProdGitHubRepository implements GitHubRepository {
  async getUser(username: string): Promise<User> {
    const octokit = new Octokit();
    const response = await octokit.request('GET /users/{username}', {
      username,
    });
    return {
      login: response.data.login,
      profilePage: response.data.html_url,
    };
  }
}
