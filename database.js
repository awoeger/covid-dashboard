import camelcaseKeys from 'camelcase-keys';
import dotenvsafe from 'dotenv-safe';
import postgres from 'postgres';

// Read the PostgreSQL secret connection information
// (host, database, username, password) from the .env file
dotenvsafe.config();

// Connect only once to the database
// https://github.com/vercel/next.js/issues/7811#issuecomment-715259370
export function connectOneTimeToDatabase() {
  let sql;

  if (process.env.NODE_ENV === 'production') {
    // Heroku needs SSL connections but
    // has an "unauthorized" certificate
    // https://devcenter.heroku.com/changelog-items/852
    sql = postgres({ ssl: { rejectUnauthorized: false } });
  } else {
    if (!globalThis.__postgresSqlClient) {
      globalThis.__postgresSqlClient = postgres();
    }
    sql = globalThis.__postgresSqlClient;
  }

  return sql;
}

// Connect to PostgreSQL
const sql = connectOneTimeToDatabase();

// Queries

export async function getAllCountries() {
  const countries = await sql`
    SELECT
      id,
      continent,
      country,
      capital,
      countrycode,
      latitude,
      longitude,
      dish
    FROM
      dishes
  `;
  return countries.map((country) => camelcaseKeys(country));
}
