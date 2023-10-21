import React from 'react'
import addImg from "../images/add-image.png"

function Userprofile() {
  return (
    <div id='main-userprofile'>
      {/* FIRST DIV - USER PROFILE */}
      <div id='first-div'>
        <img id='dp-image' src="https://cdn.pixabay.com/photo/2023/04/19/19/46/gosling-7938451_1280.jpg" alt="imgErr" />
        <h4 className='my-2'>Sanjay Paul</h4>
        <h6>Lorem ipsum, dolor sit amet consectetur adipisicing.</h6>
      </div>

    {/* SECOND DIV - PHOTO UPLOAD DIV */}
      <div id="second-div">
        <h3>Upload Photos</h3>
        <hr />
        <img src={addImg} alt="errImg" style={{width:"3rem"}} /> <br />

        <div>
        <label htmlFor="exampleInputTitle1" className="form-label">Title: </label>
        <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="titleHelp" name='title' placeholder='Set Title Here'></input>
        <button className="btn btn-sm btn-success mt-2">Upload Photos</button>
        </div>

      </div>
    </div>
  )
}

export default Userprofile