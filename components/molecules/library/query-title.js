const QueryTitle = ({ title }) => (
  <p className="mt-4 mb-0 d-block">
    Results for
    {' '}
    <strong className="text-capitalize">{title}</strong>
    {' '}
    articles
    <style jsx>{' p{ font-size: 1.25rem}'}</style>
  </p>
);

export default QueryTitle;
