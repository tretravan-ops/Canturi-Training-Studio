'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'

const tabs = [
  { href: '/manager', label: 'Build Plate', icon: '◈' },
  { href: '/manager/sign-off', label: 'Sign Off', icon: '✦' },
  { href: '/manager/trainees', label: 'Trainees', icon: '◎' },
]

export function ManagerNav() {
  const pathname = usePathname()

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-black/5 z-30">
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
