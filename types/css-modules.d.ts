// Type declarations for CSS-only packages and files
// Prevents TypeScript errors when importing CSS-only packages dynamically

declare module 'tw-animate-css';
declare module 'shadcn/tailwind.css';

declare module '*.css' {
  const content: { [className: string]: string };
  export default content;
}
