import { GetUserJob } from '.';
import { TestGitHubRepository } from '../../infra/test/github';

describe('Test the GetUserJob', () => {
  let testGitHubRepository: TestGitHubRepository;
  let testGetUserJob: GetUserJob;

  beforeEach(() => {
    testGitHubRepository = new TestGitHubRepository();
    testGetUserJob = new GetUserJob(testGitHubRepository);
  });

  it('get user', async () => {
    jest.spyOn(testGitHubRepository, 'getUser');

    await testGetUserJob.exec();

    expect(testGitHubRepository.getUser).toHaveBeenCalledTimes(1);
    expect(testGitHubRepository.getUser).toHaveBeenCalledWith('sharo-jef');
  });
});
