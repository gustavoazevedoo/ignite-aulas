import { Header } from "./components/Header";
import { Post } from "./Post"

import './global.css';

function App() {
  return (
    <div>
      <Header />
      <Post
        author="Gustavo"
        content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere magni quo et nisi eligendi officia maxime unde, laudantium sapiente! Neque in laboriosam suscipit praesentium eaque reiciendis atque aliquid adipisci."
      />
      <Post 
        author="Diego"
        content="Um post muito fera!"
      />
    </div>
  )
}

export default App
