import Navbar from './components/layout/Navbar'
import PageHeader from './components/layout/PageHeader'
import RequestDetails from './components/request/RequestDetails'
import Attachments from './components/request/Attachments'
import ActionButtons from './components/request/ActionButtons'
import ApprovalFlow from './components/approval/ApprovalFlow'
import requestData from './data/frontend-homework-challenge-mock.json'
import approvedData from './data/frontend-homework-challenge-mock-approved.json'
import type { RequestData } from './types/request'

function App() {
  const isApproved = new URLSearchParams(window.location.search).get('state') === 'approved'
  const data = (isApproved ? approvedData : requestData) as RequestData

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />

      <main className="max-w-[1200px] mx-auto px-4 py-6">
        <PageHeader data={data} />

        {/* Two-column layout: Left + Right (Right จะใส่ Phase 5) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <RequestDetails title={data.request.title} details={data.details} />
            <Attachments />
            <ActionButtons permissions={data.permissions} status={data.request.status} />
          </div>

          {/* Right Column */}
          <div>
            <ApprovalFlow
              approvalFlow={data.approvalFlow}
              requestStatus={data.request.status}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
