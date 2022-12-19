import React from 'react'
import img2 from '../../images/Scenery [3840x2160]_.jpg'

function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="w-100 singlePostImg" src={img2} alt="img"/>
            <h1 className="singlePostTitle">
                Title For The Post
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
                    <i className="singlePostIcon fas fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Abo El Adhaeem</b>
                </span>
                <span className="singlePostDate">
                    <b>1 hour ago</b>
                </span>
            </div>
            <p className="singlePostDesc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique, deserunt laboriosam delectus voluptatum incidunt accusantium, totam deleniti veniam quasi dolor fugiat placeat magni, laudantium obcaecati numquam repellat ex maiores blanditiis nesciunt? Commodi, quo, reprehenderit quam perspiciatis, corrupti repellat dicta harum tempora repudiandae ut illum expedita amet pariatur sequi sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique, deserunt laboriosam delectus voluptatum incidunt accusantium, totam deleniti veniam quasi dolor fugiat placeat magni, laudantium obcaecati numquam repellat ex maiores blanditiis nesciunt? Commodi, quo, reprehenderit quam perspiciatis, corrupti repellat dicta harum tempora repudiandae ut illum expedita amet pariatur sequi sint.Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique, deserunt laboriosam delectus voluptatum incidunt accusantium, totam deleniti veniam quasi dolor fugiat placeat magni, laudantium obcaecati numquam repellat ex maiores blanditiis nesciunt? Commodi, quo, reprehenderit quam perspiciatis, corrupti repellat dicta harum tempora repudiandae ut illum expedita amet pariatur sequi sint.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique, deserunt laboriosam delectus voluptatum incidunt accusantium, totam deleniti veniam quasi dolor fugiat placeat magni, laudantium obcaecati numquam repellat ex maiores blanditiis nesciunt? Commodi, quo, reprehenderit quam perspiciatis, corrupti repellat dicta harum tempora repudiandae ut illum expedita amet pariatur sequi sint.
            </p>
        </div>
    </div>
  )
}

export default SinglePost