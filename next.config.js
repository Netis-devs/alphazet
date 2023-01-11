const withTM = require('next-transpile-modules')([
  'query-string',
  'split-on-first',
]);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'preset-default',
                  params: {
                    overrides: {
                      removeViewBox: false,
                      prefixIds: false,
                      sortAttrs: false,
                    },
                  },
                },
              ],
            },
          },
        },
      ],
    });
    return config;
  },
});
