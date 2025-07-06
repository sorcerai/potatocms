import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Plus, ArrowLeft, Edit, Trash2, Eye, Calendar, User } from 'lucide-react'

export default function ContentManagementDemo() {
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
              <h1 className="text-2xl font-bold text-gray-900">Content Management</h1>
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
          <h2 className="text-lg font-semibold text-gray-900 mb-2">📝 Content Management Demo</h2>
          <p className="text-gray-600">
            This is a preview of the PotatoCMS content management system. All content shown is simulated for demonstration purposes.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Articles</CardTitle>
              <Edit className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-gray-500">+5 this week</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Published</CardTitle>
              <Eye className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">67</div>
              <p className="text-xs text-gray-500">75% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Drafts</CardTitle>
              <Calendar className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">22</div>
              <p className="text-xs text-gray-500">25% of total</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Views</CardTitle>
              <User className="h-4 w-4 text-gray-400" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12.5K</div>
              <p className="text-xs text-gray-500">+1.2K this month</p>
            </CardContent>
          </Card>
        </div>

        {/* Actions */}
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold text-gray-900">Recent Articles</h2>
          <Button className="bg-gray-900 hover:bg-gray-800 text-white" disabled>
            <Plus className="mr-2 h-4 w-4" />
            New Article (Demo)
          </Button>
        </div>

        {/* Content Table */}
        <Card>
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="text-left p-4 font-medium text-gray-900">Title</th>
                    <th className="text-left p-4 font-medium text-gray-900">Status</th>
                    <th className="text-left p-4 font-medium text-gray-900">Author</th>
                    <th className="text-left p-4 font-medium text-gray-900">Date</th>
                    <th className="text-left p-4 font-medium text-gray-900">Views</th>
                    <th className="text-left p-4 font-medium text-gray-900">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Getting Started with PotatoCMS</h3>
                        <p className="text-sm text-gray-500">A comprehensive guide to setting up your content management system</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Published
                      </span>
                    </td>
                    <td className="p-4 text-gray-900">Aria P</td>
                    <td className="p-4 text-gray-500">Jan 15, 2025</td>
                    <td className="p-4 text-gray-900">2.3K</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                  
                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Advanced Subscription Strategies</h3>
                        <p className="text-sm text-gray-500">Monetize your content with effective subscription models</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Published
                      </span>
                    </td>
                    <td className="p-4 text-gray-900">Demo Author</td>
                    <td className="p-4 text-gray-500">Jan 12, 2025</td>
                    <td className="p-4 text-gray-900">1.8K</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Building Your Content Calendar</h3>
                        <p className="text-sm text-gray-500">Plan and schedule your content for maximum engagement</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Draft
                      </span>
                    </td>
                    <td className="p-4 text-gray-900">Content Team</td>
                    <td className="p-4 text-gray-500">Jan 10, 2025</td>
                    <td className="p-4 text-gray-900">-</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <h3 className="font-medium text-gray-900">API Integration Guide</h3>
                        <p className="text-sm text-gray-500">Connect external services with PotatoCMS APIs</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                        Published
                      </span>
                    </td>
                    <td className="p-4 text-gray-900">Tech Team</td>
                    <td className="p-4 text-gray-500">Jan 8, 2025</td>
                    <td className="p-4 text-gray-900">945</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>

                  <tr className="hover:bg-gray-50">
                    <td className="p-4">
                      <div>
                        <h3 className="font-medium text-gray-900">Customizing Your Theme</h3>
                        <p className="text-sm text-gray-500">Personalize your PotatoCMS installation with custom themes</p>
                      </div>
                    </td>
                    <td className="p-4">
                      <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-yellow-100 text-yellow-800">
                        Draft
                      </span>
                    </td>
                    <td className="p-4 text-gray-900">Design Team</td>
                    <td className="p-4 text-gray-500">Jan 5, 2025</td>
                    <td className="p-4 text-gray-900">-</td>
                    <td className="p-4">
                      <div className="flex space-x-2">
                        <Button size="sm" variant="ghost" disabled>
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Edit className="h-4 w-4" />
                        </Button>
                        <Button size="sm" variant="ghost" disabled>
                          <Trash2 className="h-4 w-4" />
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
          <h2 className="text-2xl font-bold mb-4">Ready to Manage Your Content?</h2>
          <p className="text-lg mb-6 opacity-90">
            This is just a preview. Clone the repository to start managing your own content with PotatoCMS.
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