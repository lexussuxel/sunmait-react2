import { Provider } from "react-redux";
import { store } from "../store/store";
import "../styles/global.css";

function MyApp({ Component, pageProps }: { Component: any; pageProps: any }) {
  return <Provider store={store}>
    <Component {...pageProps} />
    </Provider>;
}

export default MyApp;
