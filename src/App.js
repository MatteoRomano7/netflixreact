import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import MyNav from "./components/MyNav"
import TVShowsSection from "./components/TvShowsSection"
import TrendingCarousel from "./components/TrendingCarousel"
import SuggestedCarousel from "./components/SuggestedCarousel"
import LastCarousel from "./components/LastCarousel"
import MyFooter from "./components/MyFooter"
import CommentArea from "./components/CommentArea"

function App() {
  return (
    <div class="bg-dark">
      <header>
        <MyNav />
      </header>
      <main>
        <br />
        <br />
        <TVShowsSection />
        <TrendingCarousel />
        <SuggestedCarousel />
        <LastCarousel />
        <CommentArea />
      </main>
      <footer>
        <MyFooter />
      </footer>
    </div>
  )
}

export default App
