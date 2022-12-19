import React from 'react'
import img2 from '../../images/Scenery [3840x2160]_.jpg'

function Write() {
  return (
    <div className="write">
        <img className="w-75 writeImg" src={img2} alt="img"/>
        <div className="writeForm">
            <div className="writeFormGroup">
                <label htmlFor="fileInput">
                    <i className="writeIcon fas fa-plus"></i>
                </label>
                <input type="file" id="fileInput" style={{display:'none'}}/>
                <input type="text" placeholder="Title" className="writeInput" autoFocus={true}/>
            </div>
            <div className="writeFormGroup">
                <textarea 
                    className="writeInput writeText"
                    placeholder="Write your blog ..."
                    type="text"
                ></textarea>
            </div>
            <button className="writeSubmit btn btn-outline-success">Publish</button>
        </div>
    </div>
  )
}

export default Write