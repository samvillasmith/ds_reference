const W = 36;
const H = 24;

export function FlagUS(props) {
  return (
    <svg viewBox="0 0 19 10" width={W} height={H} {...props}>
      <rect width="19" height="10" fill="#b22234" />
      <g fill="#fff">
        <rect y="0.77" width="19" height="0.77" />
        <rect y="2.31" width="19" height="0.77" />
        <rect y="3.85" width="19" height="0.77" />
        <rect y="5.38" width="19" height="0.77" />
        <rect y="6.92" width="19" height="0.77" />
        <rect y="8.46" width="19" height="0.77" />
      </g>
      <rect width="7.6" height="5.38" fill="#3c3b6e" />
    </svg>
  );
}

export function FlagMX(props) {
  return (
    <svg viewBox="0 0 900 514" width={W} height={H} {...props}>
      <rect width="300" height="514" fill="#006847" />
      <rect x="300" width="300" height="514" fill="#fff" />
      <rect x="600" width="300" height="514" fill="#ce1126" />
      <g transform="translate(450 257)" stroke="#5d2f0a" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none">
        <ellipse cx="0" cy="60" rx="95" ry="14" fill="#3a5f1f" stroke="none" />
        <g fill="#6ba538" stroke="#3a5f1f" strokeWidth="2">
          <ellipse cx="-70" cy="20" rx="22" ry="55" transform="rotate(-25 -70 20)" />
          <ellipse cx="-40" cy="5" rx="22" ry="62" transform="rotate(-10 -40 5)" />
          <ellipse cx="-10" cy="-5" rx="22" ry="65" />
          <ellipse cx="20" cy="0" rx="22" ry="62" transform="rotate(10 20 0)" />
          <ellipse cx="50" cy="15" rx="22" ry="58" transform="rotate(22 50 15)" />
        </g>
        <g fill="#8b5a2b" stroke="#3a1f08" strokeWidth="2.5">
          <path d="M -35 -55 Q -50 -90 -20 -100 Q 10 -105 40 -90 Q 55 -75 45 -55 Q 30 -40 0 -45 Q -25 -45 -35 -55 Z" />
          <path d="M 0 -75 L -30 -50 L -45 -30" stroke="#1a0f08" strokeWidth="4" fill="none" />
          <path d="M 45 -80 Q 70 -70 75 -55 L 55 -55 Z" fill="#d4a257" />
        </g>
        <circle cx="-15" cy="-80" r="4" fill="#000" stroke="none" />
      </g>
    </svg>
  );
}

export function FlagJP(props) {
  return (
    <svg viewBox="0 0 3 2" width={W} height={H} {...props}>
      <rect width="3" height="2" fill="#fff" />
      <circle cx="1.5" cy="1" r="0.6" fill="#bc002d" />
    </svg>
  );
}
