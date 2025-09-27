function App() {
  return (
    <>
      <div className="container">
        {/*Header */}
        <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom">
          <div className="col-md-3 mb-2 mb-md-0">
            <a
              href="/"
              className="d-inline-flex align-items-center link-body-emphasis text-decoration-none"
            >
              <i
                className="fa-solid fa-book fa-2xl"
                style={{ color: "#63E6BE" }}
              ></i>
              <span className="ms-2 fs-4">Bookstore</span>
            </a>
          </div>
          <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
            <li>
              <a href="#" className="nav-link px-2">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Book
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Team
              </a>
            </li>
            <li>
              <a href="#" className="nav-link px-2">
                Contact
              </a>
            </li>
          </ul>
          <div className="col-md-3 text-end">
            <button type="button" className="btn btn-outline-primary me-2">
              Login
            </button>
            <button type="button" className="btn btn-primary">
              Register
            </button>
          </div>
        </header>
        {/*Heros*/}
        <div class="container my-5">
          <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
            <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
              <h1 className="display-4 fw-bold lh-1 text-body-emphasis">
                The Eminence In Shadow
              </h1>
              <p className="lead">
                Even in his past life, Cid’s dream wasn’t to become a
                protagonist or a final boss. He’d rather lie low as a minor
                character until it’s prime time to reveal he’s a mastermind…or
                at least, do the next best thing—pretend to be one! And now that
                he’s been reborn into another world, he’s ready to set the
                perfect conditions to live out his dreams to the fullest. Armed
                with his overactive imagination, Cid jokingly recruits members
                to his organization and makes up a whole backstory about an evil
                cult that they need to take down. Well, as luck would have it,
                these imaginary adversaries turn out to be the real deal—and
                everyone knows the truth but him!
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
        {/*Product List*/}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Best Seller</h1>
              <p className="lead text-body-secondary">
                Something short and leading about the collection below—its
                contents, the creator, etc. Make it short and sweet, but not too
                short so folks don’t simply skip over it entirely.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2 m-2">
                  View
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Other Books
                </a>
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="https://picsum.photos/100/55"
                    className="card-img-top"
                    alt="Thumbnail"
                  />
                  <div className="card-body">
                    <p className="card-text">
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </p>
                    <div className="d-flex justify-content-between align-items-center">
                      <div className="btn-group">
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-sm btn-outline-secondary"
                        >
                          Edit
                        </button>
                      </div>
                      <small className="text-body-secondary">9 mins</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Team*/}
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Meet Our Team</h1>
              <p className="lead text-body-secondary">
                Website ini dikembangkan oleh sebuah tim kecil yang berfokus
                pada inovasi digital dan pengalaman pengguna. Kami terdiri dari
                beberapa peran utama yang saling bekerja sama untuk menghasilkan
                produk yang berkualitas.
              </p>
            </div>
          </div>
        </section>
        <div className="album py-5 bg-body-tertiary">
          <div className="container">
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/img/ihsan.JPG"
                    className="card-img-top"
                    alt="Thumbnail"
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="card-text">Muhammad Ihsan</h3>
                    <p>Project Manager</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/img/syahrul.jpg"
                    className="card-img-top"
                    alt="Thumbnail"
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="card-text">Syahrul Mubaroq</h3>
                    <p>Developer</p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card shadow-sm">
                  <img
                    src="/img/ritonga.jpeg"
                    className="card-img-top"
                    alt="Thumbnail"
                    style={{ height: "500px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h3 className="card-text">Irham Syahputra</h3>
                    <p>Marketing</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*Contact*/}
        <section className="py-5">
          <div className="container">
            <h2 className="text-center mb-4">Contact Us</h2>
            <div className="row">
              {/* Contact Info */}
              <div className="col-md-5 mb-4">
                <h5>Bookstore</h5>
                <p>
                  <strong>Email:</strong> bookstore@email.com
                </p>
                <p>
                  <strong>Phone:</strong> +62 777 888 9999
                </p>
                <p>
                  <strong>Address:</strong> Jl. Merdeka No. 123, Jakarta
                </p>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.598563694882!2d106.82214967499493!3d-6.181847460575771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e75b4a39ff%3A0x301576d14feb9c0!2sJakarta!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="map"
                ></iframe>
              </div>

              {/* Contact Form */}
              <div className="col-md-7">
                <form>
                  <div className="mb-3">
                    <label htmlFor="name" className="form-label">
                      Your Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label">
                      Your Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="subject" className="form-label">
                      Subject
                    </label>
                    <input type="text" className="form-control" id="subject" />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="message" className="form-label">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      rows="5"
                      required
                    ></textarea>
                  </div>
                  <button type="submit" className="btn btn-primary w-100">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
        {/*Footer*/}
        <div className="container">
          <footer className="py-3 my-4">
            <ul className="nav justify-content-center border-bottom pb-3 mb-3">
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  FAQs
                </a>
              </li>
              <li className="nav-item">
                <a href="#" className="nav-link px-2 text-body-secondary">
                  About
                </a>
              </li>
            </ul>
            <p className="text-center text-body-secondary">&copy;2025 Nashi</p>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;
