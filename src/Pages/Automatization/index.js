import React from "react";

import { 
  View, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react';
import Wavesocean from './../../Components/Wavesocean/index';
import './index.css';

function Automatization(props) {
    
  return (
    <>
      <View         
        backgroundColor={'transparent'}>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          alignContent="flex-start"
          wrap="nowrap"
          gap="0"
        >
          <View 
            width={'50%'} 
            padding={'3rem'} 
            marginTop={'3rem'}
            marginBottom={'3rem'} 
            backgroundColor={'#ffffff'}   
            boxShadow="rgba(13, 26, 38, 0.25) 0px 4px 12px 0px"         
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Automatización de procesos"
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="block"
              direction="column"
              justifyContent="unset"
              letterSpacing="0.01px"
              width="unset"
              height="unset"
              gap="unset"
              alignItems="unset"
              shrink="0"
              alignSelf="stretch"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Optimiza tus operaciones empresariales, ahorra tiempo y reduce errores al implementar nuestra solución de automatización que simplifica tareas manuales y repetitivas."
            ></Text>                
          </View>
        </Flex>        
      </View>  
      <View  
        width="100%"
        backgroundColor={"transparent"}
      >        
        <Wavesocean />
      </View>        
    </>
  );
}

export default Automatization;