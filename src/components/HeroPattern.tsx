export default function HeroPattern() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      <svg
        className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
        aria-hidden="true"
      >
        <defs>
          <pattern
            id="hero-pattern"
            width="32"
            height="32"
            patternUnits="userSpaceOnUse"
            x="50%"
            y="0"
          >
            <path
              d="M0 32V.5H32"
              fill="none"
              strokeWidth="1"
              strokeDasharray="1 3"
            />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          strokeWidth="0"
          fill="url(#hero-pattern)"
        />
      </svg>
    </div>
  )
}
