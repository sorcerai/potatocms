import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Environment variable validation with build-time safety
const getEnvironmentConfig = () => {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  // During build time or when environment variables are missing,
  // provide placeholder values that allow module loading without errors
  if (!supabaseUrl || !supabaseAnonKey) {
    // Return placeholder configuration for build-time compatibility
    return {
      url: 'https://placeholder.supabase.co',
      anonKey: 'placeholder-anon-key',
      isConfigured: false,
      error: 'Supabase environment variables are not configured. Please set NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY.'
    }
  }

  return {
    url: supabaseUrl,
    anonKey: supabaseAnonKey,
    isConfigured: true,
    error: null
  }
}

// Lazy client initialization with validation
let _supabaseClient: SupabaseClient | null = null

export const getSupabaseClient = (): SupabaseClient => {
  // Return existing client if available
  if (_supabaseClient) {
    return _supabaseClient
  }

  const config = getEnvironmentConfig()

  // Store configuration error for user-friendly messaging
  if (!config.isConfigured) {
    console.warn('⚠️ Supabase client initialized with placeholder values for build compatibility')
  }

  // Create client with either real or placeholder values
  _supabaseClient = createClient(config.url, config.anonKey)
  
  return _supabaseClient
}

// Check if Supabase is properly configured for runtime operations
export const isSupabaseConfigured = (): boolean => {
  const config = getEnvironmentConfig()
  return config.isConfigured
}

// Get configuration error message for user display
export const getSupabaseConfigError = (): string | null => {
  const config = getEnvironmentConfig()
  return config.error
}

// Backward compatibility export - now uses lazy initialization
export const supabase = getSupabaseClient()

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