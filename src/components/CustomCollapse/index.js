import React from 'react';
import Collapsible from 'react-collapsible';
import Button from '../Button';


export const CustomCollapse = ({ children }) => {
  return <Collapsible 
    trigger= {<Button withBorder borderColor largeSize>More Details</Button>}
    contentContainerTagName = "div"
  >{children}</Collapsible>
}
