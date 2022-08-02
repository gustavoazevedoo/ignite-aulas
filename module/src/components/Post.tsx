import { format, formatDistanceToNow } from 'date-fns';
import { ptBR } from 'date-fns/locale'
import { ChangeEvent, FormEvent, InvalidEvent, useState } from 'react';

import { Avatar } from './Avatar';
import { Comment } from './Comment';
import styles from './Post.module.css';

export interface PostProps {
  author: Author;
  content: Content[];
  publishedAt: Date
}

interface Content {
  type: 'paragraph' | 'link';
  content: string;
}

interface Author {
  avatarUrl: string;
  name: string;
  role: string;
}

interface CommentType {
  id: number;
  content: string;
  author: {
    name: string;
    avatarUrl: string;
  };
  publishedAt: Date;
}

export function Post({ author, content, publishedAt }: PostProps) {
  const [comments, setComments] = useState<CommentType[]>([]);
  const [newCommentText, setNewCommentText] = useState('');

  const isNewCommentTextEmpty = newCommentText.trim() === '';

  const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", { locale: ptBR });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBR,
    addSuffix: true
  })

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault();

    if (newCommentText.trim() === '') return;

    const newComment: CommentType = {
      id: Math.random(),
      content: newCommentText,
      author: {
        name: 'Unknown author',
        avatarUrl: 'https://github.com/phazevedo28.png',
      },
      publishedAt: new Date(),
    }

    setComments((prevState) => [...prevState, newComment]);

    setNewCommentText('');
  }

  function handleNewCommentInvalid(event: InvalidEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!')
  }

  function handleNewCommentTextChange(event: ChangeEvent<HTMLTextAreaElement>) {
    event.target.setCustomValidity('');
    setNewCommentText(event.target.value)
  }

  function deleteComment(id: number) {
    setComments(comments.filter((comment: CommentType) => comment.id !== id))
  }

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {content.map((line: Content) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          } else if (line.type === 'link') {
            return <p key={line.content}><a href="#">{line.content}</a></p>
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentTextChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button 
            type="submit"
            disabled={isNewCommentTextEmpty}
          >
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentList}>
        {comments.map((comment: CommentType) => (
          <Comment
            key={comment.id}
            id={comment.id}
            author={comment.author}
            content={comment.content}
            publishedAt={comment.publishedAt}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  );
}