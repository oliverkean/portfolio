export default function Link({name, link}){
    return (
        <a href={link} className="text-gray-700 hover:text-purple-900 font-medium transition-colors">
            {name}
        </a>
    )
}