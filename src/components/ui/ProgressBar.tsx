interface Props {
  percent: number
  colour?: string
  label?: string
  showPercent?: boolean
  size?: 'sm' | 'md'
}

export function ProgressBar({ percent, colour = '#C9A96E', label, showPercent = true, size = 'md' }: Props) {
  const clamped = Math.min(100, Math.max(0, Math.round(percent)))

  return (
    <div className="w-full">
      {(label || showPercent) && (
        <div className="flex justify-between items-center mb-1.5">
          {label && <span className="text-sm text-charcoal/70">{label}</span>}
          {showPercent && <span className="text-sm font-medium text-charcoal" style={{ color: colour }}>{clamped}%</span>}
        </div>
      )}
      <div className={`w-full bg-charcoal/8 rounded-full overflow-hidden ${size === 'sm' ? 'h-1.5' : 'h-2'}`}>
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${clamped}%`, backgroundColor: colour }}
        />
      </div>
    </div>
  )
}
