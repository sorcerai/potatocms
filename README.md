# PotatoCMS 🥔

A modern subscription-based Content Management System built with Next.js 14, TypeScript, and Supabase.

## Features

- 🔐 **Authentication** - Email/social login with Supabase Auth
- 💳 **Subscriptions** - Stripe integration for recurring billing
- 📝 **Content Management** - Rich text editor with media upload
- 🔒 **Content Gating** - Multiple gating strategies (freemium, metered, hard paywall)
- 📱 **Responsive Design** - Mobile-first with shadcn/ui components
- ⚡ **Performance** - Built on Next.js 14 with App Router
- 🛡️ **Security** - Row Level Security with Supabase

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS + shadcn/ui
- **Database:** Supabase (PostgreSQL)
- **Authentication:** Supabase Auth
- **Payments:** Stripe
- **Deployment:** Vercel

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your PotatoCMS instance.

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
│   ├── ui/          # shadcn/ui components
│   ├── auth/        # Authentication components
│   ├── content/     # Content management components
│   └── subscription/ # Subscription-related components
├── lib/             # Utility functions and configurations
├── hooks/           # Custom React hooks
└── types/           # TypeScript type definitions
```

## Environment Variables

```env
NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
STRIPE_SECRET_KEY=your-stripe-secret-key
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your-stripe-publishable-key
STRIPE_WEBHOOK_SECRET=your-stripe-webhook-secret
```

## License

MIT License - see LICENSE file for details.

---

Built with 🥔 by the PotatoCMS team