import Script from 'next/script'

export default function EmailOctopusForm() {
  return (
    <div className="mb-8 flex w-full justify-center">
      <div id="email-octopus-form" className="w-full max-w-md">
        {/* EmailOctopus form will be injected here by the external script */}
      </div>

      {/* Add the embed script */}
      <Script
        src="https://eocampaign1.com/form/277d4368-a0f4-11f0-9232-b11b6b09a9fe.js"
        strategy="afterInteractive"
        data-form="277d4368-a0f4-11f0-9232-b11b6b09a9fe"
      />
    </div>
  )
}
