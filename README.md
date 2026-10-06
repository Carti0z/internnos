# InternOS

**Learn. Work. Get Reviewed. Get Career-Ready.**

InternOS is an AI-powered virtual internship platform that provides students and career beginners with realistic, AI-driven virtual internships across multiple career paths.

## Tech Stack

- **Frontend**: Next.js 16, React 19, TypeScript, Tailwind CSS
- **Backend**: Next.js App Router, Server Actions, REST API routes
- **Database**: PostgreSQL with Prisma ORM
- **Authentication**: NextAuth.js
- **AI**: OpenAI (configurable)
- **State Management**: TanStack Query
- **Form Validation**: React Hook Form + Zod

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp env.example .env
```

Edit `.env` with your configuration:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/internos?schema=public"
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"
OPENAI_API_KEY="your-openai-api-key-here"
```

4. Set up the database:
```bash
npx prisma migrate dev --name init
```

5. Generate Prisma Client:
```bash
npx prisma generate
```

6. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
src/
├── app/              # Next.js App Router
├── components/       # React components
├── lib/             # Utility functions
├── services/        # Business logic
├── ai/              # AI agents
├── database/        # Database utilities
├── types/           # TypeScript types
├── hooks/           # Custom React hooks
└── utils/           # Helper functions
```

## Features

- 🔐 User authentication with NextAuth.js
- 🎓 Multiple career paths (Software Engineering, Data Analysis, UI/UX Design)
- 🤖 AI-powered internship management
- 📝 Task submission and AI review
- 💬 AI mentor chat
- 🎯 Skills tracking
- 📊 Performance analytics
- 🏆 Certificate generation
- 💼 Portfolio builder
- 📱 Responsive design

## Development

### Database Migrations

```bash
npx prisma migrate dev
```

### Database Studio

```bash
npx prisma studio
```

### Type Checking

```bash
npm run build
```

### Linting

```bash
npm run lint
```

## Deployment

This project is designed to be deployed on Vercel with Supabase for the database.

### Environment Variables

Ensure these are set in your production environment:
- `DATABASE_URL`
- `NEXTAUTH_URL`
- `NEXTAUTH_SECRET`
- `OPENAI_API_KEY`

## License

MIT