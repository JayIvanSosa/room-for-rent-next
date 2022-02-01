import Head from "next/head";
import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from "../redux/store";
// import bgImage from "../public/images.jpg";
import Image from "next/image";
import "../styles/globals.css";
import { useUserData } from "../lib/hooks";
import { UserContext } from "../lib/context";

export default App;

// <Image
// alt="background"
// src="/images.jpg"
// layout="fill"
// objectFit="cover"
// quality={100}
// />

function App({ Component, pageProps }) {
  const userData = useUserData();

  useEffect(() => {
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);
  return (
    <div>
      <UserContext.Provider value={userData}>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </UserContext.Provider>
    </div>
  );
}
