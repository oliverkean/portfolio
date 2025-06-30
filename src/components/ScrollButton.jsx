export default function ScrollButton({name, link}) {
    return (
        <a
            href={link}
            className="bg-purple-950 hover:bg-purple-900 text-white px-3 py-2 rounded-full font-medium transition-colors"
          >
            {name}
        </a>
    )
}