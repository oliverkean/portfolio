import EXPERIENCE from "../../constants/experience";
export default function Experience() {
  return (
    <section id="experiences" className="w-full h-full p-18 shadow-md bg-gray-50">
      <div className="text-center mb-10 mt-10">
        <h1 className="text-2xl font-bold text-purple-900">My Experiences</h1>
      </div>
      <div className="flex justify-between gap-2">
        <ol className="relative border-s border-gray-600">
          {EXPERIENCE.map(
            ({ company, date, address, role, description }, index) => (
              <li className="mb-10 ms-6" key={index}>
                <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-800 rounded-full -start-3 ring-8 ring-white"></span>
                <div className="border border-gray-400 p-2 rounded-md">
                  <p className="text-gray-500 text-sm">{date}</p>
                  <div className="flex justify-between">
                    <h3 className="text-xl font-bold text-purple-800">
                      {company}
                    </h3>
                    <span className="text-sm text-gray-500 font-normal pr-2">
                      {address}
                    </span>
                  </div>
                  <p className="mb-1 text-gray-700 text-md font-semibold">
                    {role}
                  </p>
                  <p className="mb-4 text-base text-md font-normal text-gray-600">
                    {description}
                  </p>
                </div>
              </li>
            )
          )}
        </ol>
      </div>
    </section>
  );
}
