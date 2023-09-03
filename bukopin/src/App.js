import "./App.css";
import { Container, Row } from "react-bootstrap";
import BukopinNavigate from "./components/bukopin-navigate/bukopin-navigate";
import Carousel from "react-bootstrap/Carousel";
import BukopinCard from "./components/bukopin-card/bukopin-card";

function App() {
  const data = [
    {
      title: "September Ceria 9.9",
      image: "item-1.jpg",
    },
    {
      title: "Double Mantul",
      image: "item-2.jpg",
    },
    {
      title: "King's Chicken [Rasa Baru]",
      image: "item-3.jpg",
    },
    {
      title: "3-Cheese [Limited Time]",
      image: "item-4.jpg",
    },
    {
      title: "BK APP EXCLUSIVE",
      image: "item-5.jpg",
    },
    {
      title: "Cheese Burger Favorit",
      image: "item-6.jpg",
    },
    {
      title: "Cheese Whopper",
      image: "item-7.jpg",
    },
    {
      title: "Gold Collection",
      image: "item-8.jpg",
    },
    {
      title: "Kids Meal",
      image: "item-9.jpg",
    },
    {
      title: "Side & Dessert",
      image: "item-10.jpg",
    },
    {
      title: "BEVERAGES",
      image: "item-11.jpg",
    },
    {
      title: "KING DEALS",
      image: "item-12.jpg",
    },
    {
      title: "Upsell",
      image: "",
    },
  ];

  return (
    <Container fluid>
      <Row>
        <BukopinNavigate></BukopinNavigate>

        <Carousel className="px-0" data-interval="false">
          <Carousel.Item>
            <img src={require("./images/banner-1.jpg")} alt="banner"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("./images/banner-2.jpg")} alt="banner"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("./images/banner-3.jpg")} alt="banner"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("./images/banner-4.jpg")} alt="banner"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("./images/banner-5.jpg")} alt="banner"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("./images/banner-6.jpg")} alt="banner"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("./images/banner-7.jpg")} alt="banner"></img>
          </Carousel.Item>
          <Carousel.Item>
            <img src={require("./images/banner-8.jpg")} alt="banner"></img>
          </Carousel.Item>
        </Carousel>
        <div className="py-5 body-menu">
          <h2 className="text-center">Our Menu</h2>
          <div className="pt-3 d-flex justify-content-center w-100">
            <div className="col-md-9 col-12 d-flex flex-wrap">
              {data.map((item, index) => (
                <BukopinCard key={index} data={item}></BukopinCard>
              ))}
            </div>
          </div>
        </div>

        <div className="footer d-flex justify-content-center w-100 py-3">
          <div className="col-md-9 col-12 px-sm-3 text-md-start text-center">
            <div className="title">BURGER KING® DELIVERY</div>
            <div className="d-md-flex w-100">
              <div>
                <a className="contact" href="tel:1500025">
                  <img
                    className="icon"
                    src={require("./images/icons/phone.png")}
                    alt="icon"
                  />
                  <span>15000 25</span>
                </a>
              </div>
              <div className="ps-md-3">
                <a
                  className="contact"
                  href="mailto:guestservice@burgerking.co.id"
                >
                  <img
                    className="icon me-1"
                    src={require("./images/icons/email.png")}
                    alt="icon"
                  />
                  <span>guestservice@burgerking.co.id</span>
                </a>
              </div>

              <div className="d-flex ps-md-4 justify-content-md-start justify-content-center">
                <a
                  className="contact pe-1"
                  href="https://www.facebook.com/burgerkingindonesia/"
                >
                  <img
                    className="icon"
                    src={require("./images/icons/facebook.png")}
                    alt="icon"
                  />
                </a>
                <a
                  className="contact pe-1"
                  href="https://www.instagram.com/burgerking.id/"
                >
                  <img
                    className="icon"
                    src={require("./images/icons/instagram.png")}
                    alt="icon"
                  />
                </a>
                <a
                  className="contact pe-1"
                  href="https://twitter.com/burgerking_id"
                >
                  <img
                    className="icon"
                    src={require("./images/icons/twitter.png")}
                    alt="icon"
                  />
                </a>
                <a
                  className="contact"
                  href="https://www.youtube.com/channel/UC-F_fh9CRDwhJrY_ibHae-g"
                >
                  <img
                    className="icon"
                    src={require("./images/icons/youtube.png")}
                    alt="icon"
                  />
                </a>
              </div>
            </div>
            <div className="terms-conditions">
              <span className="right-line">
                <a href="#about-us">About Us</a>
              </span>
              <span className="right-line">
                <a href="#privacy-policy">Kebijakan Privasi</a>
              </span>
              <span className="right-line">
                <a href="#terms-and-conditions">Syarat dan Ketentuan</a>
              </span>
              <span className="copyright">
                TM &amp; © 2023 Burger King Corporation. Used Under License. All
                rights reserved.
              </span>
            </div>
          </div>
        </div>
      </Row>
    </Container>
  );
}

export default App;
