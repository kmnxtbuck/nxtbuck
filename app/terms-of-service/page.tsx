import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | NxtBuck Inc. |Toronto",
  description:
    "Terms of Service for NxtBuck Inc., a Toronto-based web design agency serving businesses across USA & Canada.",
};

export default function TermsOfService() {
  return (
    <main className="max-w-4xl mx-auto px-4 sm:px-6 py-8 sm:py-12 md:py-16">
      <article className="text-white space-y-6 sm:space-y-8">
        <header>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Terms of Service</h1>
          <p className="text-white/60 text-sm sm:text-base">Last Updated: 27/11/2025</p>
        </header>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">1. Acceptance of Terms</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            By accessing or using the website{" "}
            <a href="https://www.nxtbuck.com" className="text-[#FF4081] hover:underline break-all">www.nxtbuck.com</a>{" "}
            and services provided by NxtBuck Inc. (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you disagree with any part of the terms, then you may not access the Service.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">2. Accounts and Registration</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            To access certain features of the Service, you may be required to register for an account. By registering, you agree to:
          </p>
          <ul className="list-disc text-white/80 space-y-2 ml-4 sm:ml-6 text-sm sm:text-base">
            <li>Provide accurate, current, and complete information during the registration process.</li>
            <li>Maintain the security of your password and accept all risks of unauthorized access to your account and the information you provide.</li>
            <li>Notify us immediately if you discover or otherwise suspect any security breaches related to the Service or your account.</li>
          </ul>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            NxtBuck Inc. reserves the right to suspend or terminate your account if any information provided during the registration process or thereafter proves to be inaccurate, not current, or incomplete.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">3. Intellectual Property Rights</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            The Service and its original content, features, and functionality (including but not limited to all software, code, logos, designs, text, and graphics) are and will remain the exclusive property of NxtBuck Inc. and its licensors. The Service is protected by copyright, trademark, and other laws of both domestic and foreign countries. Our trademarks and trade dress may not be used in connection with any product or service without the prior written consent of NxtBuck Inc.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">4. User Conduct</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            By using the Service, you agree not to:
          </p>
          <ul className="list-disc text-white/80 space-y-2 ml-4 sm:ml-6 text-sm sm:text-base">
            <li>Use the Service for any illegal purpose or in violation of any local, state, national, or international law.</li>
            <li>Harass, threaten, demean, embarrass, or otherwise harm any other user of the Service.</li>
            <li>Violate, or encourage others to violate, any right of a third party, including by infringing or misappropriating any third-party intellectual property right.</li>
            <li>Interfere with security-related features of the Service, including by: (i) disabling or circumventing features that prevent or limit use or copying of any content; or (ii) reverse engineering or otherwise attempting to discover the source code of any portion of the Service.</li>
          </ul>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">5. Termination</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            We may terminate or suspend your account and bar access to the Service immediately, without prior notice or liability, under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach of the Terms.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">6. Limitation of Liability</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            In no event shall NxtBuck Inc., nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from:
          </p>
          <ul className="list-disc text-white/80 space-y-2 ml-4 sm:ml-6 text-sm sm:text-base">
            <li>Your access to or use of or inability to access or use the Service;</li>
            <li>Any conduct or content of any third party on the Service;</li>
            <li>Any content obtained from the Service; and</li>
            <li>Unauthorized access, use, or alteration of your transmissions or content.</li>
          </ul>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            The Service is provided on an &quot;AS IS&quot; and &quot;AS AVAILABLE&quot; basis.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">7. Governing Law</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            These Terms shall be governed and construed in accordance with the laws of the Province of Ontario and the federal laws of Canada applicable therein, without regard to its conflict of law provisions. Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">8. Changes to Terms</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms.
          </p>
        </section>

        <section className="space-y-3 sm:space-y-4">
          <h2 className="text-xl sm:text-2xl font-semibold">9. Contact Us</h2>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            If you have any questions about these Terms, please contact us at:
          </p>
          <p className="text-white/80 leading-relaxed text-sm sm:text-base">
            <strong>Email:</strong>{" "}
            <a href="mailto:support@nxtbuck.com" className="text-[#FF4081] hover:underline">support@nxtbuck.com</a>
          </p>
        </section>
      </article>
    </main>
  );
}
