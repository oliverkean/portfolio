import CONSTANTS from "../../constants/constants";
import Introduction from "../../sections/Home/components/Introduction";
import Description from "../../sections/Home/components/Description";

export default function Home() {
  return (
    <section id="" className="w-full p-18 mt-20 flex items-center">
      <div className="flex justify-between gap-2 max-w-7xl mx-auto">
          <Introduction name={CONSTANTS.NAME} role={CONSTANTS.FULL_STACK}/>
          <Description name={CONSTANTS.NAME}/>
      </div>
    </section>
  );
}

