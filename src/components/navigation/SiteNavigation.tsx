'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { usePathname } from 'next/navigation'
import { cn } from '@/lib/utils'

export interface NavigationItem {
  href: string
  label: string
  variant?: 'ghost' | 'outline' | 'default'
  className?: string
}

export interface SiteNavigationProps {
  items: NavigationItem[]
  logo?: {
    text: string
    icon?: string
    href?: string
  }
  className?: string
  sticky?: boolean
}

export function SiteNavigation({ 
  items, 
  logo = { text: 'PotatoCMS', icon: '🥔', href: '/' },
  className,
  sticky = true 
}: SiteNavigationProps) {
  const pathname = usePathname()

  return (
    <header 
      className={cn(
        "container mx-auto px-4 py-6 flex justify-between items-center bg-white/80 backdrop-blur-sm border-b border-gray-200 shadow-sm",
        sticky && "sticky top-0 z-50",
        className
      )}
      role="banner"
    >
      {/* Logo */}
      <Link href={logo.href || '/'} className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
        {logo.icon && <span className="text-2xl">{logo.icon}</span>}
        <h1 className="text-2xl font-bold text-gray-900">{logo.text}</h1>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center space-x-4" role="navigation" aria-label="Main navigation">
        {items.map((item) => {
          const isActive = pathname === item.href
          return (
            <Link key={item.href} href={item.href}>
              <Button 
                variant={item.variant || 'ghost'} 
                className={cn(
                  isActive && "bg-gray-100",
                  item.variant === 'ghost' && "text-gray-600 hover:bg-gray-100",
                  item.variant === 'outline' && "border-gray-300 text-gray-600 hover:bg-gray-50",
                  item.variant === 'default' && "bg-gray-900 hover:bg-gray-800 text-white",
                  item.className
                )}
                aria-current={isActive ? 'page' : undefined}
              >
                {item.label}
              </Button>
            </Link>
          )
        })}
      </nav>
    </header>
  )
}

// Predefined navigation configurations
export const mainNavigationItems: NavigationItem[] = [
  { href: '/demo', label: 'Demo', variant: 'ghost' },
  { href: '/login', label: 'Sign In', variant: 'outline' },
  { href: '/admin/demo', label: 'Admin Demo', variant: 'default' }
]

export const demoNavigationItems: NavigationItem[] = [
  { href: '/', label: 'Home', variant: 'ghost' },
  { href: '/login', label: 'Sign In', variant: 'outline' },
  { href: '/admin/demo', label: 'Admin Demo', variant: 'default' }
]

export const adminNavigationItems: NavigationItem[] = [
  { href: '/', label: 'Back to Home', variant: 'ghost' },
  { href: '/login', label: 'Sign In for Full Access', variant: 'outline' }
]