import Script from 'next/script';

export default function EmailOctopusForm() {
  return (
    <>
      {/* EmailOctopus form will appear here */}
      <div id="email-octopus-form"></div>

      {/* Add the embed script */}
      <Script
        src="https://eocampaign1.com/form/277d4368-a0f4-11f0-9232-b11b6b09a9fe.js"
        strategy="afterInteractive"
        data-form="277d4368-a0f4-11f0-9232-b11b6b09a9fe"
      />
    </>
  );
}
