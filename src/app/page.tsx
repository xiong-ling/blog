import { Article } from "@/components/article";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <main className="flex-1">
        <div className="container relative">
          <section className="lineTop mx-auto flex max-w-[980px] flex-col items-center gap-2 py-8 md:py-12 md:pb-8 lg:py-24 lg:pb-20">
            <h1 className="text-center text-3xl font-bold leading-tight tracking-tighter md:text-6xl lg:leading-[1.1] hidden md:block">
              Collection of personal articles
            </h1>
            <span
              className="max-w-[750px] text-center text-lg text-muted-foreground sm:text-xl"
              data-br=":r1g5:"
              data-brr="1"
              style={{
                display: "inline-block",
                verticalAlign: "top",
                textDecoration: "inherit",
                maxWidth: 560,
              }}
            >
              React.js, Next.js and Full-stack Projects, as well as learning
              about some open source libraries and the implementation of common
              functions.
            </span>
            <div className="flex w-full items-center justify-center space-x-4 py-4 md:pb-10">
              <Button asChild>
                <Link href="/projects">Projects</Link>
              </Button>
              <Button asChild variant="outline">
                <Link href="/blog">Blog</Link>
              </Button>
            </div>
          </section>
          <Article />
        </div>
      </main>
      <footer className="py-6 md:px-8 md:py-0 h-[96px]"></footer>
    </>
  );
}
