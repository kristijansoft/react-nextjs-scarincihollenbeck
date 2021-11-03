import Link from 'next/link';
import styles from 'styles/SidebarTitle.module.css';

export default function AboutFirm() {
  return (
    <div className="w-100 mt-5">
      <div className={styles.header}>Firm Resources</div>
      <div className="off-white">
        <ul className="px-4">
          <li className="pt-2 pb-1">
            <Link href="/category/firm-news">
              <a className="text-dark">
                <strong>Firm News</strong>
              </a>
            </Link>
          </li>
          <li className="pt-2 pb-1">
            <Link href="/category/law-firm-insights">
              <a className="text-dark">
                <strong>Firm Insights</strong>
              </a>
            </Link>
          </li>
          <li className="pt-2 pb-1">
            <Link href="/category/firm-events">
              <a className="text-dark">
                <strong>Firm Events</strong>
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
