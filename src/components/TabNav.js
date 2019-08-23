import React from "react";
import { Tab, Menu} from "semantic-ui-react";
import { NavLink, Route } from "react-router-dom";
import WelcomePage from "./WelcomePage";
import CharacterList from './CharacterList';
import LocationsList from './LocationsList';
import EpisodeList from './EpisodeList';

// TODO: Add missing tabs below
// Take a look at React Semantic UI tabs 
// https://react.semantic-ui.com/modules/tab/
export default function TabNav() {
  return(
    <div>
    <nav>
      <NavLink exact to="/" activeClassName="nav-active">Home</NavLink>
      <NavLink exact to="/characters" activeClassName="nav-active">Characters</NavLink>
      <NavLink exact to="/location" activeClassName="nav-active">Locations</NavLink>
      <NavLink exact to="/episodes" activeClassName="nav-active">Episodes</NavLink>
    </nav>
    <div>
      <Route exact path="/" component={WelcomePage}/>
      <Route exact path="/characters" component={CharacterList} />
      <Route exact path="/location" component={LocationsList} />
      <Route exact path="/episodes" component={EpisodeList} /> 
    </div>
  </div>


  )

};

// const panes = [
//     { menuItem: 'Home', render: () => <Tab.Pane><WelcomePage/></Tab.Pane> },
//     { menuItem: 'Characters', render: () => <Tab.Pane><CharacterList/></Tab.Pane> },
//     { menuItem: 'Location', render: () => <Tab.Pane><LocationsList/></Tab.Pane> },
//     { menuItem: 'Episode', render: () => <Tab.Pane><EpisodeList/></Tab.Pane> },
//   ]
  
//   const TabNav = () => <Tab panes={panes} />
  
  // export default TabNav;