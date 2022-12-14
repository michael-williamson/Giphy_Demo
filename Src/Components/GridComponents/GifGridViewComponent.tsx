import React from "react";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { INDIVIDUAL_GIF_SCREEN } from "../../VariableConstants/VARIABLE_CONSTANTS";

export type Props = {
  children: JSX.Element[] | JSX.Element | string;
  item: any;
  numColumns: number;
  windowHeight: number;
  windowWidth: number;
  updateCurrentMedia: Function;
  navigation: any;
};

export const GifGridViewComponent: React.FC<Props> = ({
  item,
  numColumns,
  windowWidth,
  updateCurrentMedia,
  navigation,
}) => {
  // on the images object there are many choices of images dimensions along with file size
  // here are some possibilities "downsized_small", "downsized",
  const imageObject = item.images.downsized;
  if (
    imageObject === undefined ||
    Object.values(imageObject).find((item) => item === undefined) ||
    Object.values(imageObject).length === 0
  ) {
    return <View></View>;
  }

  const width = parseInt(imageObject.width);
  const maxWidth = windowWidth / numColumns;
  const height = parseInt(imageObject.height);
  let aspectWidth = width < maxWidth ? width : maxWidth;
  const aspectRatio = aspectWidth / height;
  const heightAdjusted = height * aspectRatio;

  return (
    <Pressable
      key={item.id}
      onPress={() => {
        updateCurrentMedia({
          id: item.id,
          url: item.url,
          aspectRatio: width / height,
        });

        navigation.navigate(INDIVIDUAL_GIF_SCREEN);
      }}
      style={style.button}
    >
      <Image
        source={{ uri: imageObject.url }}
        style={{
          maxWidth: maxWidth,
          width: width,
          height: heightAdjusted,
        }}
      />
    </Pressable>
  );
};

const style = StyleSheet.create({
  button: {
    alignItems: "center",
    flex: 1,
  },
});
