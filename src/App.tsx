import { Provider } from "react-redux";
import { Toaster } from "react-hot-toast";

import { AppRouter } from "components/routing";
import { store } from "store";

import "@fontsource/exo-2";
import "@fontsource/exo-2/500.css";
import "@fontsource/exo-2/600.css";
import "@fontsource/exo-2/700.css";
import "@fontsource/exo-2/800.css";
import "@fontsource/exo-2/900.css";
import "react-medium-image-zoom/dist/styles.css";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
      <Toaster />
    </Provider>
  );
}

export default App;
