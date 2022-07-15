import { Header } from "./components/Header";
import { Post } from "./Post"

import './global.css';

import styles from './App.module.css';
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post
            author="Gustavo"
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Est facere magni quo et nisi eligendi officia maxime unde, laudantium sapiente! Neque in laboriosam suscipit praesentium eaque reiciendis atque aliquid adipisci."
          />
          
          <Post
            author="Diego"
            content="Um post muito fera!"
          />
        </main>
      </div>
    </div>
  )
}

export default App
