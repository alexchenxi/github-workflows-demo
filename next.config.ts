import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 🔥 核心1：固定 GitHub Pages 子路径（和仓库名一致）
  basePath: '/out',

  // 🔥 核心2：静态资源全局前缀（末尾必须加 /，解决 JS/CSS 404）
  assetPrefix: '/out',

  // 🔥 核心3：开启静态导出（生成 out 文件夹，适配 GitHub Pages）
  output: 'export',

  // 🔥 核心4：强制路由带尾斜杠，兼容 GitHub Pages 静态服务器
  trailingSlash: true,

  // 🔥 核心5：关闭图片优化（静态导出必备）
  images: {
    unoptimized: true,
  },

  // 关闭 React 严格模式（可选，避免开发环境重复渲染）
  // reactStrictMode: false,
};

export default nextConfig;