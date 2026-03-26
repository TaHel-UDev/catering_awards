import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="ru">
      <Head>
        {/* AutoSchema ONE-TIME STATIC MODE (CDN-only) */}
        <script
          async
          src="https://www.autoschema.app/cdn/s.js"
          data-key="sk_59586a3406dc6b098df390f651b8cbdd"
          data-api="https://www.autoschema.app"
          data-static-base="https://cdn.autoschema.app/schemas"
          data-static-only="1"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
