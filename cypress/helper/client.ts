export function encryptBasicToken(token: string): string {
  return `Basic ${Buffer.from(
    `${token}${token.endsWith(":") ? "" : ":"}`
  ).toString("base64")}`;
}

/**
 * encrypt oauth credentials as Bearer base64 token
 */
export function encryptBearerToken(username: string, password: string): string {
  return `Bearer ${Buffer.from(`${username}:${password}`).toString("base64")}`;
}
