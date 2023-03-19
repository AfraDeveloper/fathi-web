import { Html, Head, Main, NextScript } from "next/document";

export default function Document(props) {
  return (
    <Html dir="rtl" lang="fa">
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
                (function() {
                  var storageKey = 'dark';
                  var classNameDark = 'dark';
                  var classNameLight = 'light';
                  var d = document.querySelector('html');
                  function setClassOnDocumentBody(dark) {
                    d.classList.add(dark ? classNameDark : classNameLight);
                    d.classList.remove(dark ? classNameLight : classNameDark);
                  }
                  var localStorageTheme = null;
                  try {
                    localStorageTheme = localStorage.getItem(storageKey);
                  } catch (err) {}
                  var localStorageExists = localStorageTheme !== null;
                  if (localStorageExists) {
                    localStorageTheme = JSON.parse(localStorageTheme);
                  }
                  if (localStorageExists) {
                    setClassOnDocumentBody(localStorageTheme);
                  } else {
                    var isDarkMode = d.classList.contains(classNameDark);
                    localStorage.setItem(storageKey, JSON.stringify(isDarkMode));
                  }
                })();
              `,
          }}
        />
      </Head>
      <body className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
