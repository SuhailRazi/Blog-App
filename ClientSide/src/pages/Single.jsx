import React, { useContext, useEffect, useState } from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import { Link, useLocation } from "react-router-dom";
import Menu from '../components/menu';
import axios from 'axios';
import moment from 'moment';
import { AuthContext } from '../context/authContext';

const Single = () => {

  const [post,setPost]= useState([]);
  const location = useLocation();
  const postId = location.pathname.split("/")[2];
  console.log(postId);

  const { currentUser } = useContext(AuthContext)


  useEffect(()=>{
    const fetchData = async () =>{
      try{
        const res = await axios.get(`${import.meta.env.VITE_CORE_HOST}/posts/${postId}`);
        setPost(res.data);
      }catch(err){
        console.log(err);
      }
    }
    fetchData()
  },[postId])
  console.log("res data",post);

  return (
    <div className="single">
      <div className="content">
          <img src={post?.img} alt='img' />
        <div className="user">
          {post.userimg && <img src={post?.userimg} alt='user' />}
            <div className="info">
              <span>{post.username}</span>
              <p>Posted {moment(post.date).fromNow()}</p>
            </div>
            {currentUser.username == post.username && <div className="edit">
              <Link to={`/write?edit=2`}>
                <img src={Edit} alt='edit' />
              </Link>
              <img  src={Delete} alt='delete'/>
            </div>}
        </div>
            <h1>{post.title}</h1>
            {post.desc}
      </div>
        <Menu/>
    </div>
  )
}

export default Single
