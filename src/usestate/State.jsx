import React, { useState } from 'react'
import '../usestate/state.css'

const State = () => {
    const [img, setImg] = useState("https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D")

    return (
        <div className="full-page">
            <img width="100%" height="100%" src={img} alt="" />

            <div className="button">
                <button className='btn' onClick={()=> setImg("https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aG9tZXxlbnwwfHwwfHx8MA%3D%3D")}>Home</button>
                <button className='btn' onClick={()=> setImg("https://plus.unsplash.com/premium_photo-1664110691129-ca0f4fbe8533?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGVufGVufDB8fDB8fHww")}>Pen</button>
                <button className='btn' onClick={()=> setImg("https://images.unsplash.com/photo-1502082553048-f009c37129b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8dHJlZXxlbnwwfHwwfHx8MA%3D%3D")}>Tree</button>
                <button className='btn' onClick={()=> setImg("https://images.unsplash.com/flagged/photo-1554473675-d0904f3cbf38?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fGNvbGxlZ2V8ZW58MHx8MHx8fDA%3D")}>College</button>
                <button className='btn' onClick={()=> setImg("https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wfGVufDB8fDB8fHww")}>Laptop</button>
            </div>
        </div>
    )
}

export default State