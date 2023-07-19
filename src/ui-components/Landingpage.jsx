/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Flex, View } from "@aws-amplify/ui-react";
export default function Landingpage(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1440px"
      height="2400px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "Landingpage")}
      {...rest}
    >
      <Flex
        width="1440px"
        height="unset"
        {...getOverrideProps(overrides, "Features4x1")}
      ></Flex>
      <Flex
        width="1480px"
        height="unset"
        {...getOverrideProps(overrides, "Features2x2")}
      ></Flex>
      <View
        width="1440px"
        height="858px"
        {...getOverrideProps(overrides, "HeroLayout2")}
      ></View>
      <Flex
        width="272px"
        height="unset"
        {...getOverrideProps(overrides, "Card37002709")}
      ></Flex>
      <Flex
        width="272px"
        height="unset"
        {...getOverrideProps(overrides, "Card37002710")}
      ></Flex>
      <Flex
        width="272px"
        height="unset"
        {...getOverrideProps(overrides, "Card37002711")}
      ></Flex>
      <Flex
        width="272px"
        height="unset"
        {...getOverrideProps(overrides, "Card37002712")}
      ></Flex>
      <Flex
        width="1440px"
        height="unset"
        {...getOverrideProps(overrides, "NavBar")}
      ></Flex>
    </View>
  );
}
