import React from "react";
import { Image, Pressable, Text, View } from "react-native";
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
  // width & height properties on image object are typeof string & need to be converted to an integer
  const width = parseInt(imageObject.width);
  const maxWidth = windowWidth / numColumns;
  const height = parseInt(imageObject.height);
  let aspectWidth = width < maxWidth ? width : maxWidth;
  const aspectRatio = aspectWidth / height;
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
      style={{ alignItems: "center", flex: 1 }}
    >
      <Image
        source={{ uri: imageObject.url }}
        style={{
          maxWidth: maxWidth,
          width: width,
          height: height * aspectRatio,
        }}
      />
    </Pressable>
  );
};
