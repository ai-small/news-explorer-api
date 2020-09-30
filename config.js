const { PORT = 3000, DATABASE_URL, JWT_SECRET = 'dev-secret' } = process.env;

module.exports = {
  PORT,
  DATABASE_URL,
  JWT_SECRET,
};
