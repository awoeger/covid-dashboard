import camelcaseKeys from 'camelcase-keys';
import dotenvsafe from 'dotenv-safe';
import postgres from 'postgres';

// Connect to database
const sql = postgres();

// Read the PostgreSQL secret connection information
// (host, database, username, password) from the .env file
dotenvSafe.config();
