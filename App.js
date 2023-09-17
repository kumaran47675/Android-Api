import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import TabNav from './TabNav';
import DeleteMethod from './pages/DeleteScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import 'react-native-gesture-handler';
const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
    <Drawer.Screen name="TabNav" component={TabNav} />
    <Drawer.Screen name="Delete" component={DeleteMethod} />
  </Drawer.Navigator>
  </NavigationContainer>
   );
}
 
export default App;