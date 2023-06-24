import * as React from "react";
import {NavBar} from './../../ui-components';
import { View } from '@aws-amplify/ui-react';
import './header.css';
export default function Header(props) {
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
            }
          }}
          />
        </View>
    );
}