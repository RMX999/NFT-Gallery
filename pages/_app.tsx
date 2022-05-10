import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
    appId="bZtfqtoCFfTVJYqyigsAcXZ3kyYo4P08mAtjmH9b"
    serverUrl="https://7vdeu3klidts.usemoralis.com:2053/server">
      <Component {...pageProps} />
    </MoralisProvider>
  );
}

export default MyApp