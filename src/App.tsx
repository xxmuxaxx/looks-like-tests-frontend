import { Provider } from "react-redux";

import { AppRouter } from "components/routing";
import { store } from "store";

import "typeface-exo";

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;
