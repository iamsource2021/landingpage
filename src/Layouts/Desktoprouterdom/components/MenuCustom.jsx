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
import GA from './../../../GA';

const { trackEvent } = GA();

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
      {
        Object.values(props.items).map((item) => 
        <MenuItem 
        key={item.label} 
        onClick={()=>{
          const labelEvent = 'event_menu_item_' + item.label.trim().toLowerCase(); 
          trackEvent(labelEvent, 'page_location', document.location); 
          navigate(item.url);
        }}>
          {item.label}
        </MenuItem>
        )
      }
    </Menu>
  );
};

const ButtonMenu = (props) => {  
  // const navigate = useNavigate();
  return (
    <Button variation="menu" onClick={()=>{
      const labelEvent = 'event_menu_button_' + props.label.trim().toLowerCase(); 
      const title = props.url?.replace('/#','');
      const elementToScroll = document.getElementById(title);

      if (!elementToScroll) return;

      window.scrollTo({
        top: elementToScroll.offsetTop,
        behavior: "smooth"
      });

      document.title = title;
      trackEvent(labelEvent, 'page_title', title);      
      // navigate(props.url);
    }}>{props.label}</Button>
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