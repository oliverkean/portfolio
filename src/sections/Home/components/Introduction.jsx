import SocialLinks from "./SocialLinks";

function Introduction({ name, role }) {
  return (
    <div className="w-full md:w-1/2">
      <div>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-purple-900 dark:text-purple-400 font-bold mb-2">
          {name}
        </h1>
        <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-3">
          {role}
        </p>
        <SocialLinks />
      </div>
    </div>
  );
}

export default Introduction;
