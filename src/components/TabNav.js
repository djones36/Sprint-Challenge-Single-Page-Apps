import React from "react";
import { Tab, Menu, Icon } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
// export default function TabNav() {


// };

const panes = [
    { menuItem: 'Home', render: () => <Tab.Pane>Home</Tab.Pane> },
    { menuItem: 'Characters', render: () => <Tab.Pane>Characters</Tab.Pane> },
    { menuItem: 'Location', render: () => <Tab.Pane>Location</Tab.Pane> },
    { menuItem: 'Episode', render: () => <Tab.Pane>Episode</Tab.Pane> },
  ]
  
  const TabNav = () => <Tab panes={panes} />
  
  export default TabNav;