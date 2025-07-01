export default function Header({ title }) {
  return (
    <div className="text-center mb-8">
      <h1 className="text-2xl font-bold text-purple-900 dark:text-purple-400">{title}</h1>
    </div>
  );
}
