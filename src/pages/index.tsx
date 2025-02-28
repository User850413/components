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
          <Button text="버튼 컴포넌트" variants="tertiary" />
        </li>
        <li
          role="button"
          onClick={() => router.push('/components-pages/inputField-page')}
        >
          <Button text="인풋 필드 컴포넌트" variants="tertiary" />
        </li>
        <li
          role="button"
          onClick={() => router.push('/components-pages/checkBox-page')}
        >
          <Button text="체크 박스 컴포넌트" variants="tertiary" />
        </li>
        <li
          role="button"
          onClick={() => router.push('/components-pages/toggleSwitch-page')}
        >
          <Button text="토글 스위치 컴포넌트" variants="tertiary" />
        </li>
      </ul>
    </div>
  )
}
