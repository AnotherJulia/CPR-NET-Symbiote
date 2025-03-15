import { commands } from "../commands/index.js";
import { addCommand } from "./terminal.js";
export function handleCommand(input) {
  const [command, ...args] = input.split(" ");
  if (commands[command]) {
    commands[command](args.join(" "));
  } else {
    addCommand(`Unknown command: ${command}`);
  }
}
