import EXPERIENCE from "../../constants/experience";
import { IoCalendarClear } from "react-icons/io5";
import { FaLocationDot } from "react-icons/fa6";

export default function Experience() {
  return (
    <section
      id="experiences"
      className="w-full h-full px-4 py-12 shadow-md bg-gray-50"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10 mt-15">
          <h1 className="text-2xl font-bold text-purple-900">My Experiences</h1>
        </div>
        <div className="flex justify-between gap-2">
          <ol className="relative border-s border-gray-600">
            {EXPERIENCE.map(
              ({ company, date, address, role, description }, index) => (
                <li className="mb-10 ms-6" key={index}>
                  <span className="absolute flex items-center justify-center w-6 h-6 bg-purple-800 rounded-full -start-3 ring-8 ring-white"></span>
                  <div className="border border-gray-300 p-4 rounded-md bg-white shadow-sm">
                    <p className="text-gray-500 text-sm mb-1 flex items-center gap-1.5">
                      <span><IoCalendarClear />
</span>
                      {date}
                    </p>
                    <div className="flex justify-between flex-wrap">
                      <h3 className="text-lg font-bold text-purple-800">
                        {company}
                      </h3>
                      <span className="text-sm text-gray-500 font-normal flex gap-1.5 items-center">
                        <span>
                          <FaLocationDot />
                        </span>
                        {address}
                      </span>
                    </div>
                    <p className="mb-1 text-gray-700 text-md font-semibold">
                      {role}
                    </p>
                    <p className="text-base text-gray-600">{description}</p>
                  </div>
                </li>
              )
            )}
          </ol>
        </div>
      </div>
    </section>
  );
}
