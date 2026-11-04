
const secret = process.env.AUTH_SECRET?.trim();

if (!secret) {
  throw new Error(
    "AUTH_SECRET não configurado. Defina a variável de ambiente."
  );
}

module.exports = {
  jwt: {
    secret,
    expiresIn: "1d",
  },
};
