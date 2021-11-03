import fontStyles from 'styles/Fonts.module.css';
import { createMarkup } from 'utils/helpers';

export default function EventDetails({ eDetails }) {
  return (
    <>
      <hr />
      <div className="w-100 mt-4">
        <p className={fontStyles.ft12rem}>
          <strong>Event Details</strong>
        </p>
      </div>
      <div style={{ marginTop: '-10px', marginBottom: '-15px' }}>
        <strong>
          <span dangerouslySetInnerHTML={createMarkup(eDetails.address)} />
        </strong>
      </div>
      <p>
        <strong>Date: </strong>
        {' '}
        {eDetails.date}
        <br />
        <strong>Start: </strong>
        {' '}
        {eDetails.start}
        <br />
        <strong>End: </strong>
        {' '}
        {eDetails.end}
      </p>
    </>
  );
}
