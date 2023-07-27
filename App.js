import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoryScreen from "./screens/CategoryScreen";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import FavoritesScreen from "./screens/FavoritesScreen";
import { Ionicons } from "./node_modules/@expo/vector-icons/build/Icons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#ffaa00" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#947200" },
        drawerContentStyle: { backgroundColor: "#f7a610" },
        drawerInactiveTintColor: "white",
        drawerActiveTintColor: "#ffe101",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoryScreen}
        options={{
          title: "Meal Categories",
          drawerIcon: ({ color, size }) => (
            <Ionicons name="list" color={color} size={size} />
          ),
        }}
      />
      <Drawer.Screen
        name="FavoritesScreen"
        component={FavoritesScreen}
        options={{
          drawerIcon: ({ color, size }) => (
            <Ionicons name="star" color={color} size={size} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  const screenOptions = {
    title: "Meals Categories",
    headerStyle: { backgroundColor: "#ffaa00" },
    headerTintColor: "white",
    contentStyle: { backgroundColor: "rgb(148, 114, 0)" },
  };

  return (
    <>
      <StatusBar style="light" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: "#ffaa00" },
            headerTintColor: "white",
            contentStyle: { backgroundColor: "#947200" },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="MealsOverView" component={MealsOverViewScreen} />
          <Stack.Screen
            name="MealDetail"
            component={MealDetailScreen}
            options={{
              title: "Meal Details",
            }}
          />
        </Stack.Navigator>

        {/* <CategoryScreen /> */}
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
