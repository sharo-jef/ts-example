import type { Express } from 'express';
import { RequestController } from './request';

export class Router {
  constructor(private readonly app: Express) {}

  register() {
    this.app.get('/', (req, res) => {
      const controller = new RequestController();
      controller.request(req, res);
    });
    this.app.get('/:username', (req, res) => {
      const controller = new RequestController();
      controller.request(req, res);
    });
  }
}
