import { useState, useEffect, useRef } from "react";
import { Icon, CalendlyButton } from "./components/ui";
import { Header, Footer } from "./components/Layout";
import { CONTACT } from "./siteConfig";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";

/* Gestaltungsregeln (Papier und Tinte):
   - Petrol (av-petrol) = ANVERO handelt. Ocker (av-ochre) = ausschliesslich Ihr Team handelt. Sonst neutral.
   - Nur Artefakte (E-Mails, PDF) bekommen Flaeche und Papierschatten. Inhalte stehen frei,
     getrennt durch Haarlinien (av-line) und Weissraum. Kein Raster, kein Leuchten.
   - "Angebot" = fertiges PDF. "Entwurf" nur fuer Rueckfrage und Kunden-E-Mail. ANVERO sendet nie selbst.
   - Keine Preise, keine erfundenen Kunden. Beispiele sind als Testdaten gekennzeichnet. */

const H2 = "text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-.025em] text-av-ink";
const KICKER = "mb-4 text-[13px] font-medium text-av-petrol";
const LEAD = "mt-5 max-w-2xl text-[17px] leading-[1.65] text-av-body";
const LINK = "font-semibold text-av-petrol underline underline-offset-2 hover:text-av-petrol-dark";

/* ── Hero-Visual: nur das Ergebnis (Angebots-PDF und Kunden-E-Mail im Entwurf) ── */

function HeroArtifact() {
  const rows = [
    ["Leistung", "Unterhaltsreinigung"],
    ["Objekt", "Bürogebäude, Musterstadt"],
    ["Fläche", "1.200 m²"],
    ["Intervall", "3× wöchentlich"],
    ["Zeiten", "Mo, Mi, Fr ab 18 Uhr"],
  ];
  return (
    <figure className="mx-auto w-full max-w-[500px]">
      <figcaption className="mb-3 text-[12px] text-av-muted">Beispielablauf mit Testdaten</figcaption>

      <div className="rounded-[4px] border border-av-line bg-white px-6 pb-24 pt-6 shadow-paper sm:px-8">
        <div className="flex items-start justify-between gap-4 border-b border-av-line pb-4">
          <div>
            <p className="text-[12px] text-av-muted">Musterreinigung GmbH</p>
            <p className="mt-1 text-[18px] font-semibold text-av-ink">Angebot Nr. 0001</p>
          </div>
          <p className="text-right text-[12px] leading-5 text-av-muted">für Beispiel GmbH<br />Musterstadt</p>
        </div>
        <dl className="mt-3 text-[13px]">
          {rows.map(([k, v]) => (
            <div key={k} className="flex justify-between gap-4 border-b border-av-line py-2">
              <dt className="text-av-muted">{k}</dt>
              <dd className="text-right text-av-ink">{v}</dd>
            </div>
          ))}
          <div className="flex items-center justify-between gap-4 py-2">
            <dt className="text-av-muted">Preis</dt>
            <dd className="flex items-center gap-2">
              <span aria-hidden="true" className="h-2 w-14 rounded-sm bg-av-line" />
              <span className="text-[12px] text-av-petrol">nach Ihren Regeln</span>
            </dd>
          </div>
        </dl>
      </div>

      <div className="relative z-10 -mt-16 ml-6 rounded-[10px] border border-av-line bg-white p-4 shadow-paper sm:ml-16">
        <p className="flex items-center justify-between gap-3 text-[12px] text-av-muted">
          <span>An: Beispiel GmbH</span>
          <span className="rounded bg-av-ochre-tint px-1.5 py-0.5 font-medium text-av-ochre">Entwurf</span>
        </p>
        <p className="mt-1 text-[14px] font-semibold text-av-ink">Ihr Angebot für die Unterhaltsreinigung</p>
        <p className="mt-2 inline-flex items-center gap-2 rounded-md border border-av-line px-2.5 py-1.5 text-[13px] text-av-ink">
          <Icon name="file" size={15} className="shrink-0 text-av-petrol" />Angebot_Beispiel-GmbH.pdf
        </p>
        <p className="mt-3 flex items-center gap-2 border-t border-av-line pt-3 text-[13px] font-medium text-av-ochre">
          <Icon name="shield" size={15} className="shrink-0" />Gesendet wird nur von Ihrem Team
        </p>
      </div>
    </figure>
  );
}

/* ── Hero ──────────────────────────────────────────────────────── */

