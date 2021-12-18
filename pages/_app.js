import '../styles/globals.css'
import { MoralisProvider } from "react-moralis";
import { ClickedProvider } from "../context/PageContext";
function MyApp({ Component, pageProps }) {
  return (
<MoralisProvider appId={process.env.NEXT_PUBLIC_APP_ID} serverUrl={process.env.NEXT_PUBLIC_SERVER_URL}>
  <ClickedProvider>
  <Component {...pageProps} />
  </ClickedProvider>
</MoralisProvider>
  )
}

export default MyApp
