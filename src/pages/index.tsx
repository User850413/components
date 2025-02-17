import Button from '@/components/Button'
import { useRouter } from 'next/navigation'

export default function Home() {
  const router = useRouter()

  return (
    <div>
      <ul>
        <li
          role="button"
          onClick={() => router.push('/components-pages/button-page')}
        >
          <Button text="버튼 컴포넌트" type="tertiary" />
        </li>
      </ul>
    </div>
  )
}
