import type { RequestStatus } from '../../types/request'

const statusStyles: Record<string, string> = {
  NEED_APPROVAL: 'border-yellow-500 text-yellow-600 bg-yellow-50',
  APPROVED: 'border-green-500 text-green-600 bg-green-50',
  SUBMITTED: 'border-green-500 text-green-600 bg-green-50',
  UNDER_REVIEW: 'border-blue-400 text-blue-500 bg-blue-50',
  REJECTED: 'border-red-500 text-red-600 bg-red-50',
}

const fallbackStyle = 'border-gray-400 text-gray-500 bg-gray-50'

interface BadgeProps {
  status: RequestStatus | string
  label: string
}

export default function Badge({ status, label }: BadgeProps) {
  const colorClasses = statusStyles[status] ?? fallbackStyle

  return (
    <span className={`inline-block rounded-full px-3 py-1 text-xs font-medium border ${colorClasses}`}>
      {label}
    </span>
  )
}
