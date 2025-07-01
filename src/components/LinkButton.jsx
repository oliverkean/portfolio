export default function LinkButton({ name, link }) {
  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="bg-purple-950 hover:bg-purple-900 text-white px-3 py-2 rounded-full font-medium transition-colors"
    >
      {name}
    </a>
  );
}
