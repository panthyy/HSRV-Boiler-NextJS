import '../styles/globals.css'
import type { AppProps /*, AppContext */ } from 'next/app'
import Layout from '../components/Layout'
import { motion } from 'framer-motion'
import { AnimatePresence } from "framer-motion";

function MyApp({ Component, pageProps }: AppProps) {
  
  return (
<AnimatePresence exitBeforeEnter>
    <Layout>
      <Component {...pageProps}/>
    </Layout>

</AnimatePresence>

  )
}

export default MyApp
