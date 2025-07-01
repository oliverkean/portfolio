import SOCIAL_LINK from "../constants/social_links";

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 py-8 pt-10 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-7xl mx-auto px-4 flex flex-col gap-6 md:flex-row md:justify-between md:items-center text-sm">
        <p className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Oliver Kean Palgue. All rights reserved.
        </p>

        <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-center sm:text-left">
          <div className="flex justify-center gap-5">
            {SOCIAL_LINK.map(({ name, url, icon: Icon }) => (
              <a
                key={name}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-purple-400 transition flex items-center gap-1"
              >
                <Icon className="text-lg" />
                <span className="hidden sm:inline">{name}</span>
              </a>
            ))}
          </div>

          <div className="text-sm text-center sm:text-left">
            <span className="block sm:inline font-medium text-gray-600 dark:text-gray-400">
              Contact me:&nbsp;
            </span>
            <a
              href="mailto:oliverpalgue@example.com"
              className="text-purple-700 dark:text-purple-400 hover:underline break-all"
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
