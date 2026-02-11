import { getInitials } from '../../utils/format'

interface AvatarProps {
  name: string
  size?: 'sm' | 'md'
}

export default function Avatar({ name, size = 'md' }: AvatarProps) {
  const sizeClasses = size === 'sm' ? 'w-8 h-8 text-xs' : 'w-10 h-10 text-sm'

  return (
    <div className={`${sizeClasses} rounded-full bg-blue-500 text-white font-semibold flex items-center justify-center shrink-0`}>
      {getInitials(name)}
    </div>
  )
}
