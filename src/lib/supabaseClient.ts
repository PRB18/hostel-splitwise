import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://yurmdqsbmbbqjxkopkwc.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl1cm1kcXNibWJicWp4a29wa3djIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjQzMTY3OTksImV4cCI6MjA3OTg5Mjc5OX0.OBJkpFUKWYlyeqPRf96cBc-cNMX8_-uCTSPcK2bT8eU'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)