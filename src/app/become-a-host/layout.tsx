import { GetStartFooter } from "@/components/newListHeaderFooter/GetStartFooter";
import { HeaderLayout } from "@/components/newListHeaderFooter/HeaderLayout";
import { ProgressFooter } from "@/components/newListHeaderFooter/ProgressFooter";
import { ProgressHeader } from "@/components/newListHeaderFooter/ProgressHeader";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <ProgressHeader />
      {children}
      <ProgressFooter />
    </div>
  );
}
