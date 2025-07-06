import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center bg-slate-900/80 backdrop-blur-sm border-b border-slate-700 shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🥔</span>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">PotatoCMS</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/demo">
            <Button variant="ghost" className="text-slate-300 hover:bg-slate-800 hover:text-white">Demo</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500">Sign In</Button>
          </Link>
          <Link href="/admin">
            <Button className="bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white">Admin</Button>
          </Link>
        </nav>
      </header>

      {/* Hero Section */}
      <main className="container mx-auto px-4 py-20">
        <div className="text-center space-y-8">
          <div className="space-y-6">
            <div className="inline-flex items-center px-4 py-2 bg-orange-900/50 text-orange-300 border border-orange-700 rounded-full text-sm font-medium mb-4">
              🚀 New: Advanced subscription management features
            </div>
            <h1 className="text-6xl font-bold tracking-tight leading-tight text-white">
              Welcome to <span className="bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">PotatoCMS</span> 🥔
            </h1>
            <p className="text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              A modern, subscription-based Content Management System built with Next.js 14, 
              TypeScript, and Supabase. Perfect for creators who want to monetize their content
              with beautiful gating strategies and seamless payment flows.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link href="/login">
              <Button size="lg" className="text-lg px-8 py-3 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 shadow-lg hover:shadow-xl transition-all duration-200 text-white">
                Get Started Free
              </Button>
            </Link>
            <Link href="/demo">
              <Button variant="outline" size="lg" className="text-lg px-8 py-3 border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white hover:border-slate-500 shadow-lg hover:shadow-xl transition-all duration-200">
                View Live Demo
              </Button>
            </Link>
          </div>
        </div>

        {/* Features Grid */}
        <div className="mt-24 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="border-slate-700 bg-slate-800/60 backdrop-blur-sm hover:shadow-lg hover:shadow-orange-500/10 transition-all duration-200 hover:scale-105 hover:border-orange-500/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-orange-900/50 border border-orange-700 rounded-lg">
                  <span className="text-xl">🔐</span>
                </div>
                <span>Authentication</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Secure email and social authentication powered by Supabase Auth with role-based access control
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-700 bg-slate-800/60 backdrop-blur-sm hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-200 hover:scale-105 hover:border-blue-500/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-blue-900/50 border border-blue-700 rounded-lg">
                  <span className="text-xl">💳</span>
                </div>
                <span>Subscriptions</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Stripe integration for seamless recurring billing, dunning management, and payment analytics
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-700 bg-slate-800/60 backdrop-blur-sm hover:shadow-lg hover:shadow-green-500/10 transition-all duration-200 hover:scale-105 hover:border-green-500/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-green-900/50 border border-green-700 rounded-lg">
                  <span className="text-xl">📝</span>
                </div>
                <span>Content Management</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Rich text editor with media upload, content scheduling, and collaborative editing
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-700 bg-slate-800/60 backdrop-blur-sm hover:shadow-lg hover:shadow-purple-500/10 transition-all duration-200 hover:scale-105 hover:border-purple-500/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-purple-900/50 border border-purple-700 rounded-lg">
                  <span className="text-xl">🔒</span>
                </div>
                <span>Content Gating</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Multiple gating strategies: freemium, metered access, and hard paywalls with smart previews
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-700 bg-slate-800/60 backdrop-blur-sm hover:shadow-lg hover:shadow-pink-500/10 transition-all duration-200 hover:scale-105 hover:border-pink-500/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-pink-900/50 border border-pink-700 rounded-lg">
                  <span className="text-xl">📱</span>
                </div>
                <span>Responsive Design</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Mobile-first design with beautiful shadcn/ui components and accessibility features
              </CardDescription>
            </CardContent>
          </Card>

          <Card className="border-slate-700 bg-slate-800/60 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-200 hover:scale-105 hover:border-yellow-500/50">
            <CardHeader>
              <CardTitle className="flex items-center space-x-3 text-white">
                <div className="p-2 bg-yellow-900/50 border border-yellow-700 rounded-lg">
                  <span className="text-xl">⚡</span>
                </div>
                <span>Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="text-slate-300">
                Built on Next.js 14 with App Router, Server Components, and optimized for Core Web Vitals
              </CardDescription>
            </CardContent>
          </Card>
        </div>

        {/* Tech Stack */}
        <div className="mt-24 bg-slate-800/60 backdrop-blur-sm rounded-2xl p-12 border border-slate-700">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">Built with Modern Technology</h2>
            <p className="text-slate-300 mb-8 max-w-2xl mx-auto">
              PotatoCMS leverages the latest and greatest technologies to deliver exceptional performance, 
              developer experience, and user satisfaction.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm">
              <div className="flex flex-col items-center p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:shadow-lg hover:shadow-orange-500/10 transition-all hover:border-orange-500/50">
                <div className="text-2xl mb-2">⚡</div>
                <span className="font-semibold text-white">Next.js 14</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:shadow-lg hover:shadow-blue-500/10 transition-all hover:border-blue-500/50">
                <div className="text-2xl mb-2">📘</div>
                <span className="font-semibold text-white">TypeScript</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:shadow-lg hover:shadow-green-500/10 transition-all hover:border-green-500/50">
                <div className="text-2xl mb-2">🗄️</div>
                <span className="font-semibold text-white">Supabase</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:shadow-lg hover:shadow-purple-500/10 transition-all hover:border-purple-500/50">
                <div className="text-2xl mb-2">💳</div>
                <span className="font-semibold text-white">Stripe</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:shadow-lg hover:shadow-cyan-500/10 transition-all hover:border-cyan-500/50">
                <div className="text-2xl mb-2">🎨</div>
                <span className="font-semibold text-white">Tailwind CSS</span>
              </div>
              <div className="flex flex-col items-center p-4 bg-slate-700/50 border border-slate-600 rounded-xl hover:shadow-lg hover:shadow-pink-500/10 transition-all hover:border-pink-500/50">
                <div className="text-2xl mb-2">✨</div>
                <span className="font-semibold text-white">shadcn/ui</span>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-12 mt-24 border-t border-slate-700 bg-slate-800/40 backdrop-blur-sm">
        <div className="text-center space-y-4">
          <div className="flex items-center justify-center space-x-2">
            <span className="text-2xl">🥔</span>
            <h3 className="text-xl font-bold bg-gradient-to-r from-orange-500 to-red-500 bg-clip-text text-transparent">PotatoCMS</h3>
          </div>
          <p className="text-slate-300">
            Built with 🥔 by <a href="https://www.linkedin.com/in/ariapramesi/" target="_blank" rel="noopener noreferrer" className="hover:text-orange-400 transition-colors font-semibold text-orange-300">Aria P</a>
          </p>
          <div className="flex justify-center space-x-6 text-sm text-slate-400">
            <Link href="/demo" className="hover:text-orange-400 transition-colors">Demo</Link>
            <Link href="/login" className="hover:text-orange-400 transition-colors">Login</Link>
            <Link href="/admin" className="hover:text-orange-400 transition-colors">Admin</Link>
          </div>
          <div className="text-xs text-slate-500 pt-4">
            © 2025 PotatoCMS. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  )
}