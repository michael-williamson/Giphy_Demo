import React, { useState, useDeferredValue, useEffect } from "react";
import {
  TextInput,
  View,
  Text,
  FlatList,
  Pressable,
  useWindowDimensions,
  ListRenderItem,
} from "react-native";
import { useCurrentMediaContextUpdater } from "../State_Management/CurrentMediaState";
import { keys } from "../../keys";
import { GifGridViewComponent } from "../Components/GridComponents/GifGridViewComponent";
import { theme } from "../../theme";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../Navigation/NavigationStack";

const columnsNumberArray = [1, 2, 3, 4];

type Props = NativeStackScreenProps<RootStackParamList, "GiphyGridScreen">;

export const GiphyGridScreen: React.FC<Props> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>("Dog");
  const defferedSearchQuery = useDeferredValue<string>(searchQuery);
  const currentMediaContextUpdater = useCurrentMediaContextUpdater();
  const [columns, setColumns] = useState(1);
  const [gifs, setGifs] = useState<Array<any>>([]);
  const { height, width } = useWindowDimensions();
  const [offset, setOffset] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [paginationArray, setPaginationArray] = useState<Array<number>>([]);

  useEffect(() => {
    async function searchGifs() {
      //api search endpoint returns {data:array of object,pagination:Pagination Object,meta:Meta Object}
      //--> for each object in data array, the properties {id,images} where images is an object containing
      //--> various image sizes & url sources making up their own objects
      // `${BASE_URL}?api_key=${API_KEY}&q=${defferedSearchQuery}&limit=20`
      try {
        const API_KEY = keys.GIPHY_DEMO_API_KEY;
        const BASE_URL = "http://api.giphy.com/v1/gifs/search";
        const limit = 20;
        const resJson = await fetch(
          `${BASE_URL}?api_key=${API_KEY}&q=${defferedSearchQuery}&limit=${limit}&offset=${offset}`
        );
        const res = await resJson.json();
        const total = parseInt(res.pagination.total_count);
        const numPages = total / limit > 10 ? 10 : total / limit;
        setGifs(res.data);
        paginationArray.length !== numPages &&
          setPaginationArray(Array(numPages));
      } catch (error) {
        console.warn(error);
      }
    }
    searchGifs();
  }, [defferedSearchQuery, offset]);

  const renderGifGridView: ListRenderItem<any> = ({
    item,
    index,
    separators,
  }) => {
    return (
      <GifGridViewComponent
        item={item}
        children={""}
        numColumns={columns}
        windowHeight={height}
        windowWidth={width}
        updateCurrentMedia={currentMediaContextUpdater}
        navigation={navigation}
      />
    );
  };

  const renderPaginationList: ListRenderItem<any> = ({
    item,
    index,
    separators,
  }) => {
    // index type is a number & accepts addition operator
    const page = index + 1;
    // depending on pagination button touched, api call will use offset amount to
    //--> retrieve from that offset position, & to note that the starting offset is 0
    const offsetAmount = page * 20 - 1;
    return (
      <Pressable
        onPress={() => {
          setOffset(offsetAmount);
          setCurrentPage(page);
        }}
        key={index}
        style={{ marginHorizontal: 5, flex: 1 }}
      >
        <Text
          style={{
            fontSize: 30,
            color: currentPage === page ? "white" : "black",
            paddingHorizontal: 10,
            backgroundColor:
              currentPage === page ? theme.colorsObject.blue : "transparent",
          }}
        >
          {index + 1}
        </Text>
      </Pressable>
    );
  };

  function handleTextInput(text: string) {
    setSearchQuery(text);
  }

  return (
    <View style={{ flex: 1 }}>
      <View style={{ marginTop: 10 }}>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Search Gifs
        </Text>
        <TextInput
          autoFocus
          onChangeText={handleTextInput}
          placeholder="Search..."
          value={searchQuery}
          style={{
            color: "white",
            borderColor: "black",
            backgroundColor: "black",
            marginTop: 10,
            marginBottom: 10,
            marginLeft: "auto",
            marginRight: "auto",
            width: "95%",
          }}
        />
      </View>
      <View style={{ paddingVertical: 10 }}>
        <View>
          <Text
            style={{
              color: "black",
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              marginBottom: 10,
            }}
          >
            No. of Columns
          </Text>
        </View>
        <View style={{ alignItems: "center" }}>
          <FlatList
            data={columnsNumberArray}
            keyExtractor={(item) => `${item}`}
            renderItem={({ item }) => (
              <Pressable onPress={() => setColumns(item)}>
                <Text
                  style={{
                    fontSize: 30,
                    color: columns === item ? "white" : "black",
                    paddingHorizontal: 10,
                    backgroundColor:
                      columns === item
                        ? theme.colorsObject.blue
                        : "transparent",
                    marginHorizontal: 10,
                    marginBottom: 10,
                  }}
                >
                  {item}
                </Text>
              </Pressable>
            )}
            horizontal={true}
          />
        </View>
      </View>

      <FlatList
        data={gifs}
        numColumns={columns}
        key={columns}
        renderItem={renderGifGridView}
        style={{ flexGrow: 0 }}
      />

      <View>
        <Text
          style={{
            color: "black",
            fontSize: 20,
            fontWeight: "bold",
            textAlign: "center",
            marginBottom: 10,
          }}
        >
          Pages
        </Text>

        <FlatList
          data={paginationArray}
          renderItem={renderPaginationList}
          horizontal={true}
          style={{ flexGrow: 0 }}
        />
      </View>
    </View>
  );
};
