import resume from '../../../../resume.pdf';
import LinkButton from '../../../components/LinkButton';

export default function Description({ name }) {
  return (
    <div className="w-full md:w-1/2 text-justify">
      <p className="text-gray-700 dark:text-gray-200 mb-6">
        Hi! I’m{" "}
        <span className="text-purple-900 dark:text-purple-400 font-bold text-lg">
          {name}
        </span>
        , a full stack developer who enjoys creating websites and
        applications that help provide solutions. I’ve worked on
        different kinds of projects and enjoy both frontend and backend development.
        I’m always learning new things and love finding simple solutions to real-world problems.
        I also enjoy collaborating with others and building functional, accessible websites.
      </p>
      <div className="flex justify-end">
        <LinkButton name="View Resume" link={resume} />
      </div>
    </div>
  );
}
