import "../styles/globals.css";
import type { AppProps } from "next/app";
import { MDXProvider } from "@mdx-js/react";
import { H1 } from "../components/mdComponents";
import Layout from "../components/layout";
import { getContentFilesInDirectory } from "./api/blogs";

export const getStaticProps = async () => {
  const path = getContentFilesInDirectory();
  const pages_name = path.map((name) => {
    return name.name;
  });
  
  return {
    props: {
      posts: await Promise.all(pages_name),
    },
  };
};

const components = {
  h1: H1,
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MDXProvider components={components}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </MDXProvider>
  );
}

export default MyApp;
