import { AppRegistry } from 'react-native'

import {App} from 'core/src/App'

AppRegistry.registerComponent('RN_Universal', () => App)
AppRegistry.runApplication('RN_Universal', {
  rootTag: document.getElementById('root'),
})