function Hero() {
  return (
    <section id="top" className="border-b border-av-line bg-av-paper">
      <div className="mx-auto grid max-w-[1180px] items-center gap-14 px-5 py-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-20">
        <div>
          <p className="mb-5 text-[13px] font-medium text-av-muted">Angebotsautomatisierung für Gebäudereinigungen</p>
          <h1 className="text-[clamp(2.5rem,5.4vw,4rem)] font-semibold leading-[1.05] tracking-[-.03em] text-av-ink">
            Anfrage rein. Angebot fertig. <span className="text-av-ochre">Sie senden.</span>
          </h1>
          <p className="mt-6 max-w-[540px] text-[17px] leading-[1.65] text-av-body">
            Für von Ihnen festgelegte Standardleistungen erstellt ANVERO das Angebot direkt im Postfach: als PDF mit
            Kunden-E-Mail im Entwurf. Fehlt eine Angabe, liegt die Rückfrage bereit. Ihr Team prüft und sendet.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-6">
            <CalendlyButton size="lg" className="w-full sm:w-auto" />
            <a href="#ablauf" className="inline-flex items-center gap-1.5 text-[15px] font-semibold text-av-petrol hover:text-av-petrol-dark focus:outline-none focus-visible:underline">
              Ablauf an einem Beispiel ansehen <Icon name="arrow" size={16} />
            </a>
          </div>
          <p className="mt-4 text-[14px] text-av-muted">
            Persönlich mit dem Gründer · an einer Ihrer Anfragen · unverbindlich ·{" "}
            oder <a href="#demo" className={LINK}>Anfrage per Formular</a>
          </p>
        </div>

        <HeroArtifact />
      </div>
    </section>
  );
}

/* ── E-Mail-Verlauf mit Weiche ─────────────────────────────────── */
/* Desktop: zwei Spuren (Kunde links, Ihr Postfach rechts) und eine Zeitachse in der Mitte.
   Mobil: eine Spur, die Achse liegt am linken Rand. Punkte: grau = Kunde, Petrol = ANVERO, Ocker = Ihr Team. */

const DOT = { neutral: "bg-[#B9C1BF]", petrol: "bg-av-petrol", ochre: "bg-av-ochre" };
const TONE = { a: "text-av-petrol", h: "font-medium text-av-ochre", n: "text-av-ink" };
const WAYS = [
  ["Alles da", false, [["a", "Angebot als PDF und Kunden-E-Mail"], ["h", "Ihr Team prüft und sendet"]]],
  ["Etwas fehlt", true, [["a", "Rückfrage als Entwurf"], ["h", "Ihr Team sendet"], ["n", "Kunde antwortet"], ["a", "Antwort wird zugeordnet"], ["a", "Angebot als PDF und Kunden-E-Mail"]]],
  ["Sonderfall", false, [["h", "Manuelle Prüfung durch Ihr Team"]]],
];

function Dot({ tone }) {
  return (
    <span aria-hidden="true"
      className={`absolute left-[6px] top-[18px] z-10 h-3 w-3 rounded-full ring-4 ring-white md:left-1/2 md:-translate-x-1/2 ${DOT[tone]}`} />
  );
}

function Lane({ side, dot, children }) {
  return (
    <li className="relative pl-9 md:grid md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)] md:pl-0">
      <Dot tone={dot} />
      <div className={side === "left" ? "md:col-start-1 md:flex md:justify-end" : "md:col-start-3"}>{children}</div>
    </li>
  );
}

function Mail({ who, time, title, draft = false, children }) {
  return (
    <div className="w-full max-w-[420px] rounded-[10px] border border-av-line bg-white px-4 py-3 shadow-paper">
      <p className="flex items-center justify-between gap-3 text-[12px] text-av-muted">
        <span>{who}{time && ` · ${time}`}</span>
        {draft && <span className="rounded bg-av-ochre-tint px-1.5 py-0.5 font-medium text-av-ochre">Entwurf</span>}
      </p>
      {title && <p className="mt-1 text-[14px] font-semibold text-av-ink">{title}</p>}
      <div className="mt-1 text-[14px] leading-6 text-av-ink">{children}</div>
    </div>
  );
}

function TeamAction({ children }) {
  return <p className="mt-2 text-[13px] font-medium text-av-ochre">{children}</p>;
}

