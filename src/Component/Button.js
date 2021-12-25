import React from 'react'
import ShareIcon from "@material-ui/icons/Share";
import "./Button.css"


function Button() {
	return (
		<div >
			<button  className="share-button">
        <ShareIcon 
		    style={{
            fontSize: "18px",
            verticalAlign: "middle",
            marginBottom: "3px",
            marginRight: "2px"
          }}
		 />
        Share
      </button>
		</div>
	)
}

export default Button
