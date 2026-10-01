# LEGAL-TODO: Offene Punkte vor dem Livegang

Stand: Oktober 2026. Das ist eine Arbeitsliste, keine Rechtsberatung. Impressum und Datenschutzerklaerung
sollten vor der Veroeffentlichung von einer fachkundigen Stelle (Rechtsanwalt, Datenschutzbeauftragte/r
oder Fachkraft fuer Datenschutz) geprueft werden.

## Aktueller Stand

- **Impressum und Datenschutzerklaerung sind Entwuerfe** und muessen vor dem Livegang rechtlich geprueft werden.
- **Calendly ist aktiviert.** Aktueller Link: `https://calendly.com/leongolembek` (Konstante `CALENDLY_URL`
  in `src/siteConfig.js`). Der Button "Online-Termin buchen" oeffnet die externe Calendly-Seite in einem
  neuen Tab (`target="_blank"`, `rel="noopener noreferrer"`). Calendly ist nicht in die Seite eingebettet.
- **Das Kontaktformular besteht zusaetzlich weiter.** Das **Formular-Backend ist noch nicht eingerichtet**
  (`VITE_FORM_ENDPOINT` nicht gesetzt). Bis dahin zeigt das Formular im Produktions-Build eine ehrliche
  Fehlermeldung mit Hinweis auf `info@anvero.de`.
- Die Datenschutzerklaerung enthaelt einen Calendly-Abschnitt (Abschnitt 6) als **Grundgeruest**. Die konkreten
  Angaben fehlen noch (siehe unten).

## Impressum (`src/pages/Impressum.jsx`)

Aufgefuehrt sind nur die bestaetigten Angaben: ANVERO (Einzelunternehmen), Inhaber Leon Raik Golembek,
Zeppelinstrasse 5, 25451 Quickborn, Deutschland, Telefon, E-Mail.

Zu klaeren:

- [ ] **USt-IdNr.:** Bisher "nicht vorhanden oder nicht angegeben". Falls eine vergeben ist (§ 27a UStG),
      muss sie ins Impressum. Falls keine vorhanden ist, bleibt der Eintrag weg.
- [ ] **Handelsregister:** Bisher "nicht vorhanden". Dann ist keine Angabe noetig.
- [ ] **Verantwortlich fuer Inhalte (§ 18 Abs. 2 MStV):** Nur relevant, sobald journalistisch-redaktionelle
      Inhalte erscheinen (z. B. Ratgeber). Dann Name und Anschrift ergaenzen. Pruefen lassen.
- [ ] **Verbraucherstreitbeilegung (§ 36 VSBG):** Ob und welche Aussage noetig ist, haengt davon ab, ob
      Verbraucher angesprochen werden. Die Seite richtet sich an Unternehmen. Pruefen lassen.
- [ ] **Berufs- oder erlaubnispflichtige Taetigkeit / Aufsichtsbehoerde:** Nur falls zutreffend.
- [ ] **Kleinunternehmerregelung:** Falls § 19 UStG genutzt wird, ist das fuer Angebote und Rechnungen
      relevant (nicht zwingend im Impressum). Mit Steuerberatung klaeren.
- [ ] Telefonnummer bestaetigen (`0152 31792983`, Link `tel:+4915231792983`).

## Datenschutzerklaerung (`src/pages/Datenschutz.jsx`), ENTWURF

Der Entwurf beschreibt nur, was sich aus dem Projektcode und Ihren Angaben belegen laesst.
Bewusst **nicht** enthalten, weil keine Fakten vorliegen:

- [ ] **Hosting-Anbieter:** Im Text steht nur "Hosting-Anbieter". Falls Vercel genutzt wird: Vertragsstatus,
      Auftragsverarbeitungsvertrag (AVV/DPA), Region und Umfang der Server-Logs klaeren und namentlich
      eintragen.
- [ ] **Drittlandtransfer** (z. B. USA bei US-Anbietern): Rechtsgrundlage (Angemessenheitsbeschluss/DPF,
      Standardvertragsklauseln) klaeren und aufnehmen.
