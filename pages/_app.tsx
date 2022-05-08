import "../styles/globals.scss";
import "normalize.css/normalize.css";

import { WordiablesWrapper } from "../context/wordiablesContext";


import type { AppProps } from 'next/app'
function App({ Component, pageProps }: AppProps) {
  return(
    <WordiablesWrapper>
      <Component {...pageProps} />
    </WordiablesWrapper>
    )

}

export default App
