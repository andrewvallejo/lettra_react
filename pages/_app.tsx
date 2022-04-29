import "../styles/globals.scss";

import { WordiablesWrapper } from "../src/context/wordiablesContext";

import type { AppProps } from 'next/app'
function App({ Component, pageProps }: AppProps) {
  return(
    <WordiablesWrapper>
      <Component {...pageProps} />
    </WordiablesWrapper>
    )

}

export default App
