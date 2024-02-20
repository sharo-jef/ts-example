export interface User {
  readonly login: string;
  readonly profilePage: string;
}

export interface GitHubRepository {
  getUser(username: string): Promise<User>;
}
