import React, { useRef, useState } from 'react'
import { IoVolumeMuteOutline } from "react-icons/io5";
import { VscUnmute } from "react-icons/vsc";

const Player = (props) => {

    console.log(props);
    
    let {state,video,title} = props.data 

    let videoRef = useRef()

    let [play,setPlay] = useState(true)

    let [muteVideo, setMutevideo] = useState(true)


    let playOrPause = () =>{
        // videoRef.current.autoplay = true
        if(play === true){
            videoRef.current.play()
        }
        else{
            videoRef.current.pause()
        }
        setPlay(!play)
    }

    let muteorUnmute = () => {
        videoRef.current.muted = muteVideo
        setMutevideo(!muteVideo)
    }
    
  return (
    <>
       <section className='playercontent'>
        <h1>Video Player</h1>
        <br/>
        <h2>{title}</h2>
        <video src={video} className='leftvideo' onClick={playOrPause} ref={videoRef} autoPlay></video>
        <span onClick={muteorUnmute} className='button'>
            {muteVideo === true ? <VscUnmute /> : <IoVolumeMuteOutline/>}
        </span>
        </section>
    </>
  )
}

export default Player