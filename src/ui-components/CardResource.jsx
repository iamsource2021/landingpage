/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function CardResource(props) {
  const { resources, handleContent, overrides, ...rest } = props;
  return (
    <View
      width="548px"
      height="318px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      margin="1rem"
      onClick={handleContent}
      {...getOverrideProps(overrides, "CardResource")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(48,64,80,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        letterSpacing="0.01px"
        width="468px"
        height="72px"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="206px"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        isTruncated={true}
        children={resources?.description}
        {...getOverrideProps(
          overrides,
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation."
        )}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="24px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="30px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="468px"
        height="unset"
        gap="unset"
        alignItems="unset"
        position="absolute"
        top="160px"
        left="40px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={resources?.title}
        {...getOverrideProps(overrides, "Feature AB")}
      ></Text>
    </View>
  );
}
