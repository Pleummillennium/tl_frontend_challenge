# Purchase Request Detail Page

Frontend homework challenge — หน้าแสดงรายละเอียดใบขอซื้อ (Purchase Request) พร้อม Approval Flow Timeline

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Run tests
npm test

# Build for production
npm run build
```

## Tech Stack

| Technology | Purpose |
|---|---|
| **React 19** + **TypeScript** | UI framework with type safety |
| **Vite 7** | Build tool — fast HMR and optimized production builds |
| **Tailwind CSS 4** | Utility-first CSS framework (`@tailwindcss/vite` plugin) |
| **Lucide React** | Lightweight SVG icon library |
| **date-fns** | Date formatting utility (lightweight, tree-shakeable) |
| **motion** | Animation library for React Bits components (BlurText, GradientText) |
| **Vitest** + **React Testing Library** | Unit and integration testing with jsdom environment |

## Features

- **Two page states** — Toggle between `NEED_APPROVAL` (interactive) and `APPROVED` (read-only)
- **Approval Flow Timeline** — Visual timeline with status icons, connecting lines, and user info
- **Conditional Action Buttons** — Approve/Reject buttons shown based on permissions and status
- **Responsive Layout** — Two-column grid on desktop, single column on mobile
- **Animated Text** — BlurText title animation, GradientText in navbar (via React Bits)

## Project Structure

```
src/
├── __tests__/              # Integration tests (App)
├── components/
│   ├── approval/           # ApprovalFlow, ApprovalStep, ApprovalResult
│   │   └── __tests__/
│   ├── layout/             # Navbar, PageHeader
│   ├── reactbits/          # BlurText, GradientText (copy-paste components)
│   ├── request/            # RequestDetails, Attachments, ActionButtons
│   │   └── __tests__/
│   └── ui/                 # Badge, Tag, Avatar
│       └── __tests__/
├── data/                   # Mock JSON data (need-approval, approved)
├── types/                  # TypeScript interfaces
├── utils/                  # formatDate, getInitials, getStatusColor
│   └── __tests__/
└── test/                   # Test setup (jest-dom)
```

## Testing

44 tests across 6 test files:

- **Utility tests** — `formatDate`, `getInitials`, `getStatusColor` (11 tests)
- **Component tests** — Badge, ActionButtons, ApprovalStep, RequestDetails (27 tests)
- **Integration test** — App state toggle between NEED_APPROVAL and APPROVED (6 tests)

## Assumptions

- Static mock data (no API calls) — data is loaded from JSON files
- Action buttons log to console only (no actual API integration)
- Attachment files are mock/placeholder data
- Two states only: `NEED_APPROVAL` and `APPROVED` (toggled via tabs)

## Future Improvements

- Connect to real API endpoints for data fetching
- Add actual approve/reject functionality with confirmation dialogs
- Add file upload and download for attachments
- Add routing (React Router) for multi-page navigation
- Add more animation effects (card fade-in, page transitions)
- Add `prefers-reduced-motion` support for accessibility
- Add E2E tests with Playwright or Cypress
