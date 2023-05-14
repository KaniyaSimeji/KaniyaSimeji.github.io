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

export default function Blog({
  text,
  name,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <div className="">
      <Head>
        <title>{name}</title>
      </Head>
      <div
        dangerouslySetInnerHTML={{ __html: text }}
        className={markdownStyles["markdown"]}
      ></div>
    </div>
  );
}
