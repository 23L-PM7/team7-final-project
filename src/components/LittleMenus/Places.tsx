import { House } from "../icons/amenitiesIcons/House";
import { Ger } from "../icons/Ger";
import { TopCity } from "../icons/TopSities";
import { CountrySide } from "../icons/CountrySide";
import { Rooms } from "../icons/Rooms";
import { Lake } from "../icons/Lake";
import { Farms } from "../icons/Farms";

export function places(){
    const places = [
        { image: <TopCity />, title: "Top city", id: "1", label: "Top city"},
        { image: <Ger />, title: "Yurts", id: "2", label: "Yurts"},
        { image: <Rooms />, title: "Rooms", id: "3", label: "Rooms"},
        { image: <CountrySide />, title: "Countryside", id: "4", label: "Countryside"},
        { image: <Lake />, title: "Lake", id: "5" ,label: "Lake"},
        { image: <Farms />, title: "Farms", id: "6", label: "Farms"},
        { image: <House />, title: "House", id: "7", label: "House"},
      ];
}