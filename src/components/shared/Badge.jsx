export default function Badge({ children, tone = 'blue' }) {
  const tones = {
    blue: 'bg-blueprint/10 text-blueprint',
    green: 'bg-emerald-50 text-emerald-700',
    amber: 'bg-amber-50 text-amber-700',
    gray: 'bg-fog text-steel'
  }
  return (
    <span
      className={`inline-flex items-center rounded-full px-2.5 py-0.5 font-mono text-xs font-medium ${tones[tone] || tones.blue}`}
    >
      {children}
    </span>
  )
}