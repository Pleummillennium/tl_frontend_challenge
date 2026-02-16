import type { RequestData } from '../types/request'

const MOCK_DELAY = 1000

// จำลอง server-side logic: client ส่งแค่ data กับ action → server ปั้น response กลับมา
function mockFetch(
  url: string,
  data: RequestData,
): Promise<Response> {
  return new Promise((resolve) =>
    setTimeout(() => {
      const now = new Date().toISOString()
      let result: RequestData

      if (url === '/api/requests/approve') {
        const steps = data.approvalFlow.steps
        const curIdx = steps.findIndex((s) => s.id === data.approvalFlow.currentStepId)
        const isLast = curIdx === steps.length - 1

        const updatedSteps = steps.map((step, i) => {
          if (i === curIdx) {
            return { ...step, status: 'APPROVED' as const, statusLabel: 'Approved', actedAt: now }
          }
          if (i === curIdx + 1) {
            return { ...step, status: 'NEED_APPROVAL' as const, statusLabel: 'Need approval' }
          }
          return step
        })

        result = {
          ...data,
          request: {
            ...data.request,
            status: isLast ? 'APPROVED' : data.request.status,
            statusLabel: isLast ? 'Approved' : data.request.statusLabel,
          },
          approvalFlow: {
            currentStepId: isLast ? steps[curIdx].id : steps[curIdx + 1].id,
            steps: updatedSteps,
          },
          permissions: { ...data.permissions, canApprove: !isLast, canReject: !isLast },
        }
      } else {
        result = {
          ...data,
          request: { ...data.request, status: 'REJECTED', statusLabel: 'Rejected' },
          approvalFlow: {
            ...data.approvalFlow,
            steps: data.approvalFlow.steps.map((step) => {
              if (step.id === data.approvalFlow.currentStepId) {
                return { ...step, status: 'REJECTED', statusLabel: 'Rejected', actedAt: now }
              }
              return step
            }),
          },
          permissions: { ...data.permissions, canApprove: false, canReject: false },
        }
      }

      resolve(new Response(JSON.stringify(result), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      }))
    }, MOCK_DELAY)
  )
}

export async function approveRequest(data: RequestData): Promise<RequestData> {
  const res = await mockFetch('/api/requests/approve', data)
  return res.json()
}

export async function rejectRequest(data: RequestData): Promise<RequestData> {
  const res = await mockFetch('/api/requests/reject', data)
  return res.json()
}
