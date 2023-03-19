import { appWithTranslation } from "next-i18next";
import "../styles/globals.css";
import "../assets/css/styles.css";
import { ThemeProviderContext } from "../ContextProvider";
import { useRouter } from "next/router";
import { useEffect } from "react";
function App({ Component, pageProps }) {
  const { locale } = useRouter();
  const dir = locale === "fa" ? "rtl" : "ltr";
  useEffect(() => {
    document.documentElement.dir = dir;
  }, [dir]);
  return (
    <ThemeProviderContext>
      <Component {...pageProps} />
    </ThemeProviderContext>
  );
}

export default appWithTranslation(App);
