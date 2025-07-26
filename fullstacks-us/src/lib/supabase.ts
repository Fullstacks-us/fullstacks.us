import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Server-side client with service role key for admin operations
export const createServerClient = () => {
  const supabaseUrl = process.env.SUPABASE_URL!
  const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY!
  
  return createClient(supabaseUrl, supabaseServiceKey)
}

// Types for our database tables
export interface Author {
  id: string
  name: string
  bio?: string
  avatar_url?: string
  email?: string
  created_at: string
  updated_at: string
}

export interface Post {
  id: string
  title: string
  slug: string
  content?: string
  excerpt?: string
  featured_image?: string
  author_id?: string
  status: 'draft' | 'published' | 'archived'
  published_at?: string
  created_at: string
  updated_at: string
  author?: Author
}

export interface Category {
  id: string
  name: string
  slug: string
  description?: string
  created_at: string
}

export interface Tag {
  id: string
  name: string
  slug: string
  created_at: string
} 