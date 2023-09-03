import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./bukopin-navigate.css";
import logo from "../../images/logo-bk.png";

export default function BukopinNavigate() {
  return (
    <div className="nav-head">
      <Navbar
        expand="md"
        bg="dark"
        data-bs-theme="dark"
        sticky="top"
        className="navigate-header py-0"
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <img src={logo} alt={logo}></img>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">
                <div className="subtitle">Delivery</div>
                <div className="title">Order</div>
              </Nav.Link>
              <Nav.Link href="#action2">
                <div className="subtitle">Get Fresh</div>
                <div className="title">Promotions</div>
              </Nav.Link>
              <Nav.Link href="#action3">
                <div className="subtitle">Exclusive</div>
                <div className="title">Large Order</div>
              </Nav.Link>
            </Nav>
            <Nav className="align-items-center">
              <Nav.Link href="#login">
                <div className="title">Login</div>
              </Nav.Link>
              <Nav.Link className="cart" href="#cart">
                <span className="badge">0</span>
                <img src={require("../../images/icons/cart.png")} alt="cart" />
                <div className="cart-data">
                    <div className="cart-list">
                      <div className="cart-content-data">
                        <div className="card-content-data-wrapper">
                          <table className="table-floating d-none"></table>

                          <p className="cart-message">Your cart is empty.</p>
                          <button
                            // href="#preview"
                            className="button button-order-now"
                          >
                            Order Now
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
