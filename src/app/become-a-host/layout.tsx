import { GetStartFooter } from "@/components/newListHeaderFooter/GetStartFooter";
import { HeaderLayout } from "@/components/newListHeaderFooter/HeaderLayout";
import { ProgressFooter } from "@/components/newListHeaderFooter/ProgressFooter";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <HeaderLayout />
      {children}
      {/* <GetStartFooter /> */}
      <ProgressFooter />
    </div>
  );
}
