import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Types for our database
export interface User {
  id: string
  email: string
  created_at: string
  subscription_status?: 'active' | 'inactive' | 'trialing' | 'canceled'
  subscription_tier?: 'free' | 'basic' | 'premium' | 'enterprise'
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
  access_level: 'free' | 'basic' | 'premium' | 'enterprise'
  created_at: string
  updated_at: string
}

export interface Subscription {
  id: string
  user_id: string
  stripe_subscription_id: string
  status: 'active' | 'inactive' | 'trialing' | 'canceled'
  tier: 'free' | 'basic' | 'premium' | 'enterprise'
  current_period_start: string
  current_period_end: string
  created_at: string
  updated_at: string
}