import { InferGetStaticPropsType } from "next/types";
import {
  getContentByPath,
  getContentsFilesInDirectory,
  markdownToHTML,
} from "../api/blogs";
import markdownStyles from "./markdown.module.css";
import Head from "next/head";

type Params = {
  params: {
    slug: string;
  };
};

export const getStaticProps = async ({ params }: Params) => {
  const content = getContentByPath(params.slug);
  const blog_text = await markdownToHTML(content.text);

  return {
    props: {
      ...content,
      text: blog_text,
    },
  };
};

export const getStaticPaths = async () => {
  const contents = getContentsFilesInDirectory();

  return {
    paths: contents.map((con) => {
      return {
        params: {
          slug: con.path,
        },
      };
    }),
    fallback: "blocking",
  };
};

export default function Post({
  text,
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="">
      <Head>
        <title>{`${name} | kanium blog`}</title>
        <meta name="description" content="kanium website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <h1 className="m-8 text-3xl font-bold">{name}</h1>
      <article
        dangerouslySetInnerHTML={{ __html: text }}
        className={markdownStyles["markdown"]}
      ></article>
    </div>
  );
}
