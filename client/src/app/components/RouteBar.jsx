import React from 'react';
import '../css/RouteBar.scss';

const RouteBar = props => {
  // console.log('logging props.message: ', props.message);
  let topicName;
  let partitionNumber;

  const home = (<h5 className="display-inline">Home &nbsp; &nbsp;</h5>);

  if (props.topicName) {
    //   topicName = " >    " + props.topicName;
    topicName = (<h5 className="display-inline"> > &nbsp; &nbsp; {props.topicName} &nbsp; &nbsp; </h5>);
  }
  if (props.partitionNumber !== -1) {
    //   partitionNumber = " > Partition " + props.partitionNumber;
    partitionNumber = (<h5 className="display-inline">  > &nbsp; &nbsp; Partition {props.partitionNumber}</h5>);
  }

  return (
    <span className="route-padding">
      {home} {topicName} {partitionNumber}
    </span>
  );
};

export default RouteBar;
