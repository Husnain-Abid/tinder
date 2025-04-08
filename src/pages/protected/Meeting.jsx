import React from 'react'
import image from "../../asset/meeting.PNG"
import { useNavigate } from 'react-router-dom';

export default function Meeting() {
    const navigate = useNavigate();

    
  return (
    <div className="w-screen h-screen bg-cover bg-center " style={{ backgroundImage: `url(${image})` }} onClick={()=>navigate("/home")}>
      
    </div>
  )
}
