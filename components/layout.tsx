import Header from "./header";
import Footer from "./footer";
import { ReactNode } from "react";

type props = {
  children?: ReactNode;
};

export default function Layout({ children }: props) {
  return (
    <div className="flex flex-col min-h-screen shadow-xl">
      <Header />
      <main className="flex-1 max-w-4xl w-full text-center mx-auto dark:bg-neutral-900 rounded-b-md border-x-2 border-sky-700 border-b-2">
        {children}
      </main>
      <Footer />
    </div>
  );
}
