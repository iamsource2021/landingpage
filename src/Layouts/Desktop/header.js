import * as React from "react";
import {NavBar} from './../../ui-components';
import { View, Link} from '@aws-amplify/ui-react';


export default function Header(props) {
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
          overrides={{
            "logo 1":{
              src:"/images/logo_transparent.png",
            },
            image:{
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