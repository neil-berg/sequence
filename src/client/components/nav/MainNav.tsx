import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

import ListIcon from '@assets/list.svg';
import SearchIcon from '@assets/search.svg';
import CircleIcon from '@assets/roundabout.svg';
import UserIcon from '@assets/user.svg';

enum MainNavClasses {
  ListItem = 'list-item',
  ListItemLink = 'list__item-link',
  ListItemIcon = 'list__item-icon',
  ListItemText = 'list__item-text'
}

export const MainNav = () => {
  return (
    <NavContainer>
      <li className={MainNavClasses.ListItem}>
        <Link className={MainNavClasses.ListItemLink} to='/sequence/create'>
          <ListIcon className={MainNavClasses.ListItemIcon} />
          <span className={MainNavClasses.ListItemText}>Create</span>
        </Link>
      </li>
      <li className={MainNavClasses.ListItem}>
        <Link className={MainNavClasses.ListItemLink} to='/sequence/search'>
          <SearchIcon className={MainNavClasses.ListItemIcon} />
          <span className={MainNavClasses.ListItemText}>Search</span>
        </Link>
      </li>
      <li className={MainNavClasses.ListItem}>
        <Link className={MainNavClasses.ListItemLink} to='/sequence/mine'>
          <CircleIcon className={MainNavClasses.ListItemIcon} />
          <span className={MainNavClasses.ListItemText}>Flows</span>
        </Link>
      </li>
      <li className={MainNavClasses.ListItem}>
        <Link className={MainNavClasses.ListItemLink} to='/profile'>
          <UserIcon className={MainNavClasses.ListItemIcon} />
          <span className={MainNavClasses.ListItemText}>Profile</span>
        </Link>
      </li>
    </NavContainer>
  );
};

const NavContainer = styled.ul`
  position: -webkit-sticky;
  position: sticky;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: var(--green);
  padding: 0.5rem 1rem;

  .${MainNavClasses.ListItemLink} {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }

  .${MainNavClasses.ListItemIcon} {
    height: 30px;
    width: 30px;
    fill: var(--white);
  }

  .${MainNavClasses.ListItemText} {
    padding-top: 0.5rem;
    color: var(--white);
  }
`;
