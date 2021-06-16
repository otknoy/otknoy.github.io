module.exports = {
  webpack5: false,
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  },
  webpack: (config, { buildId, dev, isServer, defalutLoaders, webpack  }) => {
    config.plugins.push(new webpack.IgnorePlugin(/.*\.test.tsx$/))

    return config
  }
}
