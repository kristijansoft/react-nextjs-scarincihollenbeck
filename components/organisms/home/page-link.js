export default function HomePageLink({ link, title, margins = 'my-3' }) {
  return (
    <div className={`mx-auto d-block w-100 text-center ${margins}`}>
      <a href={link}>
        <strong>
          <u>{title}</u>
        </strong>
      </a>
      <style jsx>
        {`
          a {
            color: #db2220;
            font-size: 1.275rem;
          }
        `}
      </style>
    </div>
  );
}
