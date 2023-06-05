import { wrapper } from "../store/store";
import "../styles/global.css";

 function MyApp({
  Component,
  pageProps,
}: {
  Component: any;
  pageProps: any;
}) {
  return <Component {...pageProps} />;
}
export default wrapper.withRedux(MyApp)