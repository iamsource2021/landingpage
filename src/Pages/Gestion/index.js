import React, { useEffect } from "react";

import { 
  View, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react';

function Gestion(props) {
  useEffect(() => {
    document.title = "Gestión de clientes"
  }, []);

  return (
    <>
      <View >
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
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="25px"
              textAlign="justify"
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
              children="Gestión de clientes"
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="justify"
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
              children="La gestión de clientes es fundamental para el éxito de cualquier negocio. Nuestra solución de gestión de clientes te permite optimizar tus interacciones con los clientes, mejorar su satisfacción y fidelidad, al proporcionarte una visión completa de tu base de clientes y gestionar de manera efectiva todas las etapas del ciclo de vida del cliente."
            ></Text>  
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="justify"
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
              children="Con nuestra solución, puedes centralizar toda la información relevante de tus clientes en un solo lugar. Desde datos demográficos y de contacto hasta historial de compras y preferencias, obtendrás una visión completa de cada cliente. Esto te permite personalizar tus interacciones y ofrecer un servicio más personalizado y enfocado en sus necesidades."
            ></Text>       
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="justify"
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
              children="Además, nuestra solución te permite gestionar de manera efectiva todas las etapas del ciclo de vida del cliente. Desde la captación y adquisición de clientes potenciales hasta la retención y fidelización de clientes existentes, puedes realizar un seguimiento detallado de cada interacción y gestionar todas las actividades relacionadas con los clientes."
            ></Text>  
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="justify"
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
              children="Con la gestión de clientes, puedes automatizar procesos como el seguimiento de ventas, el envío de recordatorios y la gestión de solicitudes de servicio al cliente. Esto te ayuda a mejorar la eficiencia y la calidad de tus interacciones con los clientes, brindándoles un servicio más rápido y efectivo."
            ></Text>   
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="justify"
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
              children="Además, nuestra solución te brinda herramientas de análisis y generación de informes que te permiten obtener información valiosa sobre tus clientes. Puedes identificar patrones de compra, segmentar tu base de clientes y desarrollar estrategias de marketing más efectivas."
            ></Text>  
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="justify"
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
              children="En resumen, nuestra solución de gestión de clientes te permite optimizar tus interacciones con los clientes, mejorar su satisfacción y fidelidad al obtener una visión completa de tu base de clientes y gestionar de manera efectiva todas las etapas del ciclo de vida del cliente. Aprovecha esta herramienta para brindar un servicio excepcional y hacer crecer tu negocio."
            ></Text>                                                                     
          </View>
        </Flex>        
      </View> 
    </>
  );
}

export default Gestion;