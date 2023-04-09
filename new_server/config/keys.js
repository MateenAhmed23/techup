if (process.env.NODE_ENV === "production") {
  module.exports = {
    mongoURI: process.env.MONGO_URI,
    jwtSecret: process.env.JWT_SECRET,
  };
} else {
  module.exports = {
    mongoURI: "mongodb://localhost:27017/your-db-name",
    jwtSecret: "your-secret-key",
  };
}
