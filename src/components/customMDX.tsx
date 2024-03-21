import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import CustomLink from "@/components/customLink";
import CustomPre from "@/components/customPre";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeCodeTitles from "rehype-code-titles";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrism from "rehype-prism-plus";
import rehypeKatex from "rehype-katex";
import { remarkCodeHike } from "@code-hike/mdx";
import remarkToc from "remark-toc";

const MDXComponent = {
  a: CustomLink,
  pre: CustomPre,
};

export default function CustomMDX(
  props: React.JSX.IntrinsicAttributes & MDXRemoteProps
) {
  return (
    <MDXRemote
      {...props}
      components={{ ...MDXComponent, ...(props.components || {}) }}
      options={{
        mdxOptions: {
          remarkPlugins: [remarkMath, remarkGfm, remarkToc],
          rehypePlugins: [
            //@ts-ignore
            rehypeKatex,
            rehypeSlug,
            [
              //@ts-ignore
              rehypePrettyCode,
              {
                theme: "solarized-light",
              },
            ],
            rehypeCodeTitles,
            [
              //@ts-ignore
              rehypePrism,
              {
                showLineNumbers: true,
              },
            ],
            [
              rehypeAutolinkHeadings,
              {
                properties: {
                  className: ["anchor"],
                },
              },
            ],
          ],
        },
      }}
    />
  );
}