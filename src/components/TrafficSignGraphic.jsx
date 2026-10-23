import React from 'react';

/**
 * Authentic Kerala RTO Traffic Signs, Road Markings, Police Signals, and Driver Hand Signals.
 * Extracted directly from the official Kerala Driving School Association INTUC curriculum booklet
 * and MoRTH / IRC:67 standards to ensure 100% test accuracy.
 */
const AUTHENTIC_SIGN_MAP = {
  stop: {
    src: '/exam-signs/stop.png',
    alt: 'Stop Sign (Mandatory Octagon)',
  },
  give_way: {
    src: '/exam-signs/give_way.png',
    alt: 'Give Way / Yield Sign (Inverted Triangle)',
  },
  no_entry: {
    src: '/exam-signs/no_entry.png',
    alt: 'No Entry Sign (Red Circle Crossed Forward Arrow)',
  },
  one_way: {
    src: '/exam-signs/one_way.png',
    alt: 'One Way Traffic Sign',
  },
  horn_prohibited: {
    src: '/exam-signs/horn_prohibited.png',
    alt: 'Horn Prohibited Silence Zone Sign',
  },
  pedestrians_prohibited: {
    src: '/exam-signs/pedestrians_prohibited.png',
    alt: 'Pedestrians Prohibited Sign',
  },
  u_turn_prohibited: {
    src: '/exam-signs/u_turn_prohibited.png',
    alt: 'U-Turn Prohibited Sign',
  },
  speed_limit_50: {
    src: '/exam-signs/speed_limit_50.png',
    alt: 'Maximum Speed Limit 50 km/h Sign',
  },
  compulsory_turn_left: {
    src: '/exam-signs/compulsory_turn_left.png',
    alt: 'Compulsory Turn Left Sign',
  },
  overtaking_prohibited: {
    src: '/exam-signs/overtaking_prohibited.png',
    alt: 'Overtaking Prohibited Sign',
  },
  right_hairpin_bend: {
    src: '/exam-signs/right_hairpin_bend.png',
    alt: 'Right Hairpin Bend Ahead Warning Sign',
  },
  steep_ascent: {
    src: '/exam-signs/steep_ascent.png',
    alt: 'Steep Ascent (Uphill Gradient) Warning Sign',
  },
  narrow_bridge: {
    src: '/exam-signs/narrow_bridge.png',
    alt: 'Narrow Bridge Ahead Warning Sign',
  },
  pedestrian_crossing: {
    src: '/exam-signs/pedestrian_crossing.png',
    alt: 'Pedestrian Zebra Crossing Ahead Warning Sign',
  },
  school_ahead: {
    src: '/exam-signs/school_ahead.png',
    alt: 'School Ahead Warning Sign',
  },
  level_crossing_guarded: {
    src: '/exam-signs/level_crossing_guarded.png',
    alt: 'Guarded Railway Level Crossing Sign',
  },
  level_crossing_unguarded: {
    src: '/exam-signs/level_crossing_unguarded.png',
    alt: 'Unguarded Railway Level Crossing Sign',
  },
  roundabout: {
    src: '/exam-signs/roundabout.png',
    alt: 'Roundabout Intersection Ahead Sign',
  },
  hospital: {
    src: '/exam-signs/hospital.png',
    alt: 'Hospital Facility Ahead Sign',
  },
  broken_white_line: {
    src: '/exam-signs/broken_white_line.png',
    alt: 'Broken White Line Road Marking Diagram',
  },
  solid_white_line: {
    src: '/exam-signs/solid_white_line.png',
    alt: 'Solid Continuous White Line Road Marking Diagram',
  },
  yellow_box_junction: {
    src: '/exam-signs/yellow_box_junction.png',
    alt: 'Yellow Box Junction Criss-Cross Road Marking',
  },
  traffic_lights_amber: {
    src: '/exam-signs/traffic_lights_amber.png',
    alt: 'Flashing Amber Caution Traffic Light Signal',
  },
  police_stop_front: {
    src: '/exam-signs/police_stop_front.png',
    alt: 'Kerala Traffic Police Manual Signal: Stop Vehicles Approaching from Front',
  },
  police_stop_rear: {
    src: '/exam-signs/police_stop_rear.png',
    alt: 'Kerala Traffic Police Manual Signal: Stop Vehicles Approaching from Behind',
  },
  driver_hand_right_turn: {
    src: '/exam-signs/driver_hand_right_turn.png',
    alt: 'Driver Hand Signal: Intending to Turn Right',
  },
};

export default function TrafficSignGraphic({ signType, size = 160 }) {
  if (!signType || !AUTHENTIC_SIGN_MAP[signType]) {
    return null;
  }

  const { src, alt } = AUTHENTIC_SIGN_MAP[signType];

  return (
    <div
      className="traffic-sign-image-wrapper"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#FFFFFF',
        borderRadius: '12px',
        padding: '10px 14px',
        boxShadow: '0 4px 16px rgba(15, 23, 42, 0.06)',
        border: '1.5px solid #E2E8F0',
      }}
    >
      <img
        src={src}
        alt={alt}
        className="traffic-sign-official-img"
        style={{
          maxWidth: `${size}px`,
          maxHeight: `${size}px`,
          width: 'auto',
          height: 'auto',
          objectFit: 'contain',
          display: 'block',
        }}
        loading="eager"
      />
    </div>
  );
}
