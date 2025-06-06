import React from 'react';

function FPTPage() {
  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        margin: 0,
        padding: 0,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header Section */}
      <header
        style={{
          backgroundColor: "#FF8C42",
          padding: "40px 20px",
          textAlign: "center",
          color: "white",
        }}
      >
        {/* Logo Container */}
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Logo_FPT_Education.png/1200px-Logo_FPT_Education.png"
          alt="FPT University Logo"
          style={{
            width: "400px",
            height: "auto",
            marginBottom: "10px",
            backgroundColor: "white",
            padding: "10px",
          }}
        />

        {/* Navigation */}
        <nav
          style={{
            marginTop: "20px",
          }}
        >
          <a
            href="#home"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 15px",
              fontSize: "16px",
            }}
          >
            Home
          </a>
          <a
            href="#about"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 15px",
              fontSize: "16px",
            }}
          >
            About
          </a>
          <a
            href="#contact"
            style={{
              color: "white",
              textDecoration: "none",
              margin: "0 15px",
              fontSize: "16px",
            }}
          >
            Contact
          </a>
        </nav>
      </header>

      {/* Main Content */}
      <main
        style={{
          flex: 1,
          padding: "40px 20px",
          maxWidth: "800px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        {/* About Section */}
        <section id="about" style={{ marginBottom: "60px" }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            About
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            This is the about section of the website.
          </p>
        </section>

        {/* Contact Section */}
        <section id="contact">
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              color: "#333",
              marginBottom: "20px",
            }}
          >
            Contact
          </h2>
          <p
            style={{
              fontSize: "16px",
              color: "#666",
              lineHeight: "1.6",
              maxWidth: "600px",
              margin: "0 auto",
            }}
          >
            For any inquiries, please contact us at example@example.com.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer
        style={{
          backgroundColor: "#F4D03F",
          textAlign: "center",
          padding: "20px",
          color: "#666",
          fontSize: "14px",
        }}
      >
        © 2023 Website. All rights reserved.
      </footer>
    </div>
  );
}

export default FPTPage;