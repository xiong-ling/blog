// import createMDX from "@next/mdx";
// import remarkGfm from "remark-gfm";
// import remarkMath from "remark-math";
// import rehypePrettyCode from "rehype-pretty-code";
// import rehypeSlug from "rehype-slug";
// import rehypeCodeTitles from "rehype-code-titles";
// import rehypeAutolinkHeadings from "rehype-autolink-headings";
// import rehypePrism from "rehype-prism-plus";
// import rehypeKatex from "rehype-katex";
// import { remarkCodeHike } from "@code-hike/mdx";
// import remarkToc from "remark-toc";

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   pageExtensions: ["js", "jsx", "mdx", "ts", "tsx"],
// };

// const withMDX = createMDX({
//   extension: /\.mdx?$/,
//   // Add markdown plugins here, as desired
//   options: {
//     remarkPlugins: [
//       [remarkCodeHike, { theme: "nord" }],
//       remarkMath,
//       remarkGfm,
//       remarkToc,
//     ],
//     rehypePlugins: [
//       rehypeKatex,
//       rehypeSlug,
//       [
//         rehypePrettyCode,
//         {
//           theme: "solarized-light",
//         },
//       ],
//       rehypeCodeTitles,
//       [
//         rehypePrism,
//         {
//           showLineNumbers: true,
//         },
//       ],
//       [
//         rehypeAutolinkHeadings,
//         {
//           properties: {
//             className: ["anchor"],
//           },
//         },
//       ],
//     ],
//   },
// });

// export default withMDX(nextConfig);

/** @type {import('next').NextConfig} */
const nextConfig = {};

export default nextConfig;
