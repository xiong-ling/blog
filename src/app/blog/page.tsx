import { Article } from "@/components/article";

const Blog = () => {
  return (
    <main className="flex-1">
      <div className="container relative p-10">
        <h1 className="scroll-m-20 text-4xl font-bold tracking-tight mb-10">Articles</h1>
        <Article />
      </div>
    </main>
  );
};

export default Blog;
