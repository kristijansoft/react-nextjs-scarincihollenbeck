import styles from 'styles/Banner.module.css';
import FrontSearch from 'components/organisms/home/front-search';

export default function HomeBanner() {
  return (
    <div className={styles.banner}>
      <div className={`${styles.redBanner} animate__animated animate__fadeInLeft animate__slow`}>
        <div className={`${styles.homeBannerContainer} ${styles.homeBanner}`}>
          <div className="d-flex p-4">
            <div>
              <p
                className={`${styles.h2Text} h2 animate__animated animate__fadeInDown animate__slow`}
              >
                Ready to rebuild?
              </p>
              <p
                className={`${styles.h3Text} h3 animate__animated animate__fadeInDown animate__slow`}
              >
                <strong>We are here to help</strong>
              </p>
              <div className="animate__animated animate__fadeInUp animate__slow my-2">
                <FrontSearch />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
