import React from 'react'
import './portfolio.css'
import ME from '../../assets/about-me.png'

const data = [
  {
    id: 1,
    image: ME,
    title: "Portfolio 1",
    github: "https://github.com",
    demo: "https://"
  },
  {
    id: 2,
    image: ME,
    title: "Portfolio 2",
    github: "https://github.com",
    demo: "https://"
  },
  {
    id: 3,
    image: ME,
    title: "Portfolio 3",
    github: "https://github.com",
    demo: "https://"
  },
  {
    id: 4,
    image: ME,
    title: "Portfolio 4",
    github: "https://github.com",
    demo: "https://"
  },
  {
    id: 5,
    image: ME,
    title: "Portfolio 5",
    github: "https://github.com",
    demo: "https://"
  },
  {
    id: 6,
    image: ME,
    title: "Portfolio 6",
    github: "https://github.com",
    demo: "https://"
  }
]

export const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({id,image,title,github,demo})=>{
            return (<article key={id} className="portfolio__item">
            <div className="portfolio__item-image">
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <div className="portfolio__item-cta">
              <a href={github} className='btn' target='_blank'>Github</a>
              <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a>
            </div>
          </article>)
          })
        }
        
      </div>
    </section>
  )
}
