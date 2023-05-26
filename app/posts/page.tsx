import { Metadata } from "next";
import { getContentsFilesInDirectory } from "../../lib/blogs";
import Link from "next/link";
import { BsRssFill } from "react-icons/bs";
import genFeed from "../../lib/gen_feed";

async function getContentsMeta() {
  const contents = getContentsFilesInDirectory();

  const ContentMeta = contents.map((con) => {
    const lite: contentLite = {
      id: con.id,
      name: con.name,
      description: con.description,
      outline: con.outline,
      path: con.path,
      last_change: con.file_change_latest,
    };
    return lite;
  });

  return ContentMeta;
}

type contentLite = {
  id: number;
  name: string;
  description: string;
  outline: string;
  path: string;
  last_change: Date;
};

export const metadata: Metadata = {
  title: "kanium blog",
  description: "kanium website",
  icons: "/favicon.ico",
  manifest: "/site.webmanifest",
};

export default async function Blogs() {
  genFeed();
  const ContentMeta = await getContentsMeta();
  return (
    <div>
      <div className="justify-items-center grid">
        <h1 className="m-8 text-3xl">記事一覧</h1>
        <Link href={"/rss/atom.xml"}>
          <BsRssFill className="inline m-1" />
          <p className="inline m-1">RSS</p>
        </Link>
      </div>
      <ul>
        {ContentMeta.map((con) => (
          <li key={con.id}>
            <div className="m-8 shadow-xl dark:shadow-black hover:ring-white hover:ring-2 rounded-md">
              <Link
                href={"post/" + con.path}
                className="flex flex-nowrap items-center"
              >
                <h2 className="text-3xl text-left">{con.name}</h2>
                <h3 className="text-2xl text-center mx-8">{con.description}</h3>
                <p className="text-right mx-8">
                  {con.last_change.toDateString()}
                </p>
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
