
import './page.css'
export default function Home() {
  return (
    <>
      <div className="container card">
        <div className="row">
          <div className="col-md-6 col-sm-12 image-column">
            <img src="/images/drawers.jpg" />
          </div>
          <div className="col-md-6 col-sm-12 content-column" >
            <h4>shift the overall look and feel by adding these wonderful touches to furniture in your home</h4>
            <p className='text-secondary'>Some quick example text to build on the card title and make up the bulk of the card's content.Some quick example text to build on the card title and make up the bulk of the card's content.
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </p>
            <div className='d-flex d-md-none align-items-center justify-content-between w-100 share'>
            <div className='d-flex'>

              <h4>SHARE</h4>
              <i class="bi bi-facebook"></i>
              <i class="bi bi-twitter"></i>
              <i class="bi bi-pinterest"></i>
            </div>
              <i className="bi bi-reply-fill"></i>
            </div>
            <div className='d-none d-sm-flex align-items-center justify-content-between w-100'>
              <div className='profile d-flex flex-row align-items-center'>
                <img src='/images/avter.jpg' />
                <div className='d-flex flex-column ml-3'>
                  <h6>michelle appleton</h6>
                  <p className='text-secondary'>20 July 2020</p>
                </div>
              </div>
              <i className="bi bi-reply-fill"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
