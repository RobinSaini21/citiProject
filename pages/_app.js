import "../styles/globals.css";
import { store, persistor } from "../src/Store/Store";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import "../public/css/bootstrap.min.css";
import "../public/css/custom.css";
import "../public/css/responsive.css";


function CitiSkopes({ Component, pageProps }) {
  return (
    <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
    </>
  );
}

export default CitiSkopes;
