const withTM = require("next-transpile-modules")([
  "query-string",
  "strict-uri-encode",
  "split-on-first",
]);

module.exports = withTM({
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: "@svgr/webpack",
        },
      ],
    });
    return config;
  },
});
