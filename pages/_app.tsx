import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { EditorWrapper } from '../context/EditorContext'

function MyApp({ Component, pageProps }: AppProps) {
  return(
    <EditorWrapper>
      <Component {...pageProps} />
    </EditorWrapper>
    )

}

export default MyApp
