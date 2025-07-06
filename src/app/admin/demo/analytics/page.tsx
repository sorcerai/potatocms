import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, BarChart3, TrendingUp, Eye, DollarSign, Users, Calendar } from 'lucide-react'

export default function AnalyticsDemo() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-4">
            <Link href="/admin/demo">
              <Button variant="ghost" size="sm">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Dashboard
              </Button>
            </Link>
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🥔</span>
              <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
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
          <h2 className="text-lg font-semibold text-gray-900 mb-2">📊 Analytics Dashboard Demo</h2>
          <p className="text-gray-600">
            This is a preview of the PotatoCMS analytics system. All data shown is simulated for demonstration purposes.
          </p>
        </div>

        {/* Time Period Selector */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-xl font-semibold text-gray-900">Performance Overview</h2>
          <div className="flex space-x-2">
            <Button variant="outline" size="sm" disabled>7 Days</Button>
            <Button variant="outline" size="sm" disabled>30 Days</Button>
            <Button size="sm" className="bg-gray-900 text-white" disabled>90 Days</Button>
            <Button variant="outline" size="sm" disabled>1 Year</Button>
          </div>
        </div>

        {/* Key Metrics */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
              <DollarSign className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">$12,345</div>
              <p className="text-xs text-gray-500 flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                +18% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Page Views</CardTitle>
              <Eye className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45.2K</div>
              <p className="text-xs text-gray-500 flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                +12% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New Subscribers</CardTitle>
              <Users className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-gray-500 flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                +23% from last period
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Conversion Rate</CardTitle>
              <BarChart3 className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3.4%</div>
              <p className="text-xs text-gray-500 flex items-center">
                <TrendingUp className="h-3 w-3 text-green-500 mr-1" />
                +0.8% from last period
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Charts Row */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5" />
                <span>Revenue Trends</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Revenue chart visualization</p>
                  <p className="text-xs text-gray-400">Demo data would show monthly trends</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Eye className="h-5 w-5" />
                <span>Content Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <Eye className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                  <p className="text-gray-500">Content engagement chart</p>
                  <p className="text-xs text-gray-400">Demo data would show page views & engagement</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Data Tables */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {/* Top Content */}
          <Card>
            <CardHeader>
              <CardTitle>Top Performing Content</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Getting Started with PotatoCMS</h4>
                    <p className="text-sm text-gray-500">Published Jan 15, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">2.3K views</p>
                    <p className="text-sm text-green-600">+45% vs avg</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">Advanced Subscription Strategies</h4>
                    <p className="text-sm text-gray-500">Published Jan 12, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">1.8K views</p>
                    <p className="text-sm text-green-600">+32% vs avg</p>
                  </div>
                </div>

                <div className="flex justify-between items-center p-3 bg-gray-50 rounded-lg">
                  <div>
                    <h4 className="font-medium text-gray-900">API Integration Guide</h4>
                    <p className="text-sm text-gray-500">Published Jan 8, 2025</p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-gray-900">945 views</p>
                    <p className="text-sm text-green-600">+18% vs avg</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Revenue Sources */}
          <Card>
            <CardHeader>
              <CardTitle>Revenue Breakdown</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-yellow-500 rounded"></div>
                    <span className="text-gray-900">Pro Subscriptions</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$8,450</p>
                    <p className="text-sm text-gray-500">68.5%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-purple-500 rounded"></div>
                    <span className="text-gray-900">Enterprise Plans</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$3,240</p>
                    <p className="text-sm text-gray-500">26.2%</p>
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="w-4 h-4 bg-blue-500 rounded"></div>
                    <span className="text-gray-900">One-time Purchases</span>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">$655</p>
                    <p className="text-sm text-gray-500">5.3%</p>
                  </div>
                </div>

                <div className="pt-4 border-t">
                  <div className="flex justify-between items-center font-semibold">
                    <span>Total Revenue</span>
                    <span>$12,345</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Recent Activity */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5" />
              <span>Recent Activity</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">New subscription from john.doe@example.com</p>
                  <p className="text-xs text-gray-500">Pro Plan • $29/month • 2 hours ago</p>
                </div>
                <div className="text-sm font-semibold text-green-600">+$29</div>
              </div>

              <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Content published: &quot;Getting Started with PotatoCMS&quot;</p>
                  <p className="text-xs text-gray-500">by Aria P • 5 hours ago</p>
                </div>
                <div className="text-sm text-gray-500">Published</div>
              </div>

              <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Enterprise upgrade from sarah.m@example.com</p>
                  <p className="text-xs text-gray-500">Enterprise Plan • $99/month • 1 day ago</p>
                </div>
                <div className="text-sm font-semibold text-green-600">+$99</div>
              </div>

              <div className="flex items-center space-x-4 p-3 hover:bg-gray-50 rounded-lg">
                <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Payment failed for lisa.brown@example.com</p>
                  <p className="text-xs text-gray-500">Pro Plan • Retry scheduled • 2 days ago</p>
                </div>
                <div className="text-sm text-red-600">Failed</div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Demo CTA */}
        <div className="mt-12 text-center bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Track Your Success?</h2>
          <p className="text-lg mb-6 opacity-90">
            This is just a preview. Clone the repository to start analyzing your own performance with PotatoCMS.
          </p>
          <div className="space-x-4">
            <Link href="https://github.com/sorcerai/potatocms" target="_blank" rel="noopener noreferrer">
              <Button size="lg" variant="secondary" className="text-lg px-8">
                Clone on GitHub
              </Button>
            </Link>
            <Link href="/admin/demo">
              <Button size="lg" variant="outline" className="text-lg px-8 border-white text-white hover:bg-white hover:text-gray-900">
                Back to Dashboard
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}