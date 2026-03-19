import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { TodaysPlate } from '@/components/trainee/TodaysPlate'
import type { User } from '@/types'

export default async function TraineePlatePage() {
  const supabase = await createClient()
  const { data: { user: authUser } } = await supabase.auth.getUser()
  if (!authUser) redirect('/login')

  const today = new Date().toISOString().split('T')[0]

  // Fetch today's plate items with their menu items and categories
  const { data: plates } = await supabase
    .from('plates')
    .select(`
      *,
      menu_item:menu_items(*, category:categories(*))
    `)
    .eq('trainee_id', authUser.id)
    .eq('date_assigned', today)
    .order('created_at', { ascending: true })

  // Fetch all completions for this trainee
  const { data: completions } = await supabase
    .from('completions')
    .select('*')
    .eq('trainee_id', authUser.id)

  const { data: profile } = await supabase
    .from('users')
    .select('*')
    .eq('id', authUser.id)
    .single()

  return (
    <TodaysPlate
      plates={plates ?? []}
      completions={completions ?? []}
      currentUser={profile as User}
    />
  )
}
