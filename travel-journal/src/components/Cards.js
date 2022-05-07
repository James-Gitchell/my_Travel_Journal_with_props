import React from "react"
import App from "../App"



export default function Cards(props){
  console.log(props)
       return(
     <div className="card--container">
        <section className="card--section">
        
          <img src={props.imageUrl} className="card--img"/>
          
          <div className="card--info">
        
              <div className="top--info">
                  <div className="top--row">
                    <img src={`../images/${props.waypointImg}`} className="card--waypoint"/>
                    <h4 className="card--location">{props.location}</h4>
                    <a href={props.googleMapsUrl} className="top--mapView">View on Google Maps</a>
                  </div>
              </div>
            
              <div className="bottom--info">
                <h1>{props.title}</h1> 
                <h5>{props.startDate} - {props.endDate}</h5>
                <p className="card--description">{props.description}</p>     
              </div>
              </div>
         
        </section>
        </div>
    )
}
