import Image from 'next/image';
import Link from 'next/link';
import Button from 'react-bootstrap/Button';
import { createMarkup } from 'utils/helpers';
import fontStyles from 'styles/Fonts.module.css';

export default function MainArticle({
  title, link, description, date, image, author,
}) {
  return (
    <>
      <Link href={link}>
        <a className="text-dark">
          <h3 className={`mb-4 ${fontStyles.ft22rem}`}>
            <strong>{title}</strong>
          </h3>
          <Image src={image} alt={title} width={750} height={350} />
        </a>
      </Link>
      <p className={`${fontStyles.ft12rem} my-3`}>
        <strong>Author: </strong>
        {' '}
        {author}
        <span className="ml-5">
          <strong>Date:</strong>
          {' '}
          {date}
        </span>
      </p>
      {description.map((content) => (
        <div
          key={content}
          className={`${fontStyles.ft11rem} pr-4`}
          dangerouslySetInnerHTML={createMarkup(content)}
        />
      ))}
      <Button variant="danger" className={`${fontStyles.ft12rem} px-4`}>
        <Link href={link}>
          <a className="text-white">Continue Reading</a>
        </Link>
      </Button>
    </>
  );
}
