import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './TabNav';
import GetScreen from './pages/GetScreen.js';
import DeleteScreen from './pages/DeleteScreen.js';

import PostScreen from './pages/PostScreen.js';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="Put" component={TabNav} />
    <Drawer.Screen name="Delete" component={DeleteScreen} />
    <Drawer.Screen name="Post" component={PostScreen} />
    <Drawer.Screen name="Get" component={GetScreen} />
  </Drawer.Navigator>
  </NavigationContainer>
   );
}
 
export default App;