import ErrorPage from 'components/pages/error-page';
import { ERROR_PAGE_CONTENT } from 'utils/constants';

export default function Error({ statusCode }) {
  const title = `${statusCode} Error`;
  const { subTitle, mainMessage } = ERROR_PAGE_CONTENT;

  return statusCode && <ErrorPage title={title} subTitle={subTitle} mainMessage={mainMessage} />;
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};
