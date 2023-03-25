
import "../styles/globals.css";
import "../assets/css/styles.css";
import { ThemeProviderContext } from "../ContextProvider";

function App({ Component, pageProps }) {
  // const { locale } = useRouter();
  // const dir = locale === "fa" ? "rtl" : "ltr";
  // useEffect(() => {
  //   document.documentElement.dir = dir;
  // }, [dir]);
  return (
    <ThemeProviderContext>
      <Component {...pageProps} />
    </ThemeProviderContext>
  );
}

// export default appWithTranslation(App);
export default App;
