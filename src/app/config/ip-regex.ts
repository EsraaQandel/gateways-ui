export const ipAddressRegex =
  /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/i;

export function isValidIpAddress(ip: string): boolean {
  const isValid = ipAddressRegex.test(ip);
  return isValid;
}
