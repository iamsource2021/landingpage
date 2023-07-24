import { 
  Menu, 
  MenuItem, 
  MenuButton, 
  Icon, 
  Button 
} from '@aws-amplify/ui-react';
import {
  useNavigate  
} from 'react-router-dom';

const IconCaret = () => {
  return (
    <Icon>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </Icon>
  );
};

const MenuGroups = (props) => {
  const navigate = useNavigate();
  return (
    <Menu
      trigger={
        <MenuButton variation="menu" key={props.label + 'button'}>
          {props.label}
          <IconCaret />
        </MenuButton >
      }
    >
      {Object.values(props.items).map((item) => <MenuItem key={item.label} onClick={()=>navigate(item.url)}>{item.label}</MenuItem>)}
    </Menu>
  );
};

const ButtonMenu = (props) => {  
  const navigate = useNavigate();
  return (
    <Button variation="menu" onClick={()=>navigate(props.url)}>{props.label}</Button>
  );
};

const MenuItemTop = (props) => {
  return (
    <>
      {
        props.showChild ?
          <MenuGroups label={props.label} items={props.items}/> :
          <ButtonMenu label={props.label} url={props.url}/>
      }
    </>
  );
};

export function MenuCustom(props) { 
    return Object.values(props.items).map((item) => {
      const showChild = Object.values(item.subMenuItems).length >0 ? true : false;
      return (<MenuItemTop 
        key={item.label + 'menuitemtop'}
        showChild={showChild} 
        label={item.label} 
        url={item.url} 
        items={item.subMenuItems} />) 
    });
};