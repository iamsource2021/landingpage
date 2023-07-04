import React from "react";

import { 
  View, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react';
import Wavesocean from './../../Components/Wavesocean/index';

function Webinars(props) {
    
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
              children="Webinars informativos"
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
              children="Nuestros webinars informativos te brindan la oportunidad de acceder a conocimientos de primera mano impartidos por expertos en transformación digital. Únete a nuestros webinars y descubre las estrategias y tendencias más actuales que te ayudarán a impulsar la transformación digital en tu empresa."
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
              children="En estos webinars, nuestros expertos comparten su experiencia y conocimientos sobre diversos temas relacionados con la transformación digital. Desde la adopción de tecnologías emergentes hasta la implementación de estrategias de cambio organizacional, nuestros webinars abarcan una amplia gama de temas relevantes para tu negocio."
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
              children="Durante los webinars, tendrás la oportunidad de escuchar a expertos de la industria, hacer preguntas y participar en discusiones interactivas. Aprenderás de casos de éxito reales, obtendrás información sobre las mejores prácticas y descubrirás nuevas oportunidades para aplicar la transformación digital en tu empresa."
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
              children="Además, nuestros webinars se realizan regularmente, lo que significa que siempre tendrás acceso a contenido actualizado y relevante. Puedes registrarte de forma gratuita y participar desde la comodidad de tu propia oficina o casa, sin necesidad de desplazarte."
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
              children="No te pierdas la oportunidad de acceder a conocimientos de alto valor y aprender de expertos en transformación digital. Únete a nuestros webinars informativos y mantente al tanto de las últimas estrategias y tendencias en el mundo de la transformación digital. ¡Regístrate ahora y prepárate para llevar tu empresa al siguiente nivel!"
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

export default Webinars;