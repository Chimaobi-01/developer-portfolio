"use client"

import { useRouter } from "next/navigation"


const Project = ({title, description, stack, image, id}) => {
    const router = useRouter()

  return (
    <article className="project_item px-8">
        <figure className="">
            <img className="w-full" src={image} alt="project cover" />
            <figcaption>
                <h2 className="font-semibold text-2xl py-5 border-b-3 leading-8">{title}</h2>
            </figcaption>
        </figure>
        <p className="font-light PY-4">{description}</p>
        <ul className="flex gap-x-4 mt-2">
            {
                stack.map(s => (
                    <li key={s}>{s}</li>
                ))
            }
        </ul>
        <div className="flex justify-end pe-6">
        <button 
            className="bg-black/50 text-white text-lg font-normal rounded p-1.5 px-6 hover:bg-black"
            onClick={()=> router.push(`/project/${id}`)}
            >
            see more 
        </button>
        </div>
        
    </article>
  )
}

export default Project