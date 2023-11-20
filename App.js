import React from "react";
import NavigationProvider from "./assets/navigation";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Provider as StoreProvider } from "react-redux";
import store from "./assets/store";
const App = () => {
  return (
    <StoreProvider store={store}>
      <SafeAreaProvider style={{ flex: 1 }}>
        <NavigationProvider />
      </SafeAreaProvider>
    </StoreProvider>
  );
};
export default App;