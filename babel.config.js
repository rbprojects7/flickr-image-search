function isWebTarget(caller) {
  return Boolean(caller && caller.target === 'web');
}

function isWebpack(caller) {
  return Boolean(caller && caller.name === 'babel-loader');
}

function isTest(api) {
  return api.env('test');
}

module.exports = api => {
  const web = api.caller(isWebTarget);
  const webpack = api.caller(isWebpack);

  const ignore = [];

  if (!isTest(api)) {
    ignore.push(/\.(spec|test)\.(jsx?|tsx?)$/);
  }

  return {
    presets: [
      '@babel/preset-react',
      [
        '@babel/preset-env',
        {
          useBuiltIns: web ? 'entry' : undefined,
          targets: !web ? { node: 'current' } : undefined,
          modules: webpack ? false : 'commonjs',
          corejs: web ? 3 : undefined,
        },
      ],
      '@babel/typescript',
    ],
    plugins: ['@babel/plugin-syntax-dynamic-import'],
    env: {
      test: {
        plugins: ['dynamic-import-node'],
      },
    },
    ignore,
  };
};