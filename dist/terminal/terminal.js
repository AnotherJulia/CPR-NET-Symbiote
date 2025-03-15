import { handleCommand } from "./commandHandler.js";
const terminal = document.getElementById("terminal");
if (!terminal) {
  throw new Error("Terminal element not found");
}
export function setupTerminal() {
  createInputLine();
}
function createInputLine() {
  const inputLine = document.createElement("div");
  inputLine.classList.add("input-line");
  inputLine.innerHTML = `<span>&gt;</span><input type="text" autofocus>`;
  const inputField = inputLine.querySelector("input");
  inputField.addEventListener("keypress", (event) =>
    handleInput(event, inputField, inputLine)
  );
  terminal.append(inputLine);
  inputField.focus();
}
function handleInput(event, inputField, inputLine) {
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
export function addCommand(input) {
  const commandLine = document.createElement("div");
  commandLine.classList.add("command");
  commandLine.innerHTML = `<span>&gt;</span><span>${input}</span>`;
  terminal.append(commandLine);
}
