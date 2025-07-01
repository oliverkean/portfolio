import SOCIAL_LINKS from "../../../constants/social_links";

function SocialLinks() {
  return (
    <ul className="flex gap-3 mt-3">
      {SOCIAL_LINKS.map(({ name, url, icon: Icon }, index) => (
        <li key={index}>
          <a
            href={url}
            aria-label={name}
            className="text-gray-600 dark:text-gray-300 hover:text-purple-800 dark:hover:text-purple-400 transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon size={24} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
