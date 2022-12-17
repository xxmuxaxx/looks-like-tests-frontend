import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import { AppRouter } from "components/routing";
import { store } from "store";

import "./index.scss";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <Toaster />
    </Provider>
  );
}

export default App;
