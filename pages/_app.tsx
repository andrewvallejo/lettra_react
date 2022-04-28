import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { WordiablesWrapper } from '../src/context/wordiablesContext'

function App({ Component, pageProps }: AppProps) {
  return(
    <WordiablesWrapper>
      <Component {...pageProps} />
    </WordiablesWrapper>
    )

}

export default App
