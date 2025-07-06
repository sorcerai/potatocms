import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { SiteNavigation, mainNavigationItems } from '@/components/navigation/SiteNavigation'

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <SiteNavigation items={mainNavigationItems} />

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20" role="main">
        <section className="text-center space-y-8" aria-labelledby="hero-heading">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-gray-100 text-gray-700 border border-gray-200 rounded-full text-sm font-medium mb-4">
              🚀 New: Advanced subscription management features
            </div>
            <h1 id="hero-heading" className="text-6xl font-bold tracking-tight leading-tight text-gray-900">
              Welcome to <span className="text-gray-900">PotatoCMS</span> 🥔
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              An open source, subscription-based Content Management System built with Next.js 14, 
              TypeScript, and Supabase. Perfect for creators who want to monetize their content
              with beautiful gating strategies and seamless payment flows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="https://github.com/sorcerai/potatocms" target="_blank" rel="noopener noreferrer">
              <Button size="lg" className="text-lg px-8 py-3 bg-gray-900 hover:bg-gray-800 shadow-lg hover:shadow-xl transition-all duration-200 text-white">
                Get Started Free
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-gray-300 text-gray-700 hover:bg-gray-50 shadow-lg hover:shadow-xl transition-all duration-200">
                View Live Demo
              </Button>
            </Link>
          </div>
        </section>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-gray-900">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <span className="text-xl">🔐</span>
                </div>
                <span>Authentication</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Secure email and social authentication powered by Supabase Auth with role-based access control
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-gray-900">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <span className="text-xl">💳</span>
                </div>
                <span>Subscriptions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Stripe integration for seamless recurring billing, dunning management, and payment analytics
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-gray-900">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <span className="text-xl">📝</span>
                </div>
                <span>Content Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Rich text editor with media upload, content scheduling, and collaborative editing
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-gray-900">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <span className="text-xl">🔒</span>
                </div>
                <span>Content Gating</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Multiple gating strategies: freemium, metered access, and hard paywalls with smart previews
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-gray-900">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <span className="text-xl">📱</span>
                </div>
                <span>Responsive Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Mobile-first design with beautiful shadcn/ui components and accessibility features
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-gray-200 bg-white hover:shadow-lg transition-all duration-200 hover:scale-105">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-gray-900">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <span className="text-xl">⚡</span>
                </div>
                <span>Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-gray-600">
                Built on Next.js 14 with App Router, Server Components, and optimized for Core Web Vitals
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mt-24 bg-gray-50 rounded-2xl p-12 border border-gray-200">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">Built with Modern Technology</h2>
            <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
              PotatoCMS leverages the latest and greatest technologies to deliver exceptional performance, 
              developer experience, and user satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
              <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:shadow-orange-500/10 transition-all hover:border-orange-500/50">
                <div className="text-2xl mb-2">⚡</div>
                <span className="font-semibold text-gray-900">Next.js 14</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:border-blue-500/50">
                <div className="text-2xl mb-2">📘</div>
                <span className="font-semibold text-gray-900">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:shadow-green-500/10 transition-all hover:border-green-500/50">
                <div className="text-2xl mb-2">🗄️</div>
                <span className="font-semibold text-gray-900">Supabase</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:border-purple-500/50">
                <div className="text-2xl mb-2">💳</div>
                <span className="font-semibold text-gray-900">Stripe</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all hover:border-cyan-500/50">
                <div className="text-2xl mb-2">🎨</div>
                <span className="font-semibold text-gray-900">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-white border border-gray-200 rounded-xl hover:shadow-lg hover:shadow-pink-500/10 transition-all hover:border-pink-500/50">
                <div className="text-2xl mb-2">✨</div>
                <span className="font-semibold text-gray-900">shadcn/ui</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-24 border-t border-gray-200 bg-gray-50">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🥔</span>
            <h3 className="text-xl font-bold text-gray-900">PotatoCMS</h3>
          </div>
          <p className="text-gray-600">
            Built with 🥔 by <a href="https://www.linkedin.com/in/ariapramesi/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors font-semibold text-gray-700">Aria P</a>
          </p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            <Link href="/demo" className="hover:text-gray-900 transition-colors">Demo</Link>
            <Link href="/login" className="hover:text-gray-900 transition-colors">Login</Link>
            <Link href="/admin/demo" className="hover:text-gray-900 transition-colors">Admin Demo</Link>
          </div>
          <div className="text-xs text-gray-400 pt-4">
            © 2025 PotatoCMS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}