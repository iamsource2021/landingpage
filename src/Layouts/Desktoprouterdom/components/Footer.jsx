import { View, Link, useTheme} from '@aws-amplify/ui-react';
import {
  useNavigate
} from 'react-router-dom';
import React from 'react';
import { MarketingFooter } from './../../../ui-components';

export function Footer(props) {
    const { tokens } = useTheme();
    const navigate = useNavigate();
    return (
      <View
        height="100%"
        width="100%"
        backgroundColor={tokens.colors.blue[60]}
      >
        <MarketingFooter overrides={
          {
            MarketingFooter: { width: "100%" },
            "Rectangle 738": { width: "100%", height: "auto" },
            "Lorem ipsum dolor sit amet29766990": {
              children:
                <Link
                  onClick={() => navigate('/guias')}
                  children={'Guía de mejores prácticas'} />
            },
            "Consectetur adipiscing29766991": {
              children:
                <Link
                  onClick={() => navigate('/estudiocasos')}
                  children={'Estudios de caso'} />
  
            },
            "Elit sed do eiusmod29766992": {
              children:
                <Link
                  onClick={() => navigate('/webinars')}
                  children={'Webinar informativo'} />
            },
            "Tempor incididunt ut labore": {
              children:
                <Link
                  onClick={() => navigate('/ebooks')}
                  children={'Ebook especializado'} />
            },
            "Et dolore magna": {
              children:
                <Link
                  onClick={() => navigate('/analisis')}
                  children={'Artículo destacado'} />
            },
            "Lorem ipsum dolor sit amet29766996": {
              children:
                <Link
                  onClick={() => navigate('/recursos')}
                  children={'Recursos de automatización'} />
            },
            "Consectetur adipiscing29766997": {
              children:
                <Link
                  onClick={() => navigate('/plantillas')}
                  children={'Plantillas y herramientas'} />
            },
            "Elit sed do eiusmod29766998": {
              children:
                <Link
                  onClick={() => navigate('/infografia')}
                  children={'Infografía informativa'} />
            },
            "Lorem ipsum dolor sit amet 2021": {
              children:
                <Link
                  onClick={() => navigate('/infografia')}
                  children={'© 2023 Eduardooa. Todos los derechos reservados.'} />
  
            }
          }
        } />
      </View>
    );
  }