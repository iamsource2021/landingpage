import * as React from "react";
import {NavBar} from './../../ui-components';
import { View, Link,  ThemeProvider } from '@aws-amplify/ui-react';
import './header.css';

const theme = {
  name: 'link-theme',
  tokens: {
    components: {
      link: {
        focus: {
          color: { value: '{colors.purple.20}' },
        },
        hover: {
          color: { value: '{colors.purple.40}' },
        },
        visited: {
          color: { value: '{colors.white}' },
        },
      },
    },
  },
};

export default function Header(props) {
    const LinkAlias = (props) => {
      return (
        <ThemeProvider theme={theme}>
          <Link 
            href={props.href}>
                  {props.children}
          </Link>
        </ThemeProvider>

      )
    }

    return (
        <View
          height="auto"
          width="100%"
        >
          <NavBar 
          width={'auto'} 
          backgroundColor={'transparent'} 
          color={'white'}
          overrides={{
            "logo 1":{
              width:"30px",
              height:"31px"
            },
            image:{
              // src:"/images/logo.png",
              // padding:"9px"
              display:"none"
            },
            Icon:{
              display:"none"
            },
            SearchField:{
              label:"Buscar",
              placeholder:"Buscar...",
              size:"small",
              variation:"quiet",
              hasSearchButton:false,
              hasSearchIcon:true
            },
            Servicios:{
              children:
              <LinkAlias 
                href={'/#servicios'} 
                children={'Servicios'}
              />
            },
            "Casos de uso":{
              children:
              <LinkAlias 
                href={'/#casodeuso'} 
                children={'Casos de uso'}
              />
            },
            Recursos:{
              children:
              <LinkAlias 
                href={'/#recursos'} 
                children={'Recursos'}
              />
            },
            "Agendar consultoria":{
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