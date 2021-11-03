import { createMarkup } from 'utils/helpers';
import styles from 'styles/BasicContent.module.css';

export default function PagesBody({ content }) {
  return (
    <>
      <div className={styles.content} dangerouslySetInnerHTML={createMarkup(content)} />
      <br />
    </>
  );
}
