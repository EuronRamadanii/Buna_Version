import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import BlogList from "./BlogList";
// import aboutImg from "../../assets/all-images/cars-img/bmw-offer.png";

const Career = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
        
         

          <h2 className="section__title">Jobs </h2>
              <p className="section__description_career">
              Wir freuen uns, dass Sie sich für eine Mitarbeit in unserem Team interessieren
              </p>
                  <h4 className="section__subtitle" style={{color:"black"}}>Open Jobs</h4>

          <BlogList/>
          {/* <h4 className="section__subtitle mt-5" style={{color:"#000d6b"}}>Why Context</h4> */}
              <h2 className="section__title mt-5">Why Context</h2>
              <p className="section__description_career">
                Unsere wichtigste Ressource und Kapital sind unsere Mitarbeiter.
                Sie sind der entscheidende Faktor für unseren Erfolg. Um
                weiterhin unseren Erfolg zu sichern, suchen wir kompetente und
                engagierte Mitarbeiter mit einer Leidenschaft für
                Qualitätsmanagement und einer ausgeprägten
                Dienstleistungsmentalität.
              </p>
           <Col lg="12" md="6">
            <div className="about__section-content">
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  width: "100%",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4 className="section__subtitle">Unser Angebot</h4>
                  <p className="section__description_career">
                    Unsere Mitarbeiter sind uns wichtig und deshalb bieten wir
                    einiges.{" "}
                  </p>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Anspruchsvolle Aufgaben
                    </p>
                    {/* <p className="section__description_career">
                      Die vielfältigen Projekte bei unseren renommierten Kunden sorgen für Herausforderungen und lassen keine Langeweile aufkommen.
                    </p> */}
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Flexible Arbeitszeiten
                    </p>
                    {/* <p className="section__description_career">
                      Unsere flexiblen Arbeitszeitmodelle ermöglichen unseren  Mitarbeitern eine ausgewogene Work-Life-Balance.
                    </p> */}
                  </div>

                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Fairer Umgang
                    </p>
                    {/* <p className="section__description_career">
                      Unsere Firmenkultur ist geprägt von gegenseitigem Respekt, Wertschätzung, Offenheit und Vertrauen.
                    </p> */}
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Kurze Wege
                    </p>
                    {/* <p className="section__description_career">
                      Unsere flache Hierarchie und eine transparente Organisationsstruktur beschleunigen Unternehmensentscheidungen und die interne Kommunikation.
                    </p> */}
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Angenehme Arbeitsatmosphäre
                    </p>
                    {/* <p className="section__description_career">
                      Durch unser kollegiales Miteinander, Teamwork, offene TürenFirmenevents und gemeinsame Aktivitäten sorgen wir für einen unkomplizierten und offenen Umgang.
                    </p> */}
                  </div>


                </div>


                <div className="karriereright"
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    width: "100%",
                  }}
                >
                  <h4 className="section__subtitle" >Unsere Erwartungen</h4>
                  <p className="section__description_career" style={{lineHeight:"1"}}>
                  Die Mitarbeit in unseren interdisziplinär zusammengesetzten Projektteams erfordert Engagement, Neugier und Flexibilität. 
                  </p>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Kommunikationsstärke
                    </p>
                    {/* <p className="section__description_career">
                    Als Berater unserer Kunden agieren Sie als Schnittstelle zwischen unterschiedlichen Fachbereichen wie z. B. Entwicklung, Produktion und Lieferanten. Deshalb ist Ihre Kommunikationsstärke eine der wichtigsten Voraussetzungen.
                    </p> */}
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Selbstbewusstsein
                    </p>
                    {/* <p className="section__description_career">
                      Aufgeschlossenheit und Sicherheit sind entscheidend, um gegenüber Kunden, Vorgesetzten und Kollegen überzeugend und auf Augenhöhe aufzutreten.
                    </p> */}
                  </div>

                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Eigenverantwortung
                    </p>
                    {/* <p className="section__description_career">
                      Wir geben Ihnen die Möglichkeit, selbstbestimmt zu arbeiten. Das setzt Ihre Bereitschaft voraus, Verantwortung zu übernehmen und Entscheidungen im Sinne der Projektziele zu treffen. 
                    </p> */}
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Unternehmertum
                    </p>
                    {/* <p className="section__description_career">
                    Um unsere Marktposition weiterhin zu behaupten, brauchen wir Mitarbeiter mit Ideen, dem Willen, diese auch aktiv umzusetzen und mit den Bedürfnissen unserer Kunden in Einklang zu bringen.
                    </p> */}
                  </div>
                  <div className="about__section-item d-flex align-items-center">
                    <p
                      className=" d-flex align-items-center gap-2"
                      style={{ fontWeight: "bold" }}
                    >
                      <i class="ri-checkbox-circle-line"></i> Veränderungsbereitschaft
                    </p>
                    {/* <p className="section__description_career">
                    Wachstum braucht Veränderungsbereitschaft. Um sich auf neue Märkte, Kunden- anforderungen und Entwicklungen flexibel einstellen zu können, sind eine hohe Lernbereitschaft und der Mut, Fehlentwicklungen frühzeitig gegenzusteuern notwendig.
                    </p> */}
                  </div>
                </div>

                
              </div>

              

            </div>
          </Col>            
        </Row>
      </Container>
    </section>
  );
};

export default Career;
