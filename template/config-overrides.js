const {
  override,
  removeModuleScopePlugin,
} = require('customize-cra')
const { addReactRefresh } = require('customize-cra-react-refresh')

module.exports = override(
  removeModuleScopePlugin(),
  addReactRefresh({ disableRefreshCheck: true })
)
