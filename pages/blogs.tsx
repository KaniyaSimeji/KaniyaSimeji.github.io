import { InferGetStaticPropsType } from "next";
import { getContentsFilesInDirectory } from "./api/blogs";
import Link from "next/link";

export async function getStaticProps() {
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
      <ul>
        {ContentMeta.map((con) => (
          <li key={con.id}>
            <div className="m-8 shadow-xl dark:shadow-black hover:ring-white hover:ring-2 rounded-md">
              <Link
                href={"blog/" + con.path}
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
