const createMDX = require("@next/mdx");
const remarkGfm = require("remark-gfm");

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm],
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

module.exports = withMDX(nextConfig);