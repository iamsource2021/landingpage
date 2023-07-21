import { Menu, MenuItem, MenuButton} from '@aws-amplify/ui-react';

export function MenuItemTop() { 
  
  return (<Menu 
        trigger={
        <MenuButton variation="menu">
            Casos de uso
        </MenuButton>
        }>
    <MenuItem>Download</MenuItem>
    <MenuItem>Create a Copy</MenuItem>
    <MenuItem>Mark as Draft</MenuItem>
  </Menu>); 
};