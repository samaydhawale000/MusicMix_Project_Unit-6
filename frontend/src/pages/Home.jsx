import React from 'react'
import MusicPlayBar from '../component/MusicPlayBar'
import Navbar from '../component/Navbar'
import Songspage from '../component/Songspage'
import { useState } from 'react'

export default function Home() {
  const [search,setSearch] = useState("")
  const handleChange = (a)=>{
    setSearch(a)
  }
  return (
    <div style={{height: "100%", background:"#1a1a1a"}}>
        <Navbar handleChange={handleChange}/>
        <Songspage search={search}/>  
        <MusicPlayBar/>
    </div>
  )
}
