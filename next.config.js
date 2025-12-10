const createMDX = require("@next/mdx");
const _remarkGfm = require("remark-gfm");
const remarkGfm = _remarkGfm.default || _remarkGfm;

const withMDX = createMDX({
  extension: /\.mdx?$/,
  options: {
    remarkPlugins: [remarkGfm].filter(Boolean),
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
};

module.exports = withMDX(nextConfig);