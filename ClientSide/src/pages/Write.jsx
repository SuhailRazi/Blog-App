import React, { useState } from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const Write = () => {

  const [value,setValue] = useState('')
  console.log("value", value)
  return (
    <div className='addpost'>
        <div className="content">
         <input type='text' placeholder='Title'/>
         <div className="editorContainer">
            <ReactQuill className='editor' theme="snow" value={value} onChange={setValue} />
         </div>
        </div>
        <div className="menu">
          <div className="item">
            <h1>Publish</h1>
            <span>
              <b>Status: </b> Draft
            </span>
            <span>
              <b>Visibility: </b> Public
            </span>
            <input style={{display: 'none'}} type='file' name='' id='file' />
            <label className="file" htmlFor='file'>Upload File</label>
            <div className="buttons">
              <button>Save as draft</button>
              <button>Update</button>
            </div>
          </div>
          <div className="item">
          <h1>Category</h1>
            <div className="cat">
                <input type='radio' name='category' value='art' id='art'/>
                <label htmlFor='art'>ART</label>
            </div>
            <div className="cat">
                <input type='radio' name='category' value='science' id='science'/>
                <label htmlFor='art'>SCIENCE</label>
            </div>
            <div className="cat">
                <input type='radio' name='category' value='technology' id='technology'/>
                <label htmlFor='art'>TECHNOLOGY</label>
            </div>
            <div className="cat">
                <input type='radio' name='category' value='cinema' id='cinema'/>
                <label htmlFor='art'>CINEMA</label>
            </div>
            <div className="cat">
                <input type='radio' name='category' value='design' id='design'/>
                <label htmlFor='art'>DESIGN</label>
            </div>
            <div className="cat">
                <input type='radio' name='category' value='food' id='food'/>
                <label htmlFor='art'>FOOD</label>
            </div>
          </div>

        </div>
    </div>
  )
}

export default Write;
