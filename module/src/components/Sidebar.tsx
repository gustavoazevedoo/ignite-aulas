import { PencilLine } from 'phosphor-react';
import { Avatar } from './Avatar';

import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <img className={styles.cover} src="https://lh3.googleusercontent.com/pw/AM-JKLWRn_9i89wTmfAKg5v3fi9PpGrMS-k2BXHZnQaMEVCW23rRlBMORj3XCyUo3Zde1ENgz2OQHAFqNpeHePv9F3Wddh56mRnh4ChRzs1DbnFfs9OZneo-3a9_DzzkP-VU16kBFAQdEGfBbH8rTHcqLew0TQ=w500-h732-no?authuser=0" />

      <div className={styles.profile}>
        <Avatar src="https://github.com/gustavoazevedoo.png" />

        <strong>Gustavo Azevedo</strong>
        <span>Web Developer</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} />
          Editar seu perfil
        </a>
      </footer>
    </aside>
  );
}