const terminal = document.getElementById("terminal");

function addCommand(input) {
  const commandLine = document.createElement("div");
  commandLine.classList.add("command");
  commandLine.innerHTML = `<span>&gt;</span> <span>${input}</span>`;
  terminal.insertBefore(commandLine, document.querySelector(".input-line"));
  terminal.scrollTop = terminal.scrollHeight;
}

function createInputLine() {
  const inputLine = document.createElement("div");
  inputLine.classList.add("input-line");
  inputLine.innerHTML = `<span>&gt;</span><input type='text' autofocus>`;
  terminal.appendChild(inputLine);
  inputLine.querySelector("input").focus();

  inputLine
    .querySelector("input")
    .addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        const input = this.value;
        if (input.trim() !== "") {
          addCommand(input);
          this.value = "";
        }
      }
    });
}

createInputLine();
