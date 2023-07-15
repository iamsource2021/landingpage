import React, { useEffect } from "react";

import { 
  View, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react';

function Ebooks(props) {
  useEffect(() => {
    document.title = "Ebooks especializados"
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
              children="Ebooks especializados"
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
              children="Nuestros ebooks especializados te ofrecen la oportunidad de descargar contenido de calidad que profundiza en temas clave de transformación digital. Estos ebooks te brindarán conocimientos valiosos y te ayudarán a tomar decisiones informadas para impulsar la transformación digital en tu empresa."
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
              children="Cada ebook está diseñado para proporcionarte información detallada y práctica sobre temas específicos relacionados con la transformación digital. Desde estrategias de implementación hasta tecnologías disruptivas y tendencias emergentes, nuestros ebooks cubren una amplia gama de temas relevantes para tu negocio."
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
              children="Al descargar nuestros ebooks, tendrás acceso a información de expertos en la industria que han investigado y recopilado los últimos avances y mejores prácticas en transformación digital. Aprenderás sobre los beneficios, los desafíos y las oportunidades que la transformación digital presenta, y cómo puedes aplicar estos conocimientos en tu propia organización."
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
              children="Además, nuestros ebooks están diseñados para ser fáciles de leer y comprender, con un enfoque claro en brindar información práctica y accionable. Cada ebook te brindará consejos, estrategias y ejemplos reales que puedes aplicar directamente en tu negocio."
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
              children="No pierdas la oportunidad de adquirir conocimientos especializados y tomar decisiones informadas sobre la transformación digital en tu empresa. Descarga nuestros ebooks especializados y amplía tus conocimientos para llevar tu negocio al siguiente nivel."
            ></Text>                                                               
          </View>
        </Flex>        
      </View>  
    </>
  );
}

export default Ebooks;