// ─── PORTFOLIO DATA ───────────────────────────────────────────────
const portfolioData = {
  about:
    "Pravesh Nandanwar is an Computer Science & Design Engineer based in Nagpur, India. He builds AI agents, cloud-native apps, and developer tools.",
  status:
    "Open to AI Engineer, Cloud Engineer, DevOps, and Full Stack roles – full-time, internships, and freelance.",
  contact:
    "Email: praveshnandanwar267@gmail.com | GitHub: github.com/pn-dev-in | LinkedIn: linkedin.com/in/pravesh-nandanwar",

  projects: {
    voicepilot: {
      name: "VoicePilot AI",
      desc: "Privacy-first voice assistant with wake-word detection, Whisper STT, LLM reasoning (local + cloud), long-term vector memory, and extensible tool calling. Built with Python, LangChain, OpenAI/Groq.",
      tech: "Python, Whisper, LangChain, Vector DB (Chroma), Ollama, Porcupine wake-word, pyttsx3",
      features: [
        "Offline wake-word detection",
        "Local STT with Whisper",
        "Persistent memory across sessions",
        "Tool calling (web search, calendar, automation)",
        "Modular – swap any component",
        "Explicit permission model",
      ],
      github: "https://github.com/pn-dev-in/VoicePilot-AI",
    },
    talentmatch: {
      name: "TalentMatch AI",
      desc: "Intelligent recruitment platform that automates resume screening, skill extraction, ATS scoring, and candidate ranking using hybrid NLP (TF-IDF + BERT embeddings).",
      tech: "Python, BERT (sentence-transformers), scikit-learn, pdfplumber, Streamlit",
      features: [
        "PDF/DOCX parsing",
        "3 matching strategies: TF-IDF, BERT, Hybrid",
        "ATS scoring with gap analysis",
        "Interactive dashboard",
        "CSV/PDF export",
      ],
      github: "https://github.com/pn-dev-in/TalentMatch-AI",
      demo: "https://talent-matchai.streamlit.app/",
    },
    posetrack: {
      name: "PoseTrack AI",
      desc: "Real-time AI fitness coach using MediaPipe and OpenCV. Tracks 33 body landmarks, counts reps, analyzes joint angles, estimates calories, and streams live feedback via Flask.",
      tech: "Python, MediaPipe, OpenCV, Flask, NumPy, Chart.js",
      features: [
        "Real-time pose estimation (24+ FPS)",
        "Automatic rep counting per exercise",
        "Joint angle biomechanics",
        "Calorie estimation",
        "Workout history dashboard",
      ],
      github: "https://github.com/pn-dev-in/PoseTrack-AI",
      demo: "https://youtu.be/etn5ok5JK7A",
    },
    finpilot: {
      name: "FinPilot",
      desc: "Full-stack personal finance platform with multi-account tracking, budget management, Financial Health Score (ML-based), anomaly detection, and spending forecasts. Deployed on Render.",
      tech: "Django, Django REST Framework, PostgreSQL, React, Chart.js, Render",
      features: [
        "Multi-account income/expense",
        "Financial Health Score engine",
        "Budget alerts & anomaly detection",
        "Savings goal tracking",
        "Spending trend forecasting",
        "Dark/light mode",
      ],
      github: "https://github.com/pn-dev-in/FinPilot",
      demo: "https://finpilot-hgxc.onrender.com/",
    },
    chatflow: {
      name: "ChatFlow",
      desc: "Real-time messaging platform inspired by WhatsApp and Slack. Includes one-to-one and group chats, media sharing, typing indicators, read receipts, and an AI assistant.",
      tech: "Next.js 15, React 19, TypeScript, Node.js, Express, Socket.IO, PostgreSQL, Prisma, JWT, Tailwind, Cloudinary, Docker",
      features: [
        "Real-time messaging with Socket.IO",
        "Group conversations & roles",
        "Media uploads (images/video/docs)",
        "Typing indicators & read receipts",
        "Friend requests & presence",
        "Admin dashboard",
      ],
      github: "https://github.com/pn-dev-in/ChatFlow",
      demo: "https://chat-flow-eta-three.vercel.app/login",
    },
    jpcbbank: {
      name: "JPCB Bank",
      desc: "Full-stack banking platform built with CodeIgniter 4. Features admin dashboard, CMS integration, ATM management, customer onboarding, transactions, and secure role-based access.",
      tech: "PHP 8.2+, CodeIgniter 4, MySQL, JavaScript, CSS3, HTML5, REST API, Composer",
      features: [
        "Admin & Super Admin panels",
        "Customer account management",
        "ATM location & status tracking",
        "Transaction processing",
        "CMS for content",
        "Secure authentication (CSRF, XSS filters)",
      ],
      github: "https://github.com/pn-dev-in/jpcb-bank-project",
    },
    servicecrm: {
      name: "ServiceCRM",
      desc: "Multi-tenant SaaS CRM for field service businesses. Job dispatch, technician tracking, invoicing, customer portal, and real-time analytics.",
      tech: "PHP, MySQL, HTML5, CSS3, JavaScript, RBAC, Bootstrap, jQuery, Ajax, PDO",
      features: [
        "Multi-tenant architecture",
        "RBAC (Super Admin, Admin, Manager, Technician, Customer)",
        "Job dispatch board",
        "Automated invoicing (PDF)",
        "Customer portal",
        "Real-time notifications",
      ],
      github: "https://github.com/pn-dev-in",
    },
    jobinsight: {
      name: "JobInsightPortal",
      desc: "Responsive job exploration platform with job search UI, career insights dashboard, application tracking, and recruiter contact forms.",
      tech: "HTML5, CSS3, JavaScript (ES6+), Responsive Design, Bootstrap/Tailwind",
      features: [
        "Fully responsive",
        "Job search with filters",
        "Career insights dashboard",
        "Application tracking system",
        "Article/resources section",
        "Contact/inquiry forms",
      ],
      github: "https://github.com/pn-dev-in/JobInsightPortal",
      demo: "https://pn-dev-in.github.io/JobInsightPortal/",
    },
  },
  skills: {
    "AI/ML":
      "Python, TensorFlow, PyTorch, HuggingFace, BERT, Whisper, LangChain, RAG, OpenCV, MediaPipe, scikit-learn",
    Cloud:
      "AWS (Cloud Practitioner), Azure (AZ-900), EC2, S3, Lambda, Azure Functions, Render, Vercel",
    DevOps: "Docker, Git, GitHub Actions, CI/CD, Linux, Nginx",
    Backend: "Django, Flask, FastAPI, Node.js, REST APIs, Socket.IO",
    Frontend: "React, Next.js, TypeScript, JavaScript, Tailwind CSS, Streamlit",
    Databases: "PostgreSQL, MySQL, MongoDB, Redis, ChromaDB (Vector DB)",
  },
  experience: [
    "Software Developer Intern at JBB Technologies (June 2026 – present): Building scalable full-stack apps, AI features, cloud platforms.",
    "R&D Intern at Encrypta (Oct 2025 – Jan 2026): Browser extension development, UI/UX improvements, documentation for v1.1.3.",
    "Event Coordinator at Training & Placement Cell, MIT Chh. Sambhajinagar (May 2025 – Nov 2025): Managed campus drives, workshops, and recruiter relations.",
  ],
  certifications: [
    "AWS Cloud Practitioner",
    "Cloud Computing (NPTEL IIT)",
    "AI & ML Honors",
    "Foundations of Cybersecurity (Google)",
    "Smart India Hackathon 2025 Participant",
  ],
};

