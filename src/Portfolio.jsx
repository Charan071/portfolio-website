import React, { useEffect, useState, useRef } from "react";
import {
  personalInfo,
  skills,
  projects,
  automationAgents,
  experience,
  education,
  certifications
} from "./portfolioData";

// Import images - these will work when you add the actual image files
// If the images don't exist yet, the app will show placeholders
let profileImage, project1Image, project2Image, project3Image;
try {
  profileImage = new URL('./assets/profile.png', import.meta.url).href;
} catch {
  profileImage = null;
}
try {
  project1Image = new URL('./assets/project1.png', import.meta.url).href;
} catch {
  project1Image = null;
}
try {
  project2Image = new URL('./assets/project2.png', import.meta.url).href;
} catch {
  project2Image = null;
}
try {
  project3Image = new URL('./assets/project3.png', import.meta.url).href;
} catch {
  project3Image = null;
}

const projectImages = [project1Image, project2Image, project3Image];

// Typewriter component
function Typewriter({ 
  phrases = personalInfo.titles, 
  typingSpeed = 100,
  deletingSpeed = 50, 
  pauseAfterTyping = 1500,
  pauseAfterDeleting = 500 
}) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => {
    const id = setInterval(() => setBlink((b) => !b), 500);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    if (index >= phrases.length) setIndex(0);
    if (!isDeleting && subIndex === phrases[index].length) {
      const t = setTimeout(() => setIsDeleting(true), pauseAfterTyping);
      return () => clearTimeout(t);
    }
    if (isDeleting && subIndex === 0) {
      setIsDeleting(false);
      setIndex((i) => (i + 1) % phrases.length);
      const t = setTimeout(() => {}, pauseAfterDeleting);
      return () => clearTimeout(t);
    }
    const timeout = setTimeout(() => {
      setSubIndex((s) => s + (isDeleting ? -1 : 1));
    }, isDeleting ? deletingSpeed : typingSpeed);
    return () => clearTimeout(timeout);
  }, [subIndex, index, isDeleting, phrases, typingSpeed, deletingSpeed, pauseAfterTyping, pauseAfterDeleting]);

  return (
    <span className="inline-block">
      {phrases[index].substring(0, subIndex)}
      <span className="ml-1" style={{ opacity: blink ? 1 : 0 }}>|</span>
    </span>
  );
}

