import type { Response } from 'express';
import { GetUserService } from '.';
import { TestGitHubRepository } from '../../infra/test/github';

describe('Test the GetUserService', () => {
  let testGitHubRepository: TestGitHubRepository;
  let testGetUserService: GetUserService;

  beforeEach(() => {
    testGitHubRepository = new TestGitHubRepository();
    testGetUserService = new GetUserService(testGitHubRepository);
  });

  it('get user', async () => {
    const res = { send: jest.fn() };

    jest.spyOn(res, 'send');
    jest.spyOn(testGitHubRepository, 'getUser');

    await testGetUserService.exec('sharo-jef', res as unknown as Response);

    expect(testGitHubRepository.getUser).toHaveBeenCalledTimes(1);
    expect(testGitHubRepository.getUser).toHaveBeenCalledWith('sharo-jef');
    expect(res.send).toHaveBeenCalledTimes(1);
    expect(res.send).toHaveBeenCalledWith(
      JSON.stringify({
        login: 'sharo-jef',
        profilePage: 'https://github.com/sharo-jef',
      })
    );
  });
});
