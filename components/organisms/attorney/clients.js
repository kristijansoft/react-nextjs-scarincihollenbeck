import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Image from 'next/image';
import marginStyles from 'styles/Margins.module.css';
import grayTitleStyles from 'styles/BigGrayTitle.module.css';

export default function AttorneyProfileClients({ clients }) {
  return (
    <Row className={marginStyles.mtMinusMd2}>
      <Col sm={12}>
        <p className={grayTitleStyles.title}>Clients</p>
      </Col>
      {clients.map((client) => (
        <Col sm={12} md={4} className="my-4" key={client.title}>
          <Image
            alt={client.title}
            src={client.featuredImg || '/images/no-image-found-diamond.png'}
            width={200}
            height={200}
            className="rounded"
          />
        </Col>
      ))}
    </Row>
  );
}
