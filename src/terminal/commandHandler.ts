import { commands } from "../commands/index";
import { addCommand } from "./terminal";

export function handleCommand(input: string): void {
  const [command, ...args] = input.split(" ");
  if (commands[command]) {
    commands[command](args.join(" "));
  } else {
    addCommand(`Unknown command: ${command}`);
  }
}
