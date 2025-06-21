<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# Yellow o'clock Landing Page - Copilot Instructions

## Project Context
This is a Next.js 13 App Router TypeScript project for Yellow o'clock, a desktop application that automatically highlights sports clubs in swimming competition PDF results.

## Design System
- **Colors**: Primary `#F7C700` (yellow), Secondary `#174E8C` (blue), Accent `#EF4B3E` (red)
- **Typography**: Inter font family (400, 600, 700 weights)
- **Framework**: Tailwind CSS with custom color extensions
- **Responsive**: Mobile-first approach with sm/md/lg breakpoints

## Code Style Guidelines
- Use TypeScript for all new files
- Prefer functional components with hooks
- Use Tailwind CSS classes, avoid custom CSS
- Follow Next.js 13 App Router conventions
- Import components using relative paths
- Use semantic HTML elements

## Component Structure
- Keep components focused and single-purpose
- Use "use client" directive only when necessary (interactivity)
- Prefer server components by default
- Include proper TypeScript types and interfaces

## Stripe Integration
- Current phase uses mock API route `/api/checkout`
- BuyButton component handles loading states
- Success/cancel pages provide user feedback
- Future phase will integrate real Stripe backend

## Accessibility Requirements
- Include proper alt text for images
- Ensure keyboard navigation works
- Maintain high color contrast ratios
- Respect prefers-reduced-motion settings
- Use semantic markup and ARIA when needed

## Performance Guidelines
- Optimize images and assets
- Use Next.js Image component when possible
- Keep bundle size minimal
- Target Lighthouse score >90 on all metrics

## Content Guidelines
- Spanish language content
- Sports/swimming domain context
- Professional but friendly tone
- Focus on benefits for coaches and sports managers
