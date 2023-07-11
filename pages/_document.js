import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html className="smooth-scroll" lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <link rel="stylesheet" href="/globals.css"></link>
        <link href="/dist/main.css" rel="stylesheet"></link>
        <meta name="theme-color" content="#fff" />
      </Head>
      <body className="bg-slate-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
