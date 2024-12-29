import React, { useState } from 'react'
import Player from './Player'
import VideoItems from './VideoItems'
import VideoData from './video.json'

const VideoContainer = () => {

    let [state,setState] = useState(VideoData)

    let [video,setVideo] = useState("http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4")

    let [title,setTitle] = useState("Big Buck Bunny")

  return (
    <>
        <main className="videoBlock">
            <aside className='left'>
                <Player data={{state,video,title}}/>
            </aside>
            <aside className="right">
                <h2>Suggestions for you</h2>
                {
                    state.map((item) =>{
                        return <VideoItems key={item.id} data ={{item,setVideo,setTitle}}/>
                    })
                }
                
            </aside>
        </main>
    </>
  )
}

export default VideoContainer