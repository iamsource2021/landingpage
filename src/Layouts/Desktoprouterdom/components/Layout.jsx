import { Flex, View, Link } from '@aws-amplify/ui-react';
import {
  AnimatedRoute,
  Footer,
  MenuCustom
} from './index';
import {
  Outlet,
  useNavigate
} from 'react-router-dom';

import React, { useEffect } from 'react';
import { NavBar } from '../../../ui-components';
import GA from './../../../GA';


const LinkAlias = (props) => {
  return (
    <Link
      href={props.href}>
      {props.children}
    </Link>
  )
}

export function Layout(props, ref) {
  const { trackEvent, trackPageView } = GA();
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search);
  }, [trackPageView]);

  const menuItems = [
    {
      url:'/#',
      label:'Servicios',
      subMenuItems:[
        {
          url:'/guias',
          label:'Guias'
        },
        {
          url:'/webinars',
          label:'Webinars'
        }        
      ]
    },
    {
      url:'/#recursos',
      label:'Recursos',
      subMenuItems:[]
    },    
  ];

  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      alignContent="flex-start"
      wrap="nowrap"
      gap="0"
    >
      <View
        height="auto"
        width="100%"
      >
        <NavBar
          width={'auto'}
          overrides={{
            "logo 1": {
              src: "/images/logo_transparent.png",
              onClick: () => navigate('/')
            },
            image: {
              display: "none"
            },
            Icon: {
              display: "none"
            },
            SearchField: {
              label: "Buscar",
              placeholder: "Buscar...",
              size: "small",
              variation: "quiet",
              hasSearchButton: false,
              hasSearchIcon: true
            },
            "Frame 32129767076": {
              gap:'4px',
              children:                
                <MenuCustom items={menuItems}/>                
            }
          }}
        />
      </View>
      <AnimatedRoute>
        <Outlet />
      </AnimatedRoute>
      <Footer />
    </Flex>
  );
}