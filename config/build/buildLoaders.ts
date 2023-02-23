import { type BuildOptions } from './types/config';
import type webpack from 'webpack';
import { buildCssLoader } from './loaders/buildCssLoaders';

export function buildLoaders (options: BuildOptions): webpack.RuleSetRule[] {
  const { isDev } = options;

  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack']
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: 'babel-loader',
      options: {
        presets: ['@babel/preset-env'],
        plugins: [
          [
            'i18next-extract',
            {
              locales: ['en', 'ukr'],
              keyAsDefaultValue: true
            }
          ]
        ]
      }
    }
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    dependency: { not: ['url'] },
    use: [
      {
        loader: 'url-loader',
        options: {
          limit: 8192
        }
      }
    ],
    type: 'asset/resource'
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/
  };

  const cssLoaders = buildCssLoader(isDev);
  return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoaders];
}
