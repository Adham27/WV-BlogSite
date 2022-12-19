import React from 'react'
import Sidebar from '../Sidebar/Sidebar';
import SinglePost from '../SinglePost/SinglePost';

function SinglePage() {
  return (
    <div className="singlePage">
        <SinglePost/>
        <Sidebar/>
    </div>
  )
}

export default SinglePage