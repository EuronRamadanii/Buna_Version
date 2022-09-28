const service2 = {
  id: 2,
  title: "Beratung",
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
};

export default service2;
