type ServiceKey = "website" | "landing" | "fullstack" | "workflow";

const STROKE = { fill: "none", stroke: "#7C96FF", strokeWidth: 1.5 } as const;

export function ServiceIcon({ name }: { name: ServiceKey }) {
  const common = {
    "aria-hidden": true,
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  } as const;

  switch (name) {
    case "website":
      return (
        <svg {...common}>
          <polyline points="16 18 22 12 16 6" />
          <polyline points="8 6 2 12 8 18" />
        </svg>
      );
    case "landing":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="2" />
          <line x1="3" y1="9" x2="21" y2="9" />
          <line x1="9" y1="21" x2="9" y2="9" />
        </svg>
      );
    case "fullstack":
      return (
        <svg {...common}>
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      );
    case "workflow":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="6" height="6" rx="1" />
          <rect x="15" y="15" width="6" height="6" rx="1" />
          <rect x="15" y="3" width="6" height="6" rx="1" />
          <path d="M6 9v3a2 2 0 0 0 2 2h7" />
          <path d="M18 9v6" />
        </svg>
      );
  }
}

export function ServiceArt({ name }: { name: ServiceKey }) {
  switch (name) {
    case "website":
      return (
        <svg aria-hidden="true" viewBox="0 0 220 150" width="100%" height="150" {...STROKE}>
          <rect x="10" y="12" width="200" height="126" rx="12" />
          <line x1="10" y1="38" x2="210" y2="38" />
          <rect x="24" y="52" width="96" height="14" rx="3" fill="#2447E0" stroke="none" />
          <line x1="24" y1="82" x2="140" y2="82" />
          <line x1="24" y1="96" x2="122" y2="96" />
          <rect x="150" y="52" width="46" height="72" rx="6" />
        </svg>
      );
    case "landing":
      return (
        <svg aria-hidden="true" viewBox="0 0 220 150" width="100%" height="170" {...STROKE}>
          <rect x="50" y="6" width="120" height="140" rx="12" />
          <rect x="64" y="20" width="92" height="42" rx="6" fill="#2447E0" stroke="none" />
          <line x1="64" y1="80" x2="142" y2="80" />
          <line x1="64" y1="92" x2="122" y2="92" />
          <rect x="64" y="108" width="54" height="22" rx="11" />
        </svg>
      );
    case "fullstack":
      return (
        <svg aria-hidden="true" viewBox="0 0 220 150" width="100%" height="150" {...STROKE}>
          <polygon points="110,18 190,50 110,82 30,50" fill="#2447E0" stroke="none" />
          <polyline points="30,72 110,104 190,72" />
          <polyline points="30,94 110,126 190,94" />
        </svg>
      );
    case "workflow":
      return (
        <svg aria-hidden="true" viewBox="0 0 220 150" width="100%" height="160" {...STROKE}>
          <rect x="8" y="55" width="52" height="40" rx="8" />
          <rect x="84" y="15" width="52" height="40" rx="8" fill="#2447E0" stroke="none" />
          <rect x="84" y="95" width="52" height="40" rx="8" />
          <rect x="160" y="55" width="52" height="40" rx="8" />
          <path d="M60 75 H72 V35 H84" />
          <path d="M60 75 H72 V115 H84" />
          <path d="M136 35 H148 V75 H160" />
          <path d="M136 115 H148 V75 H160" />
        </svg>
      );
  }
}
