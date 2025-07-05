'use client'

import { useState, useEffect } from 'react'
import { getSupabaseClient, isSupabaseConfigured, getSupabaseConfigError } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

export function LoginForm() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [supabaseConfigured, setSupabaseConfigured] = useState(true)

  useEffect(() => {
    // Check Supabase configuration on component mount
    const configured = isSupabaseConfigured()
    setSupabaseConfigured(configured)
    
    if (!configured) {
      const error = getSupabaseConfigError()
      setMessage(error || 'Supabase is not properly configured')
    }
  }, [])

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Check if Supabase is properly configured before attempting authentication
    if (!supabaseConfigured) {
      setMessage('Authentication is not available. Please check your Supabase configuration.')
      return
    }

    setLoading(true)
    setMessage('')

    try {
      const supabase = getSupabaseClient()
      
      if (isSignUp) {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        })
        if (error) throw error
        setMessage('Check your email for the confirmation link!')
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email,
          password,
        })
        if (error) throw error
      }
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleGoogleAuth = async () => {
    // Check if Supabase is properly configured before attempting OAuth
    if (!supabaseConfigured) {
      setMessage('OAuth authentication is not available. Please check your Supabase configuration.')
      return
    }

    try {
      const supabase = getSupabaseClient()
      const { error } = await supabase.auth.signInWithOAuth({
        provider: 'google',
      })
      if (error) throw error
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : 'An error occurred')
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto">
      <CardHeader>
        <CardTitle>Welcome to PotatoCMS 🥔</CardTitle>
        <CardDescription>
          {isSignUp ? 'Create your account' : 'Sign in to your account'}
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <form onSubmit={handleAuth} className="space-y-4">
          <Input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <Button type="submit" className="w-full" disabled={loading || !supabaseConfigured}>
            {loading ? 'Loading...' : isSignUp ? 'Sign Up' : 'Sign In'}
          </Button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">Or continue with</span>
          </div>
        </div>

        <Button variant="outline" onClick={handleGoogleAuth} className="w-full" disabled={!supabaseConfigured}>
          Continue with Google
        </Button>

        <Button
          variant="link"
          onClick={() => setIsSignUp(!isSignUp)}
          className="w-full"
        >
          {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up"}
        </Button>

        {message && (
          <Alert>
            <AlertDescription>{message}</AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}