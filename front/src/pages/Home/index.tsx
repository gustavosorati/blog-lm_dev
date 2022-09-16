import { Header } from "../../components/Header";
import { Hero } from "./components/Hero";
import { TrendingRecipes } from "./components/TrendingRecipes";
import { HomeContent, HomeTrendingContainer } from "./styles";



export function Home() {
    return (
        <>
            <Header />
            <Hero />

            <HomeContent className="container">
                <HomeTrendingContainer>
                    <TrendingRecipes />
                    <TrendingRecipes />
                    <TrendingRecipes />
                    <TrendingRecipes />
                </HomeTrendingContainer>

                <div>HOME</div>
            </HomeContent>
        </>
    )
}