// Animated section wrapper
function AnimatedSection({ id, children, className = "" }) {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setIsVisible(true);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  return (
    <section
      id={id}
      ref={sectionRef}
      className={`transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
    >
      {children}
    </section>
  );
}

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleMove = (e) => {
      const x = e.clientX / window.innerWidth - 0.5;
      const y = e.clientY / window.innerHeight - 0.5;
      document.querySelectorAll("[data-depth]").forEach((el) => {
        const depth = parseFloat(el.getAttribute("data-depth")) || 0;
        const tx = x * depth * 12;
        const ty = y * depth * 12;
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) rotateY(${x * depth * 3}deg)`;
      });
      const glow = document.getElementById("cursor-glow");
      if (glow) {
        glow.style.left = `${e.clientX - 64}px`;
        glow.style.top = `${e.clientY - 64}px`;
      }
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    const prev = document.documentElement.style.scrollBehavior;
    document.documentElement.style.scrollBehavior = "smooth";
    return () => {
      window.removeEventListener("scroll", onScroll);
      document.documentElement.style.scrollBehavior = prev || "";
    };
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.35, rootMargin: "-30% 0px -30% 0px" }
    );
    sections.forEach((s) => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-black text-gray-100 antialiased">
      <div id="cursor-glow" className="pointer-events-none fixed w-40 h-40 rounded-full opacity-0 mix-blend-screen transition-opacity duration-200" style={{ background: "radial-gradient(circle at 30% 30%, rgba(99,102,241,0.12), rgba(34,211,238,0.06))" }} />

      <header className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? "backdrop-blur-lg bg-white/8 py-2" : "backdrop-blur-lg bg-white/6 py-4"}`}>
        <div className="max-w-5xl mx-auto px-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-indigo-500 to-teal-400 rounded-full flex items-center justify-center shadow-md" data-depth="0.9">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2L19 7V17L12 22L5 17V7L12 2Z" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
            <div>
              <h1 className="text-lg font-semibold leading-none">{personalInfo.name}</h1>
              <p className="text-xs text-gray-400">{personalInfo.tagline}</p>
            </div>
          </div>
          <nav className="space-x-6 text-sm">
            {["about", "skills", "projects", "experience", "contact"].map((id) => (
              <a key={id} href={`#${id}`} className={`relative inline-block py-1 transition-all duration-300 ${activeSection === id ? "text-white font-semibold" : "text-gray-300"} hover:text-white`}>
                <span className="capitalize">{id}</span>
                <span className={`block h-0.5 rounded mt-1 transition-all duration-300 ${activeSection === id ? "bg-indigo-400 w-full" : "bg-transparent w-0"}`} />
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-12">
        <section id="hero-parallax" className="relative grid grid-cols-1 md:grid-cols-3 gap-8 items-center overflow-hidden rounded-2xl p-8 opacity-0 animate-fade-in" style={{ background: "linear-gradient(180deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01))", backdropFilter: "blur(18px)", border: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="absolute inset-0 -z-20 pointer-events-none">
            <div data-depth="0.5" className="absolute w-96 h-96 bg-purple-600/18 rounded-full blur-3xl -left-20 -top-20 animate-float-slow" />
            <div data-depth="0.35" className="absolute w-80 h-80 bg-blue-500/14 rounded-full blur-3xl -right-16 -bottom-10 animate-float" />
            <div data-depth="0.15" className="absolute w-40 h-40 bg-cyan-400/6 rounded-full blur-2xl top-36 right-16 animate-float-slow" />
          </div>
          <div className="md:col-span-2 relative z-10" data-depth="0.02">
            <h2 className="text-3xl md:text-4xl font-extrabold leading-tight"><Typewriter /></h2>
            <p className="mt-4 text-gray-300 max-w-2xl">{personalInfo.tagline_description}</p>
            <div className="mt-6 flex gap-3">
              <a href={personalInfo.resume} className="inline-flex items-center gap-2 bg-white/6 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-2xl text-sm text-white shadow-sm hover:scale-105 transition-transform">Download Resume</a>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white/6 backdrop-blur-sm border border-white/10 px-5 py-3 rounded-2xl text-sm text-white shadow-sm hover:scale-105 transition-transform">Contact me</a>
            </div>
          </div>
          <div className="flex items-center justify-center relative z-10" data-depth="0.25">
            {profileImage ? (
              <div className="w-48 h-48 rounded-2xl overflow-hidden shadow-xl transform transition-all duration-500 hover:scale-105 border-2 border-white/10">
                <img src={profileImage} alt={personalInfo.name} className="w-full h-full object-cover" />
              </div>
            ) : (
              <div className="w-48 h-48 bg-gradient-to-tr from-gray-700 to-gray-800 rounded-2xl flex items-center justify-center shadow-xl transform transition-all duration-500 hover:scale-105">
                <div className="text-center">
                  <svg width="96" height="96" viewBox="0 0 24 24" fill="none" className="mx-auto">
                    <path d="M12 12c2.761 0 5-2.239 5-5s-2.239-5-5-5-5 2.239-5 5 2.239 5 5 5z" stroke="#9CA3AF" strokeWidth="1.5" />
                    <path d="M20 21v-1a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v1" stroke="#9CA3AF" strokeWidth="1.5" />
                  </svg>
                  <p className="mt-2 text-xs text-gray-400">Add profile.jpg</p>
                </div>
              </div>
            )}
          </div>
        </section>

        <AnimatedSection id="about" className="mt-12">
          <h3 className="text-2xl font-semibold">About Me</h3>
          <div className="mt-6 p-6 bg-white/6 backdrop-blur-lg border border-white/8 rounded-lg shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
            <p className="text-gray-300 leading-relaxed">{personalInfo.aboutMe.summary}</p>
            <div className="mt-6">
              <h4 className="text-lg font-semibold mb-3">Key Expertise</h4>
              <ul className="space-y-2">
                {personalInfo.aboutMe.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-3 text-sm text-gray-300 transition-all duration-300 hover:translate-x-1">
                    <svg className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </AnimatedSection>

        <AnimatedSection id="skills" className="mt-12">
          <h3 className="text-2xl font-semibold">Technical Skills</h3>
          <p className="text-gray-300 mt-2">AI / LLM stack, backend & automation, frontend & full-stack, and data engineering tools.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-4 bg-white/6 backdrop-blur-md border border-white/8 rounded-lg shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300">
                <h4 className="font-semibold">{skillGroup.category}</h4>
                <ul className="mt-2 text-sm text-gray-300 space-y-1">
                  {skillGroup.items.map((item, i) => (
                    <li key={i} className="hover:text-indigo-300 transition-colors duration-200">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="projects" className="mt-12">
          <h3 className="text-2xl font-semibold">Projects</h3>
          <p className="text-gray-300 mt-2">A mix of automation agents, RAG systems, AI tools, and full-stack applications.</p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <article key={index} className="p-4 bg-white/6 backdrop-blur-lg border border-white/8 rounded-lg shadow-lg flex flex-col hover:scale-[1.02] hover:shadow-indigo-500/10 transition-all duration-300 group">
                <h4 className="font-semibold group-hover:text-indigo-300 transition-colors duration-300">{project.title}</h4>
                {projectImages[index] ? (
                  <div className="w-full h-32 rounded-lg mt-2 overflow-hidden">
                    <img src={projectImages[index]} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="w-full h-32 bg-gradient-to-br from-gray-700/40 to-gray-800/40 rounded-lg mt-2 flex items-center justify-center">
                    <span className="text-xs text-gray-500">Add project{index + 1}.jpg</span>
                  </div>
                )}
                <p className="text-sm text-gray-300 mt-2 flex-1">{project.description}</p>
                <a href={project.link} target="_blank" rel="noreferrer" className="mt-4 inline-block text-sm underline hover:text-indigo-300 transition-colors duration-300">View on GitHub</a>
              </article>
            ))}
          </div>
          <div className="mt-8 space-y-6">
            {automationAgents.map((agent, index) => (
              <article key={index} className="p-4 bg-white/6 backdrop-blur-lg border border-white/8 rounded-lg shadow-lg hover:shadow-indigo-500/10 hover:translate-x-2 transition-all duration-300">
                <h4 className="font-semibold">{agent.title}</h4>
                <p className="text-sm text-gray-300 mt-2">{agent.description}</p>
                <a href={agent.link} target="_blank" rel="noreferrer" className="mt-3 inline-block text-sm underline hover:text-indigo-300 transition-colors duration-300">GitHub Repo</a>
              </article>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection id="experience" className="mt-12">
          <h3 className="text-2xl font-semibold">Professional Experience</h3>
          <div className="mt-6 space-y-4">
            {experience.map((job, index) => (
              <div key={index} className="p-4 bg-white/6 backdrop-blur-md border border-white/8 rounded-lg shadow-lg hover:shadow-indigo-500/10 hover:translate-x-2 transition-all duration-300">
                <div className="flex justify-between">
                  <div>
                    <h4 className="font-semibold">{job.title} — {job.company}</h4>
                    <p className="text-sm text-gray-300">{job.location} · {job.period}</p>
                  </div>
                  <div className="text-sm text-gray-400">Tools: {job.tools}</div>
                </div>
                <ul className="mt-3 text-sm text-gray-300 list-disc list-inside space-y-1">
                  {job.responsibilities.map((resp, i) => (
                    <li key={i} className="hover:text-indigo-300 transition-colors duration-200">{resp}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </AnimatedSection>

        <AnimatedSection className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-4 bg-white/6 backdrop-blur-md border border-white/8 rounded-lg shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300">
            <h4 className="font-semibold">Education</h4>
            <p className="text-sm text-gray-300 mt-2">{education.degree}, {education.institution} — {education.period}</p>
          </div>
          <div className="p-4 bg-white/6 backdrop-blur-md border border-white/8 rounded-lg shadow-lg hover:shadow-indigo-500/10 hover:scale-[1.02] transition-all duration-300">
            <h4 className="font-semibold">Certifications</h4>
            <ul className="text-sm text-gray-300 mt-2 list-disc list-inside space-y-1">
              {certifications.map((cert, index) => (
                <li key={index} className="hover:text-indigo-300 transition-colors duration-200">{cert}</li>
              ))}
            </ul>
          </div>
        </AnimatedSection>

        <AnimatedSection id="contact" className="mt-12 p-6 bg-white/6 backdrop-blur-md border border-white/8 rounded-lg shadow-lg hover:shadow-indigo-500/10 transition-all duration-300">
          <h3 className="text-2xl font-semibold">Contact</h3>
          <p className="text-gray-300 mt-2">Interested in collaborating or hiring? Send a message or reach out via email or LinkedIn.</p>
          <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <div className="flex items-center gap-2 text-sm mt-1 hover:translate-x-1 transition-transform duration-300">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15A2.25 2.25 0 012.25 17.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15A2.25 2.25 0 002.25 6.75m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.5a2.25 2.25 0 01-2.16 0l-7.5-4.5A2.25 2.25 0 012.25 6.993V6.75"/></svg>
                <a href={`mailto:${personalInfo.contact.email}`} className="underline hover:text-indigo-300 transition-colors duration-300">{personalInfo.contact.email}</a>
              </div>
              <div className="flex items-center gap-2 text-sm mt-3 hover:translate-x-1 transition-transform duration-300">
                <svg className="w-4 h-4 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M2.25 4.5l4.5-1.5L9 6l-3 2.25a14.25 14.25 0 006 6L15 12l3 2.25-1.5 4.5h0A2.25 2.25 0 0114.25 21h-.5C7.31 21 2.25 15.94 2.25 9.75v-.5A2.25 2.25 0 014.5 7.5h0z"/></svg>
                <span>{personalInfo.contact.phone}</span>
              </div>
              <div className="flex items-center gap-2 text-sm mt-3 hover:translate-x-1 transition-transform duration-300">
                <svg className="w-4 h-4 text-indigo-400" viewBox="0 0 24 24" fill="currentColor"><path d="M12 .297a12 12 0 00-3.797 23.4c.6.113.82-.258.82-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416a3.176 3.176 0 00-1.335-1.758c-1.09-.744.084-.729.084-.729a2.52 2.52 0 011.84 1.236 2.564 2.564 0 003.486 1 2.574 2.574 0 01.764-1.616c-2.665-.304-5.466-1.36-5.466-6.053a4.74 4.74 0 011.26-3.293 4.384 4.384 0 01.12-3.245s1.008-.322 3.3 1.26a11.38 11.38 0 016 0c2.285-1.582 3.29-1.26 3.29-1.26a4.38 4.38 0 01.12 3.245 4.74 4.74 0 011.26 3.293c0 4.707-2.807 5.745-5.48 6.043a2.9 2.9 0 01.828 2.247v3.337c0 .325.216.698.825.578A12 12 0 0012 .297z"/></svg>
                <a href={personalInfo.social.github} target="_blank" rel="noreferrer" className="underline hover:text-indigo-300 transition-colors duration-300">github.com/Charan071</a>
              </div>
              <div className="flex items-center gap-2 text-sm mt-3 hover:translate-x-1 transition-transform duration-300">
                <svg className="w-4 h-4 text-indigo-400" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452H17.24v-5.569c0-1.328-.027-3.039-1.852-3.039-1.853 0-2.136 1.445-2.136 2.939v5.669H10.14V9h3.067v1.561h.043c.428-.812 1.472-1.67 3.027-1.67 3.238 0 3.833 2.133 3.833 4.907v6.654zM7.034 7.433a1.77 1.77 0 110-3.539 1.77 1.77 0 010 3.539zM8.616 20.452H5.448V9h3.168v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.27V1.729C24 .774 23.2 0 22.222 0z"/></svg>
                <a href={personalInfo.social.linkedin} target="_blank" rel="noreferrer" className="underline hover:text-indigo-300 transition-colors duration-300">linkedin.com/in/charan-naik-403892294</a>
              </div>
            </div>
            <form className="space-y-3">
              <div>
                <label className="block text-sm text-gray-300">Name</label>
                <input className="mt-1 w-full border rounded px-3 py-2 text-sm bg-transparent text-gray-200 border-gray-700 focus:border-indigo-400 focus:outline-none transition-colors duration-300" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Email</label>
                <input type="email" className="mt-1 w-full border rounded px-3 py-2 text-sm bg-transparent text-gray-200 border-gray-700 focus:border-indigo-400 focus:outline-none transition-colors duration-300" placeholder="your@email.com" />
              </div>
              <div>
                <label className="block text-sm text-gray-300">Message</label>
                <textarea className="mt-1 w-full border rounded px-3 py-2 text-sm bg-transparent text-gray-200 border-gray-700 focus:border-indigo-400 focus:outline-none transition-colors duration-300" rows={4} placeholder="Let's collaborate..."></textarea>
              </div>
              <button type="button" className="inline-block bg-gray-800 text-white px-4 py-2 rounded-lg text-sm hover:bg-gray-700 transition-colors duration-300">Send Message</button>
            </form>
          </div>
        </AnimatedSection>

        <footer className="mt-12 py-6 text-center text-sm text-gray-400">© {new Date().getFullYear()} {personalInfo.name} — Built with React & Tailwind</footer>
      </main>

      <style>{`
        @keyframes float{0%{transform:translateY(0)}50%{transform:translateY(-18px)}100%{transform:translateY(0)}}
        @keyframes float-slow{0%{transform:translateY(0)}50%{transform:translateY(-12px)}100%{transform:translateY(0)}}
        @keyframes fade-in{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}
        .animate-float{animation:float 6s ease-in-out infinite}
        .animate-float-slow{animation:float-slow 10s ease-in-out infinite}
        .animate-fade-in{animation:fade-in 1s ease-out forwards}
        #cursor-glow{opacity:0.9}
      `}</style>
    </div>
  );
}
