import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

import { AppRouter } from "components/routing";
import { store } from "store";

import "./index.scss";

const persistor = persistStore(store);

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <AppRouter />
      <Toaster />
    </PersistGate>
  </Provider>
);

export default App;