- [ ] **Formular-Dienstleister:** Welcher Dienst nimmt die Formulardaten entgegen (z. B. eigener Endpoint,
      E-Mail-Weiterleitung, Formularanbieter)? Namentlich nennen, AVV abschliessen, Standort und Speicherort
      klaeren. **Das Formular erst aktivieren, wenn das geklaert ist.**
- [ ] **Speicherdauer:** Konkrete Fristen fuer Anfragen, E-Mails und Formulardaten festlegen und eintragen.
      Aktuell steht nur eine allgemeine Formulierung im Text.
- [ ] **Terminbuchung (Calendly), bereits aktiv, Abschnitt 6 ist nur ein Grundgeruest.** Der Entwurf sagt
      bisher nur: Klick oeffnet eine externe Calendly-Seite in neuem Tab, Calendly dient der Terminvereinbarung,
      je nach Buchung koennen Name, E-Mail-Adresse und Termininformationen verarbeitet werden. Noch zu pruefen
      und zu ergaenzen:
  - [ ] Anbieter: korrekte Bezeichnung des Vertragspartners (juristische Person, Anschrift) aus den
        Calendly-Vertragsunterlagen uebernehmen.
  - [ ] Zweck im Detail und **Rechtsgrundlage** (z. B. vorvertragliche Massnahmen oder berechtigtes Interesse).
  - [ ] **Speicherdauer:** bei uns (Kalender, Buchungsdaten) und bei Calendly.
  - [ ] **Auftragsverarbeitung:** Besteht ein AV-Vertrag, und ist er abgeschlossen? Rollenverteilung klaeren
        (Auftragsverarbeitung oder eigene Verantwortlichkeit von Calendly).
  - [ ] **Drittlandtransfer:** Werden Daten in Laender ausserhalb der EU/des EWR uebermittelt, und auf welcher
        Grundlage (Angemessenheitsbeschluss/DPF, Standardvertragsklauseln)?
  - [ ] Cookies/Technologien auf der Calendly-Seite: Pruefen und beschreiben, ob und welche gesetzt werden und
        ob dafuer eine Einwilligung noetig ist. (Die Aussage "keine Cookies" in Abschnitt 7 gilt nur fuer
        diese Website.)
  - [ ] Abschnitt 9 "Empfaenger" an Calendly anpassen, sobald die Angaben stehen.
  - [ ] Einstellungen im eigenen Calendly-Konto pruefen: welche Eingabefelder abgefragt werden (nur
        Erforderliches), Bestaetigungs- und Erinnerungs-E-Mails, Weiterleitungen, Integrationen, Aufbewahrung.
  - [ ] Pruefen, ob in der Terminbeschreibung bei Calendly auf die Datenschutzerklaerung verwiesen werden soll.
  - [ ] Fallback pruefen: Bei einer ungueltigen `CALENDLY_URL` wuerde der Button deaktiviert dargestellt.
- [ ] **E-Mail-Verarbeitung:** Wer betreibt das Postfach `info@anvero.de` (Anbieter)? Gegebenenfalls aufnehmen.
- [ ] **Aussagen im Entwurf gegen die Realitaet pruefen:**
  - "Keine Cookies, kein Tracking": gilt nach Stand des Codes. Vor dem Livegang bestaetigen, dass auf Vercel
    keine Analytics, Speed Insights oder aehnliche Dienste aktiviert sind.
  - Schriftart wird selbst ausgeliefert (kein Google Fonts): gilt nach Stand des Codes.
  - "Keine automatisierte Entscheidungsfindung auf der Website": gilt fuer die Website. Fuer das Produkt
    ANVERO selbst (Kundendaten, Postfachzugriff) wird eine **eigene** Datenschutz- und AV-Dokumentation benoetigt.
- [ ] **Aufsichtsbehoerde:** Zustaendigkeit (Schleswig-Holstein) und Bezeichnung der Behoerde bestaetigen lassen.
- [ ] **Datenschutzbeauftragte/r:** Voraussichtlich nicht benennungspflichtig, bitte bestaetigen lassen.
- [ ] Cookie-/Einwilligungsbanner: Nach Stand des Codes nicht noetig. Entfaellt, solange keine Dienste ergaenzt werden.
- [ ] Datum "Stand" bei jeder inhaltlichen Aenderung aktualisieren.

