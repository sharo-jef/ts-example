import type { Request, Response } from 'express';
import { ProdGitHubRepository } from '../infra/prod/github';
import { GetUserService } from '../service/get-user';

export class RequestController {
  async request(req: Request, res: Response) {
    const gitHubRepository = new ProdGitHubRepository();
    const getUserService = new GetUserService(gitHubRepository);
    await getUserService.exec(
      req.path === '/' ? 'sharo-jef' : req.params.username,
      res
    );
  }
}
