import React, { useEffect } from "react";

import { 
  View,
  Flex, 
  Text 
} from '@aws-amplify/ui-react';

export function ServiceTransformation(props) {
  useEffect(() => {
    document.title = "Agendar Consultoría Personalizada"
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
              marginBottom="1rem"
              children="Agendar Consultoría Personalizada"
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
              marginBottom="1rem"
              children="La transformación digital es un proceso clave para las empresas que desean adaptarse y prosperar en la era digital en constante evolución. Nuestra solución está diseñada para ayudar a las empresas en su camino hacia la transformación digital de manera efectiva y exitosa."
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
              marginBottom="1rem"
              children="Con nuestra solución, ofrecemos un conjunto integral de herramientas y servicios que permiten a las empresas abordar los desafíos y aprovechar las oportunidades de la era digital. Nuestro enfoque se centra en la optimización de los procesos empresariales, la mejora de la eficiencia y la maximización del potencial de crecimiento."
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
              marginBottom="1rem"
              children="Al adoptar nuestra solución, las empresas pueden experimentar una serie de beneficios transformadores. Les proporcionamos las herramientas necesarias para digitalizar y automatizar los procesos internos, lo que resulta en una mayor productividad, una reducción de errores y una mayor eficiencia operativa."
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
              marginBottom="1rem"
              children="Además, ayudamos a las empresas a mejorar su capacidad para recopilar, analizar y utilizar datos en tiempo real. Esto les permite tomar decisiones más informadas y basadas en datos, identificar nuevas oportunidades de mercado y ofrecer una mejor experiencia a sus clientes."
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
              marginBottom="1rem"
              children="La transformación digital no se trata solo de implementar nuevas tecnologías, sino también de fomentar una cultura de cambio y adaptabilidad en toda la organización. Nuestra solución está diseñada para facilitar este cambio, brindando capacitación y soporte continuos para garantizar una transición suave y exitosa."
            ></Text>  
                                          
          </View>
        </Flex>        
      </View>  
     
    </>
  );
}