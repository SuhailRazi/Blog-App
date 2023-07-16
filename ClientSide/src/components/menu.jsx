import React from 'react'

const Menu = () => {

  const posts = [
    {
      id:1,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="

    },
    {
      id:2,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="

    },
    {
      id:3,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
    },
    {
      id:4,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
    },
    {
      id:5,
      title: "Lipsum generator: Lorem Ipsum - All the facts",
      desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
      img : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
    },
  ]
  return (
    <div className='menu'>
        <h1>Other Posts intrested</h1>
        {
          posts.map((post)=>(
            <div className="post" key={post.id}>
              <img src={post.img}  />
              <h2>{post.title}</h2>
              <button>Read More</button>
            </div>
          ))
        }
    </div>
  )
}

export default Menu