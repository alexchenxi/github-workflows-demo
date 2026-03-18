import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 固定 GitHub Pages 子路径（和仓库名一致）
  basePath: "/github-workflows-demo",

  // 静态资源前缀必须与 basePath 一致
  assetPrefix: "/github-workflows-demo",

  // 开启静态导出
  output: "export",
  trailingSlash: true, // 添加此行

  // 关闭图片优化（静态导出必备）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
