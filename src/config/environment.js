module.exports = {
  url: process.env.DATABASE_URL,
  serverPort: process.env.PORT || 3002,
  jwtSecret: process.env.JWT_SECRET,
  cloudinaryName: process.env.CLOUD_NAME,
  cloudinaryKey: process.env.CLOUD_KEY,
  cloudinarySecret: process.env.CLOUD_SECRET,
};
