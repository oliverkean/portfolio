import ScrollButton from '../../../components/ScrollButton'

export default function Description({name}){
    return (
        <div className="w-1/2 text-justify">
          <p className="text-gray-700 mb-5">
            Hi! I’m{" "}
            <span className="text-purple-900 font-bold text-lg">
              {name}
            </span>
            , a full stack developer who enjoys creating websites and
            applications that are helps in providing solutions. I’ve worked on
            different kinds of projects. I use PHP, Laravel, Vue.js, WordPress,
            and MySQL to build my projects, and I like working on both the
            frontend and the backend development. I’m always learning new things
            and love finding simple solutions to real-world problems. I enjoy
            working with others and creating, functional websites.
          </p>
          
          <div className="flex justify-end m-2">
             <ScrollButton name="View my Projects" link="#project"/>
          </div>
        </div>
    )
}