import React from "react";

import { 
  View, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react';
import Wavesocean from './../../Components/Wavesocean/index';

function Guias(props) {
    
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
            width={'80%'} 
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
              marginBottom={'1rem'}
              children="Guías prácticas"
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
              marginBottom={'1rem'}
              children="Nuestras guías prácticas te brindan acceso a conocimientos y consejos expertos para optimizar tus procesos empresariales y alcanzar el éxito. Descarga nuestras guías y descubre las mejores prácticas que te ayudarán a mejorar la eficiencia de tu negocio."
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
              marginBottom={'1rem'}
              children="En estas guías, encontrarás información detallada sobre una variedad de temas relevantes para tu empresa. Desde estrategias de marketing y gestión de proyectos hasta desarrollo de liderazgo y mejora de la productividad, nuestras guías prácticas cubren una amplia gama de áreas empresariales."
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
              marginBottom={'1rem'}
              children="Cada guía está diseñada para ser práctica y fácil de entender. Te proporcionamos consejos accionables, ejemplos reales y herramientas prácticas que puedes aplicar directamente en tu negocio. Ya sea que seas un emprendedor, un propietario de una pequeña empresa o un ejecutivo de alto nivel, nuestras guías te brindarán ideas y enfoques prácticos para impulsar tu negocio."
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
              marginBottom={'1rem'}
              children="Además, nuestras guías se actualizan regularmente para mantenerte al tanto de las últimas tendencias y prácticas empresariales. Puedes acceder a ellas en formato descargable, lo que te permite consultarlas en cualquier momento y en cualquier lugar, incluso sin conexión a internet."
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
              marginBottom={'1rem'}
              children="No pierdas la oportunidad de obtener conocimientos valiosos y consejos prácticos para llevar tu negocio al siguiente nivel. Descarga nuestras guías prácticas y comienza a optimizar tus procesos empresariales hoy mismo."
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

export default Guias;