// Helper: find best matching project
function findProject(query) {
  const q = query.toLowerCase();
  if (q.includes("voice") || q.includes("pilot") || q.includes("jarvis"))
    return "voicepilot";
  if (
    q.includes("talent") ||
    q.includes("match") ||
    q.includes("resume") ||
    q.includes("ats")
  )
    return "talentmatch";
  if (
    q.includes("pose") ||
    q.includes("track") ||
    q.includes("fitness") ||
    q.includes("workout") ||
    q.includes("exercise")
  )
    return "posetrack";
  if (
    q.includes("fin") ||
    q.includes("pilot") ||
    q.includes("finance") ||
    q.includes("budget") ||
    q.includes("money")
  )
    return "finpilot";
  if (
    q.includes("chat") ||
    q.includes("flow") ||
    q.includes("messaging") ||
    q.includes("socket") ||
    q.includes("whatsapp")
  )
    return "chatflow";
  if (q.includes("jpcb") || q.includes("bank") || q.includes("banking"))
    return "jpcbbank";
  if (q.includes("service") || q.includes("crm") || q.includes("field service"))
    return "servicecrm";
  if (
    q.includes("job") ||
    q.includes("insight") ||
    q.includes("career") ||
    q.includes("portal")
  )
    return "jobinsight";
  return null;
}

