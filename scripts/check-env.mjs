#!/usr/bin/env node

/**
 * Script to check if required environment variables are set
 * Run this script to validate your .env.local configuration
 */

import { config } from 'dotenv'
import { existsSync } from 'fs'
import { resolve } from 'path'
import siteMetadata from '../data/siteMetadata.js'

// Load .env.local if it exists
const envPath = resolve(process.cwd(), '.env.local')
if (existsSync(envPath)) {
  config({ path: envPath })
  console.log('✓ Loaded environment variables from .env.local\n')
} else {
  console.log('⚠️  .env.local file not found. Create one by copying .env.example\n')
}

const errors = []
const warnings = []

console.log('🔍 Checking environment variables...\n')

// Check newsletter provider configuration
if (siteMetadata.newsletter?.provider) {
  const provider = siteMetadata.newsletter.provider
  console.log(`📧 Newsletter provider: ${provider}`)

  switch (provider) {
    case 'emailoctopus':
      if (!process.env.EMAILOCTOPUS_API_KEY) {
        errors.push('EMAILOCTOPUS_API_KEY is not set')
      }
      if (!process.env.EMAILOCTOPUS_LIST_ID) {
        errors.push('EMAILOCTOPUS_LIST_ID is not set')
      }
      break
    case 'mailchimp':
      if (!process.env.MAILCHIMP_API_KEY) {
        errors.push('MAILCHIMP_API_KEY is not set')
      }
      if (!process.env.MAILCHIMP_API_SERVER) {
        errors.push('MAILCHIMP_API_SERVER is not set')
      }
      if (!process.env.MAILCHIMP_AUDIENCE_ID) {
        errors.push('MAILCHIMP_AUDIENCE_ID is not set')
      }
      break
    case 'buttondown':
      if (!process.env.BUTTONDOWN_API_KEY) {
        errors.push('BUTTONDOWN_API_KEY is not set')
      }
      break
    case 'convertkit':
      if (!process.env.CONVERTKIT_API_KEY) {
        errors.push('CONVERTKIT_API_KEY is not set')
      }
      if (!process.env.CONVERTKIT_FORM_ID) {
        errors.push('CONVERTKIT_FORM_ID is not set')
      }
      break
    case 'klaviyo':
      if (!process.env.KLAVIYO_API_KEY) {
        errors.push('KLAVIYO_API_KEY is not set')
      }
      if (!process.env.KLAVIYO_LIST_ID) {
        errors.push('KLAVIYO_LIST_ID is not set')
      }
      break
    case 'beehiiv':
      if (!process.env.BEEHIIV_API_KEY) {
        errors.push('BEEHIIV_API_KEY is not set')
      }
      if (!process.env.BEEHIIV_PUBLICATION_ID) {
        errors.push('BEEHIIV_PUBLICATION_ID is not set')
      }
      break
  }
}

// Check comment provider configuration
if (siteMetadata.comments?.provider === 'giscus') {
  console.log(`💬 Comment provider: giscus`)
  if (!process.env.NEXT_PUBLIC_GISCUS_REPO) {
    errors.push('NEXT_PUBLIC_GISCUS_REPO is not set')
  }
  if (!process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID) {
    errors.push('NEXT_PUBLIC_GISCUS_REPOSITORY_ID is not set')
  }
  if (!process.env.NEXT_PUBLIC_GISCUS_CATEGORY) {
    errors.push('NEXT_PUBLIC_GISCUS_CATEGORY is not set')
  }
  if (!process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID) {
    errors.push('NEXT_PUBLIC_GISCUS_CATEGORY_ID is not set')
  }
}

// Check analytics configuration
if (siteMetadata.analytics?.umamiAnalytics?.umamiWebsiteId) {
  console.log(`📊 Analytics: Umami`)
  if (!process.env.NEXT_UMAMI_ID) {
    errors.push('NEXT_UMAMI_ID is not set')
  }
}

// Display results
console.log('\n' + '='.repeat(50))

if (errors.length === 0) {
  console.log('✅ All required environment variables are set!')
} else {
  console.log('❌ Missing required environment variables:\n')
  errors.forEach((error) => console.log(`  - ${error}`))
  console.log('\n📝 Please check .env.example for details on how to set these variables')
  process.exit(1)
}

if (warnings.length > 0) {
  console.log('\n⚠️  Warnings:\n')
  warnings.forEach((warning) => console.log(`  - ${warning}`))
}

console.log('='.repeat(50) + '\n')
