import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <a
              href="https://www.unhappybanking.com.au"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 mb-4 hover:opacity-80 transition-opacity"
            >
              <div className="w-2 h-2 bg-accent rotate-45" />
              <span className="font-serif font-bold text-sm tracking-wide">
                UNHAPPY BANKING
              </span>
            </a>
            <p className="text-sm text-slate-400 leading-relaxed mb-3">
              Nationlink Solutions Pty Ltd in association with Unhappy Banking
              — advocating for victims of corporate misconduct since the GFC.
            </p>
            <p className="text-xs text-slate-500 leading-relaxed">
              Geoffrey Shannon — Founder, Unhappy Banking
              <br />
              Leading Consultant, Nationlink Solutions
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Contact
            </h4>
            <p className="text-sm text-slate-400 leading-loose">
              info@unhappybanking.com.au
              <br />
              Media enquiries welcome
              <br />
              All communications confidential
            </p>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-4">
              Legal
            </h4>
            <p className="text-sm text-slate-500 leading-relaxed">
              This website is for informational purposes.
              <br />
              Nothing herein constitutes legal advice.
              <br />
              &copy; {new Date().getFullYear()} Nationlink Solutions Pty Ltd
            </p>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-slate-500 leading-relaxed max-w-3xl mx-auto">
            Disclaimer: The claims and allegations presented on this website are
            based on publicly available court documents, Fair Work Commission
            proceedings, parliamentary records, and independent journalism. BHP
            and all named parties deny the allegations made against them. All
            parties are entitled to the presumption of innocence until findings
            are made by a court of competent jurisdiction. This website
            presents the position of affected workers and does not purport to
            state proven facts where matters remain in dispute.
          </p>
        </div>
      </div>
    </footer>
  );
}
