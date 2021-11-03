import TabPane from 'react-bootstrap/TabPane';
import pageContentStyles from 'styles/PageContent.module.css';
import { createMarkup } from 'utils/helpers';

export default function SinglePracticeContent({ content, tabTitle, title }) {
  return (
    <TabPane eventKey={tabTitle} title={title}>
      <div
        className={`${pageContentStyles.p} mt-3`}
        dangerouslySetInnerHTML={createMarkup(content)}
      />
    </TabPane>
  );
}
