import { getProject } from "@/app/utils"


const ProjectId = ({params}) => {

  const projectDetails = getProject(Number(params.id))
  const {image, site, repo} = projectDetails


  return (
    <section  className="">
      <header>
            <img src="" alt="name" />
            <nav>
                <a href="/">Back</a>
            </nav>
        </header>


      <section className=" grid grid-cols-2 gap-10 border rounded-lg p-4 bg-gray-200">
        <div className="rounded border p-2 bg-white">
          <h1>Project Title</h1>
          <p>Summary of what the project is.(purpose of the website)</p>
          <p>my role: development of a design file to functional web app. Collaborated with product designer and backend developers.</p>
          <div>
            <p>technologies used are:</p>
            <ul>
              <li>mdbm REST Api</li>
              <li>Ajax</li>
              <li>Tailwindcss</li>
            </ul>
          </div>
        </div>

        <div className="rounded border p-2">
          <figure>
          <img src={image} alt="cover image" className="w-full h-full object-cover" />
            <figcaption>
            <a href={site??""} target="_blank">live site</a>
            <a href={repo??""} target="_blank">Githun repo</a>
            </figcaption>
          </figure>
        </div>
      </section>

      <section>
        <h2>purpose and goal</h2>
      </section>
      <section>
        <h2>spotlight</h2>
      </section>
      <section>
        <h2>lesson learned</h2>
      </section>


    </section>
  )
}

export default ProjectId