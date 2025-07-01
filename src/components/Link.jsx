export default function Link({ name, link, isActive, onClick }) {
  return (
    <a
      href={link}
      onClick={onClick}
      className={`block py-2 transition-colors font-medium ${
        isActive
          ? "text-purple-900 dark:text-purple-400"
          : "text-gray-700 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-300"
      }`}
    >
      {name}
    </a>
  );
}
