import React, { useState, useEffect } from "react";
import {
  HeroLayout2,
  AgendarConsultoriaCreateForm,
  ContentItemCollection, 
  CardResourceCollection
} from './../../../ui-components';
import {
  View,
  Alert,
  Flex,
  Text
} from '@aws-amplify/ui-react';
// import GA from './../../../GA';

import {
  useNavigate
} from 'react-router-dom';

import { DataStore } from 'aws-amplify';
import { AgendarConsultoria } from './../../../models/index';

export function Home(props) {
  // const { trackEvent } = GA();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [alertAlias, setAlertAlias] = useState({
    isAlertVisible: false
  });
  const [showForm, setShowForm] = useState(true)
  // const [agendarconsultoria, setAgendarconsultoria] = useState();

  useEffect(() => {
    document.title = "Home - Agendar Consultoría Personalizada"
  }, []);

  useEffect(() => {
      const sub = DataStore.observe(AgendarConsultoria).subscribe(msg => {
        console.log(msg.model, msg.opType, msg.element);
      });
      return () => {
        sub.unsubscribe();
      };
    }, []);

   /**
   * Create a new Post
   */
   async function onCreate(data) {
    await DataStore.save(
      new AgendarConsultoria({
        email: data.email,
        mobile: data.mobile,
        name: data.name,
        start:data.start,
        end:data.end
      })
    );
    // setAgendarconsultoria(a);
  }

  const handleOnAnalitics = async (event) => {
    // console.log("EVENT::",document.title);    
    // trackEvent('eventButton', 'onClick', document.title);
    navigate('/servicetransformation');
  }

  const handleOnSubmit = async (fields) => {

    setIsLoading(true);
    setAlertAlias({
      variation: 'success',
      heading: 'Disponible!',
      content: 'Se envio notificacion',
      isAlertVisible: true
    })
    await onCreate(fields);
    setIsLoading(false);
    setShowForm(false);
    
  };

  const AlertAlias = (props) => {
    return (
      props.props.isAlertVisible ?
        <Alert
          variation={props.props.variation}
          isDismissible={true}
          hasIcon={true}
          heading={props.props.heading}
          marginTop={'3rem'}
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
      >
        <HeroLayout2 backgroundColor="#ffffff" overrides={
          {
            HeroLayout2: {
              width: "100%"
            },
            HeroLayout3: {
              width: "100%",
              overrides: {
                "Type Lock Up": {
                  justifyContent: "unset",
                },
                Button: {
                  onClick: handleOnAnalitics
                }
              }
            },
            image: { display: "none" },

          }
        } />
      </View>

      <View
        height="auto"
        width="100%"
        id="casodeuso"
      >

        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="3rem"
        >
          <ContentItemCollection overrideItems={({ item, index }) => ({
            handleContent: () => navigate(item.attributes.url)
          })} />
        </Flex>
      </View>

      <View
        height="auto"
        width="100%"
        id="recursos"
        backgroundColor={'#eff0f0'}
      >

        <Flex
          gap="24px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="3rem"
        >
          <CardResourceCollection overrideItems={({ item, index }) => ({
            handleContent: () => navigate(item.attributes.url)
          })} />
        </Flex>
      </View>      
      <View id="agendarconsultoria">
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
            boxShadow="rgba(13, 26, 38, 0.25) 0px 4px 12px 0px"
          >
            <Text
              fontFamily="Inter"
              fontSize="20px"
              fontWeight="700"
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
            {showForm &&
            <AgendarConsultoriaCreateForm
              onSubmit={handleOnSubmit}
              overrides={{
                "name": {
                  color: "black"
                },
                "SubmitButton": {
                  isLoading: isLoading,
                  loadingText: "Loading..."
                }
              }}
            />}
            
            <AlertAlias props={alertAlias} />
          </View>
        </Flex>
      </View>

    </>
  );
}