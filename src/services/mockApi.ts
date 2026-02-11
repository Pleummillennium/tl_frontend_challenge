import type { RequestData } from '../types/request'

const MOCK_DELAY = 1000

function delay(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

export async function approveRequest(data: RequestData): Promise<RequestData> {
  await delay(MOCK_DELAY)

  const now = new Date().toISOString()
  const lastStep = data.approvalFlow.steps[data.approvalFlow.steps.length - 1]

  return {
    ...data,
    request: {
      ...data.request,
      status: 'APPROVED',
      statusLabel: 'Approved',
    },
    approvalFlow: {
      currentStepId: lastStep.id,
      steps: data.approvalFlow.steps.map((step) => ({
        ...step,
        actedAt: step.actedAt ?? now,
      })),
    },
    permissions: {
      ...data.permissions,
      canApprove: false,
      canReject: false,
    },
  }
}

export async function rejectRequest(data: RequestData): Promise<RequestData> {
  await delay(MOCK_DELAY)

  const now = new Date().toISOString()

  return {
    ...data,
    request: {
      ...data.request,
      status: 'REJECTED',
      statusLabel: 'Rejected',
    },
    approvalFlow: {
      ...data.approvalFlow,
      steps: data.approvalFlow.steps.map((step) => {
        if (step.id === data.approvalFlow.currentStepId) {
          return { ...step, status: 'REJECTED', statusLabel: 'Rejected', actedAt: now }
        }
        return step
      }),
    },
    permissions: {
      ...data.permissions,
      canApprove: false,
      canReject: false,
    },
  }
}
