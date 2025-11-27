import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function PrivacyPolicy() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      <article className="text-white space-y-8">
        <header>
          <h1 className="text-4xl font-bold mb-4">Privacy Policy</h1>
          <p className="text-white/60">Last Updated: 27/11/2025</p>
        </header>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">1. Introduction</h2>
          <p className="text-white/80 leading-relaxed">
            Welcome to <strong>NxtBuck Inc.</strong> (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We respect your privacy and are committed to protecting your personal data. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website{" "}
            <a href="https://www.nxtbuck.com" className="text-[#FF4081] hover:underline">www.nxtbuck.com</a> and use our services (collectively, the &quot;Service&quot;).
          </p>
          <p className="text-white/80 leading-relaxed">
            By accessing or using our Service, you agree to the collection and use of information in accordance with this policy.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">2. Information We Collect</h2>
          <p className="text-white/80 leading-relaxed">
            We collect several different types of information to provide and improve our Service to you.
          </p>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">A. Personal Data</h3>
            <p className="text-white/80 leading-relaxed">
              While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (&quot;Personal Data&quot;). This may include:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-1 ml-4">
              <li>Email address</li>
              <li>First name and last name</li>
              <li>Phone number</li>
              <li>Billing address and payment details (processed by our secure payment processors)</li>
              <li>Company name (if applicable)</li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-medium">B. Usage Data</h3>
            <p className="text-white/80 leading-relaxed">
              We may also collect information on how the Service is accessed and used (&quot;Usage Data&quot;). This Usage Data may include information such as:
            </p>
            <ul className="list-disc list-inside text-white/80 space-y-1 ml-4">
              <li>Your computer&apos;s Internet Protocol address (e.g., IP address)</li>
              <li>Browser type and browser version</li>
              <li>The pages of our Service that you visit</li>
              <li>The time and date of your visit</li>
              <li>The time spent on those pages</li>
              <li>Unique device identifiers and other diagnostic data</li>
            </ul>
          </div>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">3. How We Use Your Data</h2>
          <p className="text-white/80 leading-relaxed">
            NxtBuck Inc. uses the collected data for various purposes:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li><strong>To provide and maintain the Service:</strong> Including monitoring the usage of our Service.</li>
            <li><strong>To manage your account:</strong> To manage your registration as a user of the Service.</li>
            <li><strong>To contact you:</strong> To contact you by email regarding updates or informative communications related to the functionalities, products, or contracted services.</li>
            <li><strong>To provide customer support:</strong> To resolve technical issues or respond to inquiries.</li>
            <li><strong>To detect, prevent, and address technical issues.</strong></li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">4. Disclosure of Your Data</h2>
          <p className="text-white/80 leading-relaxed">
            We do not sell your personal data. However, we may share your information in the following situations:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li><strong>Service Providers:</strong> We may employ third-party companies (e.g., AWS, Stripe, Google Analytics) to facilitate our Service, provide the Service on our behalf, or analyze how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.</li>
            <li><strong>Business Transfers:</strong> If NxtBuck Inc. is involved in a merger, acquisition, or asset sale, your Personal Data may be transferred.</li>
            <li><strong>Legal Requirements:</strong> We may disclose your Personal Data if required to do so by law or in response to valid requests by public authorities (e.g., a court or a government agency).</li>
          </ul>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">5. Security of Data</h2>
          <p className="text-white/80 leading-relaxed">
            The security of your data is important to us, but remember that no method of transmission over the Internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable means (such as SSL encryption and secure databases) to protect your Personal Data, we cannot guarantee its absolute security.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">6. Your Data Rights</h2>
          <p className="text-white/80 leading-relaxed">
            Depending on your location, you may have the following rights regarding your data:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li><strong>The right to access:</strong> You can ask for copies of your personal data.</li>
            <li><strong>The right to rectification:</strong> You can ask us to correct inaccurate information.</li>
            <li><strong>The right to erasure:</strong> You can ask us to delete your personal data (&quot;Right to be Forgotten&quot;).</li>
            <li><strong>The right to restrict processing:</strong> You can ask us to limit how we use your data.</li>
          </ul>
          <p className="text-white/80 leading-relaxed">
            To exercise these rights, please contact us at{" "}
            <a href="mailto:support@nxtbuck.com" className="text-[#FF4081] hover:underline">support@nxtbuck.com</a>.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">7. Third-Party Links</h2>
          <p className="text-white/80 leading-relaxed">
            Our Service may contain links to other sites that are not operated by us. If you click a third-party link, you will be directed to that third party&apos;s site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies, or practices of any third-party sites or services.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">8. Changes to This Privacy Policy</h2>
          <p className="text-white/80 leading-relaxed">
            We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this policy. You are advised to review this Privacy Policy periodically for any changes.
          </p>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-semibold">9. Contact Us</h2>
          <p className="text-white/80 leading-relaxed">
            If you have any questions about this Privacy Policy, please contact us:
          </p>
          <ul className="list-disc list-inside text-white/80 space-y-2 ml-4">
            <li>
              <strong>By email:</strong>{" "}
              <a href="mailto:support@nxtbuck.com" className="text-[#FF4081] hover:underline">support@nxtbuck.com</a>
            </li>
            <li>
              <strong>By visiting this page on our website:</strong>{" "}
              <a href="https://www.nxtbuck.com/contact" className="text-[#FF4081] hover:underline">www.nxtbuck.com/contact</a>
            </li>
          </ul>
        </section>
      </article>
    </main>
  );
}

