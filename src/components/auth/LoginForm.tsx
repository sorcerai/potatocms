'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { getSupabaseClient, isSupabaseConfigured, getSupabaseConfigError } from '@/lib/supabase'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Alert, AlertDescription } from '@/components/ui/alert'

// Form validation schema
const authSchema = z.object({
  email: z.string()
    .min(1, 'Email is required')
    .email('Please enter a valid email address'),
  password: z.string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/[A-Z]/, 'Password must contain at least one uppercase letter')
    .regex(/[a-z]/, 'Password must contain at least one lowercase letter')
    .regex(/[0-9]/, 'Password must contain at least one number')
})

type AuthFormData = z.infer<typeof authSchema>

export function LoginForm() {
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')
  const [isSignUp, setIsSignUp] = useState(false)
  const [supabaseConfigured, setSupabaseConfigured] = useState(true)
  
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<AuthFormData>({
    resolver: zodResolver(authSchema),
    mode: 'onBlur'
  })

  useEffect(() => {
    // Check Supabase configuration on component mount
    const configured = isSupabaseConfigured()
    setSupabaseConfigured(configured)
    
    if (!configured) {
      const error = getSupabaseConfigError()
      setMessage(error || 'Supabase is not properly configured')
    }
  }, [])

  const handleAuth = async (data: AuthFormData) => {
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
          email: data.email,
          password: data.password,
        })
        if (error) throw error
        setMessage('Check your email for the confirmation link!')
        reset()
      } else {
        const { error } = await supabase.auth.signInWithPassword({
          email: data.email,
          password: data.password,
        })
        if (error) throw error
      }
    } catch (error: unknown) {
      setMessage(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !loading) {
      handleSubmit(handleAuth)()
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
        <form onSubmit={handleSubmit(handleAuth)} className="space-y-4" onKeyDown={handleKeyDown}>
          <div className="space-y-2">
            <Input
              type="email"
              placeholder="Email"
              {...register('email')}
              aria-invalid={errors.email ? 'true' : 'false'}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-600" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <Input
              type="password"
              placeholder="Password"
              {...register('password')}
              aria-invalid={errors.password ? 'true' : 'false'}
              className={errors.password ? 'border-red-500' : ''}
            />
            {errors.password && (
              <p className="text-sm text-red-600" role="alert">
                {errors.password.message}
              </p>
            )}
          </div>
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