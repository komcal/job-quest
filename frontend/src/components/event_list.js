import React from 'react';
import EventListItem from './event_list_item';
const EventList = (props) =>{
  var a = props.num;
  const events = props.eventList.map(({columns}) =>{
    return columns.map((data) =>{
      a--;
      if(a < 0)
        return null;
      else
        return (
          <EventListItem
            className="event"
            title={data.inspiration_id.name}
            imgName={data.inspiration_id.thumbnail_media_id.file_name}
            key={data._id}
          />
        );
    });
  });
  return(
    <div className="event-list">
      {events}
    </div>
  );
}
export default EventList;
