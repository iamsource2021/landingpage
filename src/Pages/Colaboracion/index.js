import React, { useEffect } from "react";

import { 
  View, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react';
function Colaboracion(props) {

  useEffect(() => {
    document.title = "Colaboración en la nube"
  }, []);

  return (
    <>
      <View>
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
              children="Colaboración en la nube"
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
              children="La colaboración en la nube es esencial para mejorar la comunicación y la productividad en los equipos de trabajo. Nuestra solución de colaboración en la nube te permite trabajar en tiempo real en documentos y proyectos compartidos, lo que facilita un flujo de trabajo eficiente y sin problemas."
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
              children="Con nuestra solución, puedes crear, editar y compartir documentos en la nube, lo que significa que todos los miembros del equipo tienen acceso instantáneo a la última versión de los archivos. Ya no es necesario enviar archivos por correo electrónico o preocuparse por versiones desactualizadas. Todos pueden colaborar de manera simultánea en tiempo real, lo que mejora la eficiencia y evita confusiones."
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
              children="Además, nuestra solución de colaboración en la nube facilita la comunicación y la interacción entre los miembros del equipo. Puedes comentar y discutir los documentos directamente en la plataforma, lo que fomenta la colaboración y permite tomar decisiones de manera más rápida y efectiva. También puedes asignar tareas, establecer plazos y dar seguimiento al progreso de los proyectos, todo en un solo lugar."
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
              children="La colaboración en la nube también permite la integración con otras herramientas y aplicaciones que utilizas en tu trabajo diario. Puedes sincronizar tus calendarios, gestionar tus tareas y compartir información con facilidad, lo que simplifica el flujo de trabajo y optimiza la productividad."
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
              children="Además, la colaboración en la nube brinda flexibilidad y accesibilidad. Puedes acceder a tus documentos y proyectos desde cualquier lugar y en cualquier dispositivo, lo que te permite trabajar de forma remota y estar siempre conectado con tu equipo."
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
              children="En resumen, nuestra solución de colaboración en la nube mejora la comunicación y la colaboración entre equipos al proporcionar un entorno de trabajo compartido en tiempo real. Facilita un flujo de trabajo eficiente y sin problemas, permitiendo a tu equipo trabajar juntos de manera más efectiva y lograr resultados sobresalientes. Aprovecha la colaboración en la nube y lleva la productividad de tu equipo al siguiente nivel."
            ></Text>                                                         
          </View>
        </Flex>        
      </View>          
    </>
  );
}

export default Colaboracion;