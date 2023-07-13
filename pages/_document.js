import { Html, Head, Main, NextScript } from "next/document";
import Home from "./index";
import loader from "../loader";

export default function Document() {
  return (
    <Html className="smooth-scroll" lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="Alex Barlow" content="#000000" />
        <style>{loader}</style>
      </Head>
      <body className="bg-slate-900 flex h-screen w-screen m-2">
        <div id={"globalLoader"} >
          <div className="loader">
            <div />
            <div />
          </div>
        </div>
        <Main />
        <NextScript />
        <script
          src="https://kit.fontawesome.com/62659e05da.js"
          crossorigin="anonymous"
        ></script>
      </body>
    </Html>g
  );
}
