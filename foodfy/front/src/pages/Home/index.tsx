import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { Widget } from "../../components/Widget";
import { Slider } from "./components/Slider";
import { TrendingRecipes } from "./components/TrendingRecipes";
import {  HomeContent, HomeTrendingContainer } from "./styles";



export function Home() {
    return (
        <>
            <Header />
            {/* <Slider /> */}

            <HomeContent className="container">
              <Posts />
            </HomeContent>

            {/* <Widget /> */}
            {/* <Circle /> */}
        </>
    )
}
