const projects = [
  {
    id: 'social-impact-net',
    name: 'Social Impact Net',
    desc: `
        Bewerbungs-Platform für die Startup-Förderungen von Social Impact.
        Verschiedene Tools, Aufgaben & Denkanstöße helfen, sich professionell mit der eigenen Idee auseinanderzusetzen.
        Am Ende kann die ausformulierte Idee als Bewerbung verschickt werden.
      `,
    image: ['img/projects/social-impact-net.png'],
    tags: ['Wordpress', 'Wordpress JSON API', 'React'],
    tasks: [
      {
        image: '/img/research.png',
        desc: [
          //"Absprache zur Nutzung der  & was es behindert.",
          'Technische Analyse der bestehenden Anwendung auf Basis von Java bzw. Javascript mit Anbindung an ein Wordpress-Backend.',
          'Erarbeitung verschiedener Vorschläge für die Neu- oder Weiterentwicklung der WebApp',
        ],
      },
      {
        image: '/img/dev.png',
        desc: [
          `Umsetzung des Layouts anhand von Screenshots des Designers.`,
          `Nachbau der bestehenden Website & der einzelnen Tools der Anwendung in Javascript/React.`,
          `Anbindung an Wordpress JSON API für Textinhalte & Fotos.`,
        ],
      },
    ],
  },

  {
    id: 'breathe-meditation',
    name: 'Breathe Meditation',
    desc: `
      Die Breathe-App ist ein Meditations-Timer mit frei einstellbaren Zeiten und individuellen Intervall-Klängen.
      `,
    mobile: true,
    image: ['img/projects/breathe-1.jpg', 'img/projects/breathe-2.jpg'],
    tags: ['app', 'JavaScript', 'Redux', 'es6', 'react native'],
    tasks: [
      {
        image: '/img/dev.png',
        desc: [
          `Entwicklung einzelner UI-Komponenten (Scroll, Animationen)`,
          `Aufbau der beiden Bereiche Fortschrittsanzeige und Meditations-Download mit Anbindung an ios Abo und Dateidownloads.`,
        ],
      },
    ],
  },
  {
    id: 'getgame',
    name: 'Getgame',
    short:
      'getgame bringt Konsolen-Spieler zusammen, um Spiele miteinander zu tauschen.',
    desc:
      'getgame bringt Konsolen-Spieler zusammen, um Spiele miteinander zu tauschen. Ihre Wünsche und Angebote pflegen die Spieler innerhalb der App. Unser System schlägt dem Nutzer passende Tausch-Kandidaten vor, lässt aber auch freie Angebote der Spieler untereinander zu.',
    mobile: true,
    image: ['img/projects/getgame-1.png', 'img/projects/getgame-2.png'],
    tags: ['JavaScript', 'Redux', 'es6', 'react native'],
    tasks: [
      {
        image: '/img/research.png',
        desc: [
          'Unser Ziel: ein Cross-Platform-Framework finden, das zukunftsträchtig ist und Apps mit nativer Performance ermöglicht. Mit Prototypen werden verschiedene Produkte getestet. Abschließende Empfehlung: react native.',
        ],
      },
      {
        image: '/img/ux.png',
        desc: [
          'UX: Einsatz-Szenarien (use cases) analysieren, um bekannte Funktionen und Views in einem Storyboard darstellen.',
        ],
      },
      {
        image: '/img/dev.png',
        desc: [
          'Entwicklung der App zunächst anhand der Storyboards, später mit einer konkreten Sketch-Vorlage.',
        ],
      },
    ],
  },
  {
    id: 'checkdomain',
    name: 'Checkdomain Website',
    desc:
      'Die Website sollte durch eine zeitgemäße und responsive Variante abgelöst werden, ohne den großen Kundenstamm zu verschrecken und Einbußen bei den Suchmaschinen-Besuchern zu erleiden.',
    image: ['img/projects/checkdomain.png'],
    tags: ['Bootstrap 3', 'CSS', 'BEM', 'Symfony 2', 'Angular', 'gulp', 'npm'],
    tasks: [
      {
        image: '/img/research.png',
        desc: [
          'Analyse der bestehenden Website und Sammlung der bisher verwendeten UI-Elemente in einer Design Pattern Bibliothek.',
        ],
      },
      {
        image: '/img/ux.png',
        desc: [
          'Unser Projekt-Team trifft sich regelmäßig, um die Vorschläge des Designers aus den verschieden Perspektiven mitzuentwickeln. Wir Frontend-Entwickler achten darauf, dass das Design auch responsive funktioniert, beraten zum Einsatz möglicher Komponenten und den Auswirkungen auf UX und Usability.',
        ],
      },
      {
        image: '/img/dev.png',
        desc: [
          'Entwicklung einer erweiterbaren HTML-/CSS-Struktur, die sich an BEM und http://cssguidelin.es orientiert. Schrittweise Umstellung der einzelnen Frontend-Seiten auf das neue Layout.',
          'Selbstständige Erweiterung des neuen Layouts um einzelne Design-Elemente & überführung bestehender Komponenten in moderne HTML5-Komponenten, die auf allen Geräten funktionieren.',
        ],
      },
    ],
  },

  {
    id: 'office-chooser-mobile',
    name: 'Office-Chooser mobile',
    desc:
      'Als mobile Website soll der Office Chooser Kunden im Markt dabei behilflich sein, das richtige Office zu finden. Der Aufruf erfolgt über QR-Codes, die in Verkaufsmärkten neben den Produkten platziert werden.',
    image: [
      'img/projects/sku-mobile-intro.png',
      'img/projects/sku-mobile-question.png',
    ],
    mobile: true,
    tags: ['JavaScript', 'ZeptoJS', 'Performance'],
    tasks: [
      {
        image: '/img/ux.png',
        desc: [
          'überführung der Desktop-Version in eine mobile App:',
          'Aufbau der App & Design der User Flows',
        ],
      },

      {
        image: '/img/dev.png',
        desc: [
          `
            Weiterverwendung und Anpassung des optimierten Codes aus dem Projekt „Office Chooser“.
  
            Unterstützung von Swipe-Gestures für die Bedienung.
  
            Performance-Optimierung der Website für Smartphones und 3g-Verbindung.
          `,
        ],
      },
    ],
  },

  {
    id: 'office-chooser',
    name: 'Office-/SKU-Chooser',
    desc:
      'Bei dem Office Chooser handelt es sich um eine iframe-Einbindung für Web-Shops mit Microsoft Office-Produkten. Nutzer können sich über die unterschiedlichen Eigenschaften und Einsatzgebiete aller Office-Pakete informieren und in einem Test ermitteln, welche Pakete in Frage kommen.',
    image: ['img/projects/sku-intro.png'],
    tags: ['HTML', 'CSS', 'JavaScript', 'npm', 'gulp'],
    tasks: [
      {
        image: ['/img/dev.png'],
        desc: [
          'Nachbau der Windows-App mithilfe von HTML und Javascript, Animationen in CSS und Refactoring des PHP-Codes für die Office-Empfehlung in Javascript.',
          'Vereinfachte Entwicklung und Auslieferung verschiedener Versionen mithilfe von npm & gulp und Konfigurationsdateien für Sprach- und Layoutanpassungen.',
          'Dokumentation und Bereitstellung der unterschiedlichen Pakete.',
        ],
      },
    ],
  },

  {
    id: 'trainon',
    name: 'TrainOn',
    desc: `
        Mithilfe von trainOn und der Open Source Konferenz-Software »Big Blue Button« werden Webinare abgehalten und organisiert.
        trainOn hilft bei der Organisation der Meetings:
        Teilnehmer einladen, verwalten und Meetings zuordnen; individuelle Anpassung der Meetings; Dokumenten-Upload; Fragebögen nach dem Meeting; E-Mail-Vorlagen und -versand an Teilnehmer; Kalender-Sites mit Monatsübersicht (Teilnehmer können per Mail eingeladen werden oder sich hier selbst einladen). Bezahlung und Nutzerkonten-Verwaltung.
      `,
    image: ['img/projects/trainon-start.png'],
    tags: ['PHP', 'JavaScript', 'HTML', 'MVC'],
    tasks: [
      {
        image: '/img/ux.png',
        desc: [
          'Aufbau einzelner Seitenbereiche und Workflows sowie Reviews für bestehende Funktionen.',
        ],
      },
      {
        image: '/img/research.png',
        desc: [
          `
            Projekteigenes MVC-Framework weiter aufgebaut und parallel einzelne Features umgesetzt, zB. Registrierung, Login und Passwort-Wiederherstellung oder E-Mail-Templates und -versand.
            Pair-Programming mit einem gelernten Java-Entwickler: PHP-, Javascript- und HTML/CSS-Grundlagen vermittelt, Code reviewed und beim Entwurf einzelner Module geholfen.
            Später als Tester die gesamte Anwendung oder einzelne Module auf Probleme oder Fehler geprüft.
          `,
        ],
      },
    ],
  },

  {
    id: 'ostseelive-mobile',
    name: 'Ostseelive mobile',
    desc: `
        Angepasste Version der ostseelive-Website für Smartphone-Nutzer.
  
      `,
    image: ['img/projects/osl-mobile.png', 'img/projects/osl-mobile-2.png'],
    mobile: true,
    tags: ['HTML', 'CSS', 'LESS', 'ZeptoJS', 'Modernizr', 'PHP'],
    tasks: [
      {
        image: '/img/ux.png',
        desc: [
          `
            Kundenvorgaben und eigene Ideen in Form von Wireframes festhalten und innerhalb eines Prototypen umsetzen.
            Für die mobile Version musste die Bedienung überdacht werden, um die tiefe Verschachtelung abzubilden und ein Ersatz für die multimedialen Elemente (Videos, Google Maps) gefunden werden.
          `,
        ],
      },
      {
        image: '/img/dev.png',
        desc: [
          `
            Aufbau des Frontends &
            Anpassung des Backends an eine neuen Streaming-Dienstleister, sodass beide Arten parallel laufen und sukzessive umgestellt werden können.
          `,
        ],
      },
    ],
  },

  {
    id: 'bilddatenbank-weiterentwicklung',
    name: 'Weiterentwicklung Bilddatenbank',
    desc:
      'Die Bilddatenbank wird genutzt, um Bildmaterial in digitaler Form zu speichern, kategorisieren und in verschiedenen Formaten bereitzustellen.',
    image: ['img/projects/kassel-frontend.png'],
    tags: ['PHP', 'MySQL', 'ImageMagick'],
    tasks: [
      {
        image: '/img/dev.png',
        desc: [
          `
            übertragung des alten Codes in die weiterentwickelte Version unseres Adminbereichs.
            Implementierung einer Kategorisierung, einer Zugriffsrechte-Verwaltung und einer Stapel-Verarbeitung von Bildern.
          `,
          `Anpassung des Frontend an ein neues Design und die neue Rechte-Verwaltung.`,
        ],
      },
    ],
  },

  {
    id: 'contao-maps-plugin',
    name: 'Maps Plugin für Contao',
    desc:
      'Eine eigene Kartenlösung für die Geo-/Standort-Daten aus unserer Gastgeber-Verwaltung, die aufbereitet von der Firma hubermedia kommen. Tourismus-Organisationen können so POI wie Sehenswürdigkeiten und Unterkünfte, aber auch Veranstaltungen und Wanderwege oder Fahrradrouten mithilfe von exakten GEO-Daten darstellen und auf einer Website einbinden.',
    image: ['img/projects/googlemaps-gui.png'],
    tags: ['JavaScript', 'HTML', 'CSS', 'PHP', 'Contao'],
    tasks: [
      {
        image: '/img/ux.png',
        desc: [
          'Entwicklung einer übersichtlichen Bedienung für die zahlreichen Kategorien.',
        ],
      },
      {
        image: '/img/dev.png',
        desc: [
          `
            Anbindung der REST-Schnittstelle.
            Entwicklung einer Standardlösung in Javascript, die bei Bedarf leicht individuell von uns angepasst werden kann. Denkbar sind änderungen am Design oder die Programmierung zusätzlicher Module. Auch fremder Code lässt sich in einem eigenen Modul integrieren, zB. geschehen in Form eines Kalendermoduls.
            Integration der Kartenlösung als Modul in das CMS Contao mit PHP.
            `,
        ],
      },
    ],
  },

  {
    id: 'ostseelive',
    name: 'ostseelive.tv',
    desc:
      'ostseelive.tv zeigt eingetragene Urlaubsorte mit Live-Webcams, POIs und Imagefilmen auf einer interaktiven Karte. Im Rahmen des Relaunches wurden ein neues Javascript-Frontend und ein umfangreiches CMS zur Pflege der zahlreichen Komponenten entwickelt.',
    image: ['img/projects/ostseelive-1.png'],
    tags: ['PHP', 'ImageMagick', 'jQuery'],
    tasks: [
      {
        image: '/img/dev.png',
        desc: [
          'Softwaredesign für zentrale Komponenten wie zB. Videos, Auslieferung von Videos. Programmierung der Komponenten zur Pflege der Inhaltsseiten, Videoverwaltung (Upload, Vorschaubilder mit ImageMagick, Zuordnung zu verschiedenen Seitenbereichen). API & Doku zur Video-Auslieferung mit Sicherheits- und Zählmechanik für Drittanbieter.',
          'Aufbau des Layout-Grundgerüsts in HTML/CSS und der Basis-Funktionen für die WebApp (Routing, Lade-Mechanik für Inhalte aus dem Backend) mit Fokus auf Lade-Geschwindigkeit und SEO. Einbindung der Videos. Anzeige der POI in Google Maps.',
        ],
      },
    ],
  },

  {
    id: 'web2print',
    name: 'Optimale Präsentation: Web2Print-Modul',
    desc:
      'Das Modul Web2Print ist Teil des Buchungssystem Optimale Präsentation und hilft, Gastgeberverzeichnisse/-kataloge aus den Gastgeberdaten im System bequem und ohne doppelte Datenverfassung aufzubauen. Von der Anzeigenpflege bis zur fertigen Druckfreigabe wird alles innerhalb des Moduls erledigt.',
    image: ['img/projects/op-1.jpg'],
    tags: ['PHP', 'SOAP', 'JavaScript'],
    tasks: [
      {
        image: '/img/ux.png',
        desc: [
          'Planung der Abläufe für eine intuitive und zeitsparende Lösung, für die aufwendige Erstellung eines GGV (Anzeigen, Formate, Kunden-absprachen). Zu jedem Zeitpunkt soll ersichtlich sein, in welchem Zustand sich die Anzeige befindet bzw. welche Schritte ausstehen.',
        ],
      },
      {
        image: '/img/research.png',
        desc: [
          `
            Umfangreiche Erweiterung der Oberfläche zur Verwaltung von Katalogen, Eingabeformularen, Ansprechpartnern und Layout-Vorgaben.
            Programmierung eines Werkzeugs, mit dem Formular-Templates zur Datenerfassung frei erstellt werden können und Verknüpfung von Bestandsdaten aus dem System an neue Formulareinträge.
            Umstellung der SOAP-Anbindung auf einen inDesign-Server, der automatisiert Vorschau-Bilder, inDesign-Dateien und PDF-Dokumente erzeugt.
            Umfangreiche Statistiken über gebuchte Anzeigen für die Abrechnung
          `,
        ],
      },
    ],
  },
];

export default projects;