function Flow() {
  return (
    <section id="ablauf" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <p className={KICKER}>So läuft eine Anfrage</p>
        <h2 className={`max-w-3xl ${H2}`}>ANVERO prüft jede Anfrage und wählt den richtigen Weg.</h2>
        <p className={LEAD}>
          Vollständige Anfragen werden zum Angebot, fehlende Angaben zur Rückfrage, Sonderfälle gehen an Ihr Team.
          Gesendet wird immer von Ihnen.
        </p>

        <div className="mt-12 hidden text-[13px] font-medium text-av-muted md:grid md:grid-cols-[minmax(0,1fr)_72px_minmax(0,1fr)]">
          <span className="text-right">Kunde</span><span /><span>Ihr Postfach</span>
        </div>

        <div className="relative mt-4">
        <span aria-hidden="true" className="absolute bottom-8 left-[11px] top-6 w-px bg-av-line md:left-1/2" />
        <ol className="relative space-y-6" aria-label="Beispielablauf mit Testdaten">

          <Lane side="left" dot="neutral">
            <Mail who="Kunde" time="09:14">
              „Wir benötigen eine Unterhaltsreinigung für unser Büro in Musterstadt, ca. 1.200 m², dreimal pro Woche …“
            </Mail>
          </Lane>

          <li className="relative pl-9 md:pl-0">
            <Dot tone="petrol" />
            <div className="relative z-0 rounded-[10px] bg-av-petrol-tint px-5 py-5 md:mx-auto md:max-w-[920px] md:px-8">
              <p className="text-[14px] text-av-petrol"><span className="font-semibold">ANVERO prüft die Anfrage</span> · 09:16</p>
              <div className="mt-4 grid gap-5 md:grid-cols-3 md:gap-0 md:divide-x md:divide-av-petrol/20">
                {WAYS.map(([title, active, steps]) => (
                  <div key={title} className="md:px-6 md:first:pl-0 md:last:pr-0">
                    <p className="flex flex-wrap items-center gap-2 text-[15px] font-semibold text-av-ink">
                      {title}
                      {active && <span className="rounded bg-white px-1.5 py-0.5 text-[11px] font-medium text-av-petrol">In diesem Beispiel</span>}
                    </p>
                    <ol className="mt-2 space-y-1 text-[13px] leading-5">
                      {steps.map(([tone, text]) => (
                        <li key={text} className={`flex gap-1.5 ${TONE[tone]}`}>
                          <span aria-hidden="true" className="text-av-muted">→</span>{text}
                        </li>
                      ))}
                    </ol>
                  </div>
                ))}
              </div>
            </div>
          </li>

          <Lane side="right" dot="ochre">
            <div className="w-full max-w-[420px]">
              <Mail who="Ihr Postfach · Rückfrage" draft>„Zu welchen Zeiten soll gereinigt werden?“</Mail>
              <TeamAction>Ihr Team sendet die Rückfrage</TeamAction>
            </div>
          </Lane>

          <Lane side="left" dot="neutral">
            <Mail who="Kunde" time="11:02">„Montag, Mittwoch und Freitag ab 18 Uhr.“</Mail>
          </Lane>

          <Lane side="right" dot="petrol">
            <p className="max-w-[420px] pt-3 text-[13px] leading-5 text-av-petrol">
              <span className="font-semibold">ANVERO</span> · 11:04<br />Antwort zugeordnet. Angebot nach Ihren Regeln erstellt.
            </p>
          </Lane>

          <Lane side="right" dot="ochre">
            <div className="w-full max-w-[420px]">
              <Mail who="Ihr Postfach · Kunden-E-Mail" title="Ihr Angebot für die Unterhaltsreinigung" draft>
                <div className="mt-2 rounded-[4px] border border-av-line bg-av-paper p-3">
                  <p className="flex items-center gap-2 text-[13px] font-medium text-av-ink">
                    <Icon name="file" size={15} className="shrink-0 text-av-petrol" />Angebot_Beispiel-GmbH.pdf
                  </p>
                  <div aria-hidden="true" className="mt-2.5 space-y-1.5">
                    <span className="block h-1.5 w-4/5 rounded bg-av-line" />
                    <span className="block h-1.5 w-3/5 rounded bg-av-line" />
                    <span className="block h-1.5 w-2/3 rounded bg-av-line" />
                  </div>
                </div>
              </Mail>
              <TeamAction>Ihr Team prüft und sendet</TeamAction>
            </div>
          </Lane>
        </ol>
        </div>
        <p className="mt-6 text-[12px] text-av-muted">Beispielablauf mit Testdaten.</p>

        <p className="mt-12 flex max-w-3xl items-start gap-3 border-t border-av-line pt-8 text-[18px] font-medium leading-8 text-av-ink">
          <Icon name="shield" size={22} className="mt-1 shrink-0 text-av-petrol" />
          Kein neues System. Keine unkontrollierten Sendungen. Ihr Team arbeitet im bestehenden Postfach und sendet nur, was geprüft wurde.
        </p>
      </div>
    </section>
  );
}

/* ── Zeitersparnis: Arbeitsteilung und Rechner ─────────────────── */

const STEPS = ["Anfrage lesen", "Angaben heraussuchen", "Rückfrage schreiben", "Antwort zuordnen",
  "Kalkulieren", "Angebot und PDF erstellen", "Kunden-E-Mail schreiben", "Prüfen und senden"];

const fmt = (n) => n.toLocaleString("de-DE", { maximumFractionDigits: 1 });
const toNumber = (v) => {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? n : 0;
};

