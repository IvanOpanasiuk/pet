import { type BuildOptions } from './types/config';
import type webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';

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

  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            auto: (resPath: string) => Boolean(resPath.includes('.module.')),
            localIdentName: isDev
              ? '[path][name]__[local]--[hash:base64:5]'
              : '[hash:base64:8]'
          }
        }
      },
      'sass-loader'
    ]
  };
  return [fileLoader, svgLoader, babelLoader, tsLoader, cssLoader];
}
