import Image from 'next/image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ProfileTitle from 'components/organisms/attorney/profile-title';
import ProfileDetails from 'components/organisms/attorney/profile-details';
import ContactIcons from 'components/organisms/attorney/contact-icons';
import profileStyles from 'styles/ProfileImage.module.css';
import styles from 'styles/Banner.module.css';

export default function AdminProfileHeader({ image, profile }) {
  const {
    name, designation, offices, phoneNumber, email, vizibility, socialMedia,
  } = profile;

  const contact = { phoneNumber, email };

  const linkedIn = socialMedia.filter((a) => a.channel === 'LinkedIn')[0];
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
                    width={260}
                    height={279}
                    layout="fixed"
                    quality={100}
                    className={`${profileStyles.whiteBorderTransparent} animate__animated animate__fadeInUp animate__fast my-5`}
                    priority
                    loading="eager"
                  />
                </Col>
                <Col sm={12} md={7}>
                  <div className="my-3">
                    <ProfileTitle name={name} designation={designation} chair={[]} coChair={[]} />
                    <div className="d-flex flex-column flex-md-row mt-3">
                      <ProfileDetails
                        offices={offices}
                        contact={contact}
                        fax=""
                        additionalHeaderLinks={[]}
                      />
                      <ContactIcons slug="" linkedIn={linkedIn} pdf="" vizibility={vizibility} />
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
