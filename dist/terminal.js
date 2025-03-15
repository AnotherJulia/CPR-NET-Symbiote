"use strict";
const terminal = document.getElementById("terminal");
if (!terminal) {
    console.error("Terminal element not found");
    throw new Error("Terminal element not found"); // Stops execution
}
// Command registry
const commands = {
    help: () => {
        addCommand("Available commands: help, about, contact");
    },
    clear: () => (terminal.innerHTML = ""),
    echo: (args) => addCommand(args || "Usage: echo [message]"),
    greet: (args) => addCommand(`Hello, ${args || "stranger"}!`),
};
function addCommand(input) {
    const commandLine = document.createElement("div");
    commandLine.classList.add("command");
    commandLine.innerHTML = `<span>&gt;</span><span>${input}</span>`;
    const inputLine = terminal.querySelector(".input-line");
    inputLine
        ? terminal.insertBefore(commandLine, inputLine)
        : terminal.append(commandLine);
    terminal.scrollTop = terminal.scrollHeight;
}
function handleCommand(input) {
    const [command, ...args] = input.split(" ");
    if (commands[command]) {
        commands[command](args.join(" "));
    }
    else {
        addCommand(`Unknown command: ${command}`);
    }
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
function createInputLine() {
    if (terminal.querySelector(".input-line"))
        return;
    const inputLine = document.createElement("div");
    inputLine.classList.add("input-line");
    inputLine.innerHTML = `<span>&gt;</span><input type="text" autofocus>`;
    const inputField = inputLine.querySelector("input");
    inputField.addEventListener("keypress", (event) => handleInput(event, inputField, inputLine));
    terminal.append(inputLine);
    inputField.focus();
}
createInputLine();
