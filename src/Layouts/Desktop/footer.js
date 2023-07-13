import * as React from "react";
import { MarketingFooter } from './../../ui-components';
import { View, useTheme, Link } from '@aws-amplify/ui-react';

function Footer(props) {
    const { tokens } = useTheme();
    const LinkAlias = (props) => {
        return (
            <Link 
              href={props.href}>
                    {props.children}
            </Link>
        )
      }    
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
                    "Lorem ipsum dolor sit amet29766990":{
                        children:
                        <LinkAlias 
                            href={'/guias'} 
                            children={'Guía de mejores prácticas'}
                        />
                    },
                    "Consectetur adipiscing29766991":{
                        children:
                        <LinkAlias 
                            href={'/estudiocasos'} 
                            children={'Estudios de caso'}
                        />
                    },
                    "Elit sed do eiusmod29766992":{
                        children:
                        <LinkAlias 
                            href={'/webinars'} 
                            children={'Webinar informativo'}
                        />
                    },
                    "Tempor incididunt ut labore":{
                        children:
                        <LinkAlias 
                            href={'/ebooks'} 
                            children={'Ebook especializado'}
                        />
                    },
                    "Et dolore magna":{
                        children:
                        <LinkAlias 
                            href={'/analisis'} 
                            children={'Artículo destacado'}
                        />
                    },
                    "Lorem ipsum dolor sit amet29766996":{
                        children:
                        <LinkAlias 
                            href={'/recursos'} 
                            children={'Recursos de automatización'}
                        />
                    },
                    "Consectetur adipiscing29766997":{
                        children:
                        <LinkAlias 
                            href={'/plantillas'} 
                            children={'Plantillas y herramientas'}
                        />                        
                    },
                    "Elit sed do eiusmod29766998":{
                        children:
                        <LinkAlias 
                            href={'/infografia'} 
                            children={'Infografía informativa'}
                        />                            
                    },
                    "Lorem ipsum dolor sit amet 2021":{
                        children:
                        <LinkAlias 
                            href={'/infografia'} 
                            children={'© 2023 Eduardooa. Todos los derechos reservados.'}
                        />                        
                    }
                }
            } />
        </View>
    );
}

export default Footer;