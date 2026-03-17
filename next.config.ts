import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  // 核心配置：开启静态导出
  output: "export",

  // 可选配置：如果你不需要图片优化（静态站必须关闭）
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
