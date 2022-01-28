import Footer from "./Footer";
import Header from "./Header";
import Logo from "../public/logo.png"
import Image from "next/image";
import { motion } from "framer-motion";
import withTransition from "../HOC/withTransition";
import Head from "next/head";
const Layout = ({children}) => {
  return (
    <>
    <Head>
    <meta charSet="UTF-8"/>
    <meta httpEquiv="x-ua-compatible" content="ie=edge; chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
    <meta name="description" content=""/>
    <meta name="abstract"    content=""/> 
    <meta name="rating"      content=""/>

    <meta name="twitter:card" content="summary"/>
    <meta name="twitter:site" content="@site_account"/>
    <meta name="twitter:creator" content="@individual_account"/>
    <meta name="twitter:url" content="https://example.com/page.html"/>
    <meta name="twitter:title" content="Content Title"/>
    <meta name="twitter:description" content="Content description less than 200 characters"/>
    <meta name="twitter:image" content="https://example.com/image.jpg"/>

    <link rel="icon" href="/graphics/favicon.ico"/>
    <link rel="icon" href="/graphics/favicon-16.png"  sizes="16x16"   type="image/png"/>
    <link rel="icon" href="/graphics/favicon-32.png"  sizes="32x32"   type="image/png"/>
    <link rel="icon" href="/graphics/favicon-48.png"  sizes="48x48"   type="image/png"/>
    <link rel="icon" href="/graphics/favicon-62.png"  sizes="62x62"   type="image/png"/>
    <link rel="icon" href="/graphics/favicon-128.png" sizes="128x128" type="image/png"/>
    <link rel="icon" href="/graphics/favicon-192.png" sizes="192x192" type="image/png"/>


    <meta name="apple-mobile-web-app-capable" content="yes"/>
    <meta name="apple-mobile-web-app-status-bar-style" content="black"/>
    <meta name="apple-mobile-web-app-title" content="App Title"/>
    <meta name="apple-itunes-app" content="app-id=APP_ID, affiliate-data=AFFILIATE_ID, app-argument=http/url-sample.com"/> {"<!-- App Banner. -->"}
    <meta name="format-detection" content="telephone=no"/>
    <link rel="apple-touch-icon" href="/graphics/apple-touch-icon.png"/>
    <link rel="apple-touch-icon-precomposed" href="/graphics/apple-touch-icon-precomposed.png"/>
    <link rel="apple-touch-icon" sizes="57x57" href="/graphics/apple-icon-57.png"/>
    <link rel="apple-touch-icon" sizes="72x72" href="/graphics/apple-icon-72.png"/>
    <link rel="apple-touch-icon" sizes="114x114" href="/graphics/apple-icon-114.png"/>
    <link rel="apple-touch-icon" sizes="144x144" href="/graphics/apple-icon-144.png"/>
    <link rel="alternate" href="ios-app://APP-ID/http/url-sample.com"/> 
    <meta property="al:ios:url" content="applinks://docs"/>
    <meta property="al:ios:app_store_id" content="12345"/>
    <meta property="al:ios:app_name" content="App Links"/>
    
    {"    <!-- Google Android. -->"}
    <meta name="theme-color" content="#E64545"/>
    <meta name="google-play-app" content="app-id=package-name"/>
    <link rel="alternate" href="android-app://package-name/http/url-sample.com"/> 
    <meta property="al:android:url" content="applinks://docs"/>
    <meta property="al:android:app_name" content="App Links"/>
    <meta property="al:android:package" content="org.applinks"/>
    </Head>
    
      <motion.div>
      <Header />
      <div onClick={() => open("https://github.com/Panthyy")} className=" absolute z-10 w-10 sm:top-auto top-6  h-10 rounded-r-lg overflow-clip bg-white hover:cursor-pointer border-2 border-l-0 border-red-500">
                <Image src={Logo}  layout="fill"/>
            </div>
      <main>{children}</main>
      <Footer />
      </motion.div>

    </>
  );
};

export default Layout
