const path = require('path')

const alias = (dirName) => path.resolve(__dirname, dirName)

module.exports = {
  webpack: {
    alias: {
      '@': alias('src'),
      views: alias('@/views'),
      components: alias('@/components'),
    },
  },
}
