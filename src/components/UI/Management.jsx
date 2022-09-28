import { React, useState } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import "../../styles/about-section.css";
// import BecomeDriverSection from "./BecomeDriverSection";
import CommonSection from "./CommonSection";
// import driveImg from "../../assets/all-images/drive.jpg";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";
// import photo1 from "../../assets/all-images/Max_Mustermann.jpg";
// import photo2 from "../../assets/all-images/max2.jpg";
import "../../styles/managment.css";
import { ScrollToTop } from "./ScrollToTop";
import BecomeDriverSection from "./BecomeDriverSection";

const Managment = ({ aboutClass }) => {
  const [isBremer, setIsBremer] = useState(true);
  const [isAustria, setIsAustria] = useState(false);
  const [isWolfsburg, setIsWolfsburg] = useState(false);

  // const changetoBremer = () => {};
  // const changetoAustria = () => {};
  // const changetoW = () => {};

  return (
    <>
      <div>
        <ScrollToTop />
      </div>
      <CommonSection title="" />
      <section
        className="about__section"
        style={
          aboutClass === "aboutPage"
            ? { marginTop: "0px" }
            : { marginTop: "0px" }
        }
      >
        <Container>
          <h1 style={{ textAlign: "center" }}>Our Management</h1>
          <br />
          <h5 style={{ textAlign: "center" }}>
            CONTEXT ist inhabergeführt und konzernunabhängig. Den Vorstand
            bilden Herr Egerer und Herr Schuster.
          </h5>
          <br />
          <Row>
            {/* <Col lg="6" md="6">
            </Col> */}

            <Col lg="6" md="6">
              {/* <div className="about__img"> */}
              {/* <img src={aboutImg} alt="" className="w-100" /> */}
              {/* </div> */}
            </Col>
          </Row>
        </Container>
        <Container>
          <Row className="management-con">
            <Col lg="6" md="9">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src="https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>

            <Col lg="6" md="9">
              <div className="about__section-content">
                {/* <h4 className="section__subtitle">Clients</h4> */}
                <h2 className="section__title">Stefan Egerer</h2>
                {/* <p className="section__description">Stefan Egerer</p> */}

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Studium: FH München
                    sit amet.
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Abschluss:
                    Dipl.-Ing.
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Wurzeln:
                    Entwicklungsdienstleistung
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Funktion: Vorstand
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Fachgebiete:
                    Technische Risikoanalysen (FMEA, FTA), Methodenberatung und
                    -entwicklung, Innovations- und Kreativitätsmethoden
                  </p>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
        <br />
        <br />
        <Container>
          <Row className="management-con2">
            <Col lg="6" md="9">
              <div className="about__section-content">
                {/* <h4 className="section__subtitle">Clients</h4> */}
                <h2 className="section__title">Karsten Schuster</h2>
                {/* <p className="section__description">Stefan Egerer</p> */}

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Studium: Universität
                    Jena, TU München
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>

                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Abschluss:
                    Dipl.-Ing., Dipl.-Wirtsch.-Ing.
                  </p>

                  {/* <p className="section__description d-flex align-items-center gap-2">
                    <i class="ri-checkbox-circle-line"></i> Lorem ipsum dolor
                    sit amet.
                  </p> */}
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Wurzeln:
                    Unternehmensberatung, Entwicklungsdienstleistung
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Funktion: Vorstand
                  </p>
                </div>
                <div className="about__section-item d-flex align-items-center">
                  <p className="section__description d-flex align-items-center gap-2 q">
                    <i class="ri-checkbox-circle-line"></i> Fachgebiete:
                    Prozessmanagement
                  </p>
                </div>
              </div>
            </Col>

            <Col lg="6" md="9">
              <div className="about__img">
                <img
                  style={{ height: "300px" }}
                  src="https://previews.123rf.com/images/hollygraphic/hollygraphic1510/hollygraphic151000055/46527906-man-in-business-suit-icon-vector-symbol.jpg"
                  alt=""
                  className="w-100"
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <Container>
        <Row>
          <h1 style={{ textAlign: "center" }}>The history of Context</h1>
          <h5 style={{ marginTop: "20px" }}>
            CONTEXT wurde 1997 von einem Expertenteam für Methodenanwendung und
            -entwicklung mit der Idee gegründet, Technologieunternehmen bei der
            Lösung ihrer qualitäts- und prozessspezifischen Herausforderungen zu
            unterstützen. Heute zählt CONTEXT zu den professionellen Partnern
            von technologiegetriebenen Unternehmen im Bereich
            Qualitätsmanagement.
          </h5>
        </Row>
      </Container>
      <Container style={{ marginBottom: "20px", marginTop: "20px" }}>
        <Row>
          <div className="boxes">
            <div className="box">
              <h3>Standorte</h3>
              <p>
                Von unserem Hauptsitz in München und unseren Niederlassungen in
                Graz und Wolfsburg aus betreuen wir Kunden in aller Welt. Die
                Herausforderungen lösen wir direkt vor Ort oder ausgelagert bei
                uns im Haus.
              </p>
            </div>
            <div className="box">
              <h3>Anreise mit den öffentlichen Verkehrsmitteln</h3>
              <p>
                Vom Münchner Hauptbahnhof kommend: Mit der U-Bahnlinie U2 in
                Richtung Feldmoching bis Haltestelle Frankfurter Ring, Aufgang
                Knorrstraße in Fahrtrichtung vorne. Folgen Sie der Knorrstraße
                in Richtung Norden und biegen Sie nach ca. 100 Metern links in
                die Bremer Straße. Ein Fußweg von etwa 5 Minuten.{" "}
              </p>
            </div>
            <div className="box">
              <h3>Anreise mit dem Auto</h3>
              <p>
                Von Nürnberg kommend: A9 in Richtung München. Verlassen Sie die
                A9 an der Anschlussstelle 75 in Richtung Frankfurter Ring und
                folgen Sie diesem für ca. 2,75 km bis zur Kreuzung Knorrstraße.
                Biegen Sie dort rechts in die Knorrstraße und nach ca. 100
                Metern links in die Bremer Straße. Von Stuttgart kommend: A8 in
                Richtung München. Wechseln Sie am AB-Dreieck München-Eschenried
                von der A8 auf die A99 in Richtung Salzburg. Verlassen Sie die
                A99 an der Anschlußstelle 10-Neuherbergstraße und fahren rechts
                auf die B13 Ingolstädterstraße bis zur Kreuzung Frankfurter Ring
                (ca. 4,3 km). Dort biegen Sie rechts auf den Frankfurter Ring
                und folgen diesem bis zur Kreuzung Knorrstraße. Biegen Sie
                rechts in die Knorrstraße und nach ca. 100 Metern links in die
                Bremer Straße. Besucherparkplätze halten wir gebäuderückseitig
                für Sie bereit.
              </p>
            </div>
          </div>
        </Row>
      </Container>
      <Container style={{ marginTop: "100px", marginBottom: "20px" }}>
        <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
          Our Locations
        </h1>
        <div
          style={{
            marginBottom: "20px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button
            active={isBremer}
            style={{ marginRight: "10px", backgroundColor: "#000d6b" }}
            className="map-btn"
            type="button"
            variant="primary"
            onClick={() => {
              setIsBremer(true);
              setIsAustria(false);
              setIsWolfsburg(false);
            }}
          >
            München, Germany
          </Button>{" "}
          <Button
            active={isAustria}
            type="button"
            style={{ marginRight: "10px", backgroundColor: "#000d6b" }}
            className="map-btn"
            variant="primary"
            onClick={() => {
              setIsBremer(false);
              setIsAustria(true);
              setIsWolfsburg(false);
            }}
          >
            Raaba, Austria
          </Button>{" "}
          <Button
            style={{ backgroundColor: "#000d6b" }}
            type="button"
            active={isWolfsburg}
            className="map-btn"
            variant="primary"
            onClick={() => {
              setIsBremer(false);
              setIsAustria(false);
              setIsWolfsburg(true);
            }}
          >
            Wolfsburg, Germany
          </Button>{" "}
        </div>
        <Row>
          {isBremer ? (
            <iframe
              style={{ width: "100%", height: "300px" }}
              src="https://maps.google.com/maps?q=Bremer%20Stra%C3%9Fe%2011%2080807%20M%C3%BCnchen&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="r"
            ></iframe>
          ) : isAustria ? (
            <iframe
              style={{ width: "100%", height: "300px" }}
              src="https://maps.google.com/maps?q=Dr.-Auner-Str.%2022%20A-8074%20Raaba&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              title="r"
              marginwidth="0"
            ></iframe>
          ) : (
            <iframe
              style={{ width: "100%", height: "300px" }}
              src="https://maps.google.com/maps?q=Lessingstra%C3%9Fe%2072,%2038440,%20Wolfsburg&t=&z=13&ie=UTF8&iwloc=&output=embed"
              frameborder="0"
              scrolling="no"
              marginheight="0"
              marginwidth="0"
              title="r"
            ></iframe>
          )}
        </Row>
      </Container>
      <BecomeDriverSection />
      <Container style={{ marginBottom: "50px", marginTop: "100px" }}>
        <h3 style={{ textAlign: "center" }}>Firmenaktivitäten</h3>
        <h5 style={{ textAlign: "center", marginBottom: "20px" }}>
          In dieser Sektion finden Sie unser News-Archiv, das wir zur besseren
          Übersicht nach Themenblöcken und chronologisch geordnet haben.
        </h5>
        <Row>
          <div className="boxes2">
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "30px",
              }}
            >
              <div className="box2">
                <h3>Organisation</h3>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    07/2017: CONTEXT begeht sein 20-jähriges Firmenjubiläum
                  </li>
                  <li>
                    03/2014: CONTEXT automotive GmbH nimmt Betrieb in Wolfsburg
                    auf
                  </li>
                  <li>
                    07/2012: CONTEXT begeht sein 15-jähriges Firmenjubiläum
                  </li>
                  <li>
                    01/2012: CONTEXT wächst weiter und eröffnet Niederlassung in
                    der Steiermark
                  </li>
                </ul>
              </div>
              <div className="box2">
                <h3>Engagement</h3>
                <ul style={{ listStyleType: "circle" }}>
                  <li>
                    CONTEXT macht PC-Kurse mit Kindern vom{" "}
                    <b>
                      {" "}
                      <a href="http://lichtblick-hasenbergl.org/">
                        {" "}
                        Lichtblick Hasenbergl
                      </a>
                    </b>
                  </li>
                  <li>
                    CONTEXT ist Fördermitglied der{" "}
                    <b>
                      {" "}
                      <a href="http://kinder-unfallhilfe-online.de/foerdermitglieder/">
                        {" "}
                        Aktion Kinder-Unfallhilfe e.V.
                      </a>
                    </b>
                  </li>
                  <li>
                    CONTEXT-Vorstand ist Kurator der Studierendeninitiative{" "}
                    <b>
                      {" "}
                      <a href="https://www.teg-ev.de/ueber-uns"> TEG e.V.</a>
                    </b>
                  </li>
                </ul>
              </div>
            </div>
            <div className="box2" style={{ width: "100%" }}>
              <h3>Vorträge</h3>
              <ul style={{ listStyleType: "circle" }}>
                <li>
                  11/2016: Vortrag Safety requirements for use cases of the
                  future bei der Veranstaltung{" "}
                  <b>
                    {" "}
                    <a href="https://functional-safety-meets-adas.com/frontend/index.php">
                      {" "}
                      Functional Safety meets ADAS
                    </a>
                  </b>
                </li>
                <li>
                  05/2016: Vortrag Safety requirements for use cases of the
                  future bei der Veranstaltung{" "}
                  <b>
                    {" "}
                    <a href="https://functional-safety-meets-adas.com/frontend/index.php">
                      {" "}
                      Functional Safety meets ADAS
                    </a>
                  </b>
                </li>
                <li>
                  03/2016: Vortrag Funktionssicherheit beim VDI/DGQ in München
                </li>
                <li>
                  11/2015:{" "}
                  <b>
                    {" "}
                    <a href="https://www.hanser-tagungen.de/"> Praxisvortrag</a>
                  </b>
                  Functional Safety auf der safetronic in Stuttgart
                </li>
                <li>
                  04/2015: CONTEXT GmbH leitet Workshop beim{" "}
                  <b>
                    {" "}
                    <a href="https://www.fh-campuswien.ac.at/fileadmin/redakteure/Termine/Dokumente/Einladung_VISSE_Safety_Day_2015_Freigabe.pdf">
                      {" "}
                      Safety Day
                    </a>
                  </b>{" "}
                  in Wien
                </li>
                <li>
                  07/2014: CONTEXT-Vortrag Mit Freude an der Qualität die
                  technische Zukunft gestalten vor Mitgliedern des lokalen
                  VDI-Bezirksvereins (Arbeitskreis QM)
                </li>
                <li>
                  05/2014: CONTEXT-Vortrag Angewandtes QM in der
                  Automobilindustrie im Rahmen der
                  <b>
                    {" "}
                    <a href="https://www.me.hm.edu/aktuelles/veranstaltung/veranstaltungsdetail_86853.de.html">
                      {" "}
                      VDI-Dienstagsreihe an der Hochschule München
                    </a>
                  </b>
                </li>
                <li>
                  12/2012: Vortrag Möglichkeiten von Optimierungsmethoden -
                  Grundlagen und Beispiele im Rahmen der Sitzung der
                  Arbeitsgruppe "Widerstandsschweißen in Elektro- und
                  Feinwerktechnik" des Deutschen Verbands für Schweißen und
                  verwandte Verfahren e.V. ({" "}
                  <b>
                    {" "}
                    <a href="https://www.dvs-home.de/dvs"> DVS</a>
                  </b>
                  ) am 12.12.2012 in Puchheim
                </li>
                <li>
                  11/2012: Vortrag Angewandtes Qualitätsmanagement in der
                  Automobilindustrie vor Maschinenbau-Studierenden im Rahmen der
                  Reihe Ingenieure/-innen in der Praxis vom Tutorensystem der
                  TUM Garching
                </li>
                <li>
                  01/2012: CONTEXT-Kurzvortrag QM: Anspruch und Wirklichkeit
                  beim e-Monday am 30.01.2012
                </li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
      {/* <BecomeDriverSection /> */}
    </>
  );
};

export default Managment;
