import { CheckCircle2, XCircle } from 'lucide-react'
import type { RequestStatus } from '../../types/request'

interface ApprovalResultProps {
  status: RequestStatus
}

export default function ApprovalResult({ status }: ApprovalResultProps) {
  if (status === 'APPROVED') {
    return (
      <div className="flex items-center gap-2 pt-2">
        <CheckCircle2 className="w-7 h-7 text-green-500" />
        <span className="text-base font-semibold text-green-600">Approved</span>
      </div>
    )
  }

  if (status === 'REJECTED') {
    return (
      <div className="flex items-center gap-2 pt-2">
        <XCircle className="w-7 h-7 text-red-500" />
        <span className="text-base font-semibold text-red-600">Rejected</span>
      </div>
    )
  }

  return null
}
