import 'dotenv/config';
import express from 'express';
import { config } from './lib/config';
import { Logger } from './lib/logger';
import { Router } from './controller/router';

try {
  const app = express();
  const router = new Router(app);
  router.register();
  app.listen(config.PORT, () =>
    Logger.info(`⚡Server is running on port ${config.PORT}`)
  );
} catch (e) {
  Logger.error(e);
  process.exit(1);
}
