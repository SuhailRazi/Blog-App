import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  const posts = [
    {
      id:1,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://www.makeuseof.com/tag/lorem-ipsum-case-wondering/"
    },
    {
      id:2,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://www.makeuseof.com/tag/lorem-ipsum-case-wondering/"
    },
    {
      id:3,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://www.makeuseof.com/tag/lorem-ipsum-case-wondering/"
    },
    {
      id:4,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://www.makeuseof.com/tag/lorem-ipsum-case-wondering/"
    },
    {
      id:5,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://www.makeuseof.com/tag/lorem-ipsum-case-wondering/"
    },
  ]

  return (
    <div className='home'>
      <div className="posts">
        {
          posts.map((post)=>{
            <div className="post" key={post.id}>
              <div className='img'>
                <img src={post.img} alt='img' />
              </div>
              <div className="content">
                <Link to={`/post/${post.id}`} >
                  <h1>{post.title}</h1>
                  <p>{post.desc}</p>
                  <button>Read More</button>
                </Link>
              </div>
             </div>
          })
        }
      </div>
    </div>
  )
}

export default Home
