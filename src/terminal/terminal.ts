import { handleCommand } from "./commandHandler.js";

const terminal = document.getElementById("terminal") as HTMLDivElement | null;

if (!terminal) {
  throw new Error("Terminal element not found");
}

export function setupTerminal(): void {
  createInputLine();
}

function createInputLine(): void {
  const inputLine = document.createElement("div");
  inputLine.classList.add("input-line");
  inputLine.innerHTML = `<span>&gt;</span><input type="text" autofocus>`;

  const inputField = inputLine.querySelector("input") as HTMLInputElement;
  inputField.addEventListener("keypress", (event) =>
    handleInput(event, inputField, inputLine)
  );

  terminal!.append(inputLine);
  inputField.focus();
}

function handleInput(
  event: KeyboardEvent,
  inputField: HTMLInputElement,
  inputLine: HTMLDivElement
): void {
  if (event.key === "Enter") {
    event.preventDefault();
    const input = inputField.value.trim();
    if (input) {
      inputLine.remove();
      addCommand(input);
      handleCommand(input);
      createInputLine();
    }
  }
}

export function addCommand(input: string): void {
  const commandLine = document.createElement("div");
  commandLine.classList.add("command");
  commandLine.innerHTML = `<span>&gt;</span><span>${input}</span>`;
  terminal!.append(commandLine);
}
