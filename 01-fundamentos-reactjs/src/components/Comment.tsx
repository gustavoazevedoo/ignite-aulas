import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { ThumbsUp, Trash } from 'phosphor-react';
import { useState } from 'react';

import { Avatar } from './Avatar';

import styles from './Comment.module.css';

interface CommentProps {
  id: number;
  author: {
    name: string;
    avatarUrl: string;
  },
  content: string;
  publishedAt: Date;
  onDeleteComment: (id: number) => void;
}

export function Comment({ id, author, content, publishedAt, onDeleteComment }: CommentProps) {
  const [clapCount, setClapCount] = useState(0);

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleClapComment() {
    setClapCount((prevState) => prevState + 1);
  }

  function handleDeleteComment() {
    onDeleteComment(id);
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src={author.avatarUrl} />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>{author.name}</strong>
              <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
            </div>

            <button 
              title='Deletar comentário'
              onClick={handleDeleteComment}
            >
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleClapComment}>
            <ThumbsUp />
            Aplaudir <span>{clapCount}</span>
          </button>
        </footer>
      </div>
    </div>
  );
}