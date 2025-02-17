import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { useRouter } from "next/navigation";

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <div>
      <button onClick={() => router.push("/")}>메인으로</button>
      <Component {...pageProps} />
    </div>
  );
}
