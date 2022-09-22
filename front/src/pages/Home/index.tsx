import { Header } from "../../components/Header";
import { Posts } from "../../components/Posts";
import { Widget } from "../../components/Widget";
import { Hero } from "./components/Hero";
import { Slider } from "./components/Slider";
import { TrendingRecipes } from "./components/TrendingRecipes";
import { Circle, HomeContent, HomeTrendingContainer } from "./styles";



export function Home() {
    return (
        <>
            <Header />
            {/* <Slider /> */}
            {/* <Hero /> */}

            <HomeContent className="container">
              <Posts />
            </HomeContent>

            {/* <Widget /> */}
            {/* <Circle /> */}
        </>
    )
}
