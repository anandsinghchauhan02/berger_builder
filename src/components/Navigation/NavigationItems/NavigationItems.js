import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem'

const navigationItems = (props) => (
   <ul className="NavigationItems">
        <NavigationItem link="/" active>Burger Builder</NavigationItem>
        <NavigationItem link="/">Checkoout</NavigationItem>
   </ul>
);

export default navigationItems;