import { Flex, View, Link, useTheme } from '@aws-amplify/ui-react';

import { Home } from './components/Home';
import { Analisis } from './components/Analisis';
import { ServiceTransformation } from './components/ServiceTransformation';
import { Automatization } from './components/Automatization';
import { Colaboracion } from './components/Colaboracion';
import { Gestion } from './components/Gestion';
import { Guias } from './components/Guias';
import { Webinars } from './components/Webinars';
import { Estudiocasos } from './components/Estudiocasos';
import { Ebooks } from './components/Ebooks';
import { ScrollToTopOnNavigate } from './components/ScrollToTopOnNavigate';
import { AnimatedRoute } from './components/AnimatedRoute';
import GA from './../../GA';
import {
  Outlet,
  BrowserRouter,
  Routes,
  Route,
  useNavigate
} from 'react-router-dom';

import React, {useEffect} from 'react';
import { NavBar, MarketingFooter } from './../../ui-components';

const LinkAlias = (props) => {
  return (
    <Link
      href={props.href}>
      {props.children}
    </Link>
  )
}

function Footer(props) {
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

function Layout(props, ref) {
  const { trackPageView } = GA();
  const navigate = useNavigate();

  useEffect(() => {
    trackPageView(window.location.pathname + window.location.search);
  }, [trackPageView]);

  return (
    <>
      <View
        height="auto"
        width="100%"
      >
        <NavBar
          width={'auto'}
          overrides={{
            "logo 1": {
              src: "/images/logo_transparent.png",
              onClick: () => { navigate('/') }
            },
            image: {
              display: "none"
            },
            Icon: {
              display: "none"
            },
            SearchField: {
              label: "Buscar",
              placeholder: "Buscar...",
              size: "small",
              variation: "quiet",
              hasSearchButton: false,
              hasSearchIcon: true
            },
            Servicios: {
              children:
                <LinkAlias
                  href={'/#servicios'}
                  children={'Servicios'}
                />
            },
            "Casos de uso": {
              children:
                <LinkAlias
                  href={'/#casodeuso'}
                  children={'Casos de uso'}
                />
            },
            Recursos: {
              children:
                <LinkAlias
                  href={'/#recursos'}
                  children={'Recursos'}
                />
            },
            "Agendar consultoria": {
              children:
                <LinkAlias
                  href={'/#agendarconsultoria'}
                  children={'Agendar consultoria'}
                />
            }
          }}
        />
      </View>
      <AnimatedRoute>
        <Outlet />
      </AnimatedRoute>
      <Footer />
    </>
  );
}

function MyRoutes() {
  return (
    <>
      <ScrollToTopOnNavigate />
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route exact path="/analisis" element={<Analisis />} />
          <Route exact path="/servicetransformation" element={<ServiceTransformation />} />
          <Route exact path="/automatization" element={<Automatization />} />
          <Route exact path="/colaboracion" element={<Colaboracion />} />
          <Route exact path="/gestion" element={<Gestion />} />
          <Route exact path="/guias" element={<Guias />} />
          <Route exact path="/webinars" element={<Webinars />} />
          <Route exact path="/estudiocasos" element={<Estudiocasos />} />
          <Route exact path="/ebooks" element={<Ebooks />} />
        </Route>
      </Routes>
    </>
  );
}

function Desktoplanding(props) {
  return (
    <Flex
      direction="column"
      justifyContent="flex-start"
      alignItems="stretch"
      alignContent="flex-start"
      wrap="nowrap"
      gap="0"
    >
      <BrowserRouter>
        <MyRoutes />
      </BrowserRouter>
    </Flex>
  );
}

export default Desktoplanding;