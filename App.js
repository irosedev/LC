import React, { useState } from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createDrawerNavigator } from "react-navigation-drawer";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import Channels from "./src/screens/Channels";
import Login from "./src/screens/Login";
import Settings from "./src/screens/Settings";
import SignUp from "./src/screens/SignUp";
import Timeline from "./src/screens/Timeline";
import SignUp1 from "./src/screens/SignUp1";
import SignUp2 from "./src/screens/SignUp2";
import SignUp3 from "./src/screens/SignUp3";
import Exercise from "./src/screens/Exercise";
import Sleep from "./src/screens/Sleep";
import Breathing from "./src/screens/Breathing";
import Dashboard from "./src/screens/Dashboard";
import Breathing1 from "./src/screens/Breathing1";
import Breathing2 from "./src/screens/Breathing2";
import Breathing3 from "./src/screens/Breathing3";
import Breathing4 from "./src/screens/Breathing4";
import Breathing5 from "./src/screens/Breathing5";
import Breathing6 from "./src/screens/Breathing6";

const DrawerNavigation = createDrawerNavigator({
  Channels: Channels,
  Login: Login,
  Settings: Settings,
  SignUp: SignUp,
  Timeline: Timeline,
  SignUp1: SignUp1,
  SignUp2: SignUp2,
  SignUp3: SignUp3,
  Exercise: Exercise,
  Sleep: Sleep,
  Breathing: Breathing,
  Dashboard: Dashboard,
  Breathing1: Breathing1,
  Breathing2: Breathing2,
  Breathing3: Breathing3,
  Breathing4: Breathing4,
  Breathing5: Breathing5,
  Breathing6: Breathing6
});

const StackNavigation = createStackNavigator(
  {
    DrawerNavigation: {
      screen: DrawerNavigation
    },
    Channels: Channels,
    Login: Login,
    Settings: Settings,
    SignUp: SignUp,
    Timeline: Timeline,
    SignUp1: SignUp1,
    SignUp2: SignUp2,
    SignUp3: SignUp3,
    Exercise: Exercise,
    Sleep: Sleep,
    Breathing: Breathing,
    Dashboard: Dashboard,
    Breathing1: Breathing1,
    Breathing2: Breathing2,
    Breathing3: Breathing3,
    Breathing4: Breathing4,
    Breathing5: Breathing5,
    Breathing6: Breathing6
  },
  {
    headerMode: "none"
  }
);

const AppContainer = createAppContainer(StackNavigation);

function App() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);
  if (!isLoadingComplete) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } else {
    return isLoadingComplete ? <AppContainer /> : <AppLoading />;
  }
}
async function loadResourcesAsync() {
  await Promise.all([
    Font.loadAsync({
      "roboto-regular": require("./src/assets/fonts/roboto-regular.ttf"),
      "alef-700": require("./src/assets/fonts/alef-700.ttf"),
      "roboto-700": require("./src/assets/fonts/roboto-700.ttf"),
      "roboto-900": require("./src/assets/fonts/roboto-900.ttf"),
      "arial-regular": require("./src/assets/fonts/arial-regular.ttf")
    })
  ]);
}
function handleLoadingError(error) {
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

export default App;