function TimeSaving() {
  const [count, setCount] = useState("30");
  const [today, setToday] = useState("45");
  const [check, setCheck] = useState("5");

  const c = toNumber(count), t = toNumber(today), k = toNumber(check);
  const saved = Math.max((c * (t - k)) / 60, 0);
  const minutesNote = k === 1 ? "Die 1 Minute ist ein anpassbarer Beispielwert" : `Die ${fmt(k)} Minuten sind ein anpassbarer Beispielwert`;

  const fields = [
    ["calc-count", "Standardangebote pro Monat", "z. B. Unterhalts- oder Glasreinigung", count, setCount],
    ["calc-today", "Minuten pro Angebot heute", "inklusive Kalkulation, Angebot und E-Mail", today, setToday],
    ["calc-check", "Minuten für Prüfen und Senden mit ANVERO", "Anpassbarer Beispielwert, keine Garantie", check, setCheck],
  ];

  return (
    <section id="zeit" className="border-y border-av-line bg-av-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <p className={KICKER}>Zeitersparnis</p>
        <h2 className={`max-w-3xl ${H2}`}>Weniger manuelle Schritte zwischen Anfrage und Angebot.</h2>
        <p className={LEAD}>Die wiederkehrenden Schritte übernimmt ANVERO. Bei Ihrem Team bleiben Prüfen und Senden.</p>

        {/* Arbeitsteilung: typischer Ablauf einer Standardanfrage */}
        <div className="mt-12">
          <p className="sr-only">
            Heute erledigt Ihr Team alle Schritte. Mit ANVERO übernimmt ANVERO die Schritte 1 bis 7.
            Bei Ihrem Team bleibt Schritt 8, Prüfen und Senden.
          </p>
          <div aria-hidden="true" className="grid grid-cols-[6.5rem_minmax(0,1fr)] items-center gap-x-4 gap-y-3 text-[14px]">
            <span className="text-av-body">Heute</span>
            <div className="grid grid-cols-8 gap-1">
              {STEPS.map((s) => <span key={s} className="h-6 rounded-[3px] bg-[#C9CEC9]" />)}
            </div>
            <span className="font-medium text-av-petrol">Mit ANVERO</span>
            <div className="grid grid-cols-8 gap-1">
              {STEPS.map((s, i) => <span key={s} className={`h-6 rounded-[3px] ${i < STEPS.length - 1 ? "bg-av-petrol" : "bg-av-ochre"}`} />)}
            </div>
          </div>
          <ol className="mt-6 grid gap-x-8 gap-y-2 text-[14px] sm:grid-cols-2 lg:grid-cols-4">
            {STEPS.map((s, i) => (
              <li key={s} className={i < STEPS.length - 1 ? "text-av-body" : "font-medium text-av-ochre"}>
                <span className={`mr-2 font-semibold tabular-nums ${i < STEPS.length - 1 ? "text-av-petrol" : "text-av-ochre"}`}>{i + 1}</span>{s}
              </li>
            ))}
          </ol>
          <p className="mt-4 flex flex-wrap gap-x-6 gap-y-1 text-[13px] text-av-muted">
            <span>Typischer Ablauf einer Standardanfrage</span>
            <span className="text-av-petrol">Petrol: übernimmt ANVERO</span>
            <span className="text-av-ochre">Ocker: Ihr Team</span>
          </p>
        </div>

        {/* Zeitrechner mit eigenen Werten */}
        <div className="mt-16 grid gap-12 border-t border-av-line pt-14 lg:grid-cols-2 lg:gap-16">
          <div>
            <h3 className="text-[22px] font-semibold tracking-[-.015em] text-av-ink">Rechnen Sie mit Ihren eigenen Werten.</h3>
            <p className="mt-2 text-[15px] text-av-body">Beispielrechnung. Ersetzen Sie die Startwerte durch Ihre Zahlen.</p>
            <div className="mt-8 space-y-6">
              {fields.map(([id, label, hint, value, set]) => (
                <div key={id}>
                  <label htmlFor={id} className="block text-[15px] font-medium text-av-ink">{label}</label>
                  <p id={`${id}-hint`} className="mt-0.5 text-[13px] text-av-muted">{hint}</p>
                  <input id={id} type="number" inputMode="numeric" min="0" step="1" value={value}
                    aria-describedby={`${id}-hint`} onChange={(e) => set(e.target.value)}
                    className="field mt-2 w-full max-w-[220px] tabular-nums" />
                </div>
              ))}
            </div>
          </div>

          <div className="lg:border-l lg:border-av-line lg:pl-16">
            <div aria-live="polite">
              <p className="text-[clamp(2.5rem,5vw,3.5rem)] font-semibold leading-none tracking-[-.02em] text-av-petrol">
                {fmt(saved)} Stunden
              </p>
              <p className="mt-2 text-[18px] text-av-ink">mögliche Zeitersparnis pro Monat</p>
              <p className="mt-2 text-[14px] text-av-muted">
                {fmt(c)} Angebote × ({fmt(t)} − {fmt(k)}) Minuten · rund {fmt(saved * 12)} Stunden im Jahr
              </p>
            </div>
            <p className="mt-5 border-l-2 border-av-line pl-3 text-[13px] leading-5 text-av-muted">
              Beispielrechnung auf Grundlage Ihrer Angaben. {minutesNote} für Prüfen und Senden.
              Rückfragen und Sonderfälle sind nicht eingerechnet. Keine Zusage einer bestimmten Bearbeitungszeit.
            </p>
            <p className="mt-8 text-[15px] text-av-body">In der Demo rechnen wir mit Ihren echten Abläufen.</p>
            <CalendlyButton className="mt-4 w-full sm:w-auto" />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Kontrolle ─────────────────────────────────────────────────── */

function Control() {
  const points = [
    ["Gesendet wird nur durch Ihr Team", "Rückfrage und Kunden-E-Mail liegen als Entwurf im Postfach, bis ein Mitarbeiter sie sendet."],
    ["Preise nach Ihren hinterlegten Regeln", "Kalkuliert wird mit Ihrer Preislogik, nicht mit geschätzten Werten."],
    ["Fehlende Angaben werden nicht geraten", "Was fehlt, wird erkannt. Die Rückfrage liegt als Entwurf bereit."],
    ["Sonderfälle bleiben bei Ihrem Team", "Was nicht zu Ihren festgelegten Leistungen passt, erkennt ANVERO selbst und gibt es zur manuellen Prüfung weiter."],
  ];
  return (
    <section id="kontrolle" className="bg-av-night py-20 text-white sm:py-28">
      <div className="mx-auto grid max-w-[1120px] items-start gap-12 px-5 lg:grid-cols-[.9fr_1.1fr] lg:gap-16 lg:px-8">
        <div>
          <p className="mb-4 text-[13px] font-medium text-approve-300">Sie behalten die Entscheidung</p>
          <h2 className="text-[clamp(1.9rem,3.6vw,2.6rem)] font-semibold leading-[1.1] tracking-[-.025em]">
            Kontrolle, bevor ein Angebot Ihr Haus verlässt.
          </h2>
          <p className="mt-5 max-w-md text-[17px] leading-[1.65] text-white/75">
            ANVERO erledigt die wiederkehrende Arbeit. Ihr Team prüft, entscheidet und sendet.
          </p>
        </div>
        <ul className="border-t border-white/15">
          {points.map(([t, d]) => (
            <li key={t} className="flex items-start gap-4 border-b border-white/15 py-5">
              <Icon name="check" size={20} className="mt-0.5 shrink-0 text-approve-300" />
              <div>
                <p className="text-[16px] font-semibold leading-6">{t}</p>
                <p className="mt-1 text-[15px] leading-6 text-white/75">{d}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/* ── Pilotphase: frühe Zusammenarbeit ──────────────────────────── */

function Pilot() {
  const perks = [
    ["Persönliche Begleitung", "Von der ersten Anfrage bis zum eingerichteten Ablauf haben Sie einen festen Ansprechpartner."],
    ["Direkter Kontakt zum Gründer", "Fragen und Anregungen gehen direkt an den Gründer, ohne Umweg."],
    ["Vergünstigte Pilotkonditionen", "Pilotbetriebe erhalten besondere Konditionen. Die Details besprechen wir in der Demo."],
    ["Gemeinsames Einrichten", "Wir legen mit Ihnen fest, welche Leistungen automatisch abgedeckt werden, und richten Pflichtangaben, Kalkulationsregeln und die Anbindung Ihres Postfachs anhand Ihres Betriebs ein."],
  ];
  const steps = [
    ["Persönliche Demo", "Wir sehen uns gemeinsam eine typische Anfrage aus Ihrem Betrieb an. Unverbindlich."],
    ["Regeln gemeinsam einrichten", "Wir legen fest, welche Leistungen ANVERO automatisch abdeckt, etwa Unterhalts- oder Glasreinigung, und hinterlegen Pflichtangaben, Kalkulationsregeln, Vorlagen und die Anbindung Ihres Postfachs."],
    ["Mit echten Fällen prüfen", "Gemeinsam prüfen wir reale Vorgänge und schärfen die Regeln nach."],
    ["Gemeinsam starten", "Ihr Team arbeitet mit fertigen Angeboten im Postfach, prüft und sendet."],
  ];
  return (
    <section id="pilot" className="border-b border-av-line bg-av-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[1120px] px-5 lg:px-8">
        <p className={KICKER}>Pilotphase</p>
        <h2 className={`max-w-3xl ${H2}`}>Gestalten Sie den Angebotsprozess gemeinsam mit ANVERO.</h2>
        <p className={LEAD}>
          Wir suchen ausgewählte Gebäudereinigungen für die erste Pilotphase. Der Einstieg ist eine persönliche Demo
          mit dem Gründer, danach richten wir ANVERO gemeinsam anhand Ihres Betriebs ein.
        </p>

        <dl className="mt-12 grid gap-x-12 sm:grid-cols-2">
          {perks.map(([t, d]) => (
            <div key={t} className="border-t border-av-line py-6">
              <dt className="text-[17px] font-semibold text-av-ink">{t}</dt>
              <dd className="mt-2 text-[15px] leading-7 text-av-body">{d}</dd>
            </div>
          ))}
        </dl>

        <h3 className="mt-14 text-[18px] font-semibold text-av-ink">So läuft der Einstieg ab</h3>
        <ol className="mt-8 grid gap-8 md:grid-cols-4 md:gap-6">
          {steps.map(([t, d], i) => (
            <li key={t} className="border-t-2 border-av-petrol/30 pt-5">
              <span className="text-[13px] font-medium text-av-petrol">Schritt {i + 1}</span>
              <h4 className="mt-2 text-[16px] font-semibold text-av-ink">{t}</h4>
              <p className="mt-2 text-[15px] leading-6 text-av-body">{d}</p>
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
          <CalendlyButton size="lg" className="w-full sm:w-auto" />
          <p className="max-w-md text-[15px] leading-6 text-av-body">Die Demo ist unverbindlich. Sie entscheiden in Ihrem Tempo.</p>
        </div>
      </div>
    </section>
  );
}

/* ── Gründer: direkter Ansprechpartner ─────────────────────────── */

function Founder() {
  return (
    <section id="gruender" className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[860px] px-5 lg:px-8">
        <p className={KICKER}>Ihr Ansprechpartner</p>
        <h2 className={H2}>Sie sprechen direkt mit dem Gründer.</h2>
        <p className="mt-6 text-[18px] leading-8 text-av-body">
          Ich bin Leon Golembek, Gründer von ANVERO. In der Pilotphase haben Sie mich als festen Ansprechpartner:
          für die Demo, für die Einrichtung und für alle Fragen dazwischen.
        </p>
        <div className="mt-6 flex flex-col gap-3 text-[16px] sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
          <a href={`mailto:${CONTACT.email}`} className={LINK}>{CONTACT.email}</a>
          <a href={CONTACT.phoneHref} className={LINK}>{CONTACT.phoneDisplay}</a>
        </div>
      </div>
    </section>
  );
}

/* ── FAQ ───────────────────────────────────────────────────────── */

function FAQ() {
  const [open, setOpen] = useState(-1);
  const faqs = [
    ["Was genau macht ANVERO?",
      "ANVERO ist eine Angebotsautomatisierung für Gebäudereinigungen und arbeitet direkt im Postfach. Für vorab festgelegte Leistungen wie Unterhalts- oder Glasreinigung erkennt es fehlende Angaben. Dann liegt die Rückfrage als Entwurf bereit, sonst das Angebot als PDF und die Kunden-E-Mail als Entwurf. Ihr Team prüft und sendet. Sonderfälle gehen zur manuellen Prüfung an Ihr Team."],
    ["Was sehe ich in der Demo?",
      "Wir spielen gemeinsam eine typische Anfrage aus Ihrem Betrieb durch, auf Wunsch anonymisiert, vom Eingang bis zum fertigen Angebot im Postfach. Danach entscheiden Sie, ob Sie mehr erfahren möchten. Die Demo ist unverbindlich."],
    ["Wie schnell liegt ein Angebot bereit?",
      "In der Regel nach wenigen Minuten: Dann liegen das Angebot als PDF und die Kunden-E-Mail als Entwurf in Ihrem Postfach, oder die Rückfrage, falls eine Angabe fehlt. Wann gesendet wird, entscheidet Ihr Team."],
    ["Brauche ich ein neues System oder eine neue Oberfläche?",
      "Nein. ANVERO arbeitet in Ihrem bestehenden Postfach. Sie müssen keine neue Oberfläche lernen."],
    ["Verschickt ANVERO selbstständig E-Mails an meine Kunden?",
      "Nein. Rückfrage und Kunden-E-Mail liegen als Entwurf in Ihrem Postfach, bis ein Mitarbeiter sie geprüft und gesendet hat. Ohne das verlässt keine Nachricht Ihr Haus."],
    ["Kann ANVERO falsche Preise erfinden?",
      "Nein. Kalkuliert wird ausschließlich mit der Preislogik, die Sie hinterlegt haben. Fehlen Angaben oder passt die Anfrage nicht zu Ihren festgelegten Leistungen, wird der Fall zur manuellen Prüfung übergeben statt geschätzt."],
    ["Was passiert bei ungewöhnlichen Anfragen?",
      "Anfragen, die nicht zu Ihren festgelegten Leistungen passen, und untypische Fälle erkennt ANVERO selbst und gibt sie zur manuellen Prüfung an einen Mitarbeiter, statt sie automatisch zu beantworten."],
    ["Setzt ANVERO KI ein?",
      "Ja. Zur Auswertung der Anfragetexte setzt ANVERO KI ein. Kalkuliert wird nach Ihren hinterlegten Regeln, und gesendet wird nur durch Ihr Team."],
    ["Ersetzt ANVERO Mitarbeiter?",
      "Nein. ANVERO übernimmt die wiederkehrende Vorarbeit. Ihre Mitarbeiter prüfen Angebote, entscheiden Sonderfälle und senden."],
    ["Was bedeutet die Pilotphase für mich?",
      "Wir arbeiten mit ausgewählten Gebäudereinigungen eng zusammen: mit persönlicher Begleitung, direktem Kontakt zum Gründer, vergünstigten Pilotkonditionen und einer gemeinsamen Einrichtung anhand Ihres Betriebs. Gedacht ist die Pilotphase für gewerbliche Gebäudereinigungen, die regelmäßig Anfragen erhalten und Angebote kalkulieren."],
    ["Wie sieht es mit dem Datenschutz aus?",
      <>
        Datenschutz und Datenverarbeitung besprechen wir vor dem Start gemeinsam mit Ihnen. Schreiben Sie uns gern vorab
        an <a href={`mailto:${CONTACT.email}`} className={LINK}>{CONTACT.email}</a>.
        Für die Nutzung dieser Website gilt unsere <a href="/datenschutz" className={LINK}>Datenschutzerklärung</a>.
      </>],
  ];
  return (
    <section id="faq" className="border-t border-av-line bg-av-paper py-20 sm:py-28">
      <div className="mx-auto max-w-[860px] px-5 lg:px-8">
        <p className={KICKER}>Häufige Fragen</p>
        <h2 className={H2}>Klarheit vor der Demo.</h2>
        <div className="mt-10 divide-y divide-av-line border-y border-av-line">
          {faqs.map(([q, a], i) => (
            <div key={q}>
              <button type="button" aria-expanded={open === i} aria-controls={`faq-${i}`}
                onClick={() => setOpen(open === i ? -1 : i)}
                className="flex min-h-16 w-full items-center justify-between gap-5 py-4 text-left focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol">
                <span className="text-[16px] font-semibold text-av-ink">{q}</span>
                <span className={`grid h-8 w-8 shrink-0 place-items-center text-av-muted transition ${open === i ? "rotate-180" : ""}`}>
                  <Icon name="down" size={18} />
                </span>
              </button>
              <div id={`faq-${i}`} hidden={open !== i} className="pb-5 pr-10 text-[16px] leading-7 text-av-body">{a}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Demo-Formular mit echten Zuständen ────────────────────────── */

/* Endpoint kommt aus .env (VITE_FORM_ENDPOINT), siehe .env.example.
   Ohne Endpoint: im Dev-Server simulierter Erfolg, im Produktions-Build
   eine ehrliche Fehlermeldung statt eines vorgetäuschten Erfolgs. */
const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Technische Obergrenzen gegen überlange Eingaben (kein Ersatz für serverseitige Prüfung). */
const FIELD_LIMITS = { name: 100, company: 150, email: 254, message: 2000 };

function validateDemo(f) {
  const errors = {};
  if (!f.get("name")) errors.name = "Bitte geben Sie Ihren Namen ein.";
  if (!f.get("company")) errors.company = "Bitte geben Sie den Namen Ihres Unternehmens ein.";
  const email = f.get("email");
  if (!email) errors.email = "Bitte geben Sie Ihre geschäftliche E-Mail-Adresse ein.";
  else if (!EMAIL_PATTERN.test(email)) errors.email = "Diese E-Mail-Adresse scheint nicht zu stimmen. Bitte prüfen Sie sie, zum Beispiel name@firma.de.";
  return errors;
}

function TextField({ name, label, type = "text", autoComplete, required = false, optional = false, multiline = false, error, onChange, className = "" }) {
  const id = `demo-${name}`;
  const errorId = `${id}-error`;
  const Control = multiline ? "textarea" : "input";
  return (
    <div className={`flex flex-col gap-2 ${className}`}>
      <label htmlFor={id} className="text-[13px] font-semibold text-av-ink">
        {label}
        {required && <span aria-hidden="true"> *</span>}
        {optional && <span className="font-normal text-av-muted"> (optional)</span>}
      </label>
      <Control id={id} name={name} type={multiline ? undefined : type} rows={multiline ? 3 : undefined}
        autoComplete={autoComplete} required={required} maxLength={FIELD_LIMITS[name]}
        aria-invalid={error ? "true" : undefined} aria-describedby={error ? errorId : undefined}
        onChange={() => onChange(name)}
        className={`field ${multiline ? "resize-none" : ""} ${error ? "border-red-600 focus:border-red-600 focus:ring-red-600/[.12]" : ""}`} />
      {error && (
        <p id={errorId} className="flex items-start gap-1.5 text-[13px] font-semibold leading-5 text-red-700">
          <Icon name="alert" size={14} className="mt-[3px] shrink-0" />{error}
        </p>
      )}
    </div>
  );
}

function Demo() {
  const [state, setState] = useState("idle");
  const [err, setErr] = useState("");
  const [errors, setErrors] = useState({});
  const successRef = useRef(null);
  const fail = (message) => { setErr(message); setState("error"); };
  const clearError = (name) => setErrors((prev) => {
    if (!prev[name]) return prev;
    const { [name]: _removed, ...rest } = prev;
    return rest;
  });

  useEffect(() => {
    if (state === "success") successRef.current?.focus();
  }, [state]);

  const submit = async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const f = new FormData(form);
    if (f.get("_hp")) return;
    for (const key of Object.keys(FIELD_LIMITS)) f.set(key, String(f.get(key) ?? "").trim());

    const found = validateDemo(f);
    setErrors(found);
    const firstInvalid = Object.keys(found)[0];
    if (firstInvalid) {
      setErr(""); setState("idle");
      form.elements[firstInvalid]?.focus(); // Screenreader lesen so direkt die Fehlermeldung vor
      return;
    }
    setErr(""); setState("loading");

    if (!FORM_ENDPOINT) {
      if (import.meta.env.DEV) { setTimeout(() => setState("success"), 900); return; }
      console.error("VITE_FORM_ENDPOINT fehlt – Formular ist nicht verbunden.");
      fail(`Das Formular ist derzeit nicht verfügbar. Bitte schreiben Sie uns direkt an ${CONTACT.email}.`); return;
    }
    try {
      const res = await fetch(FORM_ENDPOINT, { method: "POST", body: f, headers: { Accept: "application/json" } });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      setState("success");
    } catch (error) {
      console.error("Demo-Formular konnte nicht gesendet werden:", error);
      fail(`Senden hat nicht geklappt. Bitte versuchen Sie es erneut oder schreiben Sie uns an ${CONTACT.email}.`);
    }
  };

  return (
    <section id="demo" className="border-t border-av-line bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-[760px] px-5 lg:px-8">
        <div className="text-center">
          <p className={KICKER}>Persönliche Demo</p>
          <h2 className={H2}>Sehen Sie ANVERO an einer Ihrer Anfragen.</h2>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-[1.65] text-av-body">
            In der unverbindlichen Demo spielen wir eine typische Anfrage aus Ihrem Betrieb live durch,
            bis zum fertigen Angebot im Postfach. Ohne Vorbereitung, ohne Verpflichtung.
          </p>
        </div>

        {/* Alternative Kontaktwege neben dem Formular. Der Calendly-Link kommt aus src/siteConfig.js. */}
        <div className="mx-auto mt-8 flex max-w-[680px] flex-col items-center gap-3 text-center">
          <CalendlyButton size="lg" className="w-full sm:w-auto" />
          <p className="text-[14px] leading-6 text-av-body">
            Sie erreichen uns auch direkt:{" "}
            <a href={`mailto:${CONTACT.email}`} className={LINK}>{CONTACT.email}</a>
            {" · "}
            <a href={CONTACT.phoneHref} className={LINK}>{CONTACT.phoneDisplay}</a>
          </p>
          <p className="mt-4 text-[14px] font-medium text-av-muted">Oder Anfrage per Formular</p>
        </div>

        {state === "success" ? (
          <div ref={successRef} tabIndex={-1} role="status" className="mx-auto mt-8 max-w-[620px] rounded-[10px] border border-av-line bg-av-paper p-8 text-center focus:outline-none">
            <span className="mx-auto grid h-12 w-12 place-items-center rounded-full bg-av-petrol-tint text-av-petrol"><Icon name="check" size={24} /></span>
            <h3 className="mt-4 text-lg font-semibold text-av-ink">Vielen Dank für Ihre Anfrage</h3>
            <p className="mt-2 text-[15px] leading-7 text-av-body">
              Wir haben Ihre Angaben erhalten und melden uns bei Ihnen.
            </p>
          </div>
        ) : (
          <form onSubmit={submit} noValidate
            className="mx-auto mt-6 max-w-[680px] rounded-[10px] border border-av-line bg-av-paper p-6 sm:p-8">
            <input type="text" name="_hp" tabIndex={-1} autoComplete="off" aria-hidden="true"
              className="absolute h-0 w-0 opacity-0" />
            <p className="mb-5 text-[13px] text-av-muted">Felder mit * sind Pflichtfelder.</p>
            <div className="grid gap-4 sm:grid-cols-2">
              <TextField name="name" label="Name" autoComplete="name" required error={errors.name} onChange={clearError} />
              <TextField name="company" label="Unternehmen" autoComplete="organization" required error={errors.company} onChange={clearError} />
              <TextField name="email" label="Geschäftliche E-Mail" type="email" autoComplete="email" required
                error={errors.email} onChange={clearError} className="sm:col-span-2" />
              <TextField name="message" label="Nachricht" optional multiline onChange={clearError} className="sm:col-span-2" />
            </div>

            {/* Meldungen zum Senden selbst (Netzwerk, nicht erreichbar); Feldfehler stehen direkt am Feld. */}
            <div aria-live="polite" className="mt-3 min-h-5">
              {state === "error" && (
                <p className="flex items-center gap-1.5 text-[13px] font-semibold text-red-700">
                  <Icon name="alert" size={14} />{err}
                </p>
              )}
            </div>

            <p className="mt-2 text-[13px] leading-5 text-av-muted">
              Wir verwenden Ihre Angaben, um Ihre Anfrage zu bearbeiten. Informationen zur Datenverarbeitung finden
              Sie in der <a href="/datenschutz" className={LINK}>Datenschutzerklärung</a>.
            </p>

            <button type="submit" disabled={state === "loading"}
              className="mt-4 flex min-h-12 w-full items-center justify-center gap-2 rounded-[10px] border border-av-petrol bg-white px-5 text-[15px] font-semibold text-av-petrol transition-colors hover:bg-av-petrol-tint disabled:cursor-not-allowed disabled:opacity-60 focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol">
              {state === "loading"
                ? <><span className="h-4 w-4 animate-spin rounded-full border-2 border-av-petrol/30 border-t-av-petrol" />Wird gesendet …</>
                : <><Icon name="send" size={17} />Anfrage senden</>}
            </button>
            <p className="mt-3 text-center text-[13px] text-av-muted">Keine Newsletter-Anmeldung.</p>
          </form>
        )}
      </div>
    </section>
  );
}

function Home() {
  return (
    <div className="bg-av-paper text-av-body antialiased">
      <Header />
      <main>
        <Hero />
        <Flow />
        <TimeSaving />
        <Control />
        <Pilot />
        <Founder />
        <FAQ />
        <Demo />
      </main>
      <Footer />
    </div>
  );
}

/* Einfaches Routing ohne Zusatzpaket: Vercel liefert fuer /impressum und /datenschutz die index.html
   aus (siehe vercel.json), hier wird anhand des Pfads die passende Seite gerendert. */
const PAGES = { "/impressum": Impressum, "/datenschutz": Datenschutz };

export default function App() {
  const path = window.location.pathname.replace(/\/+$/, "") || "/";
  const Page = PAGES[path];
  return Page ? <Page /> : <Home />;
}
