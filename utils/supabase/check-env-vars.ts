// This check can be removed
// it is just for tutorial purposes

export const hasEnvVars =
  process.env.NEXT_PUBLIC_SUPABASE_DATABASE_URL &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY &&
  process.env.Y_SWEET_CONNECTION_STRING;
