import Footer from "./footer";
import Header from "./header";
import { Providers } from "./providers";
import "../styles/globals.css";

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <body>
        <Providers>
          <div className="flex flex-col min-h-screen shadow-xl">
            <Header />
            <main className="flex-1 max-w-4xl w-full text-center mx-auto dark:bg-neutral-900 rounded-b-md border-x-2 border-sky-700 border-b-2">
              {children}
            </main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
