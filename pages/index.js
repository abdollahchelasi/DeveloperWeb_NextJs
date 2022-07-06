import Head from "next/head";
import { Navbar, Container, Nav, NavDropdown, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "../styles/Home.module.css";
import Typewriter from "typewriter-effect";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Lalezar&display=swap"
          rel="stylesheet"
        />
        <title> عبدالله چلاسی - برنامه نویس و طراح سایت </title>
        <link rel="icon" href="/devs.png" />
        <meta
          name="keywords"
          content="طراحی سایت ,عبدالله چلاسی طراح و برنامه نویس وب سایت , عبدالله چلاسی برنامه نویس وب"
        />
        <meta
          name="description"
          content="طراحی انواع سایت های فروشگاهی , شخصی , خبری , رستوران , ورزشی و گردشگری با بهترین کیفیت در کمترین زمان"
        />
      </Head>

      <main className={styles.home}>
        <Navbar id={styles.navb} fixed="top" variant="dark" expand="md">
          <Container>
            <Navbar.Brand  className={styles.iconn} href="#home"></Navbar.Brand>
            <Navbar.Brand id={styles.ico}>
              
              <img className={styles.logoaa} src="/devs.png" />
              
            </Navbar.Brand>
            <Navbar.Brand className="title" href="#home">
              {" "}
              <b style={{ color: "#3c2fe2" }}>برنامه نویس</b> و{" "}
              <b style={{ color: "#dce22f" }}>طراح سایت</b>{" "}
            </Navbar.Brand>{" "}
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="#web" className={styles.navbb}>
                  وبسایت
                </Nav.Link>
                <Nav.Link href="#mob" className={styles.navbb}>
                  موبایل
                </Nav.Link>
                <Nav.Link href="#call" className={styles.navbb}>
                  سفارش پروژه{" "}
                </Nav.Link>
                <Nav.Link href="#dev" className={styles.navbb}>
                  درباره من
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <div className={styles.lin}>
          <div className={styles.im}>
            <p className={styles.texti}>
              <h5 className={styles.type}>عبدالله چلاسی</h5>
              <Typewriter
                onInit={(typewriter) => {
                  typewriter
                    .pauseFor(1000)
                    .typeString(
                      '<span style="color: #cbdd3e ;">من طراح سایت و برنامه نویس موبایل هستم</span>'
                    )
                    .pauseFor(2000)
                    .deleteAll()
                    .typeString(
                      '<span style="color: #f23c45  "> بهترین خدمات طراحی سایت های  شخصی , خبری , رستوران , ورزشی و گردشگری با بهترین کیفیت در کمترین زمان </span>'
                    )
                    .start();
                }}
              />
            </p>
          </div>

          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#10222f"
              // fill-opacity="1"
              d="M0,32L80,74.7C160,117,320,203,480,218.7C640,235,800,181,960,186.7C1120,192,1280,256,1360,288L1440,320L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </div>

       

            
          
          
        <Container className={styles.pvcc}>
          <Row>
            
            <Col md={12} className={styles.tarh} id="web">
              <p>
                نمونه های <span style={{ color: "#31f91b " }}>وبسایت</span>
              </p>
            </Col>

            <Col md={12} className={styles.img1}>
              <Row>
                <Col md={5} sm={6} className={styles.img2}>
                  <a
                    className={styles.a1}
                    target="#"
                    href="http://gorbedan.ir/"
                  >
                   
                   <img src="/dolfin.png" width="100%" height="250" />
                   <p className={styles.amooz}>دلفین گربدان</p>

                  </a>
                </Col>

                <Col md={5} sm={6} className={styles.img2}>
                  <a
                    className={styles.a1}
                    target="#"
                    href="https://roz.netlify.app/"
                  >
                   
                   <img src="/tala.png" width="100%" height="250" />
                   <p className={styles.amooz}>جواهری رز - قشم</p>

                  </a>
                </Col>

                <Col md={5} sm={6} className={styles.img2}>
                  <a
                    className={styles.a1}
                    target="#"
                    href="https://talebwifi.netlify.app/"
                  >
                   
                   <img src="/taleb.png" width="100%" height="250" />
                   <p className={styles.amooz}>خدمات اینترنتی طالب</p>

                  </a>
                </Col>

                <Col md={5} sm={6} className={styles.img2}>
                  <a
                    className={styles.a1}
                    target="#"
                    href="http://amoozeshgahjazire.ir/"
                  >
                    <img src="/amoozesh.png" width="100%" height="250" />
                    <p className={styles.amooz}>آموزشگاه جزیره - قشم</p>

                  </a>
                </Col>

                <Col md={5} sm={6} className={styles.img2}>
                  <a
                    className={styles.a1}
                    target="#"
                    href="http://pvcahmad.ir/"
                  >
                    <img src="/pvc.png" width="100%" height="250" />
                    <p className={styles.amooz}>خدمات پی وی سی - رمکان</p>
                  </a>
                  
                </Col>
              </Row>
            </Col>
          </Row>

          <Row>
            <Col md={12} className={styles.tarh} id="mob">
              <p>
                {" "}
                نمونه های <span style={{ color: "#31f91b " }}> موبایل</span>
              </p>
            </Col>
            <Col md={12} className={styles.img1}>
              <Row>
                <Col md={3} sm={3} className={styles.img4}>
                  <a target="#" href="a1.webp">
                    <img width="50%" src="/a1.webp" />
                  </a>
                </Col>

                <Col md={3} sm={3} className={styles.img4}>
                  <a target="#" href="a2.webp">
                    <img width="50%" src="/a2.webp" />
                  </a>
                </Col>

                <Col md={3} sm={3} className={styles.img4}>
                  <a target="#" href="a3.webp">
                    <img width="50%" src="/a3.webp" />
                  </a>
                </Col>

                <Col md={3} sm={3} className={styles.img4}>
                  <a target="#" href="a4.webp">
                    <img width="50%" src="/a4.webp" />
                  </a>
                </Col>

                <Col md={3} sm={3} className={styles.img4}>
                  <a target="#" href="a5.webp">
                    <img width="50%" src="/a5.webp" />
                  </a>
                </Col>
                <Col md={3} sm={3} className={styles.img4}>
                  
          
                </Col>

                <Col md={6} sm={6} className={styles.mario}>
                  <a
                    className={styles.a1}
                    target="#"
                    href="http://abdollahchelasi.ir/mario.apk"
                  >
                    <img src="https://res.cloudinary.com/canonical/image/fetch/f_auto,q_auto,fl_sanitize,w_819,h_460/https://dashboard.snapcraft.io/site_media/appmedia/2021/05/screenshot-2020-09-17_18.01.12.853.png" width="100%" height="250" />
                    <p className={styles.amooz}>دانلود بازی ماریو قشمی</p>
                  </a>
                  
                </Col>
              </Row>
              

              <a
                className={styles.a1}
                href="https://myket.ir/developer/dev-46469"
                target="#"
              >
                <p className={styles.ptext}>دیگر برنامه ها</p>
              </a>
              
            </Col>
          </Row>
        </Container>

        <Container fluid id="dev">
          <Col sm={7} className={styles.foot1}>
            <h2 className={styles.h2}>درباره من</h2>
            <Row>
              <Col className={styles.imgcall}>
                <img src="/a.jpg" className={styles.abdolimg} width={80} />
              </Col>

              <Col className={styles.colabdol}>
                <p className={styles.tarah}>
                  طراح و برنامه نویس :
                  <p className={styles.abdollah}>عبدالله چلاسی</p>
                </p>
              </Col>
            </Row>

            <Col className={styles.pp}>
              <p>
                من متولد 1373 قشم - روستای گربدان هستم که در زمینه طراحی وب ,
                دسکتاپ و برنامه نویسی موبایل فعالیت دارم و به صورت آزاد یا همون
                فریلنسینگ کار میکنم, یکی از اتفاقات جالب زندگیم اینه که تفریحم و
                شغلم یکی هستند و اونم چیزی نیست جز توسعه وب و اپلیکیشن , این
                داستان از سال 1391 شروع شد که به سمت تکنولوژی و دنیای برنامه
                نویسی پا گذاشتم همچنان این سابقه با گذر زمان همچنان بیشتر و
                بیشتر میشه، چون برنامه نویسی چیزی هست که من باهاش دنیا رو می
                بینم، می سنجم و حس میکنم،و سعی ام بر این است که با همین روند پیش
                برم و روز به روز با تکنولوژی های جدید دنیای برنامه نویسی کار کنم
                و تجربیات جدیدی کسب کنم{" "}
              </p>
            </Col>
          </Col>
        </Container>
      </main>

      <footer className={styles.foot} id="call">
                
        <div className={styles.foote}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#10222f" d="M0,32L80,74.7C160,117,320,203,480,218.7C640,235,800,181,960,186.7C1120,192,1280,256,1360,288L1440,320L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
        <Container fluid>
          <Row>
            <Col sm={9} className={styles.foot1}>
              <h2 className={styles.h2}>تماس با ما</h2>
              <Row>
                <Col md={12}>
                  <Row>
                    <Col>شماره تماس :</Col>
                    <Col> 09335825325</Col>
                  </Row>
                </Col>

                <Col md={12}>
                  <Row>
                    <Col>آدرس :</Col>
                    <Col>قشم - روستای گربدان</Col>
                  </Row>
                </Col>

                <Col className={styles.cl} md={4}>
                  <a
                    href="https://api.whatsapp.com/send?phone=09335825325"
                    target={"#"}
                  >
                    <img
                      className={styles.imga}
                      src="https://cdn2.iconfinder.com/data/icons/social-messaging-ui-color-shapes-2-free/128/social-whatsapp-circle-512.png"
                      width={40}
                    />
                  </a>
                </Col>
                <Col className={styles.cl} md={4}>
                  <a target={"#"} href="https://telegram.me/abdollah_chelasi">
                    <img
                      className={styles.imga}
                      src="https://cdn0.iconfinder.com/data/icons/social-media-2092/100/social-56-512.png"
                      width={40}
                    />
                  </a>
                </Col>

                <Col className={styles.cl} md={4}>
                  <a
                    target={"#"}
                    href="https://www.instagram.com/abdollahchelasi/"
                  >
                    <img
                      className={styles.imga}
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e7/Instagram_logo_2016.svg/640px-Instagram_logo_2016.svg.png"
                      width={40}
                    />
                  </a>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container fluid className={styles.dev}>
          <Row>
            <Col>
              برنامه نویس و طراح سایت :{" "}
              <a
                className={styles.aa}
                href="http://www.abdollahchelasi.ir/"
                target="#"
              >
                <span className={styles.abdollah}>عبدالله چلاسی </span>
              </a>{" "}
            </Col>
          </Row>
        </Container>
        </div>

        

        
      </footer>
    </>
  );
}
