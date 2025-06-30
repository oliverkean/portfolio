import LINKS from '../constants/links'
import NAVLINK from '../components/Link'
export default function Navbar() {
  return (
    <nav className="z-100 w-full flex fixed justify-center items-center px-16 py-8 border-b border-gray-200 bg-white shadow-sm">
      <ul className="flex gap-8">
        {LINKS.map(({name, link}, index) => 
          <li key={index}>
            <NAVLINK name={name} link={link}/>
          </li>        
        )}
      </ul>
    </nav>
  );
}