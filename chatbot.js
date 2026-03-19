(function () {
  "use strict";

  // --- Profile Data ---
  const PROFILE = {
    name: "Nwe Thiri May",
    tagline: "ML Engineering & Data Science",
    bio: "Recent Computer Science graduate with hands-on experience building ML pipelines and deploying models in production. Proven ability to design end-to-end data science solutions from processing to deployment.",
    education: [
      {
        degree: "B.Sc. Computer Science (Digital Business and Data Science)",
        school: "University of Europe for Applied Science",
        place: "Potsdam, Germany",
        year: "2025",
      },
      {
        degree: "B.Sc. Chemistry",
        school: "Yangon University of Distance Education",
        place: "Yangon, Myanmar",
        year: "2009",
      },
    ],
    skills:
      "ML pipelines, NLP, Sentiment Analysis, Python (Pandas, NumPy, Scikit-learn, TensorFlow, PyTorch), SQL, Tableau, Git, API development, Agile, Jira",
    softSkills:
      "Communication, teamwork, problem-solving, adaptability, time management, attention to detail, cross-cultural collaboration",
    languages: "English (Business), German (B1), Burmese (Mother tongue)",
    experience: [
      {
        role: "Junior Software Engineer",
        company: "TechHive Innovation",
        location: "Bangkok, Thailand (Remote from Berlin)",
        period: "May 2025 – Present",
        desc: "Developing websites, backend systems, and APIs. Building CheckIn mobile app with Agile, Git, and clean code practices.",
      },
      {
        role: "Data Analysis Intern",
        company: "New Vision Art & Science Institute",
        location: "Yangon, Myanmar (Remote)",
        period: "Sep 2024 – Feb 2025",
        desc: "ETL pipelines (50,000+ records daily), statistical analysis, 8 Tableau dashboards, customer segmentation—contributing to 15% revenue growth.",
      },
      {
        role: "General Manager",
        company: "New Vision Art & Science Institute",
        period: "2007 – 2024",
      },
    ],
    projects: [
      {
        name: "Sentiment Analysis on Amazon Reviews",
        badge: "Bachelor Thesis 2025",
        desc: "Sentiment analysis system using VADER and RoBERTa on 560,000+ customer reviews. Automated extraction and preprocessing; compared model performance (RoBERTa F1 0.85 vs VADER 0.77). Documented in a 295-page thesis.",
        url: "https://github.com/May-NweThiri/Bachelor-Thesis-A-Comparative-Study-of-RoBERTa-and-VADER-",
      },
      {
        name: "YouTube Channel Data Analysis: DamiLee",
        desc: "Analyzed 140 videos with Python (Pandas, Matplotlib, WordCloud) to uncover engagement patterns. Statistical analysis on view counts and metrics (2020–2023); k-means and unsupervised learning for optimal posting times.",
        url: "https://github.com/May-NweThiri/Analyzing-and-visualizing-data-from-YouTube-",
      },
      {
        name: "CheckIn Mobile Application",
        badge: "In development",
        desc: "End-to-end product development with Agile and Git. Clean code, code reviews, and testing; coordinating with the team for feature feasibility and quality delivery.",
      },
    ],
    contact: {
      location: "Berlin, Germany",
      email: "thiri.jewel.14@gmail.com",
      phone: "+49 176 84619518",
      linkedin: "https://www.linkedin.com/in/nwe-thiri-may-403589174/",
      github: "https://github.com/May-NweThiri",
    },
    openTo:
      "Tech Product Management, Software Engineering, Data Science & ML Engineering",
  };

  const GREETING =
    "Hi! I'm here to answer questions about Nwe Thiri May's profile. You can ask about her experience, projects, technical and soft skills, education, or how to get in touch.";
  const FALLBACK =
    "I can only answer questions about Nwe Thiri May's profile. Try asking about her experience, projects, skills, soft skills, education, or how to contact her.";

  // --- Helper Functions ---
  function normalize(s) {
    return (s || "").toLowerCase().replace(/\s+/g, " ").trim();
  }

  function hasAny(text, keywords) {
    const t = normalize(text);
    return keywords.some((k) => t.includes(k));
  }

  function getReply(userText) {
    const q = normalize(userText);
    if (!q) return FALLBACK;

    if (hasAny(q, ["who is", "about", "bio", "introduce"])) {
      return `${PROFILE.name} is a ${PROFILE.tagline} professional. ${PROFILE.bio} She's based in ${PROFILE.contact.location} and open to roles in ${PROFILE.openTo}.`;
    }

    if (
      hasAny(q, [
        "education",
        "degree",
        "study",
        "university",
        "college",
        "graduate",
        "bachelor",
      ])
    ) {
      return (
        "Her education:\n\n• " +
        PROFILE.education
          .map((e) => `${e.degree} from ${e.school}, ${e.place} (${e.year})`)
          .join("\n• ")
      );
    }

    if (
      hasAny(q, ["soft skill", "interpersonal", "communication", "teamwork"])
    ) {
      return `Her soft skills include: ${PROFILE.softSkills}.`;
    }

    if (
      hasAny(q, [
        "skill",
        "tech",
        "technology",
        "programming",
        "python",
        "ml",
        "machine learning",
        "tools",
      ])
    ) {
      return `Her technical skills include: ${PROFILE.skills}. She also speaks ${PROFILE.languages}.`;
    }

    if (
      hasAny(q, ["experience", "job", "work", "career", "role", "position"])
    ) {
      return (
        "Her experience:\n\n" +
        PROFILE.experience
          .map((e) => {
            let line = `• ${e.role} at ${e.company}`;
            if (e.location) line += ` (${e.location})`;
            line += ` — ${e.period}.`;
            if (e.desc) line += ` ${e.desc}`;
            return line;
          })
          .join("\n\n")
      );
    }

    if (hasAny(q, ["project", "thesis", "sentiment", "youtube", "checkin"])) {
      return (
        "Her featured projects:\n\n" +
        PROFILE.projects
          .map((p) => {
            let line = `• ${p.name}`;
            if (p.badge) line += ` (${p.badge})`;
            line += `\n  ${p.desc}`;
            if (p.url) line += `\n  Link: ${p.url}`;
            return line;
          })
          .join("\n\n")
      );
    }

    if (hasAny(q, ["phone", "number", "call"]))
      return `Her phone number is ${PROFILE.contact.phone}.`;
    if (hasAny(q, ["email", "mail"]))
      return `Her email is ${PROFILE.contact.email}.`;
    if (hasAny(q, ["linkedin"]))
      return `Her LinkedIn: ${PROFILE.contact.linkedin}`;
    if (hasAny(q, ["github"])) return `GitHub: ${PROFILE.contact.github}`;
    if (hasAny(q, ["location", "city", "based"]))
      return `She's based in ${PROFILE.contact.location}.`;
    if (hasAny(q, ["contact", "reach", "hire"])) {
      return `You can reach ${PROFILE.name} here:\n• Location: ${PROFILE.contact.location}\n• Email: ${PROFILE.contact.email}\n• Phone: ${PROFILE.contact.phone}\n• LinkedIn: ${PROFILE.contact.linkedin}\n• GitHub: ${PROFILE.contact.github}\n\nShe's open to roles in ${PROFILE.openTo}.`;
    }

    if (hasAny(q, ["hi", "hello", "hey", "start", "help"])) return GREETING;
    if (hasAny(q, ["thank", "thanks", "thx"]))
      return "You're welcome! If you have more questions about her profile, just ask.";

    return FALLBACK;
  }

  // --- UI Elements ---
  const panel = document.getElementById("chatbotPanel");
  const toggle = document.getElementById("chatbotToggle");
  const closeBtn = document.getElementById("chatbotClose");
  const mainContent = document.querySelector("main");
  const inputEl = document.getElementById("chatbotInput");
  const messagesEl = document.getElementById("chatbotMessages");
  const sendBtn = document.getElementById("chatbotSend");

  // --- Chat Functions ---
  function appendMessage(role, text) {
    const div = document.createElement("div");
    div.className = `chatbot-msg chatbot-msg-${role}`;
    div.textContent = text;
    messagesEl.appendChild(div);
    messagesEl.scrollTop = messagesEl.scrollHeight;
  }

  function sendMessage() {
    const text = inputEl.value.trim();
    if (!text) return;
    inputEl.value = "";
    appendMessage("user", text);
    const reply = getReply(text);
    appendMessage("bot", reply);
  }

  function openChat() {
    panel.hidden = false;
    panel.classList.add("is-open");
    mainContent.setAttribute("aria-hidden", "true");
    mainContent.setAttribute("inert", "");
    toggle.setAttribute("aria-label", "Close profile assistant");
    inputEl.focus();
    if (messagesEl.children.length === 0) appendMessage("bot", GREETING);
  }

  function closeChat() {
    panel.hidden = true;
    panel.classList.remove("is-open");
    mainContent.removeAttribute("aria-hidden");
    mainContent.removeAttribute("inert");
    toggle.setAttribute("aria-label", "Open profile assistant");
    toggle.focus();
  }

  // --- Event Listeners ---
  toggle.addEventListener("click", () => {
    panel.classList.contains("is-open") ? closeChat() : openChat();
  });

  closeBtn.addEventListener("click", closeChat);
  sendBtn.addEventListener("click", sendMessage);

  inputEl.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      sendMessage();
    }
  });
})();
