import React, { useState, useEffect } from 'react';
import CardWork from '../cards/cardWork';
import data from '../data/data.json';



const PortfolioSection = ({ type }) => {
  const [projects, setProjects] = useState(data.projects);
  const [filter, setFilter] = useState('');
  const [filterTag, setFilterTag] = useState(1);  

  useEffect(() => {
    if (type === 2) {
      setProjects(data.blog);
    }    
  }, [type]);


  const filteredProjects = projects.filter(project =>{    
    if (filterTag === "All") {
      return project.title.toLowerCase().includes(filter.toLowerCase());
    }
    if (filterTag !== 1) {
      return project.tags.includes(filterTag);
    } 
    return project.title.toLowerCase().includes(filter.toLowerCase());
  });

  return (
    <section className="my-16 w-full">
      <div className='flex  items-center flex-col'>
        <h2 className=" mb-5 text-5xl text-blue-900 font-bold text-center">
          {type === 1 ? 'Projects' : 'Blog'}
        </h2>
        <p className="text-center text-gray-500 mb-9 w-1/2 max-sm:w-full">
          {type === 1
            ? 'Throughout my career, I have had the opportunity to participate in a variety of challenging and exciting projects across different industries and technologies. Each project has been an opportunity to learn, innovate, and exceed expectations.'
            : 'Here are some of the blog posts I have written.'
          }
        </p>
        <div className="flex justify-center">
          <input
            id="search"
            className=" text-blue-900 shadow shadow-blue-300   bg-transparent border border-[#0c48807a] rounded-lg px-4"
            type="text"  
            placeholder="Search"          
            value={filter}
            onChange={e => setFilter(e.target.value)}
          />
        </div>
      </div>
      <br />
      <div className="bg-transparent w-full flex justify-end mb-3">
        <select
          id="carSelect"
          className=" bg-[#103d6a] text-blue-100 text-center rounded-md "
          value={filterTag}
          onChange={e => setFilterTag(e.target.value)}
        >
          <option value="All">All</option>
          <option value="React">React</option>
          <option value="Java">Java</option>
          <option value=".NET">.NET</option>
          <option value="Typescript">Typescript</option>
          <option value="Python">Python</option>
        </select>
      </div>
      <section id="projects" className="grid grid-cols-2 max-sm:grid-cols-1 gap-5">
        {filteredProjects.map((item, index) => {
          let i = index + 1;
          return (
            <CardWork
              key={i}
              id={i}
              title={item.title}
              body={item.description}
              image={item.image}
              url={item.link}
              tags={item.tags}
            />
          );
        })}

        {filteredProjects.length === 0 && (
          <p className="w-[960px] max-sm:w-full max-w-6xl text-center text-gray-500">
            No projects found with the name "{filter}".
          </p>
        )}
      </section>
    </section>
  );
};

export default PortfolioSection;