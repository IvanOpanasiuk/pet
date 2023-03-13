import { type BuildPaths } from './../build/types/config';
import type webpack from 'webpack';
import path from 'path';
import { DefinePlugin } from 'webpack';

export default ({ config }: { config: webpack.Configuration; }) => {
  const buildCssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      },
      'sass-loader'
    ]
  };
  const paths: BuildPaths = {
    build: '',
    html: '',
    entry: '',
    src: path.resolve(__dirname, '..', '..', 'src')
  };
  config.resolve.modules.push(paths.src);
  config.resolve.extensions.push('.ts', '.tsx');

  config.module.rules.push(buildCssLoader);

  config.plugins.push(new DefinePlugin({
    __IS_DEV__: true
  }));
  return config;
};
