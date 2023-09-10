import { createClient } from '@supabase/supabase-js'

export const supabaseUrl = 'https://sbrxjiyymyvkirnsbgob.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicnhqaXl5bXl2a2lybnNiZ29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3ODQ2NjUsImV4cCI6MjAwODM2MDY2NX0.QBV9NHhYNcDp3UiVz9ZfVfR7hifcFfwaD3tRdnbNrCw'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
