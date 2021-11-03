import { createMarkup } from 'utils/helpers';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import marginStyles from 'styles/Margins.module.css';
import styles from 'styles/Matters.module.css';

export default function AttorneyProfileMatters({ content, title }) {
  return (
    <div className={marginStyles.mtMinusMd2}>
      <p className={grayTitleStyles.title}>{title}</p>
      {content.length > 0
        && content.map((c) => (
          <div key={c.content}>
            {c.title.length > 0 && (
              <h5 className="mb-3">
                <strong>{c.title}</strong>
              </h5>
            )}
            <div className={styles.container} dangerouslySetInnerHTML={createMarkup(c.content)} />
          </div>
        ))}
    </div>
  );
}
