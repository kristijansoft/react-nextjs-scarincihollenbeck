/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import ClipLoader from 'react-spinners/ClipLoader';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';
import marginStyles from 'styles/Margins.module.css';

export default function AttorneyProfileArticles({ title, initalArticles }) {
  const [loading, setLoading] = useState(false);
  const [pageIndex, setPageIndex] = useState(11);
  const [articleList, setArticleList] = useState([]);

  async function handleClick() {
    setLoading(true);
    setPageIndex((pi) => (pi += 11));
    setLoading(false);
  }

  useEffect(() => {
    if (initalArticles.length > 0) {
      const sortArticles = initalArticles.sort((a, b) => (new Date(a.date) < new Date(b.date) ? 1 : -1));
      setArticleList(sortArticles);
    }
  }, []);

  return (
    <Row className={marginStyles.mtMinusMd2}>
      <Col sm={12}>
        <p className={grayTitleStyles.title}>{title}</p>
      </Col>
      {initalArticles.length <= 0 ? (
        <Col sm={12} className="my-3">
          <p className="text-center">
            <strong>This attorney does not have any published articles or blog posts.</strong>
          </p>
        </Col>
      ) : (
        articleList
          .filter((_, i) => i <= pageIndex)
          .map((article) => (
            <Col sm={12} md={4} key={article.title} className="my-3">
              <Link href={article.link}>
                <a className="text-center mx-auto d-block">
                  <Image
                    alt={article.title}
                    src={
                      article.image || article.featuredImg || '/images/no-image-found-diamond.png'
                    }
                    width={300}
                    height={150}
                    className="rounded"
                  />
                  <small className="text-dark d-block">
                    <strong>{article.title}</strong>
                  </small>
                </a>
              </Link>
            </Col>
          ))
      )}
      {initalArticles.length > 0 && (
        <Col sm={12}>
          <Button variant="danger" className="px-4 mx-3 mb-3" onClick={() => handleClick()}>
            {loading ? (
              <ClipLoader loading={loading} size={12} color="#FFF" />
            ) : (
              <>Load more posts</>
            )}
          </Button>
        </Col>
      )}
    </Row>
  );
}
