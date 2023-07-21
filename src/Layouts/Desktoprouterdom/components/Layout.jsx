import { Flex, View, Link } from '@aws-amplify/ui-react';
import {
  AnimatedRoute,
  Footer,
  MenuItemTop
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
            // Servicios: {
            //   onClick:(event)=>{
            //     const href = '#servicios';
            //     const pathname = document.location.pathname + href;
            //     trackEvent('servicio_landing', 'page_location', pathname);
            //     // navigate('/'+href);                
            //   },
            //   style:{'cursor':'pointer'}
            // },
            // "Casos de uso": {
            //   as:"div",
            //   children:
            //   <MenuItemTop showChild={false} label={'Casos de uso'}/>
            // },
            // Recursos: {
            //   children:
            //     <LinkAlias
            //       href={'/#recursos'}
            //       children={'Recursos'}
            //     />
            // },
            // "Agendar consultoria": {
            //   children:
            //     <LinkAlias
            //       href={'/#agendarconsultoria'}
            //       children={'Agendar consultoria'}
            //     />
            // },
            "Frame 32129767076": {
              overrides: {
                children:
                  <Flex><MenuItemTop showChild={false} label={'Casos de uso'} /></Flex>
              }
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