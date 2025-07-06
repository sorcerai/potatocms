// Core application types and interfaces

export interface User {
  id: string
  email: string
  created_at: string
  subscription_status?: 'active' | 'inactive' | 'trialing' | 'canceled'
  subscription_tier?: 'free' | 'basic' | 'premium' | 'enterprise'
  profile?: UserProfile
}

export interface UserProfile {
  first_name?: string
  last_name?: string
  avatar_url?: string
  bio?: string
  website?: string
}

export interface Content {
  id: string
  title: string
  slug: string
  content: string
  excerpt?: string
  author_id: string
  published_at?: string
  is_published: boolean
  access_level: AccessLevel
  created_at: string
  updated_at: string
  tags?: string[]
  featured_image?: string
  reading_time?: number
}

export interface Subscription {
  id: string
  user_id: string
  stripe_subscription_id: string
  status: SubscriptionStatus
  tier: SubscriptionTier
  current_period_start: string
  current_period_end: string
  created_at: string
  updated_at: string
  price_id?: string
  cancel_at_period_end?: boolean
}

export interface SubscriptionPlan {
  id: string
  name: string
  description: string
  price: number
  interval: 'month' | 'year'
  tier: SubscriptionTier
  features: string[]
  stripe_price_id: string
  is_popular?: boolean
  trial_days?: number
}

// Content access levels
export type AccessLevel = 'free' | 'basic' | 'premium' | 'enterprise'

// Subscription statuses
export type SubscriptionStatus = 'active' | 'inactive' | 'trialing' | 'canceled' | 'past_due' | 'unpaid'

// Subscription tiers
export type SubscriptionTier = 'free' | 'basic' | 'premium' | 'enterprise'

// API Response types
export interface ApiResponse<T = unknown> {
  data?: T
  error?: string
  message?: string
  success: boolean
}

export interface PaginatedResponse<T = unknown> extends ApiResponse<T[]> {
  pagination: {
    page: number
    limit: number
    total: number
    pages: number
  }
}

// Form types
export interface ContactForm {
  name: string
  email: string
  subject: string
  message: string
}

export interface AuthForm {
  email: string
  password: string
  confirmPassword?: string
  firstName?: string
  lastName?: string
}

// Component prop types
export interface BaseComponentProps {
  className?: string
  children?: React.ReactNode
}

export interface LoadingState {
  isLoading: boolean
  error?: string | null
}

// Navigation types
export interface NavigationItem {
  href: string
  label: string
  icon?: React.ComponentType<unknown>
  variant?: 'ghost' | 'outline' | 'default'
  className?: string
  external?: boolean
}

// Analytics types
export interface AnalyticsData {
  page_views: number
  unique_visitors: number
  session_duration: number
  bounce_rate: number
  conversion_rate: number
  revenue: number
  subscribers: number
  period: {
    start: string
    end: string
  }
}

export interface ContentAnalytics {
  content_id: string
  views: number
  engagement_rate: number
  average_read_time: number
  conversion_count: number
  revenue_attributed: number
  last_updated: string
}

// Error types
export interface AppError extends Error {
  code?: string
  status?: number
  details?: unknown
}

export interface ValidationError {
  field: string
  message: string
  code?: string
}

// Settings types
export interface SiteSettings {
  site_name: string
  site_description: string
  site_url: string
  logo_url?: string
  favicon_url?: string
  primary_color: string
  secondary_color: string
  analytics_id?: string
  social_links: {
    twitter?: string
    github?: string
    linkedin?: string
    discord?: string
  }
}

export interface EmailSettings {
  from_name: string
  from_email: string
  reply_to?: string
  smtp_host?: string
  smtp_port?: number
  smtp_secure?: boolean
  email_provider: 'smtp' | 'sendgrid' | 'mailgun' | 'resend'
}

// Database types (matching Supabase schema)
export interface Database {
  public: {
    Tables: {
      users: {
        Row: User
        Insert: Omit<User, 'id' | 'created_at'>
        Update: Partial<Omit<User, 'id' | 'created_at'>>
      }
      content: {
        Row: Content
        Insert: Omit<Content, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Content, 'id' | 'created_at'>>
      }
      subscriptions: {
        Row: Subscription
        Insert: Omit<Subscription, 'id' | 'created_at' | 'updated_at'>
        Update: Partial<Omit<Subscription, 'id' | 'created_at'>>
      }
    }
  }
}

// Hook return types
export interface UseAuthReturn {
  user: User | null
  loading: boolean
  error: string | null
  signIn: (email: string, password: string) => Promise<void>
  signUp: (email: string, password: string) => Promise<void>
  signOut: () => Promise<void>
  resetPassword: (email: string) => Promise<void>
}

export interface UseContentReturn {
  content: Content[]
  loading: boolean
  error: string | null
  fetchContent: (filters?: unknown) => Promise<void>
  createContent: (data: Partial<Content>) => Promise<Content>
  updateContent: (id: string, data: Partial<Content>) => Promise<Content>
  deleteContent: (id: string) => Promise<void>
}

// Component state types
export interface FormState<T = unknown> {
  data: T
  errors: Record<string, string>
  isSubmitting: boolean
  isValid: boolean
  touched: Record<string, boolean>
}

export interface ModalState {
  isOpen: boolean
  title?: string
  content?: React.ReactNode
  size?: 'sm' | 'md' | 'lg' | 'xl'
  onClose?: () => void
}

// Utility types
export type OptionalExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>
export type RequiredOnly<T, K extends keyof T> = Pick<T, K> & Partial<Omit<T, K>>
export type DeepPartial<T> = {
  [P in keyof T]?: T[P] extends object ? DeepPartial<T[P]> : T[P]
}