import Featured from "./feature";
import List from "./list";
import Navbar from "./navbar";

function Home(){
  return (
    <div className="home">
      <Navbar/>
      <Featured/>
      <List title="Netflix Originals" param="originals"/>
      <List title="Trending Now" param="trending"/>
      <List title="Now Playing" param="now_playing"/>
      <List title="popular" param="popular"/>
      <List title="Top Rated" param="top_rated"/>
      <List title="Upcoming" param="upcoming"/>

    </div>
  );
}
export default Home;