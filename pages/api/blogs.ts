import { readFileSync, readdirSync, statSync } from "fs";
import matter, { GrayMatterFile } from "gray-matter";
import path from "path";
import { remark } from "remark";
import remarkHtml from "remark-html";

const postsDirectory = path.join(process.cwd(), "/pages/blog");
const md_file_extension = ".md";
const mdx_file_extension = ".mdx";

export function getContentsFilesInDirectory(): Content[] {
  const allFiles = readdirSync(postsDirectory).map((fileName) => {
    return path.parse(fileName);
  });

  const mdFiles = allFiles.filter(
    (parsedFile) =>
      parsedFile.ext == md_file_extension ||
      parsedFile.ext == mdx_file_extension
  );

  const contents = mdFiles.map((v) => {
    return getContentByPath(v.name);
  });

  return contents;
}

export function getContentByPath(name: string): Content {
  const con_path = postsDirectory + "/" + name + ".md";
  const status = statSync(con_path);
  const date_num = status.birthtimeMs;
  const change_latest = status.mtime;
  const raw = readFileSync(con_path).toString();
  const { data, content, excerpt } = matter(raw, {
    // @ts-expect-error: type is wrong from source
    excerpt: (input: GrayMatterFile) => {
      input.excerpt = input.content.split("\n").slice(0, 3).join(" ");
    },
  });
  const cdata: Content = {
    name: data.name,
    path: name,
    description: data.description,
    id: date_num,
    text: content,
    outline: excerpt || "",
    file_change_latest: change_latest,
  };
  return cdata;
}

export type Content = {
  id: number;
  name: string;
  path: string;
  description: string;
  text: string;
  outline: string;
  file_change_latest: Date;
};

export async function markdownToHTML(raw_text: string): Promise<string> {
  const text = await remark().use(remarkHtml).process(raw_text);
  return text.toString();
}
