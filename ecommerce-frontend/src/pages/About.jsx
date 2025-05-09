import "../styles/About.css";

function About() {
  return (
    <div className="about-section container-lg px-4 py-5">
      {/* ABOUT TITLE */}
      <h1 className="about-title text-center mb-2">
        About <span className="text-primary">Us</span>
      </h1>
      <p className="about-subtitle text-center mb-5">
        Apple-inspired modern e-commerce experience
      </p>

      {/* OUR STORY */}
      <section className="mb-5">
        <h3 className="section-heading">Our Story</h3>
        <p>
          BuiShop was founded with a simple mission: to create a premium shopping experience with a focus on beautiful design and exceptional user experience.
        </p>
        <p>
          Our team of developer and designer (only me :D) are passionate about creating interfaces that are not only visually stunning but also intuitive and easy to use.
        </p>
      </section>

      {/* OUR PRODUCTS */}
      <section className="mb-5">
        <h3 className="section-heading">Our Products</h3>
        <p>
          We curate a selection of high-quality products that meet our standards for both design and functionality. Every item is tested and approved before it makes it into our store.
        </p>
        <p>
          From electronics to home goods, we offer a 30-day satisfaction guarantee on all purchases.
        </p>
      </section>

      {/* OUR TECHNOLOGY */}
      <section className="mb-5">
        <h3 className="section-heading">Our Technology</h3>
        <p>
          This e-commerce platform is built using modern vanilla JavaScript and React, focusing on performance and maintainability.
        </p>
        <p>
          We use the latest technologies to ensure a smooth experience. The dark theme reduces eye strain and is more environmentally friendly.
        </p>
      </section>

      {/* OUR VALUES */}
      <section className="mb-5">
        <h3 className="section-heading">Our Values</h3>
        <div className="row g-4 mt-3">
          {[
            {
              icon: "bi-heart-fill",
              title: "Quality",
              text: "We never compromise on quality. Every product and feature must meet our high standards.",
            },
            {
              icon: "bi-shield-lock-fill",
              title: "Security",
              text: "Your data and privacy are protected with the latest security practices.",
            },
            {
              icon: "bi-tree-fill", // Better than bi-leaf-fill
              title: "Sustainability",
              text: "We're committed to reducing our environmental impact through sustainable practices.",
            },
            {
              icon: "bi-people-fill",
              title: "Community",
              text: "We believe in building a community of like-minded individuals who appreciate good design.",
            },
          ].map((val, index) => (
            <div className="col-12 col-md-6 col-lg-3" key={index}>
              <div className="p-4 bg-dark rounded text-white text-center shadow-sm h-100 value-card">
                <i className={`bi ${val.icon} fs-2 text-primary mb-2`}></i>
                <h5 className="fw-bold">{val.title}</h5>
                <p className="small">{val.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* GET IN TOUCH */}
      <section className="mb-5">
        <h3 className="section-heading">Get In Touch</h3>
        <p className="text-muted">
          We'd love to hear from you! If you have any questions, feedback, or just want to say hello, please reach out to us.
        </p>
        <div className="row g-3 mt-4">
          <div className="col-md-6">
            <div className="d-flex align-items-center bg-dark text-white rounded p-3 shadow-sm">
              <i className="bi bi-envelope-fill fs-4 text-primary me-3"></i>
              <span>tien-quoc.bui@epita.fr</span>
            </div>
          </div>
          <div className="col-md-6">
            <div className="d-flex align-items-center bg-dark text-white rounded p-3 shadow-sm">
              <i className="bi bi-geo-alt-fill fs-4 text-primary me-3"></i>
              <span>EPITA, Kremlin-Bicêtre, France</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;
