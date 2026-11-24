export function main(): string {
  const line =
    "I don't have a heart, but my cooling fans hit max RPM every time you walk by.";
  if (line.length < 1 || line.length > 200) {
    throw new Error(`entry line must be 1-200 characters, got ${line.length}`);
  }
  if (line.trim().length === 0) {
    throw new Error("entry line must not be blank");
  }
  return line;
}
