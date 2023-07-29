import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {

  // const posts = [
  //   {
  //     id:1,
  //     title: "Lipsum generator: Lorem Ipsum - All the facts",
  //     desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  //     img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="

  //   },
  //   {
  //     id:2,
  //     title: "Lipsum generator: Lorem Ipsum - All the facts",
  //     desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  //     img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="

  //   },
  //   {
  //     id:3,
  //     title: "Lipsum generator: Lorem Ipsum - All the facts",
  //     desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  //     img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
  //   },
  //   {
  //     id:4,
  //     title: "Lipsum generator: Lorem Ipsum - All the facts",
  //     desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  //     img : "https://media.istockphoto.com/id/1146517111/photo/taj-mahal-mausoleum-in-agra.jpg?s=612x612&w=0&k=20&c=vcIjhwUrNyjoKbGbAQ5sOcEzDUgOfCsm9ySmJ8gNeRk="
  //   },
  //   {
  //     id:5,
  //     title: "Lipsum generator: Lorem Ipsum - All the facts",
  //     desc : "In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.",
  //     img : "https://www.industrialempathy.com/img/remote/ZiClJf-1920w.jpg"
  //   },
  // ]

  const [posts,setPosts] = useState([]);
  console.log("api",import.meta.env.VITE_CORE_HOST);
  
  useEffect(()=>{
    
    const fetchData = async () =>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_CORE_HOST}posts`);
        setPosts(res.data)
      }catch(err){
        console.log("err->",err);
      }
    };
    fetchData()
  },[])
  console.log(posts);

  return (
    <div className="home">
      <div className="posts">
        {posts.map((post)=>(
            <div className="post" key={post.id}>
              <div className='img'>
                <img src={post.img} alt='img' />
              </div>
              <div className="content">
                <Link className='link' to={`/post/${post.id}`} >
                  <h1>{post.title}</h1>
                </Link>
                  <p>{post.desc}</p>
                  <button>Read More</button>
              </div>
             </div>
        ))
        }
      </div>
    </div>
  )
}

export default Home
