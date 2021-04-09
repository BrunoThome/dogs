import React from 'react';
import { COMMENT_PHOST } from '../../Api';
import { ReactComponent as Enviar } from '../../Assets/enviar.svg';
import useFetch from '../../Hooks/useFetch';
import Error from '../Helper/Error';
import styles from './PhotoCommentsForm.module.css';

const PhotoCommentsForm = ({ id, setComments }) => {
  const token = window.localStorage.getItem('token');
  const { request, loading, error } = useFetch();
  const [comment, setComment] = React.useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    const { url, options } = COMMENT_PHOST(id, { comment }, token);
    const { response, json } = await request(url, options);
    if (response.ok) {
      setComment('');
      setComments((comments) => [...comments, json]);
    }
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <textarea
        id="comment"
        name="comment"
        placeholder="Comente..."
        value={comment}
        onChange={({ target }) => setComment(target.value)}
        className={styles.textarea}
      ></textarea>

      {loading ? (
        <button className={styles.button} disabled>
          <Enviar />
        </button>
      ) : (
        <button className={styles.button}>
          <Enviar />
        </button>
      )}

      <Error error={error} />
    </form>
  );
};

export default PhotoCommentsForm;
