import { Express } from 'express';
import { RequestController } from './request';

export class Router {
  constructor(private readonly app: Express) {}

  register() {
    this.app.get('/', (_req, res) => {
      const controller = new RequestController();
      controller.request(_req, res);
    });
    this.app.get('/:username', (req, res) => {
      const controller = new RequestController();
      controller.request(req, res);
    });
  }
}
