const environment = {
  application: {
    name: process.env.APPLICATION_NAME || 'node-jest-jwt',
    port: process.env.APPLICATION_PORT || 5000,
    env: process.env.NODE_ENV,
  },
  security: {
    jwt: {
      key: process.env.SECURITY_JWT_KEY,
      expires: process.env.SECURITY_JWT_EXPIRES || '8h',
    }
  },
  db: {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    name: process.env.DB_NAME,
    port: process.env.DB_PORT || "27017",
    host: process.env.DB_HOST
  },
};

module.exports = environment;
