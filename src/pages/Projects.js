import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList'

import "../styles/Projects.css"


function Projects() {
  return (
    <div className='projects'>
      <h1>My Personal Projects</h1>
      <div className="projectList">
 {ProjectList.map((project, idx)=>{
  return <ProjectItem id={idx} name ={project.name} image={project.image}/>
 })}
        {/* <ProjectItem name ="Social Media Website" image={Proj1}/>
        <ProjectItem name ="Spotify Clone" image={Proj3}/> */}

      </div>
    </div>
  )
}

export default Projects;