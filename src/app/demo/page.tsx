import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b bg-white/80 backdrop-blur-sm">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🥔</span>
          <h1 className="text-2xl font-bold">PotatoCMS</h1>
        </div>
        <nav className="space-x-4">
          <Link href="/">
            <Button variant="outline">Home</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline">Sign In</Button>
          </Link>
          <Link href="/admin">
            <Button>Admin</Button>
          </Link>
        </nav>
      </header>

      {/* Demo Hero */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2">
            🚀 Live Demo
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight">
            Experience <span className="text-orange-500">PotatoCMS</span> in Action
          </h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Explore our subscription-based content management system with real examples of 
            content gating, user authentication, and premium features.
          </p>
        </div>

        {/* Demo Sections */}
        <div className="space-y-16">
          
          {/* Content Showcase */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Content Management Demo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Free Content Example */}
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Getting Started Guide</CardTitle>
                    <Badge className="bg-green-500">Free</Badge>
                  </div>
                  <CardDescription>
                    Learn the basics of PotatoCMS setup and configuration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600">
                      This comprehensive guide covers installation, initial setup, and basic configuration...
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-slate-500">5 min read</span>
                      <Button size="sm" variant="outline">Read More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Content Example */}
              <Card className="border-orange-200 bg-orange-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">Advanced Subscription Flows</CardTitle>
                    <Badge className="bg-orange-500">Premium</Badge>
                  </div>
                  <CardDescription>
                    Deep dive into subscription management and billing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600">
                      Master advanced subscription patterns, dunning management, and revenue optimization...
                    </p>
                    <div className="bg-orange-100 p-3 rounded border border-orange-300">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">🔒 Premium Content</span>
                        <Button size="sm">Upgrade to Read</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Freemium Content Example */}
              <Card className="border-blue-200 bg-blue-50">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg">API Integration Tutorial</CardTitle>
                    <Badge className="bg-blue-500">Freemium</Badge>
                  </div>
                  <CardDescription>
                    Connect external services with PotatoCMS APIs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-slate-600">
                      Learn how to integrate with Stripe, Supabase, and other third-party services. 
                      This tutorial shows you step-by-step...
                    </p>
                    <div className="bg-blue-100 p-3 rounded border border-blue-300">
                      <div className="flex items-center justify-between text-sm">
                        <span>Preview (2 of 8 sections)</span>
                        <Button size="sm" variant="outline">Continue Reading</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Authentication Demo */}
          <section className="bg-white rounded-xl p-8 shadow-lg">
            <h2 className="text-3xl font-bold mb-8 text-center">Authentication Flow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4">🔐 User Authentication</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Email/password authentication</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Social login (Google, GitHub)</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Secure session management</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                    <span>Role-based access control</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">💳 Subscription Management</h3>
                <ul className="space-y-3 text-slate-600">
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Stripe integration for billing</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Multiple subscription tiers</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Automatic content gating</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                    <span>Dunning management</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-8 text-center">
              <Link href="/login">
                <Button size="lg" className="mr-4">
                  Try Authentication
                </Button>
              </Link>
              <Link href="/admin">
                <Button variant="outline" size="lg">
                  View Admin Panel
                </Button>
              </Link>
            </div>
          </section>

          {/* Feature Comparison */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center">Subscription Tiers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              
              <Card className="border-slate-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Free</CardTitle>
                  <CardDescription className="text-3xl font-bold">$0<span className="text-base font-normal">/month</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic content access</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Community support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Getting started guides</li>
                    <li className="flex items-center"><span className="text-slate-400 mr-2">✗</span>Premium tutorials</li>
                    <li className="flex items-center"><span className="text-slate-400 mr-2">✗</span>Advanced features</li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="border-orange-500 border-2 relative">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-orange-500">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Pro</CardTitle>
                  <CardDescription className="text-3xl font-bold">$29<span className="text-base font-normal">/month</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Everything in Free</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Premium tutorials</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced integrations</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom themes</li>
                  </ul>
                  <Button className="w-full mt-6">Start Pro Trial</Button>
                </CardContent>
              </Card>

              <Card className="border-purple-200">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl">Enterprise</CardTitle>
                  <CardDescription className="text-3xl font-bold">$99<span className="text-base font-normal">/month</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Everything in Pro</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>White-label solution</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom development</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Dedicated support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>SLA guarantee</li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Contact Sales</Button>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Technical Stack */}
          <section className="bg-slate-900 text-white rounded-xl p-8">
            <h2 className="text-3xl font-bold mb-8 text-center">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold">Next.js 14</h3>
                <p className="text-sm text-slate-400">App Router & Server Components</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-semibold">shadcn/ui</h3>
                <p className="text-sm text-slate-400">Beautiful Component Library</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🗄️</div>
                <h3 className="font-semibold">Supabase</h3>
                <p className="text-sm text-slate-400">Database & Authentication</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-semibold">Stripe</h3>
                <p className="text-sm text-slate-400">Payment Processing</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gradient-to-r from-orange-500 to-red-500 text-white rounded-xl p-12">
          <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of creators already using PotatoCMS to monetize their content
          </p>
          <div className="space-x-4">
            <Link href="/login">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Start Free Trial
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-orange-500">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t">
        <div className="text-center text-slate-600">
          <p>Built with 🥔 by the PotatoCMS team | <Link href="/" className="hover:text-orange-500">Back to Home</Link></p>
        </div>
      </footer>
    </div>
  )
}