import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/HomeScreen';

const stack = createStackNavigator();

export default function RootStack() {
  return (
    
      <stack.Navigator>
        <stack.Screen
         name="Home"
         component={HomeScreen} />
      </stack.Navigator>

  );
}