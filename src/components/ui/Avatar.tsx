interface AvatarProps {
  name: string
  size?: 'sm' | 'md'
}

function getInitials(name: string): string {
  return name
    .split(' ')
    .map((word) => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2)
}

export default function Avatar({ name, size = 'md' }: AvatarProps) {
  const sizeClasses = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm'

  return (
    <div className={`${sizeClasses} rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center shrink-0`}>
      {getInitials(name)}
    </div>
  )
}
