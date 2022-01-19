import Categories from "./Categories";
import Comments from "./Comments";
import Hero from "./Hero";

export default function Main(props) {
  return (
    <>
      <Hero />
      <Categories {...props} />
      <Comments />
    </>
  );
}
