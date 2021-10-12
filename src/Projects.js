import React from 'react'

const Projects = ({datas}) => {
    return (
        <div className='gallery-img'>
            {datas.map((projectData) => {
                const {id, category, img, link} = projectData
                return (
                    <article 
                    key={id}
                    >
                        <a href={link}>
                        <img 
                        src={img} 
                        alt={category}
                        />
                        </a>
                    </article>
                )
            })}
        </div>
    )
}

export default Projects