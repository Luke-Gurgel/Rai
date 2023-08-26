import { PageHeader } from "@/components/PageHeader";
import { PageFooter } from "@/components/PageFooter";

export const Layout: React.FC<React.PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen ">
      <PageHeader />
      <main className="flex-1 bg-white p-16">{children}</main>
      <PageFooter />
    </div>
  );
};
