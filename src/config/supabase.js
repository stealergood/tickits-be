const { Pool } = require("pg");

const env = require("./environment");

const url = env.url;

// Parsing URL dengan ekspresi reguler
const urlParts = url.match(/postgres:\/\/([^:]+):([^@]+)@([^:]+):(\d+)\/(.+)/);

// Mengekstrak nilai dari hasil pencocokan regex
const username = urlParts[1];
const password = urlParts[2];
const host = urlParts[3];
const port = urlParts[4];
const databaseName = urlParts[5];

const postgree = new Pool({
  host: host,
  database: databaseName,
  port: port,
  user: username,
  password: password,
});

module.exports = postgree;
