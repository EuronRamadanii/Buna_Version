const serviceData = [
  {
    id: 1,
    title: "Projektierung & Umsetzung",
    path: "/services/project",
    icon: "ri-map-pin-2-line",
    desc: "CONTEXT übernimmt auf Wunsch die komplette Steuerung im Rahmen der Projektplanung, -durchführung und -abschlußanalyse.",
    desc2:
      "Unabhängig davon, ob es sich um Optimierungsaufgaben handelt oder um die Lösung akuter Qualitätsprobleme.",
    subLinks: [
      {
        title: "Beispiel Produktionsverlagerung",
        text: "Ein Zulieferer der Fertigungsindustrie verlagert seinen Produktionsstandort.",
        subTexts: [
          {
            title: "Ausgangssituation",
            paragraphs: [
              "Potenzielle Qualitätsverluste und drohender Einbruch bei Produktionsvolumina",
              "Vermeidungsmaßnahmen am Ursprungs- und Transferstandort sind zu treffen",
            ],
          },
          {
            title: "Ansatz",
            paragraphs: [
              "Status Quo-Bestimmung über: Kontrolle der Prozess-FMEA und Control Pläne, Prozess- und Messmittelfähigkeitsstudien, Prozess- und Messmittelfähigkeitsstudien",
              "Zeit- und Volumenplanung inklusive Lagerbestandsaufbau für die Transferzeit",
              "Begleitung der Inbetriebnahme der transferierten Linie am neuen Standort",
              "Abnahme der Prozessserie",
              "Durchführung Leistungstest",
              "Kontrolle durch erneute Messmittel- und Prozessfähigkeitsstudien",
            ],
          },
          {
            title: "Ergebnisse",
            paragraphs: [
              "Vergleich mit historischen Daten aus alter Produktionsstätte",
              "Aufsetzen und Begleitung des Launchmanagements am neuen Standort",
              "Linienfreigabe und Lessons Learned",
            ],
          },
        ],
      },
      {
        title: "Beispiel Reklamationsanstieg",
        text: "Ein Automobilhersteller verzeichnet ein erhöhtes Aufkommen an Kundenbeschwerden.",
        subTexts: [
          {
            title: "Ausgangssituation",
            paragraphs: [
              "Steigende Anzahl von Reklamationen aufgrund von Motorstartproblemen",
              "Erhöhte Gewährleistungskosten bei einem bestimmten Fahrzeugmodell",
              "Fehlerbilder deuten auf einen Zusammenhang mit dem Abgassystem hin",
            ],
          },
          {
            title: "Ansatz",
            paragraphs: [
              "Abgrenzung  des zu betrachtenden Problemfeldes über Auswertung von Felddaten",
              "Identifikation einer unzulässigen Drift der Lambdasondenwerte 1 als Kernursache mittels Root Cause-Analyse und geeigneter Versuchsmethodik",
              "1 Lambdasonde: Sensor zur Messung und Steuerung des Luftgehaltes im Abgas",
            ],
          },
          {
            title: "Ergebnisse",
            paragraphs: [
              "Kompensation des Driftverhaltens über eine entsprechende Kennfeldanpassung in der Lambdaregelung des Motorsteuergerätes als Folge aus den Ergebnissen des Versuchsplans",
            ],
          },
        ],
      },
      {
        title: "Beispiel QVP",
        text: "Ein Systemlieferant im Umfeld von Elektroantrieben stellt die vorgegebenen Qualitätsstandards innerhalb eines Entwicklungsprojektes sicher.",
        subTexts: [
          {
            title: "Ausgangssituation",
            paragraphs: [
              "Suche einer Unterstützungsleistung im Rahmen eines Entwicklungsprojektes mit hohem Innovationsgrad",
              "Forderung nach einer: erweiterten Qualitätsvorausplanung (QVP), internen Methodenkoordination und -umsetzung zur Erkennung und Bewertung von Entwicklungsrisiken und extern gegenüber den beteiligten Entwicklungspartnern/Lieferanten",
            ],
          },
          {
            title: "Ansatz",
            paragraphs: [
              "Projektierung im Zuge eines Werkvertrages",
              "Besetzung der geforderten Rolle mit einem erfahrenen Qualitätsmanager",
              "Analyse des Projektstandes",
              "Ermittlung und Bewertung der prioren Projektrisiken für die Entwicklungskomponenten mittels Risikofilter",
            ],
          },
          {
            title: "Ergebnisse",
            paragraphs: [
              "Erstellung einer angepassten QVP und Abstimmung mit dem Projektplan",
              "Prozessschulungen der Entwicklungspartner",
              "Koordination, Durchführung und Überwachung der Methoden (z.B. FMEA, Testplanung, Softwareanalyse)",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 2,
    title: "Beratung",
    path: "/services/beratung",
    icon: "ri-community-line",
    desc: "Im Vordergrund steht auch hier der Anspruch, dass unsere Lösungen sowohl praktikabel als auch effizient sind und zu den Arbeitsabläufen unserer Kunden passen.",
    desc2:
      "CONTEXT liefert bei Bedarf konkrete Handlungsempfehlungen, denen punktgenaue Analysen vorausgehen und die zu spürbaren Ergebnissen führen. Etwa wenn es um die Auswahl und den Einsatz geeigneter Methoden und Werkzeuge geht.",
    subLinks: [
      {
        title: "Projektbeispiel DoE",
        text: "Für zu entwickelnde Motoren sollen die signifikanten Einflussfaktoren ausgewählter Zielgrößen identifiziert und optimal eingestellt werden.",
        subTexts: [
          {
            title: "Ausgangssituation",
            paragraphs: [
              "Anpassung eines Motors an die gestiegenen Anforderungen der Euro-5-Norm im Hinblick auf die Einhaltung von Abgasgrenzwerten",
            ],
          },
          {
            title: "Ansatz",
            paragraphs: [
              "Ermittlung der Größen mit signifikantem Einfluss auf Verbrauch, Laufruhe und CO/HC/NOx-Emissionen",
              "Einstellung der zu identifizierenden Treiber mit dem Ziel einer Minimierung des spezifischen Verbrauchs und der CO/HC/NOx-Emissionen und Maximierung der Laufruhe",
            ],
          },
          {
            title: "Ergebnisse",
            paragraphs: [
              "Systemanalyse bringt 9 Einstellgrößen mit Einfluss auf die resultierenden Zielgrößen hervor",
              "Reduktion des zeitlichen Versuchsaufwandes um den Faktor 300",
              "Ermittlung der signifikanten Einflussfaktoren",
              "Ableitung optimaler Parameterwerte unter Berücksichtigung vorhandener Zielkonflikte",
            ],
          },
        ],
      },
      {
        title: "Projektbeispiel NRA",
        text: "Für Hybrid-Antriebe sollen die systemeigenen Risiken analysiert werden. Die Komplexität dieser Systeme mit all den Wechselwirkungen zwischen ihren (Software-)Modulen lässt konventionelle Risikoanalysen an ihre Grenzen geraten und macht einen eigenen Ansatz wie die von uns entwickelte Netzwerk-Risikoanalyse (NRA) notwendig.",
        subTexts: [
          {
            title: "Ausgangssituation",
            paragraphs: [
              "Viele Steuergeräte interagieren beim Antrieb von Hybrid-Fahrzeugen",
              "Verbrennungsmotor, Elektromotor und Getriebe müssen fehlerfrei und kundenoptimal zusammenarbeiten – ggf. mit noch weiteren Steuergeräten",
            ],
          },
          {
            title: "Ansatz",
            paragraphs: [
              "Analyse der Systemlandschaft (Software im Steuergerät)",
              "Bewertung der Systemelemente (Softwaremodule)",
              "Analyse der Verknüpfung der Module untereinander",
              "Berechnung der Eigenrisiken der Module",
              "Berechnung der Verkettungsrisiken für das gesamte Steuergerät",
              "Analyse der Ergebnisse",
              "Interpretation und Darstellung der Ergebnisse",
            ],
          },
          {
            title: "Ergebnisse",
            paragraphs: [
              "Darstellung, welche Module die höchsten Risiken in sich tragen",
              "Darstellung, welche Module die größten Risiken von anderen Modulen erben",
              "Aufzeigen von Verbesserungspotenzialen: Welche Verbesserung eines Moduls bringt dem Gesamtsystem am meisten?",
            ],
          },
        ],
      },
    ],
  },

  {
    id: 3,
    title: "Schulungen",
    path: "/services/schulungen",
    icon: "ri-roadster-line",
    desc: "Die CONTEXT-Akademie bietet sowohl unternehmensspezifische Schulungen als auch allen Interessierten zugängliche Seminare.",
    desc2:
      "The practical relevance is always in the foreground. The direct implementation in realistic scenarios enables the participants to apply their newly acquired skills immediately.Immer steht der Praxisbezug im Vordergrund. Die direkte Umsetzung in realitätsnahen Beispielen befähigt die Teilnehmer, das Gelernte sofort anwenden zu können.",
    subLinks: [
      {
        title: "Firmenschulungen",
        text: "Neben den Schwerpunktthemen aus unserem Schulungsprogramm bieten wir Ihnen auch gerne individuell auf Ihren Bedarf angepasste Schulungen an. Die Inhalte können hierbei unter Berücksichtigung von Einsatzgebiet, Unternehmenskonstellation und Branchenbezug gestaltet werden. Auf Wunsch unterstützen wir Sie zusätzlich in Form von Mentoring bei der Umsetzung und Implementierung der neuen Kenntnisse in Ihr Tagesgeschäft.",
        subTexts: [
          {
            title: "In-house",
            paragraphs: [
              "Mit Schulungen bei Ihnen vor Ort sparen Sie Reisekosten für Ihre Mitarbeiter. Zudem gibt die gewohnte firmeneigene IT-Umgebung den Teilnehmern Sicherheit.",
            ],
          },
          {
            title: "Off-site",
            paragraphs: [
              "In unseren eigenen, modern ausgestatteten Seminarräumen können Sie sich fernab des ablenkenden Tagesgeschäftes ganz auf Ihr gewähltes Schulungsthema konzentrieren.",
              "Wir sichern Ihnen hierbei unsere persönliche Betreuung in einem angenehmen Lernumfeld zu.",
            ],
          },
        ],
      },
      {
        title: "Offene Schulungen",
        text: "Unsere offenen Schulungen richten sich an einen breiten Teilnehmerkreis und sind damit für jeden Interessierten buchbar.",
        subTexts: [
          {
            title: "Themen und Termine",
            paragraphs: [
              "Unsere offenen Schulungen finden regelmäßig statt. Details entnehmen Sie bitte unserem Schulungsprogramm.",
            ],
          },
          {
            title: "Veranstaltungsort",
            paragraphs: [
              "In unseren eigenen, modern ausgestatteten Seminarräumen im Norden von München vermitteln Ihnen erfahrene Dozenten Methoden- und Spezialwissen zu ausgewählten Themen.",
              "Wir sichern Ihnen hierbei unsere persönliche Betreuung in kleinen, überschaubaren Gruppen und ein angenehmes Lernumfeld zu.",
            ],
          },
        ],
      },
      {
        title: "Konferenzraumvermietung",
        text: "Gerne können Sie unsere Tagungsräume in München auch für Ihre Konferenzen und Arbeitsbesprechungen anmieten.",
        subTexts: [
          {
            title: "Raumangebot",
            paragraphs: [
              "Wir verfügen über sieben Seminarräume mit jeweils 25 bis 50 m2 und Tageslicht. Allein durch die Zusammenlegung unserer beiden größten und mit einer Schiebewand verbundenen Räume lässt sich bestuhlter Platz für etwa 30 bis 70 Personen realisieren.",
            ],
          },
          {
            title: "Zusatzleistungen",
            paragraphs: [
              "Optional bieten wir Ihnen neben der Bewirtung mit Heiß-/Kaltgetränken und Konferenzgebäck auch Moderatorenunterstützung, Catering und technisches Equipment an.",
              "Für Anfragen und Preisinformationen nutzen Sie bitte das Kontaktformular.",
            ],
          },
        ],
      },
    ],
  },

  // {
  //   id: 4,
  //   title: "Lorem Ipsumr",
  //   icon: "ri-timer-flash-line",
  //   desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  // },

  // {
  //   id: 5,
  //   title: "Lorem Ipsumr",
  //   icon: "ri-map-pin-line",
  //   desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  // },

  // {
  //   id: 6,
  //   title: "Lorem Ipsumr",
  //   icon: "ri-flight-takeoff-line",
  //   desc: "Tempor tempor sadipscing vero lorem sea, invidunt sed et eos ipsum et erat. Dolor ut duo sadipscing lorem. Gubergren gub",
  // },
];

export default serviceData;
