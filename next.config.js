module.exports = {
  reactStrictMode: true,
  serverRuntimeConfig: {
    secret: "fe7130d2-2705-4c54-9e2c-faec8610d948",
  },
  publicRuntimeConfig: {
    apiUrl:
      process.env.NODE_ENV === "development"
        ? "http://localhost:3000/api" // development api
        : "http://localhost:3000/api", // production api
  },
  images: {
    domains: ["imgbb.com", "i.ibb.co"],
  },
};
