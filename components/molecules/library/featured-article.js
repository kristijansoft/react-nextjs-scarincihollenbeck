import Link from 'next/link';
import Image from 'next/image';
import styled from 'styled-components';

const ArticleContainer = styled.div`
  width: 100%;
  text-align: center;

  @media (min-width: 768px) {
    width: 80%;
    margin-left: 1em;
    text-align: left;
  }
`;

const ArticleImage = styled.div`
  max-width: 300%;
  text-align: center;
  @media (min-width: 768px) {
    text-align: left;
  }
`;

export default function FeaturedArticle({ articles }) {
  return articles.map((article) => (
    <li key={article.id} className="mb-5">
      <Link href={article.link}>
        <a className="d-flex flex-column flex-md-row text-dark mx-3 mx-md-0">
          <ArticleImage>
            <Image
              src={article.image ? article.image : '/images/no-image-found-diamond-750x350.png'}
              alt={article.title}
              width={300}
              height={150}
              layout="fixed"
            />
          </ArticleImage>
          <ArticleContainer>
            <p className="h4 mb-1 mt-2 px-0 py-0">
              <strong>{article.title}</strong>
            </p>
            <p className="mt-0 pt-0 px-0 mx-0">{article.description}</p>
          </ArticleContainer>
        </a>
      </Link>
    </li>
  ));
}
