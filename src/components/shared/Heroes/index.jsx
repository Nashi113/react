export default function Heroes() {
  return (
    <>
      <div class="container my-5">
        <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
          <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
            <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
              The Eminence In Shadow
            </h1>
            <p className="lead">
              Even in his past life, Cid’s dream wasn’t to become a protagonist
              or a final boss. He’d rather lie low as a minor character until
              it’s prime time to reveal he’s a mastermind…or at least, do the
              next best thing—pretend to be one! And now that he’s been reborn
              into another world, he’s ready to set the perfect conditions to
              live out his dreams to the fullest. Armed with his overactive
              imagination, Cid jokingly recruits members to his organization and
              makes up a whole backstory about an evil cult that they need to
              take down. Well, as luck would have it, these imaginary
              adversaries turn out to be the real deal—and everyone knows the
              truth but him!
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
              <button
                type="button"
                className="btn btn-primary btn-lg px-4 me-md-2 fw-bold"
              >
                Buy Now
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-lg px-4"
              >
                Detail
              </button>
            </div>
          </div>
          <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
            <img
              className="rounded-lg-3"
              src="/img/cid.jpg"
              alt="cover"
              width="500"
            />
          </div>
        </div>
      </div>
    </>
  );
}
