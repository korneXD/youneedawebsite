import MillionLint from "@million/lint";

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "utfs.io",
        port: "",
        pathname: "/a/vdrkhh77op/**",
      },
    ],
  },
};

export default MillionLint.next({ rsc: true })(nextConfig);
