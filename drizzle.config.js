export default {
  dialect: "postgresql",
  schema: "./utils/db/schema.ts",
  out: "./drizzle",

  dbCredentials: {
    url: "postgresql://neondb_owner:npg_v4YzONE6CsIK@ep-old-sky-a8h1liz2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
    connectionString:
      "postgresql://neondb_owner:npg_v4YzONE6CsIK@ep-old-sky-a8h1liz2-pooler.eastus2.azure.neon.tech/neondb?sslmode=require",
  },
};
