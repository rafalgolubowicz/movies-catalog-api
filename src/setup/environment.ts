import dotenv from "dotenv";

dotenv.config();

const retrieveEnvVariable = (
  name: string,
  required = false,
  defaultValue = undefined
): string => {
  const value = process.env[name];
  const shouldThrowError =
    required && process.env.IGNORE_ENV_ERRORS !== "true";

  if (!value && shouldThrowError) {
    throw new Error(`Missing environment variable - ${name}`);
  }

  if (!value) {
    console.warn(`Missing environment variable - ${name}`);

    return "";
  }

  return value ?? defaultValue;
};

export const SERVER_PORT = retrieveEnvVariable("SERVER_PORT", true);
export const CORS_ORIGIN = retrieveEnvVariable("CORS_ORIGIN", false);
export const DB_FILE = retrieveEnvVariable(
  "DATABASE_FILE_PATH",
  true
);
