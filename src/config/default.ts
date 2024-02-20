import env from './env';
import type { ConfigType } from './type';

export default {
  ENV_NODE_ENV: env.NODE_ENV,
  PORT: env.PORT || 3000,
} as ConfigType;
