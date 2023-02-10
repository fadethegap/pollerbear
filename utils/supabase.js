import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_KEY
)

export const getServiceSupabase = () =>
  createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL,
    process.env.SUPABASE_SERVICE_KEY
  )

export const getSignedUrl = async () => {
  /* This is not working. Just a placeholder for the function call.*/
  const { signedURL, error } = await supabase.storage
    .from('images')
    .createSignedUrl('public/day-7.gif', 60)
}

export const getPublicUrlForDisplay = async () => {
  const { publicURL, error } = supabase.storage
    .from('videos')
    .getPublicUrl('public/Day 1.mp4')
}
