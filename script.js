// Simple single-page navigation
document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const target = e.target.getAttribute("href").substring(1);
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");
  });
});

// AI Suggestion mock (later you can connect an API)
const ideas = [
  "Create a futuristic city skyline artboard.",
  "Write a dialogue between a hero and their AI assistant.",
  "Design a book cover for a time-travel mystery.",
  "Sketch a color palette based on the word 'serenity'.",
  "Brainstorm podcast topics about creative AI tools."
];

document.getElementById("aiSuggest").addEventListener("click", () => {
  const ideaBoard = document.getElementById("ideaBoard");
  const randomIdea = ideas[Math.floor(Math.random() * ideas.length)];
  const note = document.createElement("div");
  note.className = "idea-note";
  note.textContent = randomIdea;
  ideaBoard.appendChild(note);
});
