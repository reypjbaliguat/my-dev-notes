import createMDX from "@next/mdx";

const withMDX = createMDX({
  extension: /\.mdx$/,
});

const nextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  transpilePackages: ["next-mdx-remote"],
};

export default withMDX(nextConfig);
