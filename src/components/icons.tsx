import * as React from "react";

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

export function TwitterIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
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
      <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
  );
}

export function GoIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <path
        fill="#00ADD8"
        d="M1.811 10.231c.427 0 .762.062 1.006.185.244.124.417.32.518.59.102.269.153.642.153 1.121 0 .507-.055.895-.164 1.163-.109.269-.286.471-.53.606-.244.136-.583.204-1.017.204-.448 0-.79-.068-1.028-.204-.237-.135-.411-.337-.523-.606C.115 13.022.06 12.634.06 12.127c0-.479.053-.852.16-1.121.107-.27.283-.466.528-.59.245-.123.597-.185 1.063-.185zm2.748-1.632v1.319h-.947V8.599h.947zm-.947 2.949v-1.155h.947v1.155h-.947zm0 1.258v-1.102h.947v1.102h-.947zm13.197-2.575c0 .54-.078.96-.233 1.26-.156.3-.393.522-.712.666-.319.144-.73.216-1.233.216-.484 0-.883-.072-1.197-.216-.314-.144-.549-.366-.704-.666-.156-.3-.233-.72-.233-1.26 0-.549.077-.974.233-1.275.155-.3.39-.524.704-.67.314-.147.713-.22 1.197-.22.503 0 .914.073 1.233.22.319.146.556.37.712.67.155.301.233.726.233 1.275zm-3.238 0c0 .416.082.721.246.915.165.194.417.291.758.291.348 0 .604-.097.768-.291.165-.194.247-.499.247-.915 0-.424-.082-.732-.247-.925-.164-.194-.42-.29-.768-.29-.341 0-.593.096-.758.29-.164.193-.246.501-.246.925z"
      />
    </svg>
  );
}

export function NodeIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
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
      <path
        fill="#22c55e"
        stroke="#22c55e"
        d="M12 2l9 5.2v10.4L12 23l-9-5.4V7.2L12 2z"
      />
      <path
        fill="#ffffff"
        d="M12 6.5l5 2.9v5.8l-5 2.9-5-2.9V9.4l5-2.9z"
      />
    </svg>
  );
}

export function NextIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      {...props}
    >
      <circle cx="12" cy="12" r="11" fill="currentColor" />
      <path
        fill="#ffffff"
        d="M14.5 8h2v8h-1.8L9.2 8.7V16H7.5V8h1.8l5.2 7.3V8z"
      />
    </svg>
  );
}

export function ReactIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#06b6d4"
      strokeWidth="1.5"
      className={className}
      {...props}
    >
      <ellipse cx="12" cy="12" rx="4" ry="11" />
      <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="4" ry="11" transform="rotate(120 12 12)" />
      <circle cx="12" cy="12" r="2" fill="#06b6d4" />
    </svg>
  );
}

export function TypeScriptIcon({ className = "w-4 h-4", ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className={className}
      {...props}
    >
      <rect width="24" height="24" rx="4" fill="#3178C6" />
      <path
        fill="#ffffff"
        d="M11.5 10.5H6.5V9h12v1.5h-5V20h-2V10.5zm6.8 4.2c.6.4 1.3.7 2.1.7.9 0 1.4-.4 1.4-1 0-.6-.4-.9-1.5-1.3-1.6-.6-2.6-1.5-2.6-2.9 0-1.7 1.3-3 3.3-3 1.1 0 2 .3 2.7.8l-.6 1.4c-.6-.4-1.3-.7-2.1-.7-.9 0-1.3.4-1.3.9 0 .6.4.9 1.6 1.4 1.7.6 2.5 1.5 2.5 2.9 0 1.8-1.3 3.1-3.6 3.1-1.2 0-2.3-.4-3.1-1l.7-1.3z"
      />
    </svg>
  );
}
