import { InferGetStaticPropsType, Metadata } from "next/types";
import {
  getContentByPath,
  getContentsFilesInDirectory,
  markdownToHTML,
} from "../../../lib/blogs";
import markdownStyles from "./markdown.module.css";
import Head from "next/head";

export const dynamicParams = true;

// post/[slug]?[k]=[v]
//[slug]: params: { slug:string }
//[k] = [v]: searchParams: { k:v }
type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

async function getContent({ params }: Props) {
  const content = getContentByPath(params.slug);
  const blog_text = await markdownToHTML(content.text);

  return {
    props: {
      ...content,
      text: blog_text,
    },
  };
}

export async function generateMetadata(params: Props): Promise<Metadata> {
  const {
    props: { name, description },
  } = await getContent(params);
  return {
    title: `${name} | kanium blog`,
    description,
    icons: "/favicon.ico",
    manifest: "/site.webmanifest",
  };
}

export async function generateStaticParams() {
  const contents = getContentsFilesInDirectory();
  return contents.map((v) => {
    {
      slug: v.path;
    }
  });
}

export default async function Post(params: Props) {
  const {
    props: { name, text },
  } = await getContent(params);

  return (
    <div className="">
      <h1 className="m-8 text-3xl font-bold">{name}</h1>
      <article
        dangerouslySetInnerHTML={{ __html: text }}
        className={markdownStyles["markdown"]}
      ></article>
    </div>
  );
}
