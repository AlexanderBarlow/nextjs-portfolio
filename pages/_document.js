import { Html, Head, Main, NextScript } from "next/document";
import Home from "./index";
import loader from "../loader";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="Alex Barlow" content="#000" />
        <style>{loader}</style>
        <script
          src="https://kit.fontawesome.com/62659e05da.js"
          crossorigin="anonymous"
        ></script>
      </Head>
      <body className="bg-slate-900 flex mx-auto min-h-screen max-w-screen px-6 py-12">
        <div id={"globalLoader"} >
          <div className="loader">
            <div />
            <div />
          </div>
        </div>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
