# Pizza Palace Dashboard

A modern Next.js application for managing pizza orders in a restaurant setting. This dashboard provides a secure, user-friendly interface for restaurant staff to track and manage orders efficiently.

## Features

- **Secure Authentication**: Google OAuth integration for secure staff login
- **Dashboard Overview**: View key metrics at a glance
- **Order Management**: Track pizza orders with their current status
- **Search Functionality**: Quickly find orders by customer name, pizza type, or order ID
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Built with Tailwind CSS and Framer Motion for smooth animations

## Technology Stack

- **Next.js**: For server-side rendering, routing, and API routes
- **NextAuth.js**: For authentication with Google OAuth
- **Tailwind CSS**: For utility-first styling
- **Framer Motion**: For animations and transitions
- **TypeScript**: For type safety and better developer experience
- **Shadcn UI**: For consistent, accessible UI components

## Getting Started

### Prerequisites

- Node.js 16.8 or later
- PNPM package manager

### Environment Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/pizza-palace-dashboard.git
   cd pizza-palace-dashboard
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Create a `.env.local` file in the root directory with the following variables:
   ```
   # NextAuth.js
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your_generated_secret_here
   
   # Google OAuth
   GOOGLE_CLIENT_ID=your_google_client_id
   GOOGLE_CLIENT_SECRET=your_google_client_secret
   ```

   To obtain Google OAuth credentials:
   1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
   2. Create a new project or select an existing one
   3. Navigate to "APIs & Services" > "Credentials"
   4. Click "Create Credentials" > "OAuth client ID"
   5. Set the application type to "Web application"
   6. Add `http://localhost:3000/api/auth/callback/google` as an authorized redirect URI
   7. Copy the Client ID and Client Secret to your `.env.local` file

4. Run the development server:
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

- `/app`: Application routes and pages using Next.js App Router
- `/components`: Reusable UI components
- `/lib`: Utility functions and data services
- `/public`: Static assets like images

## Authentication Flow

1. Users navigate to `/signin` and click "Sign in with Google"
2. They're redirected to Google's authentication page
3. After successful authentication, users are redirected to the dashboard
4. Protected routes check for valid session before rendering

## Deployment

This application can be easily deployed to Vercel:

1. Push your code to a GitHub repository
2. Import the project in Vercel
3. Configure the environment variables in the Vercel dashboard
4. Deploy!

## License

This project is open source and available under the [MIT License](LICENSE).
