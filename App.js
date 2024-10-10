import React from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";

import CategoriesScreen from "./screens/categories-screen";
import MealsOverview from "./screens/meals-screen";
import MealDetails from "./screens/meal-details";
import FavoritesScreen from "./screens/favourites-screen";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";

import AntDesign from "@expo/vector-icons/AntDesign";

import FavouritesContextProvider from "./store/context/favorites-context";
// import { Provider } from "react-redux";
// import { store } from './store/redux/store'

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        sceneContainerStyle: { backgroundColor: "#f5f5f5" },
        headerStyle: { backgroundColor: "white" },
        headerTintColor: "black",
        drawerContentStyle: {
          backgroundColor: "#e0e0e0",
        },
        drawerActiveTintColor: "black",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: "All Categories",
          drawerIcon: ({ color, size }) => {
            return <AntDesign color={color} size={size} name="bars" />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: "My Favourites",
          drawerIcon: ({ color, size }) => {
            return <AntDesign color={color} size={size} name="star" />;
          },
        }}
      />
    </Drawer.Navigator>
  );
};

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <FavouritesContextProvider>
      {/* <Provider store={store}> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              contentStyle: { backgroundColor: "#f5f5f5" },
              headerStyle: { backgroundColor: "white" },
              headerTintColor: "black",
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen name="MealsOverview" component={MealsOverview} />
            <Stack.Screen
              name="MealsDetails"
              component={MealDetails}
              options={{
                contentStyle: { backgroundColor: "white" },
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      {/* </Provider> */}
      </FavouritesContextProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40,
  },
});
