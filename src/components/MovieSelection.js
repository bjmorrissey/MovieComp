import React, {useState} from 'react';

const MovieSelection = (props) => {

  
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  
  const formatAdjEarnings = props.adjEarnings === '' ? '' : formatter.format(props.adjEarnings)
 



  return (
    <div className="movieSelection">
     
        <div className="name">{props.title}</div>
        <div className="poster">
        <img src={props.poster} alt={props.title} />
        </div>
        <div className="moviedetails">
          <div className="year">Released: 
            {props.year}
          </div>
          <div className="revenue">Box Office: {props.earnings === undefined ? `Not reported` : props.earnings}</div>
          <div className="calcRev">Today's earnings:<br/> {props.adjEarnings}</div>
          </div>

    </div>
  )
}


export default MovieSelection;