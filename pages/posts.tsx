import { InferGetStaticPropsType } from "next";
import { getContentsFilesInDirectory } from "./api/blogs";
import Link from "next/link";
import { BsRssFill } from "react-icons/bs";
import genFeed from "./lib/gen_feed";
import Head from "next/head";

export async function getStaticProps() {
  genFeed();
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

  return {
    props: {
      ContentMeta,
    },
  };
}

type contentLite = {
  id: number;
  name: string;
  description: string;
  outline: string;
  path: string;
  last_change: Date;
};

export default function Blogs({
  ContentMeta,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div>
      <Head>
        <title>kanium blog</title>
        <meta name="description" content="kanium website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
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
