import 'react-native-gesture-handler';

import { createDrawerNavigator } from '@react-navigation/drawer';
 import MovieDetailsScreen from '../../MovieDetailsScreen/App'
import { NavigationContainer } from '@react-navigation/native';

const Drawer = createDrawerNavigator();




function MyDrawer() {
  return (
    <NavigationContainer>
    <Drawer.Navigator>
      <Drawer.Screen name="MovieDetailsScreen" component={MovieDetailsScreen} />
      {/* <Drawer.Screen name="Article" component={SettingsScreen} /> */}
    </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MyDrawer;