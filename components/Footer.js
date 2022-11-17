import { Container } from "react-bootstrap";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className=" links">
        <Container>
          <div className="row">
            <div className="col-md-2 footer-links">
              <h4 class="accordion-action">
                <a href="javascript:void(0);" role="presentation">
                  Contact Us
                </a>
              </h4>
            </div>
            <div className="col-md-2"></div>
            <div className="col-md-3"></div>
            <div className="col-md-5"></div>
          </div>
        </Container>
      </div>
      <div className="row mattel">
        <p>© {new Date().getFullYear()} Mattel</p>
      </div>
    </footer>
  );
}
