import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <ul>
        <li role="button" onClick={() => router.push("/components/button")}>
          Button
        </li>
      </ul>
    </div>
  );
}
