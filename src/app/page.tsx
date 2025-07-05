import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🥔</span>
          <h1 className="text-2xl font-bold">PotatoCMS</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/admin">
            <Button>Admin</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-4">
            <h1 className="text-6xl font-bold tracking-tight">
              Welcome to <span className="text-orange-500">PotatoCMS</span> 🥔
            </h1>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              A modern, subscription-based Content Management System built with Next.js 14, 
              TypeScript, and Supabase. Perfect for creators who want to monetize their content.
            </p>
          </div>

          <div className="flex justify-center space-x-4">
            <Link href="/login">
              <Button size="lg" className="text-lg px-8">
                Get Started
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8">
                View Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🔐</span>
                <span>Authentication</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Secure email and social authentication powered by Supabase Auth
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>💳</span>
                <span>Subscriptions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Stripe integration for seamless recurring billing and payment management
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>📝</span>
                <span>Content Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Rich text editor with media upload and content scheduling
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>🔒</span>
                <span>Content Gating</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Multiple gating strategies: freemium, metered, and hard paywalls
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>📱</span>
                <span>Responsive Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Mobile-first design with beautiful shadcn/ui components
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <span>⚡</span>
                <span>Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Built on Next.js 14 with App Router for lightning-fast performance
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mt-24 text-center">
          <h2 className="text-3xl font-bold mb-8">Built with Modern Technology</h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="px-4 py-2 bg-white rounded-full shadow">Next.js 14</span>
            <span className="px-4 py-2 bg-white rounded-full shadow">TypeScript</span>
            <span className="px-4 py-2 bg-white rounded-full shadow">Supabase</span>
            <span className="px-4 py-2 bg-white rounded-full shadow">Stripe</span>
            <span className="px-4 py-2 bg-white rounded-full shadow">Tailwind CSS</span>
            <span className="px-4 py-2 bg-white rounded-full shadow">shadcn/ui</span>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-24 border-t">
        <div className="text-center text-slate-600">
          <p>Built with 🥔 by the PotatoCMS team</p>
        </div>
      </footer>
    </div>
  )
}