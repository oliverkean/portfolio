export default function LinkButton({ name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-950 dark:bg-purple-800 hover:bg-purple-900 dark:hover:bg-purple-700 text-white px-4 py-2 rounded-full font-medium transition-colors text-sm md:text-base"
    >
      {name}
    </a>
  );
}
