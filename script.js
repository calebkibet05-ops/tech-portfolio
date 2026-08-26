// ===== Typing Headline =====

const roles = [
  "Aspiring Systems & Infrastructure Engineer",
  "Linux Systems Focus"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeRole() {
  const currentRole = roles[roleIndex];

  typing.textContent = currentRole.substring(0, charIndex);

  if (!deleting && charIndex < currentRole.length) {
    charIndex++;
    setTimeout(typeRole, 70);
  } else if (deleting && charIndex > 0) {
    charIndex--;
    setTimeout(typeRole, 35);
  } else {
    deleting = !deleting;

    if (!deleting) {
      roleIndex = (roleIndex + 1) % roles.length;
    }

    setTimeout(typeRole, 900);
  }
}

typeRole();


// ===== Linux Terminal Boot =====

const bootLines = [
  "$ systemctl status caleb.service",
  "● caleb.service - Systems & Infrastructure Engineer",
  "",
  "$ hostnamectl",
  "Hostname: caleb-kibet",
  "",
  "$ whoami",
  "caleb",
  "",
  "$ uptime",
  "Learning Linux | Building Infrastructure"
];

const terminal = document.getElementById("terminal-text");

let line = 0;

function bootTerminal() {

  if (line < bootLines.length) {

    terminal.textContent += bootLines[line] + "\n";

    line++;

    setTimeout(bootTerminal, 500);

  }

}

bootTerminal();
// ===== Linux Boot Screen =====

const bootScreen = document.getElementById("boot-screen");
const bootText = document.getElementById("boot-text");

const startup = [
  "[ OK ] Starting caleb.service...",
  "[ OK ] Loading Linux Systems...",
  "[ OK ] Initializing Infrastructure Dashboard...",
  "[ OK ] Connecting GitHub...",
  "",
  "Welcome, Caleb Kibet."
];

let startupLine = 0;

function bootSequence(){

  if(startupLine < startup.length){

    bootText.textContent += startup[startupLine] + "\\n";

    startupLine++;

    setTimeout(bootSequence,450);

  }else{

    setTimeout(()=>{

      bootScreen.style.opacity="0";

      setTimeout(()=>{
        bootScreen.style.display="none";
      },800);

    },700);

  }

}

bootSequence();