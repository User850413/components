import Button from '@/components/Button'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/navigation'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  return (
    <div>
      <Button text="메인으로" type="primary" onClick={() => router.push('/')} />
      <Component {...pageProps} />
    </div>
  )
}
