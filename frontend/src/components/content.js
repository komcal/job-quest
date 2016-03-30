import React from 'react';
import EventList from './event_list';
import ContentHeader from './content_header';
const Content = (props) => {
  return (
    <div className="container content">
      <ContentHeader />
      <EventList eventList={props.eventData}/>
    </div>
  );
}

export default Content;