## Technischer Ablauf des Produkts (intern, Stand der Angaben des Inhabers)

ANVERO hat keine eigene Oberflaeche. Alles laeuft ueber das Postfach.

Der aktuelle Demo- und Automatisierungsstand wird mit Microsoft Outlook und Make betrieben. Die Produktlogik
ist nicht auf einen bestimmten Postfachanbieter begrenzt. Outlook dient aktuell als Referenzintegration fuer
die Demo. Ablauf der Referenzintegration:

Eingangspostfach (Referenzintegration: Microsoft Outlook, Demo-Postfach)
-> Make ueberwacht das Postfach
-> Make legt den Vorgang in Airtable an
-> Make AI Toolkit (KI) extrahiert strukturierte Angaben
-> Ergebnisse werden in Airtable gespeichert
-> vollstaendige und unvollstaendige Vorgaenge werden unterschiedlich weiterverarbeitet
-> Fehlen Angaben: Rueckfrage liegt als E-Mail-Entwurf im Postfach.
   Sind alle Angaben da (festgelegte Standardleistung): Angebot als PDF und Kunden-E-Mail als Entwurf liegen im Postfach.
-> ein Mitarbeiter des Kunden prueft Angebot und E-Mail und sendet sie selbst. Sonderfaelle erkennt ANVERO
   selbst und gibt sie zur manuellen Pruefung weiter.

Was die Website daraus oeffentlich sagt: "Standardangebote automatisch erstellen. Nur noch pruefen und senden.",
"arbeitet direkt im Postfach", "Rueckfrage als Entwurf", "Angebot als PDF", "Kunden-E-Mail als Entwurf",
"Ihr Team prueft und sendet", "kein neues System", "setzt KI zur Auswertung der Anfragetexte ein".

