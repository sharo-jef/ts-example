import 'dotenv/config';
import { program } from 'commander';
import { Logger } from './lib/logger';
import { GetUserJob } from './job/get-user';
import { ProdGitHubRepository } from './infra/prod/github';

program
  .name('batch')
  .argument('job')
  .option('-s, --silent', 'silent mode', false)
  .parse();

(async () => {
  Logger.silent = program.opts().silent;

  const job = program.args[0];

  switch (job) {
    case 'get-user': {
      const getUserJob = new GetUserJob(new ProdGitHubRepository());
      await getUserJob.exec();
      break;
    }
    default:
      throw new Error(`Unknown job: ${job}`);
  }
})()
  .catch((e) => {
    Logger.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // Do some cleanup (e.g. close database connections, etc.)
  });
