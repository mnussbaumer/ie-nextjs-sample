import Head from "next/head";
import { ImageEngineProvider } from "@imageengine/react";
import "../styles/globals.css";

const delivery_address = process.env.DELIVERY_ADDRESS;

function LeanImages({ Component, pageProps }) {
    return (
	<ImageEngineProvider deliveryAddress={delivery_address}>
	  <Head>
	    <link rel="icon" type="image/png" href="/favicon.png"/>
	    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
	    <meta name="description" content="Learn how to use ImageEngine in Nextjs to serve highly optimised image assets from your CDN to your users." />
	    <meta property="og:title" content="ImageEngine with NextJS" />
	    <meta property="og:description" content="Learn how to use ImageEngine in Nextjs to serve highly optimised image assets from your CDN to your users." />
	  </Head>
	  <Component {...pageProps} />
	</ImageEngineProvider>
    )
};

export default LeanImages;
