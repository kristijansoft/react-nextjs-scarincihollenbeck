import Image from 'next/image';
import Link from 'next/link';

export default function SubscriptionContainer() {
  return (
    <div className="border-top border-bottom text-center px-3 py-5">
      <Image
        src="/images/scarinci-hollenbeck-diamond-badge-SVG.svg"
        alt="scarinci hollenbeck diamond logo"
        width={150}
        height={130}
      />
      <h4 className="mt-2 mb-0 mx-5">
        <strong>Get the latest from our attorneys!</strong>
      </h4>
      <h5 className="h6 mb-4 mt-2 mx-5" style={{ color: '#444' }}>
        As the legal world continues to evolve, it is important to stay aware of its various and
        regular updates.
      </h5>
      <Link href="/subscribe">
        <a className="btn btn-danger px-4">
          <strong>Sign up to our mailing list</strong>
        </a>
      </Link>
    </div>
  );
}
