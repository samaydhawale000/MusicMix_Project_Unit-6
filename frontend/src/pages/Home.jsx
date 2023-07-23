import React from 'react'
import MusicPlayBar from '../component/MusicPlayBar'
import Navbar from '../component/Navbar'
import Songspage from '../component/Songspage'

export default function Home() {
  return (
    <div style={{height: "100%"}}>
        <Navbar/>
        <Songspage/>  
        <MusicPlayBar />
    </div>
  )
}
