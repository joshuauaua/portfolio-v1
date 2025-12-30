export default function Footer() {
  return (
    <footer className="w-full bg-neutral-950 border-t border-white/10 text-white/80 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
        {/* Left Section - Identity */}
        <div className="flex flex-col gap-2">
          <h2 className="text-xl font-bold tracking-wider text-white">JOSHUA NG</h2>
          <p className="text-sm font-light text-white/60">Stockholm, Sweden</p>
          <a
            href="mailto:joshjoelng@gmail.com"
            className="text-sm font-light text-white/60 hover:text-white transition-colors duration-300"
          >
            joshjoelng@gmail.com
          </a>
        </div>

        {/* Right Section - Social Links */}
        <div className="flex gap-6 flex-wrap">
          <a
            href="https://github.com/joshuauaua"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-white transition-colors duration-300"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/joshuauaua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-white transition-colors duration-300"
          >
            LinkedIn
          </a>
          <a
            href="https://discord.com/users/769115419692105759"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-white transition-colors duration-300"
          >
            Discord
          </a>
          <a
            href="https://sonicassembly.substack.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-white transition-colors duration-300"
          >
            Substack
          </a>
          <a
            href="https://www.instagram.com/joshuauaua/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-white transition-colors duration-300"
          >
            Instagram
          </a>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="max-w-6xl mx-auto mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-white/40">
        <p>&copy; {new Date().getFullYear()} Joshua Ng. All rights reserved.</p>
        <p className="mt-2 md:mt-0">Made with ❤️ in Stockholm</p>
      </div>
    </footer>
  );
}