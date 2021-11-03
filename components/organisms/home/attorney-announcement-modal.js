import { useState } from 'react';
import Link from 'next/link';
import Modal from 'react-bootstrap/Modal';
import Image from 'next/image';

export default function AttorneyAnnoucenmentModal() {
  const [show, setShow] = useState(true);

  return (
    <>
      <Modal
        show={show}
        onHide={() => setShow(false)}
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <h3 className="text-center">
            <strong>The Passing of David A. Einhorn</strong>
          </h3>
          <div className="px-5 py-3 mx-auto d-block text-center">
            <Image
              src="https://shhcsgmvsndmxmpq.nyc3.digitaloceanspaces.com/2017/03/Einhorn-Large-2.jpg"
              alt="David A. Einhorn"
              width={300}
              height={347}
            />
          </div>
          <p className="text-center">
            <em>
              Scarinci Hollenbeck expresses our deepest sympathies on the loss of Partner, David A.
              Einhorn
            </em>
          </p>
          <p className="text-center mb-4">
            Scarinci Hollenbeck is saddened to report the passing of David A. Einhorn, who has been
            with the firm since 2017 as Partner. Mr. Einhorn was Chair of the firm’s Technology Law
            practice group and played a key role in representing the firm’s clients in prominent and
            precedent-setting intellectual property cases.
          </p>
          <Link href="/funeral-announcements/passing-attorney-david-a-einhorn">
            <a style={{ maxWidth: '200px' }} className="btn btn-danger mx-auto d-block mb-4">
              More information
            </a>
          </Link>
        </Modal.Body>
      </Modal>
    </>
  );
}
