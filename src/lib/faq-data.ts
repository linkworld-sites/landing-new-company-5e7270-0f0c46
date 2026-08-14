export const faqs = [
  {
    question: "Was ist ein Fractional CFO — und wie unterscheidet er sich von einem Vollzeit-CFO?",
    answer:
      "Ein Fractional CFO liefert die gleiche strategische Finanzführung wie ein Vollzeit-CFO — Cash-Flow-Planung, Reporting, Kostenrechnung, Strategic Advisory — aber flexibel skaliert auf euren tatsächlichen Bedarf. Ihr zahlt keine €120.000+ Vollzeitgehalt, sondern ab €1.500/Monat für exakt die CFO-Funktion, die euer Wachstum gerade braucht.",
  },
  {
    question: "Wie schnell können wir starten?",
    answer:
      "Innerhalb von 48 Stunden. Unser Onboarding-Prozess ist standardisiert und nutzt KI-gestützte Analysemodelle, um eure Finanzdaten sofort auszuwerten — statt der 3–6 Monate, die ein klassischer CFO-Aufbau üblicherweise braucht.",
  },
  {
    question: "Was kostet ein Fractional CFO bei Summit CFO Services?",
    answer:
      "Engagements starten ab €1.500 im Monat, ohne Jahresvertrag. Der genaue Umfang richtet sich nach Größe und Komplexität eures Unternehmens — ihr bekommt volle CFO-Funktionalität zum Bruchteil der Kosten einer Vollzeitstelle.",
  },
  {
    question: "Müssen wir einen Jahresvertrag unterschreiben?",
    answer:
      "Nein. Wir arbeiten ohne Jahresbindung — ihr könnt das Mandat jederzeit anpassen oder beenden. Diese Flexibilität ist Teil unseres Modells, weil wir überzeugt sind, dass Ergebnisse zählen, nicht Vertragslaufzeiten.",
  },
  {
    question: "Was genau ist im Live CFO Dashboard enthalten?",
    answer:
      "Das Dashboard verbindet sich mit euren ERP-Systemen (z. B. SAP, DATEV, Lexware) und zeigt Cash-Flow, Kostenstellen und KI-Einblicke in Echtzeit — inklusive automatischer Cash-Gap-Erkennung, damit ihr Engpässe seht, bevor sie zum Problem werden.",
  },
  {
    question: "Für welche Unternehmen ist das Angebot gedacht?",
    answer:
      "Für wachstumsstarke KMU und Mittelstandsunternehmen zwischen etwa 1 und 50 Mio. € Umsatz, die ihren Bookkeeper bereits ausgewachsen haben, aber noch keinen Vollzeit-CFO rechtfertigen können — inklusive branchenspezifischer Lösungen für Startups, Scale-ups und Investor-backed SMEs.",
  },
  {
    question: "Können wir auch nur ein einzelnes Projekt beauftragen, ohne laufendes Mandat?",
    answer:
      "Ja. Für einmalige Bedarfe wie einen 48h-Finanzaudit, investorenreife Reportings oder eine Board-Vorbereitung bieten wir klar abgegrenzte Projekte zum Festpreis an — ein risikoarmer Einstieg, der später in ein laufendes Mandat übergehen kann.",
  },
];

export const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
};
