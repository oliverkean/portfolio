import SOCIAL_LINK from "../constants/social_links";

function Footer() {
  return (
    <footer className="text-gray-80 py-6 mt-4">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Oliver Kean Palgue. All rights reserved.
        </p>
        <div className="flex gap-5">
          {SOCIAL_LINK.map(({ name, url, icon: Icon }) => (
            <a
              key={name}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-400 transition flex items-center gap-2"
            >
              <Icon className="text-lg" />
              <span className="hidden sm:inline">{name}</span>
            </a>
          ))}
          
          <div> 
            <a
            href="mailto:oliverpalgue@example.com"
            className="ml-2 hover:text-purple-400 transition"
          >
             oliverpalgue@gmail.com
          </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
