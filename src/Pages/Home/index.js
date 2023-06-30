import React, { useState } from "react";
import {
  HeroLayout2,
  Features2x2,
  Features4x1,
  AgendarConsultoriaCreateForm
} from './../../ui-components';
import { 
  View, 
  Alert, 
  useTheme, 
  Flex, 
  Text 
} from '@aws-amplify/ui-react';
// import {
//   Link
// } from "react-router-dom";

import Wavesocean from './../../Components/Wavesocean/index';

function Home(props) {
  const { tokens } = useTheme();
  const [isLoading, setIsLoading] = useState(false);
  const [alertAlias, setAlertAlias] = useState({
    isAlertVisible: false
  });

  const handleOnSubmit = async (fields) => {
    setIsLoading(true);
    setAlertAlias({
      variation: 'success',
      heading: 'Disponible!',
      content: 'Se envio notificacion',
      isAlertVisible: true
    })
    console.log(fields);
  };

  const AlertAlias = (props) => {
    return (
      props.props.isAlertVisible ?
        <Alert
          variation={props.props.variation}
          isDismissible={true}
          hasIcon={true}
          heading={props.props.heading}
        >
          {props.props.content}
        </Alert> : null
    )
  }

  return (
    <>
      <View
        id="servicios"
        height="auto"
        width="100%"
        backgroundColor={"transparent"}
      >
        <HeroLayout2 overrides={
          {
            HeroLayout2: {
              width: "100%"              
            },
            HeroLayout3: {
              width: "100%",
              backgroundColor: "none",
              overrides:{
                "Type Lock Up":{
                  justifyContent:"unset"
                }
              }
            },
            image: { display: "none" }
          }
        } />
        <Wavesocean />
      </View>

      <View
        height="auto"
        width="100%"
        backgroundColor={tokens.colors.blue[40]}
        id="casodeuso"
      >
        <Features4x1 overrides={
          {
            Features4x1: {
               width: "100%",
               backgroundColor:"#efdeec" 
            }
          }
        } />
      </View>
      <View
        height="auto"
        width="100%"
        backgroundColor={tokens.colors.blue[40]}
        id="recursos"
      >
        <Features2x2 overrides={
          {
            Features2x2: { 
              width: "100%",
              backgroundColor:"#f7ebf5" 
            }
          }
        } />
      </View>
      <View backgroundColor={'#fff7fe'} id="agendarconsultoria">
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
              children="Agendar Consultoría Personalizada"
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
              children="Obtén asesoramiento especializado y personalizado para tu empresa. Nuestro equipo de expertos te guiará en la implementación de la transformación digital, identificando oportunidades y diseñando estrategias adaptadas a tus necesidades. ¡Aprovecha esta oportunidad y reserva tu consultoría hoy mismo! Juntos, haremos crecer tu negocio hacia nuevas alturas."
            ></Text>
            <AgendarConsultoriaCreateForm            
              onSubmit={handleOnSubmit}
              overrides={{
                "name":{
                  color:"black"
                },
                "SubmitButton": {
                  isLoading: isLoading,
                  loadingText: "Loading..."
                }
              }}
            />
            <AlertAlias props={alertAlias} />
          </View>
        </Flex>        
      </View>  

    </>
  );
}

export default Home;