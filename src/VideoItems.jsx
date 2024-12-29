import React from 'react'
import types from 'prop-types';

const VideoItems = (props) => {
  console.log(props);

  let {item,setVideo,setTitle} = props.data 

  let {thumbnailUrl, title, videoUrl} = item

  let videoChange = () =>{
    setTitle(title)
    setVideo(videoUrl)
  }
  
  return (
    <>
        <div className="videoItems">
          <img src={thumbnailUrl} alt={title}  className='rightimage' onClick={videoChange}/>
          <p className='righttitle'>{title}</p>
        </div>
    </>
  )
}

VideoItems.propTypes = {
  data : types.object,
  item : types.shape({
    thumbnailUrl : types.jpg
  })
}

export default VideoItems