import Script from 'next/script'

export default function EmailOctopusForm() {
  return (
    <>
      {/* EmailOctopus form will appear here */}
      <div id="email-octopus-form" className="w-full max-w-md">
        {/* Mock form to simulate EmailOctopus form layout */}
        <div className="rounded-lg border p-6 shadow-sm">
          <h3 className="mb-2 text-xl font-bold">Subscribe to Newsletter</h3>
          <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
            Get the latest updates delivered to your inbox
          </p>
          <div className="flex flex-col space-y-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="focus:ring-primary-500 rounded border px-4 py-2 focus:ring-2 focus:outline-none"
              disabled
            />
            <button
              className="bg-primary-500 hover:bg-primary-600 rounded px-4 py-2 text-white"
              disabled
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Add the embed script */}
      <Script
        src="https://eocampaign1.com/form/277d4368-a0f4-11f0-9232-b11b6b09a9fe.js"
        strategy="afterInteractive"
        data-form="277d4368-a0f4-11f0-9232-b11b6b09a9fe"
      />
    </>
  )
}
