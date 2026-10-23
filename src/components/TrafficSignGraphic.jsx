import React from 'react';

/**
 * High-definition vector graphics for Kerala RTO Traffic Signs, Road Markings,
 * Police Gestures, and Driver Signals corresponding to the question bank.
 */
export default function TrafficSignGraphic({ signType, size = 160 }) {
  const s = size;

  switch (signType) {
    // ── 1. Stop Sign (Red Octagon with White "STOP") ──
    case 'stop':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Stop Sign">
          <polygon
            points="35,10 85,10 110,35 110,85 85,110 35,110 10,85 10,35"
            fill="#DC2626"
            stroke="#FFFFFF"
            strokeWidth="3.5"
          />
          <polygon
            points="37,14 83,14 106,37 106,83 83,106 37,106 14,83 14,37"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="1.5"
          />
          <text
            x="60"
            y="68"
            fill="#FFFFFF"
            fontSize="24"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
          >
            STOP
          </text>
        </svg>
      );

    // ── 2. Give Way / Yield Sign (Inverted Red Border Triangle) ──
    case 'give_way':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Give Way Sign">
          <polygon points="60,112 8,16 112,16" fill="#FFFFFF" stroke="#DC2626" strokeWidth="12" strokeLinejoin="round" />
          <polygon points="60,100 16,22 104,22" fill="#FFFFFF" />
        </svg>
      );

    // ── 3. No Entry Sign (Red Circle with White Crossbar / Crossed Arrow) ──
    case 'no_entry':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="No Entry Sign">
          <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Forward Arrow */}
          <line x1="60" y1="85" x2="60" y2="35" stroke="#1E293B" strokeWidth="9" strokeLinecap="round" />
          <polyline points="45,48 60,30 75,48" fill="none" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          {/* Diagonal Red Bar */}
          <line x1="28" y1="28" x2="92" y2="92" stroke="#DC2626" strokeWidth="10" strokeLinecap="round" />
        </svg>
      );

    // ── 4. One Way Sign (Dual Arrows, One Prohibited) ──
    case 'one_way':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="One Way Sign">
          <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Upward Arrow (Allowed) */}
          <line x1="45" y1="85" x2="45" y2="40" stroke="#1E293B" strokeWidth="7" strokeLinecap="round" />
          <polygon points="45,28 35,45 55,45" fill="#1E293B" />
          {/* Downward Arrow (Crossed Out) */}
          <line x1="75" y1="35" x2="75" y2="80" stroke="#1E293B" strokeWidth="7" strokeLinecap="round" />
          <polygon points="75,92 65,75 85,75" fill="#1E293B" />
          {/* Diagonal Red Bar over right arrow */}
          <line x1="30" y1="30" x2="90" y2="90" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );

    // ── 5. Horn Prohibited Sign ──
    case 'horn_prohibited':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Horn Prohibited">
          <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Horn Silhouette */}
          <ellipse cx="40" cy="60" rx="8" ry="12" fill="#1E293B" />
          <polygon points="40,55 70,45 70,75 40,65" fill="#1E293B" />
          <path d="M70,42 Q78,35 84,45 Q78,75 70,78 Z" fill="#1E293B" />
          {/* Crossed Red Bar */}
          <line x1="26" y1="26" x2="94" y2="94" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );

    // ── 6. U-Turn Prohibited ──
    case 'u_turn_prohibited':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="U-Turn Prohibited">
          <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          <path
            d="M72,85 L72,50 C72,32 45,32 45,52 L45,80"
            fill="none"
            stroke="#1E293B"
            strokeWidth="8"
            strokeLinecap="round"
          />
          <polyline points="35,70 45,86 55,70" fill="none" stroke="#1E293B" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          <line x1="28" y1="28" x2="92" y2="92" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );

    // ── 7. Overtaking Prohibited ──
    case 'overtaking_prohibited':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Overtaking Prohibited">
          <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Left car (Black) */}
          <rect x="34" y="44" width="22" height="36" rx="5" fill="#1E293B" />
          <line x1="38" y1="52" x2="52" y2="52" stroke="#FFFFFF" strokeWidth="3" />
          {/* Right car (Red/overtaking) */}
          <rect x="64" y="38" width="22" height="36" rx="5" fill="#DC2626" />
          <line x1="68" y1="46" x2="82" y2="46" stroke="#FFFFFF" strokeWidth="3" />
        </svg>
      );

    // ── 8. Speed Limit 50 ──
    case 'speed_limit_50':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Speed Limit 50">
          <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" />
          <text
            x="60"
            y="72"
            fill="#1E293B"
            fontSize="40"
            fontWeight="900"
            fontFamily="Arial, sans-serif"
            textAnchor="middle"
          >
            50
          </text>
        </svg>
      );

    // ── 9. Compulsory Turn Left ──
    case 'compulsory_turn_left':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Compulsory Turn Left">
          <circle cx="60" cy="60" r="50" fill="#2563EB" stroke="#FFFFFF" strokeWidth="3" />
          <path
            d="M60,82 L60,54 Q60,42 46,42 L34,42"
            fill="none"
            stroke="#FFFFFF"
            strokeWidth="9"
            strokeLinecap="round"
          />
          <polygon points="34,30 20,42 34,54" fill="#FFFFFF" />
        </svg>
      );

    // ── 10. Pedestrians Prohibited ──
    case 'pedestrians_prohibited':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Pedestrians Prohibited">
          <circle cx="60" cy="60" r="50" fill="#FFFFFF" stroke="#DC2626" strokeWidth="10" />
          {/* Pedestrian */}
          <circle cx="60" cy="40" r="7" fill="#1E293B" />
          <line x1="60" y1="47" x2="60" y2="68" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
          <line x1="60" y1="68" x2="48" y2="88" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
          <line x1="60" y1="68" x2="72" y2="88" stroke="#1E293B" strokeWidth="6" strokeLinecap="round" />
          <line x1="45" y1="56" x2="75" y2="56" stroke="#1E293B" strokeWidth="5" strokeLinecap="round" />
          <line x1="28" y1="28" x2="92" y2="92" stroke="#DC2626" strokeWidth="9" strokeLinecap="round" />
        </svg>
      );

    // ── 11. Right Hairpin Bend ──
    case 'right_hairpin_bend':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Right Hairpin Bend">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          <path
            d="M48,88 L48,58 C48,44 72,44 72,58 L72,82"
            fill="none"
            stroke="#1E293B"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <polygon points="72,90 64,74 80,74" fill="#1E293B" />
        </svg>
      );

    // ── 12. Steep Ascent ──
    case 'steep_ascent':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Steep Ascent">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          {/* Hill slope */}
          <polygon points="30,86 88,86 88,48" fill="#1E293B" />
          {/* Vehicle on incline */}
          <g transform="translate(42, 60) rotate(-26)">
            <rect x="0" y="0" width="22" height="10" rx="3" fill="#DC2626" />
            <circle cx="5" cy="11" r="3" fill="#1E293B" />
            <circle cx="17" cy="11" r="3" fill="#1E293B" />
          </g>
        </svg>
      );

    // ── 13. Narrow Bridge ──
    case 'narrow_bridge':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Narrow Bridge">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          {/* Bridge bottleneck */}
          <path d="M42,90 L42,66 L52,58 L52,40" fill="none" stroke="#1E293B" strokeWidth="5.5" strokeLinecap="round" />
          <path d="M78,90 L78,66 L68,58 L68,40" fill="none" stroke="#1E293B" strokeWidth="5.5" strokeLinecap="round" />
        </svg>
      );

    // ── 14. Pedestrian Crossing Warning ──
    case 'pedestrian_crossing':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Pedestrian Crossing Ahead">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          {/* Zebra stripes */}
          <line x1="38" y1="88" x2="82" y2="88" stroke="#1E293B" strokeWidth="3" />
          <line x1="42" y1="83" x2="78" y2="83" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="46" y1="78" x2="74" y2="78" stroke="#1E293B" strokeWidth="2" />
          {/* Walking figure */}
          <circle cx="62" cy="46" r="4.5" fill="#1E293B" />
          <line x1="62" y1="51" x2="60" y2="68" stroke="#1E293B" strokeWidth="4" />
          <line x1="60" y1="68" x2="52" y2="84" stroke="#1E293B" strokeWidth="4" />
          <line x1="60" y1="68" x2="68" y2="84" stroke="#1E293B" strokeWidth="4" />
          <line x1="52" y1="58" x2="70" y2="62" stroke="#1E293B" strokeWidth="3.5" />
        </svg>
      );

    // ── 15. School Ahead ──
    case 'school_ahead':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="School Ahead">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          {/* Older child leading younger child */}
          <circle cx="52" cy="48" r="5" fill="#1E293B" />
          <line x1="52" y1="53" x2="52" y2="72" stroke="#1E293B" strokeWidth="4" />
          <line x1="52" y1="72" x2="44" y2="88" stroke="#1E293B" strokeWidth="4" />
          <line x1="52" y1="72" x2="60" y2="88" stroke="#1E293B" strokeWidth="4" />
          {/* Younger child */}
          <circle cx="70" cy="56" r="4" fill="#1E293B" />
          <line x1="70" y1="60" x2="70" y2="76" stroke="#1E293B" strokeWidth="3.5" />
          <line x1="70" y1="76" x2="64" y2="88" stroke="#1E293B" strokeWidth="3.5" />
          <line x1="70" y1="76" x2="76" y2="88" stroke="#1E293B" strokeWidth="3.5" />
        </svg>
      );

    // ── 16. Guarded Level Crossing (Railway Gate Fence) ──
    case 'level_crossing_guarded':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Guarded Level Crossing">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          {/* Gate Fence */}
          <rect x="36" y="56" width="48" height="30" fill="none" stroke="#1E293B" strokeWidth="3" />
          <line x1="36" y1="66" x2="84" y2="66" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="36" y1="76" x2="84" y2="76" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="48" y1="56" x2="48" y2="86" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="60" y1="56" x2="60" y2="86" stroke="#1E293B" strokeWidth="2.5" />
          <line x1="72" y1="56" x2="72" y2="86" stroke="#1E293B" strokeWidth="2.5" />
        </svg>
      );

    // ── 17. Unguarded Level Crossing (Locomotive Train) ──
    case 'level_crossing_unguarded':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Unguarded Railway Crossing">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          {/* Steam Train */}
          <rect x="42" y="62" width="36" height="18" fill="#1E293B" />
          <rect x="36" y="56" width="16" height="24" fill="#1E293B" />
          <rect x="68" y="50" width="6" height="12" fill="#1E293B" />
          <circle cx="44" cy="84" r="5" fill="#1E293B" />
          <circle cx="56" cy="84" r="5" fill="#1E293B" />
          <circle cx="68" cy="84" r="5" fill="#1E293B" />
        </svg>
      );

    // ── 18. Roundabout Sign ──
    case 'roundabout':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Roundabout Sign">
          <polygon points="60,14 112,104 8,104" fill="#FFFFFF" stroke="#DC2626" strokeWidth="11" strokeLinejoin="round" />
          {/* Clockwise circular arrows */}
          <circle cx="60" cy="68" r="18" fill="none" stroke="#1E293B" strokeWidth="5.5" strokeDasharray="28 10" strokeLinecap="round" />
          <polygon points="76,64 84,60 84,72" fill="#1E293B" />
          <polygon points="44,72 36,76 36,64" fill="#1E293B" />
        </svg>
      );

    // ── 19. Hospital ──
    case 'hospital':
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="Hospital Sign">
          <rect x="15" y="15" width="90" height="90" rx="10" fill="#2563EB" />
          <rect x="25" y="25" width="70" height="70" rx="6" fill="#FFFFFF" />
          {/* Bed & Red Cross */}
          <rect x="44" y="32" width="6" height="16" fill="#DC2626" />
          <rect x="39" y="37" width="16" height="6" fill="#DC2626" />
          {/* Bed icon */}
          <rect x="35" y="66" width="50" height="8" rx="2" fill="#1E293B" />
          <rect x="35" y="58" width="6" height="16" fill="#1E293B" />
          <rect x="79" y="62" width="6" height="12" fill="#1E293B" />
          <circle cx="48" cy="60" r="4" fill="#1E293B" />
        </svg>
      );

    // ── 20. Road Marking: Broken White Line ──
    case 'broken_white_line':
      return (
        <svg width={s} height={s} viewBox="0 0 140 100" role="img" aria-label="Broken White Line Road Marking">
          <rect x="10" y="10" width="120" height="80" rx="8" fill="#334155" />
          {/* Solid verge edges */}
          <line x1="16" y1="10" x2="16" y2="90" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="124" y1="10" x2="124" y2="90" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Broken center line */}
          <line x1="70" y1="12" x2="70" y2="28" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="70" y1="42" x2="70" y2="58" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="70" y1="72" x2="70" y2="88" stroke="#FFFFFF" strokeWidth="4.5" strokeLinecap="round" />
          {/* Car indicators */}
          <rect x="30" y="40" width="16" height="26" rx="3" fill="#38BDF8" opacity="0.85" />
        </svg>
      );

    // ── 21. Road Marking: Solid White Line ──
    case 'solid_white_line':
      return (
        <svg width={s} height={s} viewBox="0 0 140 100" role="img" aria-label="Solid White Line Road Marking">
          <rect x="10" y="10" width="120" height="80" rx="8" fill="#334155" />
          <line x1="16" y1="10" x2="16" y2="90" stroke="#FFFFFF" strokeWidth="2.5" />
          <line x1="124" y1="10" x2="124" y2="90" stroke="#FFFFFF" strokeWidth="2.5" />
          {/* Continuous center solid line */}
          <line x1="70" y1="10" x2="70" y2="90" stroke="#FFFFFF" strokeWidth="5.5" />
          <rect x="30" y="40" width="16" height="26" rx="3" fill="#38BDF8" opacity="0.85" />
        </svg>
      );

    // ── 22. Yellow Box Junction ──
    case 'yellow_box_junction':
      return (
        <svg width={s} height={s} viewBox="0 0 140 110" role="img" aria-label="Yellow Box Junction Marking">
          <rect x="10" y="10" width="120" height="90" rx="8" fill="#1E293B" />
          {/* Yellow Box with criss-cross pattern */}
          <rect x="35" y="20" width="70" height="70" fill="none" stroke="#F59E0B" strokeWidth="3" />
          <g stroke="#F59E0B" strokeWidth="1.8" opacity="0.9">
            <line x1="35" y1="35" x2="50" y2="20" />
            <line x1="35" y1="55" x2="70" y2="20" />
            <line x1="35" y1="75" x2="90" y2="20" />
            <line x1="35" y1="90" x2="105" y2="20" />
            <line x1="50" y1="90" x2="105" y2="35" />
            <line x1="70" y1="90" x2="105" y2="55" />
            <line x1="90" y1="90" x2="105" y2="75" />
            {/* Counter diagonals */}
            <line x1="35" y1="75" x2="90" y2="90" />
            <line x1="35" y1="55" x2="105" y2="90" />
            <line x1="35" y1="35" x2="105" y2="70" />
            <line x1="35" y1="20" x2="105" y2="50" />
            <line x1="50" y1="20" x2="105" y2="35" />
          </g>
        </svg>
      );

    // ── 23. Traffic Police Gesture: Stop Front ──
    case 'police_stop_front':
      return (
        <svg width={s} height={s} viewBox="0 0 120 140" role="img" aria-label="Police Stop Front">
          <rect x="5" y="5" width="110" height="130" rx="10" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Officer in khaki / white uniform */}
          <circle cx="60" cy="30" r="12" fill="#D97706" />
          <ellipse cx="60" cy="20" rx="14" ry="4" fill="#1E293B" />
          {/* Torso */}
          <rect x="46" y="44" width="28" height="42" rx="4" fill="#FFFFFF" stroke="#0F172A" strokeWidth="2" />
          {/* Belt */}
          <rect x="46" y="80" width="28" height="6" fill="#1E293B" />
          {/* Legs */}
          <rect x="48" y="88" width="10" height="40" fill="#1E293B" />
          <rect x="62" y="88" width="10" height="40" fill="#1E293B" />
          {/* Right Arm Raised Vertically with Open Palm facing Front */}
          <line x1="46" y1="50" x2="28" y2="34" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
          <line x1="28" y1="34" x2="28" y2="16" stroke="#0F172A" strokeWidth="6" strokeLinecap="round" />
          <circle cx="28" cy="12" r="6" fill="#D97706" />
          {/* Left arm down */}
          <line x1="74" y1="50" x2="84" y2="76" stroke="#0F172A" strokeWidth="5" strokeLinecap="round" />
        </svg>
      );

    // ── 24. Driver Hand Signal: Right Turn ──
    case 'driver_hand_right_turn':
      return (
        <svg width={s} height={s} viewBox="0 0 140 100" role="img" aria-label="Driver Right Turn Hand Signal">
          <rect x="10" y="10" width="120" height="80" rx="8" fill="#F8FAFC" stroke="#CBD5E1" strokeWidth="1.5" />
          {/* Rear of car */}
          <rect x="50" y="30" width="60" height="48" rx="8" fill="#2563EB" />
          <rect x="58" y="36" width="44" height="20" rx="4" fill="#38BDF8" opacity="0.6" />
          <circle cx="56" cy="68" r="5" fill="#DC2626" />
          <circle cx="104" cy="68" r="5" fill="#DC2626" />
          {/* Driver's Right Arm Extended Horizontally Palm Front */}
          <line x1="50" y1="46" x2="16" y2="46" stroke="#D97706" strokeWidth="6" strokeLinecap="round" />
          <circle cx="14" cy="46" r="4.5" fill="#D97706" />
        </svg>
      );

    // Fallback Icon / Badge for Rule-based questions without explicit signs
    default:
      return (
        <svg width={s} height={s} viewBox="0 0 120 120" role="img" aria-label="RTO Regulation">
          <circle cx="60" cy="60" r="50" fill="#FFFBEB" stroke="#F59E0B" strokeWidth="4" />
          <circle cx="60" cy="60" r="42" fill="none" stroke="#F59E0B" strokeWidth="1.5" strokeDasharray="4 4" />
          <path d="M60,30 L60,65 L78,78" fill="none" stroke="#201A42" strokeWidth="5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="60" cy="60" r="4" fill="#201A42" />
        </svg>
      );
  }
}
