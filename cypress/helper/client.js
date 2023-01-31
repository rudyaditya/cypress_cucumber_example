export function encryptBasicToken(token) {
  return `Basic ${Buffer.from(
    `${token}${token.endsWith(":") ? "" : ":"}`
  ).toString("base64")}`;
}

/**
 * encrypt oauth credentials as Bearer base64 token
 */
export function encryptBearerToken(username, password) {
  return `Bearer ${Buffer.from(`${username}:${password}`).toString("base64")}`;
}
