import { createMarkup } from 'utils/helpers';
import marginStyles from 'styles/Margins.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function AttorneyProfileBody({ content, title }) {
  return (
    <div className={marginStyles.mtMinusMd2}>
      <p className={`${grayTitleStyles.title} text-capitalize w-100`}>{title}</p>
      <div dangerouslySetInnerHTML={createMarkup(content)} />
      <style jsx>{' div { font-size: 1rem;  } '}</style>
    </div>
  );
}
