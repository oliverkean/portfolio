import CONSTANTS from "../../constants/constants";
import Introduction from "../../sections/Home/components/Introduction";
import Description from "../../sections/Home/components/Description";

export default function Home() {
  return (
    <section id="" className="w-full px-6 py-16 pt-20 md:pt-32 flex items-center bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row justify-between items-center gap-8 max-w-7xl mx-auto w-full">
        <Introduction name={CONSTANTS.NAME} role={CONSTANTS.FULL_STACK} />
        <Description name={CONSTANTS.NAME} />
      </div>
    </section>
  );
}
