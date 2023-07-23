import React, { useEffect, useState } from 'react'
import "./component.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay } from '@fortawesome/free-solid-svg-icons';
import MusicPlayBar from './MusicPlayBar';

export default function SongCard({ songUrl, image, title,artist,id}) {
const [flag, setFlag] = useState(false)
  return (
    <div className='songCardDiv'>
       <img src={image} alt="image" />
       <button onClick={()=>{
        setFlag(true)
       }}> <FontAwesomeIcon icon={faPlay} /></button>
       <h3>{title}</h3>
       <p>{artist}</p>
   { flag && <MusicPlayBar id={id} songUrl={songUrl} image={image} title={title} artist={artist} />}
    </div>
  )
}
