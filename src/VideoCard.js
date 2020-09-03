import React from 'react'
import "./videocard.css";


function VideoCard() {
    return (
        <div className="videoCard">
            <img 
                src="https://c4.wallpaperflare.com/wallpaper/500/442/354/outrun-vaporwave-hd-wallpaper-preview.jpg"
                alt=""
            />
            <p>This is a film about</p>
            <h2>Movie title</h2>
            <p>Number of likes...</p>
        </div>
    )
}

export default VideoCard
