"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

export function LogoNewSmall() {
  const router = useRouter();

  const refresh = () => {
    router.push("/");
  };
  return (
    <Image
      onClick={refresh}
      alt="Airbnb"
      height={80}
      width={80}
      src="/images/NewLogoNoName-1.png"
    />
  );
}
