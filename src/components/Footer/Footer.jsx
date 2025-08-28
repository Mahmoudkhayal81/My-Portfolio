import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="container text-center">
        <h5 className="footer-name">Mahmoud Mostafa</h5>
        <p className="footer-info">
          New Cairo, Egypt | (+20)1552965955 | 
          <a href="mailto:Mahmoudkhayal81@gmail.com"> Mahmoudkhayal81@gmail.com</a>
        </p>
        <p className="footer-links">
          <a href="https://linkedin.com/in/mahmoud-mostafa81" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          |
          <a href="https://github.com/Mahmoudkhayal81" target="_blank" rel="noreferrer">
            GitHub
          </a>
        </p>
        <p className="footer-copy">© {new Date().getFullYear()} Mahmoud Mostafa. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
