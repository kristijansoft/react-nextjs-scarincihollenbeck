import SidebarContent from 'components/organisms/practice/sidebar';
import { FIRM_BLOG_PAGES, FIRM_PAGES } from 'utils/constants';

export default function CommonSidebarLinks() {
  return (
    <>
      <hr />
      <SidebarContent title="Firm Library" content={FIRM_BLOG_PAGES} tabKey={2} />
      <hr />
      <SidebarContent title="Firm Pages" content={FIRM_PAGES} tabKey={2} />
    </>
  );
}
