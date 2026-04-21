import ContactForm from "./contact-form";

export { metadata } from "./metadata";

export default function Contact() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative layout-section bg-accent">
        <div className="layout-container">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold mb-4">Contact us</h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Moves, quotes, or interior work — send a message and we&apos;ll
              respond as soon as we can. Prefer WhatsApp? Use the button on
              screen.
            </p>
          </div>
        </div>
      </section>

      <ContactForm />

      {/* Map Section */}
      <section className="layout-section bg-accent">
        <div className="layout-container">
          <div className="aspect-video rounded-lg overflow-hidden">
            {/* Replace with actual map implementation */}
            <div className="w-full h-full bg-muted flex items-center justify-center">
              <p className="text-muted-foreground">Map placeholder</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
