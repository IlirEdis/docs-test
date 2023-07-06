/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
}

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './nextraTheme.config.tsx',

})

module.exports = withNextra(nextConfig);

// module.exports = nextConfig
