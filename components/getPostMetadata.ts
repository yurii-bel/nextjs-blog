import { PostMetadata } from "./PostMetadata";
import fs from "fs";
import matter from "gray-matter";

const getPostMetadata = (): PostMetadata[] => {
  const folder = "posts/";
  const files = fs.readdirSync(folder);
  const markdownPots = files.filter((file) => file.endsWith(".md"));

  const posts = markdownPots.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, "utf8");
    const matterResults = matter(fileContents);
    return {
      title: matterResults.data.title,
      date: matterResults.data.date,
      subtitle: matterResults.data.subtitle,
      slug: fileName.replace(".md", ""),
    };
  });

  posts.sort(function (a, b) {
    var dateA = new Date(a.date).getTime();
    var dateB = new Date(b.date).getTime();
    return dateB - dateA;
  });

  return posts;
};

export default getPostMetadata;
