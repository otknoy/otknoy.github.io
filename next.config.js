module.exports = {
  trailingSlash: true,
  exportPathMap: function() {
    return {
      '/': { page: '/' }
    }
  },
  pageExtensions: ["page.tsx"],
}
