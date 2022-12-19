import React from 'react'
import img from '../../images/HD wallpaper_ Artistic, Minimalism, Black and White, Minimalist, Mountain.jpg'
import {Link} from 'react-router-dom';

function Post() {
  return (
    <div className="post">  
    <img className=" postImg w-100" src={img} alt="post1" />
    <div className="postInformation">
        <div className="postCats">
            <span className="postCat">
                music
            </span>
            <span className="postCat">
                Life
            </span>
        </div>
        <Link to="/post/:postId" className="postLink">
        <span className="postTitle">
            lorem ipsum dolor sit amet
        </span>
        </Link>
        <span className="postDate">1 hour ago</span>
        <p className="postDescreption ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique, deserunt laboriosam delectus voluptatum incidunt accusantium, totam deleniti veniam quasi dolor fugiat placeat magni, laudantium obcaecati numquam repellat ex maiores blanditiis nesciunt? Commodi, quo, reprehenderit quam perspiciatis, corrupti repellat dicta harum tempora repudiandae ut illum expedita amet pariatur sequi sint.
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis similique, deserunt laboriosam delectus voluptatum incidunt accusantium, totam deleniti veniam quasi dolor fugiat placeat magni, laudantium obcaecati numquam repellat ex maiores blanditiis nesciunt? Commodi, quo, reprehenderit quam perspiciatis, corrupti repellat dicta harum tempora repudiandae ut illum expedita amet pariatur sequi sint.</p>
    </div>
    </div>
  )
}

export default Post