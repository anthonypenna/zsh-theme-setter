import { userInfo } from "os";

export function getZshrcPath(): string {
  const USER = userInfo().username;
  return `/Users/${USER}/.zshrc`;
}
