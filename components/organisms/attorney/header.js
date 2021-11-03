import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileTitle from 'components/organisms/attorney/profile-title';
import ProfileDetails from 'components/organisms/attorney/profile-details';
import ContactIcons from 'components/organisms/attorney/contact-icons';
import profileStyles from 'styles/ProfileImage.module.css';
import styles from 'styles/Banner.module.css';

import { useState, useEffect } from 'react';

export default function AttorneyProfileHeader({ image, profile, slug }) {
  const [designation, setDesiganation] = useState(profile.title);
  const {
    name,
    title,
    chair,
    coChair,
    offices,
    phoneNumber,
    email,
    pdf,
    fax,
    vizibility,
    socialMedia,
    additionalHeaderLinks,
  } = profile;

  const contact = { phoneNumber, email };

  const linkedIn = socialMedia.filter((a) => a.channel === 'LinkedIn')[0];

  useEffect(() => {
    if (title === 'Red Bank, NJ Managing Partner') {
      setDesiganation('Red Bank, NJ  Office Managing Partner');
    }

    if (title === 'NYC Managing Partner') {
      setDesiganation('NYC Office Managing Partner');
    }

    if (title === 'Managing Partner') {
      setDesiganation('Firm Managing Partner');
    }

    if (title === 'Washington, D.C. Managing Partner') {
      setDesiganation('Washington, D.C. Office Managing Partner');
    }
  });

  return (
    <>
      <div className={styles.backPageBanner}>
        <Container className={styles.multiBackBanner}>
          <Row>
            <Col sm={12} md={9} className="text-white">
              <Row>
                <Col sm={12} md={4}>
                  <Image
                    src={image}
                    alt={profile.name}
                    width={640}
                    height={685}
                    layout="intrinsic"
                    quality={100}
                    className={`${profileStyles.whiteBorderTransparent} animate__animated animate__fadeInUp animate__fast my-5`}
                    priority
                    loading="eager"
                  />
                </Col>
                <Col sm={12} md={7}>
                  <div className="my-3">
                    <ProfileTitle
                      name={name}
                      designation={designation}
                      chair={chair}
                      coChair={coChair}
                    />
                    <div className="d-flex flex-column flex-lg-row mt-2">
                      <ProfileDetails
                        offices={offices}
                        contact={contact}
                        fax={fax}
                        additionalHeaderLinks={additionalHeaderLinks || []}
                      />
                      <ContactIcons
                        slug={slug}
                        linkedIn={linkedIn}
                        pdf={pdf}
                        vizibility={vizibility}
                      />
                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}
