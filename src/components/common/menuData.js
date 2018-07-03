import React from 'react';

import { NavLink } from 'react-router-dom';

import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';

import DashboardIcon from '@material-ui/icons/Dashboard';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import EventNoteIcon from '@material-ui/icons/EventNote';
import SettingsIcon from '@material-ui/icons/Settings';

export const mainSideMenu = (
  <div>
    <ListItem button component={NavLink} to="/dashboard" activeClassName='nav-active'>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Nadzorna plošča" />
    </ListItem>
    <ListItem button component={NavLink} to="/pets" activeClassName='nav-active'>
      <ListItemIcon>
        <FavoriteBorderIcon />
      </ListItemIcon>
      <ListItemText primary="Hišni ljubljenčki" />
    </ListItem>
    <ListItem button component={NavLink} to="/customers" activeClassName='nav-active'>
      <ListItemIcon>
        <PeopleOutlineIcon />
      </ListItemIcon>
      <ListItemText primary="Lastniki ljubljenčkov" />
    </ListItem>
    <ListItem button component={NavLink} to="/events" activeClassName='nav-active'>
      <ListItemIcon>
        <EventNoteIcon />
      </ListItemIcon>
      <ListItemText primary="Koledar obiskov" />
    </ListItem>
  </div>
);

export const settingsSideMenu = (
  <div>
    <ListItem button component={NavLink} to="#" activeClassName='nav-active' className="link-disabled">
      <ListItemIcon>
        <SettingsIcon />
      </ListItemIcon>
      <ListItemText primary="Nastavitve uporabnika" />
    </ListItem>
  </div>
);