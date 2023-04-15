import { Provider } from "react-redux";
import "../styles/globals.css";
import { store, persistor } from "../redux/store";
import { PersistGate } from "redux-persist/integration/react";
import Header from "@/components/header/header";
import Footer from "@/components/footer/footer";
import { SessionProvider } from "next-auth/react";

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <SessionProvider session={pageProps?.session}>
          {pageProps?.notShowHeader === true ? null : <Header />}
          <Component {...pageProps} />
          {pageProps?.notShowHeader === true ? null : <Footer />}
        </SessionProvider>
      </PersistGate>
    </Provider>
  );
}
