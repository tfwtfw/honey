import { createClient } from '@supabase/supabase-js'

export const supabase = createClient('https://ehnvkfofcztyqdbhfzlk.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVobnZrZm9mY3p0eXFkYmhmemxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Nzc0ODQ2NTgsImV4cCI6MTk5MzA2MDY1OH0.5DgcJtyBTk2MPJHwyZdz-w0y7XKobcARa7JPc7Jw63U')