**Begriffe auf der Website (konsistent halten):** "Angebot" bezeichnet immer das fertige Angebot (PDF). "Entwurf"
steht nur fuer die Rueckfrage und die Kunden-E-Mail. Nicht verwenden: "Angebotsentwurf", "fertiger Entwurf",
"Entwurf im Postfach". "Pruefen" und "senden" beschreiben den Schritt des Mitarbeiters ("prueft Angebot und E-Mail
und sendet sie selbst"). "Freigabe" wird nicht als Oberflaechen-Status verwendet.
Auf der Seite steht durchgehend nur "Postfach". Outlook und Microsoft werden oeffentlich nicht genannt, damit
Outlook nicht als Produktgrenze erscheint.

Datenschutzfolgen (vor dem ersten Pilotbetrieb klaeren, nicht auf der Website):
- [ ] **Rollen:** Der Reinigungsbetrieb ist Verantwortlicher, ANVERO verarbeitet im Auftrag. Es wird ein
      **AV-Vertrag** mit jedem Pilotbetrieb gebraucht.
- [ ] **Unterauftragnehmer:** der jeweilige Postfachanbieter des Kunden (in der Referenzintegration Microsoft),
      Make, Airtable und der KI-Anbieter hinter dem Make AI Toolkit. Jeweils AV-Vertraege, Standort der Verarbeitung, Drittlandtransfer (Grundlage?),
      Speicherdauer und Loeschung klaeren und dem Kunden offenlegen.
- [ ] **Datensparsamkeit:** Liest Make das ganze Postfach oder nur einen festgelegten Ordner? Empfehlung: nur
      ein dediziertes Postfach oder einen Ordner fuer Angebotsanfragen.
- [ ] **Postfachzugriff:** Welche Berechtigungen braucht die Anbindung je Postfachanbieter (z. B. Zustimmung
      des Administrators beim Kunden, in der Referenzintegration bei Microsoft)?
- [ ] **Speicherdauer in Airtable** und Loeschkonzept nach Pilotende.
- [ ] **KI-Transparenz:** Die FAQ nennt den KI-Einsatz. Pruefen, ob die Aussage vollstaendig ist (z. B. wohin
      die Texte zur Auswertung gesendet werden) und ob die Kunden das vertraglich wissen muessen.
- [ ] **Zuverlaessigkeit der Extraktion:** KI-Auswertung kann Angaben falsch lesen. Das Team prueft jedes
      Angebot vor dem Senden. Die Seite sagt "Preise nach Ihren hinterlegten Regeln", nicht "fehlerfrei".
- [ ] **Abhaengigkeit von Make und Airtable:** Verfuegbarkeit und Nutzungsbedingungen fuer den gewerblichen
      Einsatz pruefen. Auf der Seite gibt es keine Verfuegbarkeitszusage.
- [ ] **Marken:** "Microsoft" und "Outlook" stehen nicht auf der Seite. Falls spaeter genannt: ohne Logo,
      mit Markenhinweis, rechtlich pruefen.
- [ ] **Offen vom Inhaber:** Wo sieht das Team Sonderfaelle (Ordner, Kennzeichnung, E-Mail)? Gilt "ANVERO sendet
      nie selbst" ausnahmslos? Wie wird die Anbindung beim ersten Pilotbetrieb eingerichtet?

## Interne Klaerungspunkte zu oeffentlichen Aussagen (nicht auf der Website sichtbar)

Die Startseite enthaelt bewusst nur Aussagen, die wir als bestaetigt behandeln. Bitte vor dem Livegang
gegen die Realitaet pruefen. Was nicht stimmt, wird gestrichen oder angepasst.

**Produktaussagen (Wettbewerbsrecht, UWG)**
- [ ] Anfragen werden strukturiert (Objekt, Flaeche, Intervall, Leistung) und fehlende Angaben markiert.
- [ ] Das Angebot wird nach hinterlegten Regeln kalkuliert, ohne geschaetzte Werte. Bei fehlenden Angaben wird
      kein Angebot berechnet, bei widerspruechlichen Angaben oder Sonderfaellen geht der Vorgang zur manuellen
      Pruefung an das Team.
- [ ] Rueckfrage und Kunden-E-Mail liegen als Entwurf im Postfach, bis ein Mitarbeiter sie prueft und selbst
      sendet. ANVERO sendet nicht selbst.
- [ ] Unklare oder untypische Faelle werden gekennzeichnet und an einen Mitarbeiter uebergeben.
- [ ] H1 (vom Inhaber bestaetigt, hier zur Dokumentation): "Standardangebote automatisch erstellen. Nur noch
      pruefen und senden." Gilt ausschliesslich fuer die vom Betrieb vorab festgelegten Standardleistungen
      (z. B. Unterhaltsreinigung, Glasreinigung) bei vollstaendigen Angaben. Fehlen Angaben, liegt zuerst die
      Rueckfrage als Entwurf bereit, die der Mitarbeiter ebenfalls prueft und sendet. Sonderfaelle uebernimmt
      das Team manuell. Die Eingrenzung steht direkt in der Unterzeile unter der H1. Wenn sich Umfang oder
      Anbindung aendern, Texte anpassen (Hero, Vorschau, Schritte, FAQ "Was genau macht ANVERO?").
- [ ] "Nur noch pruefen und senden": Der Mitarbeiter muss weder das Angebot noch die Kunden-E-Mail neu schreiben.
      Pruefen heisst auch: falsch erfasste Angaben (KI-Auswertung) erkennen. Bestaetigen, dass das im Betrieb
      so gelebt wird.
- [ ] Postfachanbindung: Die Anbindung je Postfachanbieter wird mit dem Betrieb eingerichtet. Auf der Seite
      stehen keine Systemnamen. Die Postfachanbindung hat Datenschutzfolgen (Zugriffsumfang, Verarbeitung der
      Kundenanfragen) und gehoert in die produktbezogene Datenschutz- und AV-Dokumentation.
- [ ] Problem-Abschnitt: "Fläche, Intervall oder Zeiten fehlen oft schon in der ersten Anfrage" ist eine Erfahrungsaussage
      ohne Zahl. Bestaetigen, dass sie aus Ihrer Praxis stammt.
- [ ] Aus dem oeffentlichen Text entfernt, weil nicht bestaetigt: "Jeder Schritt dokumentiert/nachvollziehbar",
      "kleine, mittlere und grosse Gebaeudereinigungen", "Ihr Team arbeitet im gewohnten Postfach weiter",
      "Kein allgemeiner KI-Assistent". Nur wieder aufnehmen, wenn belegt.

**Zeitersparnis und Geschwindigkeit (neu)**
- [ ] Zeitangaben auf der Seite: Hero und Abschnitte enthalten keine Zeitzusage mehr. Uebrig sind nur die
      Testdaten-Uhrzeiten im Beispielverlauf (09:14 / 09:16 / 11:02 / 11:04) und die FAQ "Wie schnell liegt ein
      Angebot bereit? In der Regel nach wenigen Minuten". In der Demo liegen Angebot oder Rueckfrage nach 1-2
      Minuten bereit (Angabe des Inhabers). Beim Kunden haengt das von der Make-Abfragehaeufigkeit ab. Sicherstellen,
      dass Kundenanbindungen genauso schnell laufen, sonst FAQ anpassen oder streichen.
- [ ] Arbeitsteilung: Die acht Schritte sind als "Typischer Ablauf einer Standardanfrage" gekennzeichnet (sieben
      Petrol, einer Ocker). Bestaetigen, dass sie der Praxis in Gebaeudereinigungen entsprechen. Der Satz "7 von 8
      Arbeitsschritten uebernimmt ANVERO" wird bewusst nicht verwendet.
- [ ] Zeitrechner: rechnet nur mit Besucherangaben. Startwert "Minuten fuer Pruefen und Senden mit ANVERO" = 5,
      als anpassbarer Beispielwert gekennzeichnet (Inhaber: "wenige Minuten, abhaengig von der Person"). Der
      Hinweis steht direkt unter dem Ergebnis. Wenn moeglich einmal messen. Rechner mit Werbewirkung vor dem
      Livegang rechtlich ansehen lassen (UWG, Irrefuehrung).

**Pilotangebot (Abschnitt "Pilotphase")**
- [ ] "Vergünstigte Pilotkonditionen": Konditionen intern festlegen, bevor die erste Demo stattfindet.
      Auf der Website stehen keine Zahlen. Die Details werden in der Demo besprochen.
- [ ] "Ausgewaehlte Gebaeudereinigungen": Es muss tatsaechlich eine Auswahl stattfinden.
- [ ] Keine Fristen, keine Platzzahlen, keine "nur noch"-Aussagen auf der Seite. So lassen.
- [ ] "Persoenliche Begleitung" und "direkter Kontakt zum Gruender": Es muss auch kapazitaetsseitig
      machbar sein, Pilotbetriebe so zu betreuen.
- [ ] "Die Demo ist unverbindlich": Bestaetigen, dass daraus keine Verpflichtung entsteht.

**Gruenderabschnitt**
- [ ] Der Abschnitt nennt nur Name, Rolle und Kontakt. Ergaenzbar, sobald vorhanden: Foto, kurze Vita,
      Motivation. Nur Wahres, nichts Erfundenes.

**FAQ "Wie sieht es mit dem Datenschutz aus?"**
- [ ] Die Antwort sagt, dass Datenschutz und Datenverarbeitung vor dem Start gemeinsam besprochen werden.
      Das ist eine Zusage. Bestaetigen, dass sie so eingehalten wird, sonst die Frage entfernen.

**Calendly**
- [ ] Der Button heisst "Demo-Termin auswählen", weil nur der Profil-Link bekannt ist. Sobald ein
      20-Minuten-Termin existiert: `CALENDLY_URL` auf diesen Termin setzen und `CALENDLY_LABEL`
      auf "20-Minuten-Demo buchen" aendern (`src/siteConfig.js`).

**Oeffentlich sichtbar, aber noch offen (vor Livegang schliessen)**
- [ ] Datenschutzerklaerung Abschnitt 6 (Calendly) enthaelt den Satz, dass Details nach rechtlicher
      Pruefung ergaenzt werden. Vor dem Livegang durch geprueften Text ersetzen. Das Gleiche gilt fuer
      "Stand: Oktober 2026".
- [ ] Formular ohne Backend: Im Produktions-Build erscheint beim Absenden die Meldung, dass das Formular
      derzeit nicht verfuegbar ist. Vor dem Livegang `VITE_FORM_ENDPOINT` einrichten oder das Formular
      durch einen E-Mail-Link ersetzen.

## Formular und Texte auf der Startseite

- [ ] Die Aussage zur Antwortzeit wurde entfernt. Nur wieder aufnehmen, wenn sie eingehalten wird.
- [ ] **Formular-Backend fehlt.** Calendly und Formular bestehen nebeneinander. Das Formular ist bis zur
      Einrichtung (`VITE_FORM_ENDPOINT`) nicht funktionsfaehig und darf nicht als funktionierend beworben
      werden. Alternativ das Formular bis dahin ausblenden.
- [ ] Der Text am Calendly-Button ("Online-Termin buchen") und der Hinweis "Sie erreichen uns auch direkt"
      sind neutral formuliert. Keine Zusagen zu Antwort- oder Terminfristen ergaenzen, die nicht eingehalten werden.
- [ ] Der Satz am Formular ("Wir verwenden Ihre Angaben, um Ihre Anfrage zu bearbeiten ...") ist bewusst
      schlicht gehalten. Pruefen lassen, ob er ausreicht.
- [ ] Produktaussagen auf der Seite ("Keine erfundenen Preise", "Kein Versand ohne Freigabe", "Jeder Schritt
      nachvollziehbar") muessen dem tatsaechlichen Produkt entsprechen (Wettbewerbsrecht, UWG).
- [ ] Beispieldaten in der Produktvorschau (z. B. "Mueller Immobilien", "Angebot 1048") sind erfundene
      Demo-Daten und als "Beispielansicht mit Demo-Daten" gekennzeichnet. Das beibehalten.

## Technik (Vercel und Betrieb)

- [ ] Vercel-Projekt anlegen/verbinden. Framework "Vite", Build `npm run build`, Output `dist`
      (steht bereits in `vercel.json`).
- [ ] Domain `anvero.tech` im Vercel-Projekt hinzufuegen und DNS wie angezeigt setzen (A-Record bzw. CNAME).
- [ ] Entscheiden: `anvero.tech` oder `www.anvero.tech` als Hauptadresse. Die andere Variante in Vercel als
      Weiterleitung (308) auf die Hauptadresse einrichten. Im Projekt ist ueberall `https://anvero.tech` gesetzt.
- [ ] Alte Domains (`anvero.de`, `www.anvero.de`): Falls sie als Website geplant waren, bewusst
      weiterleiten oder abschalten. Als Website-URL wird sie im Projekt nirgends verwendet.
- [ ] HTTPS und Zertifikat: Vercel stellt sie automatisch aus. Nach dem Livegang kontrollieren.
- [ ] Umgebungsvariable `VITE_FORM_ENDPOINT` in Vercel (Production) setzen, **sobald** der Dienst feststeht.
      Hinweis: Werte mit Praefix `VITE_` sind im Browser sichtbar. Keine Geheimnisse dort ablegen.
- [ ] Spam-Schutz fuer das Formular auf Server-/Anbieterseite (Honeypot allein genuegt nicht).
- [ ] Nach dem Deployment testen: `/`, `/impressum`, `/datenschutz` direkt aufrufen und neu laden,
      `/robots.txt`, `/sitemap.xml`, unbekannte URL (muss 404 liefern), Header (z. B. mit
      securityheaders.com).
- [ ] Content-Security-Policy: Noch nicht gesetzt. Erst nach einem Test mit dem echten Build einfuehren
      (Inline-Style im Hero, spaeter Formular-Endpoint und Calendly beachten).
- [ ] Google Search Console und Bing Webmaster Tools: Domain verifizieren, Sitemap `https://anvero.tech/sitemap.xml` einreichen.
- [ ] `public/favicon.svg`, `public/apple-touch-icon.png`, `public/og-image.png` bereitstellen.
- [ ] Prerendering einplanen: Impressum und Datenschutz werden aktuell erst im Browser per JavaScript
      aufgebaut (Titel und Canonical werden dort gesetzt). Fuer Crawler ohne JavaScript und
      fuer Link-Vorschauen waere statisches HTML besser.
