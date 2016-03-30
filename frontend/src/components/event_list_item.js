import React from 'react';
const EventListItem = ({title, imgName}) =>{
  const path = "/images/"+imgName;
  return(
    <div className="event">
      <p>{title}</p>
      <img src={path} atl="bg" />
    </div>
  );
}
export default EventListItem;
