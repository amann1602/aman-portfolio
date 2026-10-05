import React from 'react';

export function GithubIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}

export function LeetcodeIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.874 5.874 0 0 0 .749 1.621 5.924 5.924 0 0 0 2.459 2.18c.376.183.774.321 1.189.412a6.38 6.38 0 0 0 2.113.064c.594-.075 1.173-.255 1.716-.532l3.723-2.074a1.374 1.374 0 0 0 .61-1.688 1.374 1.374 0 0 0-1.687-.61l-3.71 2.067a3.57 3.57 0 0 1-1.685.342 3.63 3.63 0 0 1-1.428-.432 3.606 3.606 0 0 1-1.503-1.328 3.52 3.52 0 0 1-.448-.99 3.504 3.504 0 0 1-.037-1.455c.084-.45.267-.874.536-1.243l3.814-4.084 4.887-5.234a1.374 1.374 0 0 0-.986-2.38zM16.142 8.784a1.374 1.374 0 0 0-.97.402l-4.52 4.52a1.374 1.374 0 0 0 1.944 1.944l4.52-4.52a1.374 1.374 0 0 0-.974-2.346z" />
    </svg>
  );
}
