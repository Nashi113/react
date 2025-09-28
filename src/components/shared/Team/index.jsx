export default function Team() {
  return (
    <>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          <div className="col-lg-6 col-md-8 mx-auto">
            <h1 className="fw-light">Meet Our Team</h1>
            <p className="lead text-body-secondary">
              Website ini dikembangkan oleh sebuah tim kecil yang berfokus pada
              inovasi digital dan pengalaman pengguna. Kami terdiri dari
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
    </>
  );
}
