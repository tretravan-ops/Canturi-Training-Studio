'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/trainee', label: "Today's Plate", icon: '◈' },
  { href: '/trainee/menu', label: 'Menu', icon: '✦' },
  { href: '/trainee/progress', label: 'Progress', icon: '◎' },
]

export function TraineeNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/5 safe-area-bottom z-30">
      <div className="flex">
        {tabs.map(tab => {
          const active = pathname === tab.href
          return (
            <Link
              key={tab.href}
              href={tab.href}
              className={`flex-1 flex flex-col items-center py-3 gap-1 transition-colors ${
                active ? 'text-gold' : 'text-charcoal/30 hover:text-charcoal/60'
              }`}
            >
              <span className="text-lg leading-none">{tab.icon}</span>
              <span className="text-[10px] tracking-wider uppercase font-medium">{tab.label}</span>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
