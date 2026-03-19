import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import { TraineeProgress } from '@/components/trainee/TraineeProgress'

export default async function TraineeProgressPage() {
  const supabase = await createClient()
  const { data: { user: authUser } } = await supabase.auth.getUser()
  if (!authUser) redirect('/login')

  const [{ data: categories }, { data: menuItems }, { data: completions }] = await Promise.all([
    supabase.from('categories').select('*').order('sort_order'),
    supabase.from('menu_items').select('*, category:categories(*)'),
    supabase.from('completions').select('*').eq('trainee_id', authUser.id),
  ])

  return (
    <TraineeProgress
      categories={categories ?? []}
      menuItems={menuItems ?? []}
      completions={completions ?? []}
    />
  )
}
