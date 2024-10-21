/** @type {import('next').NextConfig} */
const nextConfig = {
    // ignore ts and eslint warnings

    typescript:{
        ignoreBuildErrors: true
    },
    eslint: {
        ignoreDuringBuilds: true
    }
};

module.exports = nextConfig;
