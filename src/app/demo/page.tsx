import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="container mx-auto px-4 py-6 flex justify-between items-center border-b bg-white/80 backdrop-blur-sm border-gray-200 shadow-sm sticky top-0 z-50">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🥔</span>
          <h1 className="text-2xl font-bold text-gray-900">PotatoCMS</h1>
        </div>
        <nav className="flex items-center space-x-4">
          <Link href="/">
            <Button variant="ghost" className="text-gray-600 hover:bg-gray-100">Home</Button>
          </Link>
          <Link href="/login">
            <Button variant="outline" className="border-gray-300 text-gray-600 hover:bg-gray-50">Sign In</Button>
          </Link>
          <Link href="/admin">
            <Button className="bg-gray-900 hover:bg-gray-800 text-white">Admin</Button>
          </Link>
        </nav>
      </header>

      {/* Demo Hero */}
      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-6 mb-16">
          <Badge variant="secondary" className="text-sm px-4 py-2 bg-gray-100 text-gray-700 border border-gray-200">
            🚀 Live Demo
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight text-gray-900">
            Experience <span className="text-gray-900">PotatoCMS</span> in Action
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Explore our subscription-based content management system with real examples of 
            content gating, user authentication, and premium features.
          </p>
        </div>

        {/* Demo Sections */}
        <div className="space-y-16">
          
          {/* Content Showcase */}
          <section>
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Content Management Demo</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              {/* Free Content Example */}
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">Getting Started Guide</CardTitle>
                    <Badge className="bg-gray-600 text-white">Free</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    Learn the basics of PotatoCMS setup and configuration
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      This comprehensive guide covers installation, initial setup, and basic configuration...
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-gray-500">5 min read</span>
                      <Button size="sm" variant="outline" className="border-gray-300 hover:bg-gray-100">Read More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Premium Content Example */}
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">Advanced Subscription Flows</CardTitle>
                    <Badge className="bg-gray-900 text-white">Premium</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    Deep dive into subscription management and billing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Master advanced subscription patterns, dunning management, and revenue optimization...
                    </p>
                    <div className="bg-gray-100 p-3 rounded border border-gray-300">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-gray-700">🔒 Premium Content</span>
                        <Button size="sm" className="bg-gray-900 hover:bg-gray-800 text-white">Upgrade to Read</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Freemium Content Example */}
              <Card className="border-gray-200 bg-white">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-lg text-gray-900">API Integration Tutorial</CardTitle>
                    <Badge className="bg-gray-700 text-white">Freemium</Badge>
                  </div>
                  <CardDescription className="text-gray-600">
                    Connect external services with PotatoCMS APIs
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <p className="text-sm text-gray-600">
                      Learn how to integrate with Stripe, Supabase, and other third-party services. 
                      This tutorial shows you step-by-step...
                    </p>
                    <div className="bg-gray-100 p-3 rounded border border-gray-300">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-700">Preview (2 of 8 sections)</span>
                        <Button size="sm" variant="outline" className="border-gray-300 hover:bg-gray-100">Continue Reading</Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Authentication Demo */}
          <section className="bg-gray-50 rounded-xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Authentication Flow</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-gray-900">🔐 User Authentication</h3>
                <ul className="space-y-3 text-gray-600">
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
                <h3 className="text-xl font-semibold mb-4 text-gray-900">💳 Subscription Management</h3>
                <ul className="space-y-3 text-gray-600">
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
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Subscription Tiers</h2>
            <div className="grid md:grid-cols-3 gap-6">
              
              <Card className="border-gray-200 bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Free</CardTitle>
                  <CardDescription className="text-3xl font-bold text-gray-700">$0<span className="text-base font-normal">/month</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Basic content access</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Community support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Getting started guides</li>
                    <li className="flex items-center"><span className="text-gray-400 mr-2">✗</span>Premium tutorials</li>
                    <li className="flex items-center"><span className="text-gray-400 mr-2">✗</span>Advanced features</li>
                  </ul>
                  <Button className="w-full mt-6" variant="outline">Get Started</Button>
                </CardContent>
              </Card>

              <Card className="border-gray-900 border-2 relative bg-white">
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-gray-900 text-white">Most Popular</Badge>
                </div>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Pro</CardTitle>
                  <CardDescription className="text-3xl font-bold text-gray-700">$29<span className="text-base font-normal">/month</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Everything in Free</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Premium tutorials</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Advanced integrations</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Priority support</li>
                    <li className="flex items-center"><span className="text-green-500 mr-2">✓</span>Custom themes</li>
                  </ul>
                  <Button className="w-full mt-6">Start Pro Trial</Button>
                </CardContent>
              </Card>

              <Card className="border-gray-200 bg-white">
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl text-gray-900">Enterprise</CardTitle>
                  <CardDescription className="text-3xl font-bold text-gray-700">$99<span className="text-base font-normal">/month</span></CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-gray-600">
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
          <section className="bg-gray-50 rounded-xl p-8 border border-gray-200">
            <h2 className="text-3xl font-bold mb-8 text-center text-gray-900">Technical Implementation</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="font-semibold text-gray-900">Next.js 14</h3>
                <p className="text-sm text-gray-600">App Router & Server Components</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="font-semibold text-gray-900">shadcn/ui</h3>
                <p className="text-sm text-gray-600">Beautiful Component Library</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">🗄️</div>
                <h3 className="font-semibold text-gray-900">Supabase</h3>
                <p className="text-sm text-gray-600">Database & Authentication</p>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-4">💳</div>
                <h3 className="font-semibold text-gray-900">Stripe</h3>
                <p className="text-sm text-gray-600">Payment Processing</p>
              </div>
            </div>
          </section>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center bg-gray-900 text-white rounded-xl p-12">
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
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900">
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 mt-16 border-t border-gray-200 bg-gray-50">
        <div className="text-center text-gray-600">
          <p>Built with 🥔 by <a href="https://www.linkedin.com/in/ariapramesi/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors font-semibold text-gray-700">Aria P</a> | <Link href="/" className="hover:text-gray-900 transition-colors">Back to Home</Link></p>
        </div>
      </footer>
    </div>
  )
}