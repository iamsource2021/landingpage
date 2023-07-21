import { Menu, MenuItem, MenuButton, Icon, Button } from '@aws-amplify/ui-react';
import { useState } from 'react';

const IconCaret = () => {
  return (
    <Icon>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </Icon>
  );
};

const MenuGroups = (props) => {
  return (
    <Menu
      trigger={
        <MenuButton variation="menu">
          {props.label}
          <IconCaret />
        </MenuButton >
      }
    >
      <MenuItem onClick={() => alert('hola')}>Download</MenuItem>
      <MenuItem>Create a Copy</MenuItem>
      <MenuItem>Mark as Draft</MenuItem>
    </Menu>
  );
};

const ButtonMenu = (props) => {
  return (
    <Button variation="menu">{props.label}</Button>
  );
};

export function MenuItemTop(props) {
  const [showChild] = useState(props.showChild);

  return (
    <>
      {
        showChild ?
          <MenuGroups label={props.label} /> :
          <ButtonMenu label={props.label} />
      }
    </>
  );
};