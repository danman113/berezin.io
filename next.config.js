const { PHASE_DEVELOPMENT_SERVER } = require('next/constants')

module.exports = (phase, { defaultConfig }) => ({
  assetPrefix: phase === PHASE_DEVELOPMENT_SERVER && Boolean(process.env.DOKKU_ROOT) ? '' : '/berezin.io/',
})
