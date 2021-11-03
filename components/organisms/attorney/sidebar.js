import Link from 'next/link';
import Slider from 'react-slick';
import fontStyles from 'styles/Fonts.module.css';
import marginStyles from 'styles/Margins.module.css';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function AttorneyProfileSidebar({
  services, contact, educationLink, awards,
}) {
  const settings = {
    dots: false,
    fade: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 4000,
    cssEase: 'linear',
  };

  return (
    <div className={marginStyles.mtMinusMd2}>
      <p className={fontStyles.ft12rem}>
        <strong>How I can help</strong>
      </p>
      <ul>
        {services.map((c) => (
          <li key={c.title} className="list-unstyled">
            <Link href={c.link}>
              <a className="text-dark">{c.title}</a>
            </Link>
          </li>
        ))}
      </ul>
      <style jsx>
        {`
          ul {
            margin-left: -2.48em;
            margin-top: -10px;
          }

          ul li {
            margin-bottom: 7px;
          }
        `}
      </style>
      <hr />
      <p className={`${fontStyles.ft12rem} mb-0`}>
        <strong>Let&apos;s get in touch</strong>
      </p>
      <p className="mt-2 mb-0">And we can discuss how my legal services can benefit you.</p>
      <Link scroll={false} href={`/attorney/${contact}`}>
        <a className="btn btn-danger px-4 my-2">Contact</a>
      </Link>
      <hr />
      <p className={`${fontStyles.ft12rem} mb-0`}>
        <strong>Education & Admissions</strong>
      </p>
      <p className="mt-2 mb-0">
        List of education, bar admissions, affilliations, memberships, etc.
      </p>
      <Link scroll={false} href={educationLink}>
        <a className="btn btn-danger px-4 my-2">Credentials</a>
      </Link>
      {awards.length > 0 && (
        <div>
          <hr />
          <Slider {...settings}>
            {awards.map((award) => (
              <div key={award.title}>
                <a href={award.link}>
                  <img src={award.featuredImg} alt={award.title} width="auto" height="120" />
                </a>
              </div>
            ))}
          </Slider>
          <small>
            <Link scroll={false} href="/awards">
              <a>Award Methodology</a>
            </Link>
          </small>
        </div>
      )}
    </div>
  );
}
