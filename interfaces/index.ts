// interfaces/index.ts
// Placeholder interfaces for components
export interface CardProps {
  title: string;
  description: string;
  // Add more properties as needed for your Card component
}

export interface ButtonProps {
  onClick?: () => void;
  children: React.ReactNode; // Content inside the button
  className?: string;
  // Add more properties like 'type', 'disabled' etc. as needed
}

// Add other project-wide interfaces here
// export interface Listing { /* ... */ }
// export interface User { /* ... */ }