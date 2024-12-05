import "./private.css";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";

import { ThemeProvider } from "lib/components/theme-switch";
import { AdminNav } from "lib/components/AdminNav";
import { Provider } from "lib/components/ui/provider";

const cx = (...classes) => classes.filter(Boolean).join(" ");

export const metadata = {
  title: "Next.js",
  description: "Generated by Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cx(GeistSans.variable, GeistMono.variable)}
      suppressHydrationWarning
    >
      <body className="antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Provider>
            <main>
              <AdminNav />
              <div className="p-4">
                <div className="bg-white dark:bg-black p-4">{children}</div>
              </div>
            </main>
          </Provider>
        </ThemeProvider>
      </body>
    </html>
  );
}