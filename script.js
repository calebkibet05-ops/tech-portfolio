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
// ===== Interactive Linux Terminal =====

const input = document.getElementById("command-input");
const output = document.getElementById("shell-output");

const commands = {
  help: "Available commands:\nabout\nskills\nprojects\ngithub\nclear",
  about: "Caleb Kibet\nAspiring Systems & Infrastructure Engineer.",
  skills: "Linux Systems\nNetworking\nCloud\nGit & GitHub",
  projects: "Tech Portfolio",
  github: "github.com/calebkibet05-ops"
};

input.addEventListener("keydown", function(e){

  if(e.key==="Enter"){

    const cmd=input.value.trim().toLowerCase();

    output.textContent+="\n\n$ "+cmd+"\n";

    if(cmd==="clear"){
      output.textContent="Welcome to Caleb's Linux Terminal.\n\nType \"help\" below.";
    }else if(commands[cmd]){
      output.textContent+=commands[cmd];
    }else{
      output.textContent+="Command not found.";
    }

    input.value="";

  }

});
// ===== Active Navigation =====

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop = section.offsetTop - 120;

    if(window.scrollY >= sectionTop){
      current = section.getAttribute("id");
    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(link.getAttribute("href") === "#" + current){
      link.classList.add("active");
    }

  });

});
// ===== Mobile Menu =====

const menuToggle=document.getElementById("menu-toggle");
const menu=document.querySelector("nav ul");

menuToggle.addEventListener("click",()=>{

menu.classList.toggle("show");

});