import ContactForm from 'components/contact-form';
import { createMarkup } from 'utils/helper';

export default function PagesCovid({ content, covidPosts, articleTitle }) {
  return (
    <div>
      <div className="post-content" dangerouslySetInnerHTML={createMarkup(content)} />
      <>
        <h3>
          <strong style={{ 'font-size': '1.8rem' }}>{articleTitle}</strong>
        </h3>
        <hr />
        <div className="container">
          <div className="row mh-75">
            {covidPosts.length > 0
              && covidPosts.map((post) => (
                <div key={post.id} className="col-sm-12 col-md-12 col-lg-6 my-3">
                  <div className="card" id="covid-post">
                    <img
                      style={{ flexShrink: 0, width: '100%' }}
                      src={post.fimg_url}
                      alt={post.title.rendered}
                    />
                    <div className="card-body text-center mt-2">
                      <h5 className="card-title">{post.title.rendered}</h5>
                      <a
                        href={post.link}
                        style={{ color: 'white' }}
                        className="btn btn-danger mx-auto d-block w-50 mb-2"
                      >
                        Full Article &gt;&gt;
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </>
      <div className="mt-5 w-100">
        <h4 className="bg-light-gray">Contact A Firm Reprepresentative</h4>
        <ContactForm />
      </div>
    </div>
  );
}
