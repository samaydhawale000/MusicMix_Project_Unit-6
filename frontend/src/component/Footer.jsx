import React from 'react'
import "./component.css";
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { } from '@fortawesome/free-solid-svg-icons';
import { faTwitter,faInstagram,faFacebook } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <div>
    <div className='footerDiv'>
         <div style={{display:"flex", justifyContent:"space-between", width:"50%"}}>
         <div>
          <h3>Company</h3>
          <Link className='fooLinks'>About</Link>
          <Link className='fooLinks'>Jobs</Link>
          <Link className='fooLinks'>For the Record</Link>
         </div>
         <div>
          <h3>Communities</h3>
          <Link className='fooLinks'>For Artist</Link>
          <Link className='fooLinks'>Developers</Link>
          <Link className='fooLinks'>Advertising</Link>
          <Link className='fooLinks'>Investor</Link>
          <Link className='fooLinks'>Vendors</Link>
          <Link className='fooLinks'>MusicMix for Work</Link>
         </div>
         <div>
          <h3>Usefull Links</h3>
          <Link className='fooLinks'>Support</Link>
          <Link className='fooLinks'>Free Mobile App</Link>
         </div>
         </div>
         <div style={{display:"flex", justifyContent:"space-between", width:"14%", marginTop:"15px"}}>
           <button style={{width:"40px", height:"40px", background:" #393939",color:"#fff", border:"none", borderRadius:"50%"}}><FontAwesomeIcon icon={faTwitter} /></button>
           <button style={{width:"40px", height:"40px", background:" #393939",color:"#fff", border:"none", borderRadius:"50%"}}><FontAwesomeIcon icon={faInstagram} /></button>
           <button style={{width:"40px", height:"40px", background:" #393939",color:"#fff", border:"none", borderRadius:"50%"}}><FontAwesomeIcon icon={faFacebook} /></button>
         </div>
    </div>
    </div>
  )
}
