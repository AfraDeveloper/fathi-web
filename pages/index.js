import Head from "next/head";
import Header from "../components/Header";
import { mouseAttraction } from "../constant/particles";
import { loadFull } from "tsparticles";
import Particles from "react-tsparticles";
import { useCallback, useContext } from "react";
import ThemeContext from "../ContextProvider";
import Intro from "../components/Intro";
import Services from "../components/services/Services";
import Timeline from "../components/Timeline/Timeline";
import { Example } from "../components/Example/Example";
import Articles from "../components/Articles/Articles";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
export default function Home() {
  const { t } = useTranslation("common");
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container);
  }, []);
  const { dark } = useContext(ThemeContext);
  return (
    <>
      <Head>
        <title> Home </title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {dark && (
        <div className="dark:opacity-10">
          <Particles
            options={mouseAttraction}
            init={particlesInit}
            id="tsparticles"
            loaded={particlesLoaded}
          />
        </div>
      )}
      <Header />
      <Intro />
      <Services />
      <Timeline />
      <Example />
      <Articles /> 
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ["common"])),
    },
  };
}
