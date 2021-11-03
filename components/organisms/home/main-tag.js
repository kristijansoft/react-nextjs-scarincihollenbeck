export default function HomeMainTag() {
  return (
    <div className="my-5 text-center">
      <h1 className="h3">
        <strong>
          As one of the most dynamic law firms in the New Jersey/New York Metropolitan Region, the
          attorneys at Scarinci Hollenbeck provide a broad range of legal services to a diverse
          group of clients.
        </strong>
      </h1>
      <h2 className="my-4 h4">
        <strong>
          We support and advance our clients’ initiatives through innovative solutions to complex
          legal problems.
        </strong>
      </h2>
      <style jsx>
        {`
          h1 {
            font-size: 2rem;
            line-height: 1.2
            font-weight: 300;
          }
          h2 {
            color: #db2220;
          }
        `}
      </style>
    </div>
  );
}
