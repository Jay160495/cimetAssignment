import React, { useEffect } from "react";

const RouteHandle = (props) => {
  
  useEffect(() => {
    document.title = props.title + " | Jaipur";
  });

  const { title, component: ChildComponent, ...rest } = props;
  return <ChildComponent {...rest} />;
};

export default RouteHandle;
