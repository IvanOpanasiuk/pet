import type { Configuration as DevServerConConfiguration } from 'webpack-dev-server';
import { type BuildOptions } from './types/config';

export function buildDevServer (
  options: BuildOptions
): DevServerConConfiguration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true,
    hot: true
  };
}
