import { AppRegistry } from 'react-native';
import App from './App';
import FlexTestApp from './app/flex_test/FlexTest';
import FetchTestApp from './app/fetch_test/FetchTest';
// import FetchTestApp from './app/flex_test/FetchNetData';

// AppRegistry.registerComponent('AwesomeProject', () => App);
// AppRegistry.registerComponent('reactNativeDemo', () => FlexTestApp);
AppRegistry.registerComponent('reactNativeDemo', () => FetchTestApp);
