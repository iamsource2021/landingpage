import React, { useState, useEffect } from 'react';
import { NavBar } from './../../ui-components';
import { View, Link } from '@aws-amplify/ui-react';
import {
  useNavigateAction,
} from "@aws-amplify/ui-react/internal";

export default function Header(props) {
  const [stickyClass, setStickyClass] = useState('');

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);
    return () => window.removeEventListener('scroll', stickNavbar);
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      // window height changed for the demo
      windowHeight > 150 ? setStickyClass('sticky-nav') : setStickyClass('');
    }
  };

  const framelogoOnClick =
    useNavigateAction({ type: "url", url: "/" });

  const LinkAlias = (props) => {
    return (
      <Link
        href={props.href}>
        {props.children}
      </Link>
    )
  }

  return (
    <View
      height="auto"
      width="100%"
    >
      
      <NavBar
        width={'auto'}
        className={`navbar ${stickyClass}`}
        overrides={{
          "logo 1": {
            src: "/images/logo_transparent.png",
            onClick: () => { framelogoOnClick() }
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
          Servicios: {
            children:
              <LinkAlias
                href={'/#servicios'}
                children={'Servicios'}
              />
          },
          "Casos de uso": {
            children:
              <LinkAlias
                href={'/#casodeuso'}
                children={'Casos de uso'}
              />
          },
          Recursos: {
            children:
              <LinkAlias
                href={'/#recursos'}
                children={'Recursos'}
              />
          },
          "Agendar consultoria": {
            children:
              <LinkAlias
                href={'/#agendarconsultoria'}
                children={'Agendar consultoria'}
              />
          }
        }}
      />
    </View>
  );
}