import SOCIAL_LINKS from "../../../constants/social_links";

function SocialLinks() {
  return (
    <ul className="flex gap-2 mt-3">
      {SOCIAL_LINKS.map(({ name, url, icon: Icon }, index) => (
        <li key={index}>
          <a href={url} aria-label={name} className="text-gray-600 hover:text-purple-800 transition-colors">
            <Icon size={24} />
          </a>
        </li>
      ))}
    </ul>
  );
}

export default SocialLinks;
