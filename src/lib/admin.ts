export const ADMIN_EMAILS = [
  "medangeloss@gmail.com",
  "test@docai.com",
];

export function isAdmin(email: string | undefined | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email);
}
