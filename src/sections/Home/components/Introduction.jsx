import SocialLinks from "./SocialLinks"

function Introduction({name, role}){
    return (
        <div className="w-1/2">
          <div>
            <h1 className="text-6xl text-purple-900 font-bold mr-3">
              {name}
            </h1>
            <p className="text-2xl text-gray-600 mt-1.5 mb-2">
              {role}
            </p>
            <SocialLinks/>
          </div>
        </div>
    )
}

export default Introduction;