import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  // 固定子路径（和仓库名完全一致）
  basePath: '/github-workflows-demo',
  // 静态资源前缀（末尾必须加 /，适配子路径）
  assetPrefix: '/github-workflows-demo/',

  // 静态导出
  output: 'export',
  // 关闭图片优化
  images: { unoptimized: true },
  // 路由兼容
  trailingSlash: true,
};

export default nextConfig;