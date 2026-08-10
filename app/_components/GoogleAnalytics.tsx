/**
 * Google's canonical gtag.js snippet, emitted as raw <script> tags so it lands
 * in <head>.
 *
 * This deliberately does NOT use next/script. Its `afterInteractive` strategy
 * renders into <body>, which works fine for analytics but fails Search Console
 * ownership verification: the Google Analytics method rejects any site whose
 * tracking code sits outside <head> ("the tracking code on your site is in the
 * wrong location on the page"). Only the preload hint was reaching <head>.
 *
 * The loader keeps `async`, so it stays off the critical rendering path — this
 * is byte-for-byte the install snippet Google documents and its verifier looks
 * for. Render from the <head> of app/layout.tsx, not the body.
 */
export default function GoogleAnalytics({
  GA_MEASUREMENT_ID,
}: {
  GA_MEASUREMENT_ID: string;
}) {
  return (
    <>
      <script
        async
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
      />
      <script
        dangerouslySetInnerHTML={{
          __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_MEASUREMENT_ID}');`,
        }}
      />
    </>
  );
}
