import React from 'react';
import Collapsible from 'react-collapsible';
import Button from '../../../../../../components/Button';
import './styles.scss';


export const GalleryCollapse = ({ children }) => {
  return <Collapsible 
    trigger= {<Button withBorder borderColor largeSize>See More</Button>}
    contentContainerTagName = "div"
    triggerClassName ='Collapse-trigger'
    triggerOpenedClassName ='Collapse-trigger'
  >{children}</Collapsible>
  }
