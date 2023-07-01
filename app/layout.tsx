import Image from "next/image";
import Link from "next/link";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 p-8 my-6 rounded-md">
        <Image
          src="/logo1.png"
          width={40}
          height={40}
          alt="logo"
          className="mx-auto"
        />
        <Link href="/">
          <h1 className="text-2xl font-bold text-white mt-4">Yurii's blog</h1>
        </Link>
        <p className="text-slate-300">🤟 Welcome to my tech blog! 💻</p>
      </div>
    </header>
  );

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <p>Designed by Yurii 😎</p>
      </div>
    </footer>
  );

  return (
    <html lang="en">
      <body>
        <div className="mx-auto max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  );
}
