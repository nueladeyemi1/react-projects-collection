import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = "https://dclaevazetcjjkrzczpc.supabase.co";

export const supabaseUrl = 'https://sbrxjiyymyvkirnsbgob.supabase.co'
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNicnhqaXl5bXl2a2lybnNiZ29iIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTI3ODQ2NjUsImV4cCI6MjAwODM2MDY2NX0.QBV9NHhYNcDp3UiVz9ZfVfR7hifcFfwaD3tRdnbNrCw'
// const supabaseKey =
//   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRjbGFldmF6ZXRjamprcnpjenBjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODMyOTIzNDQsImV4cCI6MTk5ODg2ODM0NH0.LGg0M-taoHgKtxCzr9owrb09epnPaO_Yfz6xVE54sIY";
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase
