# Minerva - AI Transaction Review Dashboard

## Design System Overview

Minerva is a premium SaaS dashboard for professional accountants to review AI-generated transaction categorizations. The design prioritizes clarity, professionalism, and trust through a sophisticated grayscale color system and enterprise-grade interface.

## Design Philosophy

### Core Principles
- **Calm & Professional**: Minimal animations, clean layouts, enterprise aesthetic
- **Information Density**: Maximum readability with generous whitespace
- **Productivity-Focused**: Every element serves a purpose
- **Trust & Transparency**: Clear data visualization and logical hierarchy

### Design Inspiration
- Sim.ai
- Linear
- Vercel Dashboard
- Stripe Dashboard

## Color System

The design uses a strict monochrome palette with a single accent color for maximum professionalism.

```css
--background: #f5f5f4       /* Light beige background */
--surface: #ffffff          /* White surfaces */
--surface-secondary: #fafaf8 /* Subtle secondary surface */
--border: #e7e5e4          /* Thin, subtle borders */
--text-primary: #1c1917    /* Near-black text */
--text-secondary: #78716c  /* Medium gray text */
--text-muted: #a8a29e      /* Light gray text */
--accent: #d4a574          /* Warm tan accent */
```

### Color Usage Rules
- **Primary Text**: Page titles, descriptions, important data
- **Secondary Text**: Labels, metadata, helper text
- **Muted Text**: Placeholders, disabled states, breadcrumbs
- **Accent**: Links, selected states, confidence indicators, status badges
- **Surfaces**: Cards, modals, panels (always white or off-white)
- **Borders**: Always use `--border` for consistency

## Typography

**Font**: Inter (via Google Fonts)

### Size Hierarchy
- **Page Title**: 3xl (30px) - Bold section headers
- **Section Title**: xl (20px) - Subsection headers
- **Body Text**: base (16px) - Standard text content
- **Table/Small**: sm (14px) - Data tables, labels
- **Labels**: xs (12px) - UPPERCASE field labels
- **Muted**: xs (12px) - Secondary information

### Line Height
- Body text: 1.6 (leading-relaxed)
- Headings: 1.4 (leading-tight)

## Spacing System

The design uses a consistent 8px grid for spacing.

```
--radius-sm: 8px    /* Small components */
--radius-md: 12px   /* Medium components */
--radius-lg: 16px   /* Large components */
--radius-xl: 20px   /* Buttons, inputs */
--radius-2xl: 28px  /* Containers, cards */
```

### Padding & Margin
- Sidebar: 24px (px-6)
- Card padding: 32px (p-8)
- Section gaps: 24px (gap-6)
- Element gaps: 16px (gap-4)

## Component Styles

### Cards
- Background: `--surface`
- Border: `--border` (1px solid)
- Border radius: 28px
- Padding: 24px-32px
- Hover: Subtle shadow increase
- Transition: 150ms

### Buttons
- Padding: 10px × 24px
- Border radius: 20px
- Font weight: 600
- Hover state: Slight background shift
- Transition: 150ms

### Inputs
- Height: 44px
- Border radius: 20px
- Padding: 12px × 16px
- Border: 1px `--border`
- Focus: Ring with 20% accent opacity

### Tables
- Row height: 56px
- Header background: `--surface-secondary`
- Hover row: 30% opacity of `--surface-secondary`
- Sticky header: Yes
- Hover transition: 150ms

## Components Included

### Layout
- **Sidebar**: 240px width, hierarchical navigation with active states
- **Top Bar**: Page title, subtitle, search bar, notifications, profile
- **Container**: Centered max-width layout with generous padding

### Dashboard
- **Summary Cards**: Icon, label, large number, trend indicator
- **Transaction Table**: 8 columns with sorting, filtering, and actions
- **KPI Display**: Four primary metrics with trend indicators

### Upload
- **Drag-and-Drop Zone**: Large drop area with upload icon
- **Recent Uploads**: File history with status badges

### Review Queue
- **Split Layout**: Transaction details (left) + AI analysis (right)
- **Confidence Bar**: Visual confidence indicator with percentage
- **Similar Transactions**: List of comparable historical transactions
- **Action Buttons**: Approve, Override, Skip

### Reports
- **KPI Cards**: Total spend, average transaction, approval rate, review time
- **Spending by Category**: Bar-style breakdown with percentages
- **Approval Trends**: Stacked bar chart showing monthly trends
- **Category Performance**: Detailed table with statistics

### Audit Logs
- **Timeline**: Chronological list of actions with metadata
- **Action Icons**: Different icons for approval, override, upload types
- **Contextual Info**: User, timestamp, and description for each action

### Settings
- **Account Section**: User profile with edit option
- **Preferences**: Organized buttons for security, notifications, team, integrations
- **Danger Zone**: Delete account with prominent warning styling

## Animation & Transitions

### Guidelines
- **Duration**: 150ms for most transitions
- **Easing**: Standard easing function (ease-in-out)
- **Effects**: Minimal and purposeful
- **No bounce**: Animations are smooth and professional

### Transitions
- Hover states: Background color shift
- Card focus: Shadow increase
- Button press: Subtle opacity/color change
- Page load: Fade in (handled by Next.js)

## Responsive Design

### Breakpoints
- **Desktop**: 1440px+ (primary)
- **Tablet**: 768px - 1439px (two-column grids collapse to one)
- **Mobile**: < 768px (sidebar collapses, search hidden, single column)

### Mobile Considerations
- Sidebar remains visible but optimized
- Summary cards stack vertically
- Table becomes horizontal scroll
- Search bar hidden on small screens

## Accessibility

### Features Included
- Semantic HTML structure
- Proper heading hierarchy
- Alt text for all icons
- Clear contrast ratios
- Focus states on interactive elements
- ARIA labels where appropriate

### WCAG Compliance
- Minimum 4.5:1 contrast ratio for text
- Large touch targets (44px minimum)
- Keyboard navigation support
- Screen reader friendly

## Background

The design uses a subtle, low-contrast grayscale landscape illustration as the page background. This illustration should:
- Have extremely low contrast
- Use primarily grays and whites
- Create a calm, professional atmosphere
- Not distract from the content
- Evoke Japanese watercolor or misty mountain aesthetics

## Status Badges

### States
- **Pending**: Light gray background, gray text
- **Approved**: Light gray background, accent text
- **Overridden**: Light gray background, muted text
- **Processing**: Light gray background, gray text

## Code Quality

The implementation follows these standards:
- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Components**: Fully componentized and reusable
- **No Backend**: UI-only implementation with realistic demo data

## Fonts

Inter is the single font family used throughout the application, ensuring visual consistency and professional appearance.

### Loading
```tsx
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });
```

## File Structure

```
app/
├── layout.tsx              # Root layout with design system
├── globals.css             # Design tokens and colors
├── page.tsx                # Dashboard
├── upload/page.tsx         # Upload page
├── review/page.tsx         # Review queue
├── transactions/page.tsx   # All transactions
├── audit-logs/page.tsx     # Audit logs
├── reports/page.tsx        # Reports
└── settings/page.tsx       # Settings

components/
├── sidebar.tsx             # Navigation sidebar
├── top-bar.tsx            # Page header
├── summary-card.tsx       # KPI card
└── transaction-table.tsx  # Data table
```

## Performance Notes

- All components are lightweight and performant
- Tailwind CSS is purged to only include used styles
- Images are optimized and lazy-loaded where applicable
- No external dependencies beyond required libraries
- Table virtualization not implemented (suitable for ~100-1000 rows)

## Future Enhancements

Potential additions while maintaining the design system:
- Dark mode support
- Export to PDF/CSV
- Advanced filtering and sorting
- Real-time notifications
- Multi-language support
- Custom category management
- Batch operations
- User preferences persistence
