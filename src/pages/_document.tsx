import { Html, Head, Main, NextScript } from "next/document";
import { QueryClientProvider, QueryClient } from "react-query";

const client = new QueryClient();

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <QueryClientProvider client={client}>
          <Main />
        </QueryClientProvider>
        <NextScript />
      </body>
    </Html>
  );
}
