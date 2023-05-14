import { Feed } from "feed";
import { getContentsFilesInDirectory } from "../api/blogs";
import fs from "fs";
import path from "path";

export default function genFeed() {
  const feed = new Feed({
    title: "kanium website",
    description: "KaniyaSimeji WebSite",
    id: "https://kanium.me/",
    link: "https://kanium.me/",
    copyright: "All rights reserved 2023, KaniyaSimeji",
    feedLinks: {
      rss2: `https://kanium.me/rss/feed.xml`,
      json: `https://kanium.me/rss/feed.json`,
      atom: `https://kanium.me/rss/atom.xml`,
    },
    author: {
      name: "KaniyaSimeji",
    },
  });

  const posts = getContentsFilesInDirectory();

  posts.forEach((v) => {
    feed.addItem({
      title: v.name,
      description: v.description,
      id: "https://kanium.me/" + v.path,
      link: "https://kanium.me/" + v.path,
      content: v.text,
      date: v.file_change_latest,
    });
  });

  fs.mkdirSync(path.join(process.cwd(), "/public/rss"), { recursive: true });
  fs.writeFileSync(
    path.join(process.cwd(), "/public/rss/atom.xml"),
    feed.atom1()
  );
}
