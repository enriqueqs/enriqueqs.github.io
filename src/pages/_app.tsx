import "tailwindcss/tailwind.css";
import "../globalStyles.scss";
import Script from "next/script";
import type { AppProps } from "next/app";
import { memo } from "react";

const MyApp = memo(({ Component, pageProps }: AppProps): JSX.Element => {
  return (
    <>
      <Script
        id="webgoogle"
        strategy="lazyOnload"
        src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
      />

      <Script id="scrip" strategy="lazyOnload">
        {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
                    page_path: window.location.pathname,
                    });
                `}
      </Script>
      <Component {...pageProps} />
    </>
  );
});

MyApp.displayName = "MyApp";
export default MyApp;
