import { InferGetStaticPropsType } from "next/types";
import {
  getContentByPath,
  getContentsFilesInDirectory,
  markdownToHTML,
} from "../../../lib/blogs";
import markdownStyles from "./markdown.module.css";
import Head from "next/head";

export const dynamicParams = true;

type Params = {
  slug: string;
};

async function getContent({ slug }: Params) {
  const content = getContentByPath(slug);
  const blog_text = await markdownToHTML(content.text);

  return {
    props: {
      ...content,
      text: blog_text,
    },
  };
}

export default async function Post({ params }) {
  const {
    props: { name, text },
  } = await getContent(params);

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
