import { clearCommand } from "./clear";

export const commands: { [key: string]: (args?: string) => void } = {
  clear: clearCommand,
};
