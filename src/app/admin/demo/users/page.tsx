import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Users, UserPlus, Mail, Crown, Shield } from 'lucide-react'

export default function UserManagementDemo() {
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
              <h1 className="text-2xl font-bold text-gray-900">User Management</h1>
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
          <h2 className="text-lg font-semibold text-gray-900 mb-2">👥 User Management Demo</h2>
          <p className="text-gray-600">
            This is a preview of the PotatoCMS user management system. All user data shown is simulated for demonstration purposes.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
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
              <CardTitle className="text-sm font-medium">Active Subscribers</CardTitle>
              <Crown className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">456</div>
              <p className="text-xs text-gray-500">37% of total users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Free Users</CardTitle>
              <Shield className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">778</div>
              <p className="text-xs text-gray-500">63% of total users</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">New This Month</CardTitle>
              <UserPlus className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">87</div>
              <p className="text-xs text-gray-500">+23% growth rate</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">User Directory</h2>
          <div className="flex space-x-2">
            <Button variant="outline" disabled>
              <Mail className="mr-2 h-4 w-4" />
              Send Newsletter (Demo)
            </Button>
            <Button className="bg-gray-900 hover:bg-gray-800 text-white" disabled>
              <UserPlus className="mr-2 h-4 w-4" />
              Invite User (Demo)
            </Button>
          </div>
        </div>

        {/* Users Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-900">User</th>
                    <th className="text-left p-4 font-medium text-gray-900">Subscription</th>
                    <th className="text-left p-4 font-medium text-gray-900">Status</th>
                    <th className="text-left p-4 font-medium text-gray-900">Joined</th>
                    <th className="text-left p-4 font-medium text-gray-900">Last Active</th>
                    <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          JD
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">John Doe</h3>
                          <p className="text-sm text-gray-500">john.doe@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pro Plan
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">Dec 15, 2024</td>
                    <td className="p-4 text-gray-500">2 hours ago</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          View
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          SM
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Sarah Miller</h3>
                          <p className="text-sm text-gray-500">sarah.m@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-purple-100 text-purple-800">
                        Enterprise
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">Nov 28, 2024</td>
                    <td className="p-4 text-gray-500">1 day ago</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          View
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          MW
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Mike Wilson</h3>
                          <p className="text-sm text-gray-500">mike.wilson@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Free
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">Jan 10, 2025</td>
                    <td className="p-4 text-gray-500">5 minutes ago</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          View
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          LB
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">Lisa Brown</h3>
                          <p className="text-sm text-gray-500">lisa.brown@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Pro Plan
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-red-100 text-red-800">
                        Expired
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">Oct 5, 2024</td>
                    <td className="p-4 text-gray-500">3 weeks ago</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          View
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-indigo-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                          DJ
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">David Johnson</h3>
                          <p className="text-sm text-gray-500">d.johnson@example.com</p>
                        </div>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-gray-100 text-gray-800">
                        Free
                      </span>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Active
                      </span>
                    </td>
                    <td className="p-4 text-gray-500">Jan 8, 2025</td>
                    <td className="p-4 text-gray-500">1 hour ago</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          View
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          Edit
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Demo CTA */}
        <div className="mt-12 text-center bg-gray-900 text-white rounded-xl p-8">
          <h2 className="text-2xl font-bold mb-4">Ready to Manage Your Community?</h2>
          <p className="text-lg mb-6 opacity-90">
            This is just a preview. Clone the repository to start managing your own user base with PotatoCMS.
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