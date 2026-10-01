import { useState } from "react";
import { Icon, CalendlyButton } from "./ui";
import { CONTACT, CALENDLY_HREF, CALENDLY_LABEL } from "../siteConfig";

/* Alle Anker laufen ueber "/#..." statt "#...": So funktionieren Header und Footer
   auf der Startseite (Scroll ohne Neuladen) und auf Unterseiten wie /impressum. */

const NAV = [["Ablauf", "/#ablauf"], ["Zeitersparnis", "/#zeit"], ["Kontrolle", "/#kontrolle"], ["Pilotphase", "/#pilot"], ["FAQ", "/#faq"]];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-50 border-b border-av-line bg-av-paper/95 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-4 px-5 lg:h-[72px] lg:px-8">
        <a href="/" className="flex items-center gap-3 rounded-lg focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol">
          <div className="grid h-9 w-9 place-items-center rounded-[9px] bg-av-petrol text-white">
            <span className="text-sm font-bold tracking-[-.04em]">AV</span>
          </div>
          <div>
            <div className="text-[15px] font-semibold tracking-[.12em] text-av-ink">ANVERO</div>
            <div className="text-xs text-av-muted">Anfrage bis Angebot</div>
          </div>
        </a>
        <nav className="hidden items-center gap-7 lg:flex">
          {NAV.map(([l, h]) => (
            <a key={h} href={h} className="text-sm font-medium text-av-body transition-colors hover:text-av-ink">{l}</a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <CalendlyButton size="sm" className="hidden sm:inline-flex" />
          <button type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label={open ? "Menü schließen" : "Menü öffnen"}
            className="grid h-11 w-11 place-items-center rounded-[10px] border border-av-line bg-white text-av-ink focus:outline-none focus-visible:ring-[3px] focus-visible:ring-av-petrol lg:hidden">
            <Icon name={open ? "x" : "menu"} size={18} />
          </button>
        </div>
      </div>
      {open && (
        <nav className="border-t border-av-line bg-white px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-[1180px] flex-col">
            {NAV.map(([l, h]) => (
              <a key={h} href={h} onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-3 text-[15px] font-medium text-av-ink hover:bg-av-paper">{l}</a>
            ))}
            <CalendlyButton onClick={() => setOpen(false)} className="mt-2 w-full" />
          </div>
        </nav>
      )}
    </header>
  );
}

export function Footer() {
  const link = "text-sm text-slate-300 hover:text-white focus:outline-none focus-visible:text-white focus-visible:underline";
  return (
    <footer className="bg-av-night text-white">
      <div className="mx-auto max-w-[1120px] px-5 py-14 lg:px-8">
        <div className="grid gap-10 border-b border-white/10 pb-10 md:grid-cols-[1.4fr_.6fr_.6fr]">
          <div>
            <div className="text-lg font-semibold tracking-[.14em]">ANVERO</div>
            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-300">
              Angebotsautomatisierung für Gebäudereinigungen – vom Postfach zum fertigen Angebot.
            </p>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Produkt</p>
            <div className="mt-4 flex flex-col gap-3">
              {NAV.slice(0, 4).map(([l, h]) => (
                <a key={h} href={h} className={link}>{l}</a>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-medium text-white">Kontakt und Rechtliches</p>
            <div className="mt-4 flex flex-col gap-3">
              {CALENDLY_HREF && (
                <a href={CALENDLY_HREF} target="_blank" rel="noopener noreferrer" className={link}>
                  {CALENDLY_LABEL}<span className="sr-only"> (öffnet in neuem Tab)</span>
                </a>
              )}
              <a href="/#demo" className={link}>Anfrage per Formular</a>
              <a href={`mailto:${CONTACT.email}`} className={link}>{CONTACT.email}</a>
              <a href="/impressum" className={link}>Impressum</a>
              <a href="/datenschutz" className={link}>Datenschutz</a>
            </div>
          </div>
        </div>
        <p className="pt-6 text-xs text-slate-300">© {new Date().getFullYear()} ANVERO</p>
      </div>
    </footer>
  );
}
