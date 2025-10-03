# FrossByte Blog

A Next.js blog built with [Tailwind Nextjs Starter Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) template.

## Getting Started

### Prerequisites

- Node.js 18+ or higher
- npm or yarn package manager

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Set up environment variables:

```bash
cp .env.example .env.local
```

Then edit `.env.local` and fill in your actual values for:

- Newsletter provider credentials (EmailOctopus, Mailchimp, etc.)
- Giscus comment system configuration
- Analytics IDs (Umami, Google Analytics)

See [.env.example](./.env.example) for detailed instructions on each variable.

4. Verify your environment configuration (optional):

```bash
npm run check-env
```

This will validate that all required environment variables are set for your configured providers.

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Building for Production

```bash
npm run build
npm run serve
```

## Configuration

### Site Metadata

Edit `data/siteMetadata.js` to customize:

- Site title, description, and URLs
- Social media links
- Analytics provider
- Newsletter provider
- Comment system provider

### Environment Variables

All sensitive configuration (API keys, IDs) should be stored in `.env.local` file.
Never commit this file to version control.

Required environment variables depend on which services you enable:

- **Newsletter**: Requires API keys for your chosen provider (EmailOctopus, Mailchimp, Buttondown, ConvertKit, Klaviyo, or Beehiiv)
- **Comments**: Requires Giscus configuration if using giscus comments
- **Analytics**: Requires Umami website ID if using Umami analytics

See [.env.example](./.env.example) for a complete list.

## License

MIT