// Main answer generator
function getBotResponse(userMessage) {
  const msg = userMessage.toLowerCase();

  // Greeting
  if (msg.match(/^(hi|hello|hey|greetings)/)) {
    return "Hello! I'm Pravesh's portfolio assistant. Ask me about any of his projects (VoicePilot AI, TalentMatch AI, PoseTrack AI, FinPilot, ChatFlow, JPCB Bank, ServiceCRM, JobInsightPortal), his tech stack, experience, or how to contact him.";
  }

  // Project queries
  const projKey = findProject(msg);
  if (projKey) {
    const p = portfolioData.projects[projKey];
    let response = `**${p.name}** – ${p.desc}\n\n**Tech Stack:** ${p.tech}\n\n**Key Features:**\n`;
    p.features.forEach((f) => {
      response += `• ${f}\n`;
    });
    if (p.github) response += `\n🔗 GitHub: ${p.github}`;
    if (p.demo) response += `\n🌐 Live Demo: ${p.demo}`;
    return response;
  }

  // Skills
  if (
    msg.includes("skill") ||
    msg.includes("tech stack") ||
    msg.includes("technolog")
  ) {
    let resp = "**Pravesh's Technology Stack:**\n";
    for (const [cat, tech] of Object.entries(portfolioData.skills)) {
      resp += `\n**${cat}:** ${tech}`;
    }
    return resp;
  }

  // Experience
  if (
    msg.includes("experience") ||
    msg.includes("intern") ||
    msg.includes("work")
  ) {
    let resp = "**Professional Experience:**\n";
    portfolioData.experience.forEach((exp) => {
      resp += `• ${exp}\n`;
    });
    return resp;
  }

  // Certifications
  if (
    msg.includes("certif") ||
    msg.includes("credential") ||
    msg.includes("achievement")
  ) {
    return (
      "**Certifications & Achievements:**\n• " +
      portfolioData.certifications.join("\n• ")
    );
  }

  // Availability / hiring
  if (
    msg.includes("hire") ||
    msg.includes("available") ||
    msg.includes("open to") ||
    msg.includes("role")
  ) {
    return portfolioData.status + "\n\n" + portfolioData.contact;
  }

  // Contact
  if (
    msg.includes("contact") ||
    msg.includes("email") ||
    msg.includes("linkedin") ||
    msg.includes("github")
  ) {
    return portfolioData.contact;
  }

  // About / general
  if (
    msg.includes("about") ||
    msg.includes("who is") ||
    msg.includes("background")
  ) {
    return portfolioData.about + "\n\n" + portfolioData.status;
  }

  // Default
  return "I can tell you about any of Pravesh's projects: VoicePilot AI, TalentMatch AI, PoseTrack AI, FinPilot, ChatFlow, JPCB Bank, ServiceCRM, JobInsightPortal. Also ask about his tech stack, experience, certifications, or how to contact him.";
}

