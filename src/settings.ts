import assert from "assert";

export function getEnvOrThrow(envName: string): string {
  const env = process.env[envName];
  assert(env, `Missing environment variable ${envName}`);
  return env;
}

export function getEnvOrDefault(envName: string, defaultValue: string): string {
  return process.env[envName] ?? defaultValue;
}

export const LOAD_MODULES = getEnvOrDefault("LOAD_MODULES", [
  "discord",
].join(","));

export const CORS_ALLOWED_ORIGINS = getEnvOrDefault("CORS_ALLOWED_ORIGINS", "*");
export const DISCORD_TOKEN = getEnvOrDefault("DISCORD_TOKEN", "");
export const GUILD_ID = getEnvOrDefault("GUILD_ID", "");
export const CLIENT_ID = getEnvOrDefault("CLIENT_ID", "");
