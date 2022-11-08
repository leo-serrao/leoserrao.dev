import { globalStyles } from '../styles/global'
import type { AppProps } from 'next/app'
import { Container, Header } from '../styles/pages/app'
import Link from 'next/link'

globalStyles()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Container>
      <Header>
        <nav>
          <Link href="/">Home</Link>
          <Link href="">Projects</Link>
        </nav>

        <button>Contact & Social</button>
      </Header>

      <Component {...pageProps} />
    </Container>
  )
}