// Chat UI functions (keep as before)
function addMessage(text, type) {
  const msgs = document.getElementById("chatMessages");
  const div = document.createElement("div");
  div.className = "chat-msg" + (type === "user" ? " user" : "");
  div.innerHTML = `<div class="msg-avatar ${type === "user" ? "user-av" : "ai"}">${type === "user" ? "You" : "AI"}</div><div class="msg-bubble ${type === "user" ? "user-msg" : "ai"}">${text.replace(/\n/g, "<br>")}</div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
}

function addTyping() {
  const msgs = document.getElementById("chatMessages");
  const id = "typing-" + Date.now();
  const div = document.createElement("div");
  div.className = "chat-msg";
  div.id = id;
  div.innerHTML = `<div class="msg-avatar ai">AI</div><div class="msg-bubble ai"><div class="typing"><span></span><span></span><span></span></div></div>`;
  msgs.appendChild(div);
  msgs.scrollTop = msgs.scrollHeight;
  return id;
}

function removeTyping(id) {
  const el = document.getElementById(id);
  if (el) el.remove();
}

async function sendMessage() {
  const input = document.getElementById("chatInput");
  const msg = input.value.trim();
  if (!msg) return;
  input.value = "";
  addMessage(msg, "user");
  const typingId = addTyping();
  // Simulate realistic delay
  setTimeout(
    () => {
      removeTyping(typingId);
      const response = getBotResponse(msg);
      addMessage(response, "ai");
    },
    400 + Math.random() * 400,
  );
}
const form = document.getElementById("contactForm");
const toast = document.getElementById("toast");
const toastText = document.getElementById("toastText");
const toastIcon = document.getElementById("toastIcon");
const btn = document.querySelector(".send-btn");
function showToast(message, type) {
  toast.className = "toast show " + type;
  toastText.textContent = message;
  toastIcon.textContent = type === "success" ? "✅" : "❌";
  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}
form.addEventListener("submit", async (e) => {
  e.preventDefault();
  btn.classList.add("loading");
  btn.innerHTML = "Sending...";
  try {
    const response = await fetch(form.action, {
      method: "POST",
      body: new FormData(form),
      headers: {
        Accept: "application/json",
      },
    });
    if (response.ok) {
      showToast("Message sent successfully!", "success");
      form.reset();
    } else {
      showToast("Failed to send message.", "error");
    }
  } catch {
    showToast("Network error. Try again.", "error");
  }
  btn.classList.remove("loading");
  btn.innerHTML = "Send Message";
});

function sendSuggestion(btn) {
  document.getElementById("chatInput").value = btn.textContent;
  sendMessage();
}

// ─── ARCH TABS ─────────────────────────────────────────────────────
function switchArch(id, btn) {
  document
    .querySelectorAll(".arch-diagram")
    .forEach((d) => d.classList.remove("active"));
  document
    .querySelectorAll(".arch-tab")
    .forEach((t) => t.classList.remove("active"));
  document.getElementById(id).classList.add("active");
  btn.classList.add("active");
}

// ─── MODALS ────────────────────────────────────────────────────────
function openModal(id) {
  document.getElementById("modal-" + id).classList.add("open");
  document.body.style.overflow = "hidden";
}
function closeModalById(id) {
  document.getElementById(id).classList.remove("open");
  document.body.style.overflow = "";
}
function closeModal(event) {
  if (event.target === event.currentTarget) {
    event.currentTarget.classList.remove("open");
    document.body.style.overflow = "";
  }
}
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-overlay.open").forEach((m) => {
      m.classList.remove("open");
      document.body.style.overflow = "";
    });
  }
});

// ─── SCROLL REVEAL ─────────────────────────────────────────────────
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add("visible"), i * 60);
      }
    });
  },
  { threshold: 0.08, rootMargin: "0px 0px -40px 0px" },
);
document.querySelectorAll(".fade-up").forEach((el) => observer.observe(el));

// ─── THEME TOGGLE ─────────────────────────────────────────────────────────
function applyTheme(isDark) {
  if (isDark) {
    document.documentElement.removeAttribute("data-theme");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
  const toggle = document.getElementById("themeToggle");
  if (toggle) toggle.setAttribute("aria-checked", isDark ? "false" : "true");
  localStorage.setItem("pn-theme", isDark ? "dark" : "light");
}

function toggleTheme() {
  const isCurrentlyDark = !document.documentElement.hasAttribute("data-theme");
  applyTheme(!isCurrentlyDark);
}

// Restore saved theme on load
(function () {
  const saved = localStorage.getItem("pn-theme") || "dark";
  applyTheme(saved !== "light");
})();

// ─── COUNTER ANIMATION ─────────────────────────────────────────────
const counterObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const el = entry.target;
        const target = parseFloat(el.dataset.target);
        const isInt = el.dataset.int === "true";
        const duration = 1400;
        const start = performance.now();
        const animate = (now) => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const val = target * eased;
          el.textContent = isInt ? Math.round(val) : val.toFixed(1);
          if (progress < 1) requestAnimationFrame(animate);
        };
        requestAnimationFrame(animate);
        counterObserver.unobserve(el);
      }
    });
  },
  { threshold: 0.5 },
);
document
  .querySelectorAll(".counter")
  .forEach((el) => counterObserver.observe(el));
function toggleMobileMenu() {
  document.getElementById("mobileMenu").classList.toggle("active");
}
function closeMobileMenu() {
  document.getElementById("mobileMenu").classList.remove("active");
}
document.addEventListener("click", function (e) {
  const menu = document.getElementById("mobileMenu");
  const btn = document.querySelector(".mobile-menu-btn");
  if (!menu.contains(e.target) && !btn.contains(e.target)) {
    menu.classList.remove("active");
  }
});
// Back to Top functionality
const backToTopBtn = document.getElementById("backToTopBtn");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    backToTopBtn.classList.add("show");
  } else {
    backToTopBtn.classList.remove("show");
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
