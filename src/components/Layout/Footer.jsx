import { MdEmail } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDiscord, FaInstagram } from "react-icons/fa";
import { SiSubstack } from "react-icons/si";

export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/10 text-white/80 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
        {/* Left Section - Identity */}
        <div className="flex flex-col">
          <p className="text-sm font-light text-white/60">Made with ❤️ in Stockholm</p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-6 flex-wrap justify-center md:justify-start">
             <a
            href="mailto:joshjoelng@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-[#3b82f6] transition-colors duration-300"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://github.com/joshuauaua"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-[#3b82f6] transition-colors duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/joshuauaua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-[#3b82f6] transition-colors duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://discord.com/users/769115419692105759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-[#3b82f6] transition-colors duration-300"
            aria-label="Discord"
          >
            <FaDiscord />
          </a>
          <a
            href="https://sonicassembly.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-[#3b82f6] transition-colors duration-300"
            aria-label="Substack"
          >
            <SiSubstack />
          </a>
          <a
            href="https://www.instagram.com/joshuauaua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl md:text-2xl hover:text-[#3b82f6] transition-colors duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
       
        </div>
      </div>
    </footer>
  );
}