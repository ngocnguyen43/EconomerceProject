const dev = {
  app: process.env.DEV_PORT || 4343,
  db: {
    url: process.env.DB_DEV_URI || "localhost",
    port: process.env.DB_DEV_PORT || 27017,
    name: process.env.DB_DEV_NAME || "tipJS",
  },
};
const prod = {
  app: process.env.PROD_PORT || 4342,
  db: {
    url: process.env.DB_PROD_URI || "localhost",
    port: process.env.DB_PROD_PORT || 27017,
    name: process.env.DB_PROD_NAME || "tipJS",
  },
};
const test = {
  app: process.env.TEST_PORT || 4341,
  db: {
    url: process.env.DB_TEST_URI || "localhost",
    port: process.env.DB_TEST_PORT || 27017,
    name: process.env.DB_TEST_NAME || "tipJS",
  },
};
const stage = process.env.STAGE || "development";
let defaultConfig;
if (stage === "production") {
  defaultConfig = prod;
} else if (stage === "test") {
  defaultConfig = test;
} else {
  defaultConfig = dev;
}
export default defaultConfig;
