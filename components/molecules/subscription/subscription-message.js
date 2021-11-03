import fontStyles from 'styles/Fonts.module.css';
import SubscriptionFormWithButton from 'components/molecules/subscription/subscription-form-with-button';

export default function SubscriptionMessage() {
  return (
    <div className="my-4">
      <p className={`${fontStyles.ft12rem} mb-2`}>
        <strong>Get the latest from our attorneys!</strong>
      </p>
      <p>
        Please fill out our short form to get the latest articles from the Scarinci Hollenbeck
        attorneys weekly on the cutting-edge legal topics.
      </p>
      <SubscriptionFormWithButton />
    </div>
  );
}
