import Link from 'next/link'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, Users, FileText, CreditCard, BarChart3, ArrowLeft } from 'lucide-react'

export default function AdminDemoPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Home
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🥔</span>
              <h1 className="text-2xl font-bold text-gray-900">PotatoCMS Admin Demo</h1>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <div className="px-3 py-1 bg-gray-100 rounded-full text-sm text-gray-600">Demo Mode</div>
            <Link href="/login">
              <Button variant="outline">Sign In for Full Access</Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        {/* Demo Notice */}
        <div className="mb-8 p-4 bg-gray-100 border border-gray-200 rounded-lg">
          <h2 className="text-lg font-semibold text-gray-900 mb-2">📋 Admin Dashboard Demo</h2>
          <p className="text-gray-600">
            This is a preview of the PotatoCMS admin dashboard. All data shown is simulated for demonstration purposes. 
            <Link href="/login" className="font-semibold text-gray-900 hover:underline ml-1">Sign in</Link> to access the full admin experience.
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-gray-500">+12% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Content Published</CardTitle>
              <FileText className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-gray-500">+5 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Subscriptions</CardTitle>
              <CreditCard className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">456</div>
              <p className="text-xs text-gray-500">+23% from last month</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Monthly Revenue</CardTitle>
              <BarChart3 className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345</div>
              <p className="text-xs text-gray-500">+18% from last month</p>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle>Content Management</CardTitle>
              <CardDescription>Create and manage your content</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full justify-start bg-gray-900 hover:bg-gray-800 text-white" disabled>
                <Plus className="mr-2 h-4 w-4" />
                New Article (Demo)
              </Button>
              <Link href="/admin/demo/content">
                <Button variant="outline" className="w-full justify-start">
                  <FileText className="mr-2 h-4 w-4" />
                  Manage Content
                </Button>
              </Link>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>User Management</CardTitle>
              <CardDescription>Manage your subscribers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/admin/demo/users">
                <Button className="w-full justify-start bg-gray-900 hover:bg-gray-800 text-white">
                  <Users className="mr-2 h-4 w-4" />
                  View Users
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start" disabled>
                <CreditCard className="mr-2 h-4 w-4" />
                Subscriptions (Demo)
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Analytics</CardTitle>
              <CardDescription>Track your performance</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              <Link href="/admin/demo/analytics">
                <Button className="w-full justify-start bg-gray-900 hover:bg-gray-800 text-white">
                  <BarChart3 className="mr-2 h-4 w-4" />
                  View Analytics
                </Button>
              </Link>
              <Button variant="outline" className="w-full justify-start" disabled>
                Revenue Reports (Demo)
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card>
          <CardHeader>
            <CardTitle>Recent Activity</CardTitle>
            <CardDescription>Latest updates from your PotatoCMS (Demo Data)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">New user registration</p>
                  <p className="text-xs text-gray-500">demo-user@example.com joined 2 hours ago</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Content published</p>
                  <p className="text-xs text-gray-500">&quot;Getting Started with PotatoCMS&quot; was published</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                <div>
                  <p className="text-sm font-medium">Payment received</p>
                  <p className="text-xs text-gray-500">$29/month subscription from demo-subscriber@example.com</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* CTA Section */}
        <div className="mt-12 text-center bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-3xl font-bold mb-4">Ready to Build Your Content Platform?</h2>
          <p className="text-lg mb-6 opacity-90">
            This is just a preview. Clone the open source repository to deploy your own PotatoCMS instance.
          </p>
          <div className="space-x-4">
            <Link href="https://github.com/sorcerai/potatocms" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Clone on GitHub
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900">
                Back to Home
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}