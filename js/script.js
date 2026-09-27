// ---------- AI Skill Mapping (demo logic) ----------
const skillDB = [
  { keys: ["python", "pandas", "numpy", "data analysis", "machine learning", "ml"],
    role: "Data Science / ML Intern",
    projects: ["Predictive analytics for retail demand", "AI-based crop yield prediction", "Customer churn modeling"] },
  { keys: ["react", "javascript", "html", "css", "frontend", "web development"],
    role: "Frontend Development Intern",
    projects: ["College portal UI revamp", "Industry dashboard for project tracking", "Accessibility-first web app"] },
  { keys: ["node", "backend", "api", "database", "sql"],
    role: "Backend Development Intern",
    projects: ["Skill-mapping API service", "AICTE verification microservice", "Project matching engine backend"] },
  { keys: ["tensorflow", "pytorch", "deep learning", "nlp", "computer vision"],
    role: "AI/Deep Learning Research Intern",
    projects: ["Chatbot intent classification model", "Resume-to-skill extraction using NLP", "Vision-based quality inspection"] },
  { keys: ["design", "ui", "ux", "figma"],
    role: "UI/UX Design Intern",
    projects: ["Student onboarding flow redesign", "Industry partner dashboard design", "Accessibility audit for portal"] }
];

function mapSkills() {
  const input = document.getElementById("skillInput").value.toLowerCase();
  const resultBox = document.getElementById("skillResult");
  if (!input.trim()) {
    resultBox.innerHTML = "Please enter at least one skill or interest.";
    resultBox.classList.add("show");
    return;
  }
  const entered = input.split(",").map(s => s.trim()).filter(Boolean);

  let matches = skillDB
    .map(entry => {
      const score = entry.keys.filter(k => entered.some(e => k.includes(e) || e.includes(k))).length;
      return { ...entry, score };
    })
    .filter(m => m.score > 0)
    .sort((a, b) => b.score - a.score);

  if (matches.length === 0) {
    resultBox.innerHTML = "No strong match found in the demo dataset. Try skills like: python, react, node, tensorflow, design.";
  } else {
    const top = matches[0];
    resultBox.innerHTML = `
      <strong>Suggested Track:</strong> ${top.role}<br>
      <strong>Sample Matched Live Projects:</strong>
      <ul>${top.projects.map(p => `<li>${p}</li>`).join("")}</ul>
      <em>This is illustrative demo output — real deployment would use an AI model over your full academic + project history.</em>
    `;
  }
  resultBox.classList.add("show");
}

// ---------- AI Chatbot (rule-based demo) ----------
const faq = [
  { q: ["register", "sign up", "signup", "join"], a: "Students, colleges, and industry partners can register from the top navigation. Colleges will need their AICTE Permanent ID for verification." },
  { q: ["aicte", "approved", "verify"], a: "College accounts are verified using the official AICTE Permanent ID during registration, ensuring only recognized institutions participate." },
  { q: ["skill mapping", "skills", "map my skills"], a: "Head to the 'AI Skill Mapping' section, enter your skills/interests, and the system will suggest a track and matching live projects." },
  { q: ["project", "internship", "live project"], a: "Live projects are posted by industry partners and matched to students based on their AI-generated skill profile." },
  { q: ["contact", "support", "help"], a: "You can reach the support team at support@posthumanz.in for any registration or partnership queries." }
];

function toggleChat() {
  document.getElementById("chatWindow").classList.toggle("hidden");
}

function addMessage(text, sender) {
  const body = document.getElementById("chatBody");
  const msg = document.createElement("div");
  msg.className = "chat-msg " + sender;
  msg.textContent = text;
  body.appendChild(msg);
  body.scrollTop = body.scrollHeight;
}

function sendChat() {
  const input = document.getElementById("chatInput");
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, "user");
  input.value = "";

  const lower = text.toLowerCase();
  const found = faq.find(f => f.q.some(k => lower.includes(k)));
  const reply = found
    ? found.a
    : "I'm a demo assistant with limited answers. Try asking about: registration, AICTE verification, skill mapping, or live projects.";

  setTimeout(() => addMessage(reply, "bot"), 400);
}
