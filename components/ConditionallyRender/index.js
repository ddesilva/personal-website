import React, { useEffect, useState } from "react";

const ConditionallyRender = (props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => setIsMounted(true), []);

  if(!isMounted && props.client) {
    return null;
  }

  if(isMounted && props.server) {
    return null;
  }

  return props.children;
};

export default ConditionallyRender;
