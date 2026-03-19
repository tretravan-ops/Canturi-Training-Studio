import { CATEGORY_COLOURS, CATEGORY_BG_COLOURS } from '@/types'

interface Props {
  categoryName: string
  icon?: string
  size?: 'sm' | 'md'
}

export function CategoryBadge({ categoryName, icon, size = 'sm' }: Props) {
  const colour = CATEGORY_COLOURS[categoryName] ?? '#C9A96E'
  const bg = CATEGORY_BG_COLOURS[categoryName] ?? '#FAF3E8'

  return (
    <span
      className={`inline-flex items-center gap-1 font-medium rounded-full ${size === 'sm' ? 'text-xs px-2.5 py-1' : 'text-sm px-3 py-1.5'}`}
      style={{ color: colour, backgroundColor: bg }}
    >
      {icon && <span>{icon}</span>}
      {categoryName}
    </span>
  )
}
