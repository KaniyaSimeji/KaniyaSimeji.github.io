import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";
import { CgDarkMode } from "react-icons/cg";

export default function Header() {
  const { theme, setTheme } = useTheme();
  return (
    <header className="sticky top-0 border-b z-10 bg-cyan-700">
      <div className="max-w-4xl mx-auto flex justify-between items-center h-12">
        <div className="flex space-x-1.5">
          <Link href="/">
            <div>
              <HeaderImage />
            </div>
          </Link>
          <h3 className="w-11/12 my-2.5 text-stone-100">kanium.me</h3>
        </div>
        <div className="flex space-x-3 text-stone-100">
          <Link href="/about">
            <h4 className="">about</h4>
          </Link>
          <Link href="/blogs">
            <h4>blog</h4>
          </Link>
          <CgDarkMode
            className="my-1.5"
            onClick={() => {
              if (theme === "light") {
                setTheme("dark");
              } else {
                setTheme("light");
              }
            }}
          />
        </div>
      </div>
    </header>
  );
}

function HeaderImage() {
  return (
    <div>
      <Image
        src="/new_kanium.png"
        alt="icon"
        width={48}
        height={48}
        className="rounded-full"
      ></Image>
    </div>
  );
}
