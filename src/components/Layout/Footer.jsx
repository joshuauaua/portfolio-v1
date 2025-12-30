export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/10 text-white/80 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Section - Identity */}
        <div className="flex flex-col gap-2">
          <p className="text-sm font-light text-white/60">Made with ❤️ in Stockholm</p>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-6 flex-wrap">
          <a
            href="https://github.com/joshuauaua"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#3b82f6] transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joshuauaua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#3b82f6] transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://discord.com/users/769115419692105759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#3b82f6] transition-colors duration-300"
          >
            Discord
          </a>
          <a
            href="https://sonicassembly.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#3b82f6] transition-colors duration-300"
          >
            Substack
          </a>
          <a
            href="https://www.instagram.com/joshuauaua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#3b82f6] transition-colors duration-300"
          >
            Instagram
          </a>
          <a
            href="mailto:joshjoelng@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-[#3b82f6] transition-colors duration-300"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}