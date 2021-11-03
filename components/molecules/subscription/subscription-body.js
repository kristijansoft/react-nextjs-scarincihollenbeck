import SubscriptionFormColumn from 'components/molecules/subscription/subscription-form-column';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function SubscriptionBody() {
  return (
    <>
      <div className="w-100">
        <p>
          <strong>Be the the first to know when,</strong>
          {' '}
          our attorney&apos;s publish blog posts
        </p>
        <p>
          or when there legal updates that may
          {' '}
          <strong>impact to your business</strong>
        </p>
        <p>
          or any
          {' '}
          <strong>announcements and press releases</strong>
          {' '}
          from the attorneys at Scarinci
          Hollenbeck
        </p>
        <h4 className={`${grayTitleStyles.title} mb-5`}>Sign up today!</h4>
        <style jsx>{' p{ font-size: 1.15rem }; strong { font-size: 1.15rem }'}</style>
      </div>
      <SubscriptionFormColumn />
    </>
  );
}
