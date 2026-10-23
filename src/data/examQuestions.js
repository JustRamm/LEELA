// ==============================================================================
// KERALA RTO DRIVING LEARNER'S LICENSE (LL) EXAM QUESTION BANK
// Extracted & Curated from:
// Motor Driving School Operators Association INTUC Kerala | Kottarakara
// Contains visual road signs, police hand gestures, road markings & driving rules
// Full Bilingual: Malayalam (മലയാളം) & English
// ==============================================================================

export const EXAM_QUESTIONS = [
  // ─── 1. MANDATORY / REGULATORY SIGNS ───
  {
    id: 1,
    category: 'mandatory_signs',
    signType: 'stop',
    question: {
      ml: 'ഈ ചിത്രത്തിൽ കാണുന്ന ട്രാഫിക് ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does the traffic sign shown in this picture indicate?',
    },
    options: {
      ml: ['വഴി കൊടുക്കുക', 'പാർക്കിംഗ് പാടില്ല', 'നിർത്തുക (STOP)', 'പ്രവേശനമില്ല'],
      en: ['Give Way', 'No Parking', 'Stop (Mandatory)', 'No Entry'],
    },
    correctAnswer: 2,
    explanation: {
      ml: 'അഷ്ടഭുജാകൃതിയിലുള്ള ചുവന്ന ചിഹ്നം വാഹനം പൂർണ്ണമായി നിർത്തണം എന്ന് സൂചിപ്പിക്കുന്നു.',
      en: 'The octagonal red sign is the mandatory STOP sign indicating vehicles must come to a complete stop.',
    },
  },
  {
    id: 2,
    category: 'mandatory_signs',
    signType: 'give_way',
    question: {
      ml: 'ഈ ചിത്രത്തിൽ കാണുന്ന ട്രാഫിക് ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this inverted triangular traffic sign indicate?',
    },
    options: {
      ml: ['വഴി കൊടുക്കുക (GIVE WAY)', 'ആശുപത്രി അടുത്തുണ്ട്', 'മുൻപിൽ ട്രാഫിക് ഐലൻഡ്', 'നിർത്തുക'],
      en: ['Give Way (Yield to other traffic)', 'Hospital Ahead', 'Traffic Island Ahead', 'Stop'],
    },
    correctAnswer: 0,
    explanation: {
      ml: 'തലകീഴായ ത്രികോണം വഴി കൊടുക്കുക (Give Way) എന്ന ചിഹ്നമാണ്.',
      en: 'An inverted triangle indicates Give Way; you must yield right of way to traffic on the main road.',
    },
  },
  {
    id: 3,
    category: 'mandatory_signs',
    signType: 'no_entry',
    question: {
      ml: 'ഈ ചിത്രത്തിൽ കാണുന്ന ട്രാഫിക് ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this circular sign with a crossed forward arrow indicate?',
    },
    options: {
      ml: ['റോഡ് അടച്ചിരിക്കുന്നു', 'പ്രവേശനമില്ല (NO ENTRY)', 'വൺവേ അടയാളം', 'കാറുകൾക്ക് പ്രവേശനമില്ല'],
      en: ['Road Closed', 'No Entry for all vehicles', 'One Way Sign', 'No Entry for cars only'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ചുവന്ന വൃത്തത്തിൽ മുന്നോട്ടുള്ള അമ്പടയാളം വെട്ടിയിരിക്കുന്നത് പ്രവേശനമില്ല എന്ന് സൂചിപ്പിക്കുന്നു.',
      en: 'A red circle with a crossed forward arrow signifies No Entry for all vehicles.',
    },
  },
  {
    id: 4,
    category: 'mandatory_signs',
    signType: 'one_way',
    question: {
      ml: 'ഈ ചിത്രത്തിൽ കാണുന്ന ട്രാഫിക് ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this traffic sign with two arrows, one crossed out, indicate?',
    },
    options: {
      ml: ['വൺവേ ട്രാഫിക് (One Way)', 'ഇരുവശങ്ങളിലും വാഹനങ്ങൾക്ക് പ്രവേശനമില്ല', 'പ്രവേശനമില്ല', 'മുകളിൽ പറഞ്ഞവ ഒന്നുമല്ല'],
      en: ['One Way Traffic', 'No vehicle entry on both sides', 'No Entry', 'None of the above'],
    },
    correctAnswer: 0,
    explanation: {
      ml: 'ഒരു ദിശയിലേക്കുള്ള സഞ്ചാരം മാത്രം അനുവദിക്കുന്ന വൺവേ ട്രാഫിക് ചിഹ്നമാണിത്.',
      en: 'One direction is prohibited while traffic is permitted in the other, indicating a One Way street.',
    },
  },
  {
    id: 5,
    category: 'mandatory_signs',
    signType: 'horn_prohibited',
    question: {
      ml: 'ഈ ചിത്രത്തിൽ കാണുന്ന ട്രാഫിക് ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this traffic sign with a horn crossed out indicate?',
    },
    options: {
      ml: ['ഹോൺ മുഴക്കരുത് (HORN PROHIBITED)', 'നിർബന്ധിത ഹോൺ', 'ഹോൺ മുഴക്കാം', 'എയർ ഹോൺ മാത്രം'],
      en: ['Horn Prohibited (Silence Zone)', 'Compulsory Sound Horn', 'Sound Horn Permitted', 'Air Horn Only'],
    },
    correctAnswer: 0,
    explanation: {
      ml: 'ആശുപത്രികൾ, സ്കൂളുകൾ, കോടതികൾ എന്നിവയ്ക്ക് സമീപമുള്ള നിശബ്ദ മേഖലകളിൽ ഹോൺ മുഴക്കുന്നത് നിരോധിച്ചിരിക്കുന്നു.',
      en: 'Prohibits the use of vehicle horns, typically near hospitals, schools, and court silence zones.',
    },
  },
  {
    id: 6,
    category: 'mandatory_signs',
    signType: 'u_turn_prohibited',
    question: {
      ml: 'ഈ ചിത്രത്തിൽ കാണുന്ന ട്രാഫിക് ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this traffic sign with a crossed U-turn arrow indicate?',
    },
    options: {
      ml: ['വലത്തേക്ക് തിരിയുക', 'യു-ടേൺ നിരോധിത ചിഹ്നം (NO U-TURN)', 'ഇടത്തേക്ക് തിരിയുക', 'വലത്തോട്ട് വലിയ വളവ്'],
      en: ['Turn Right', 'U-Turn Prohibited', 'Turn Left', 'Sharp Right Curve'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഈ ചിഹ്നമുള്ള സ്ഥലങ്ങളിൽ വാഹനം യു-ടേൺ എടുക്കാൻ പാടില്ല.',
      en: 'Vehicles are legally prohibited from executing a U-turn at this location.',
    },
  },
  {
    id: 7,
    category: 'mandatory_signs',
    signType: 'overtaking_prohibited',
    question: {
      ml: 'ഈ ചിത്രത്തിൽ കാണുന്ന ട്രാഫിക് ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this traffic sign showing two parallel cars in a red circle indicate?',
    },
    options: {
      ml: ['വാഹനങ്ങൾ പാർക്ക് ചെയ്യാം', 'മറികടക്കൽ നിരോധിച്ചിരിക്കുന്നു (NO OVERTAKING)', 'വലതുവശത്തു കൂടിയുള്ള പ്രവേശനം', 'ഇരുവശത്തേക്കും വാഹനം ഓടിക്കാം'],
      en: ['Parking Permitted', 'Overtaking Prohibited', 'Entry from Right side', 'Two-way traffic'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മുന്നിലുള്ള വാഹനങ്ങളെ മറികടക്കുന്നത് (ഓവർടേക്ക് ചെയ്യുന്നത്) അപകടകരമായതിനാൽ നിരോധിച്ചിരിക്കുന്നു.',
      en: 'Overtaking any vehicle is strictly prohibited on this stretch of road.',
    },
  },
  {
    id: 8,
    category: 'mandatory_signs',
    signType: 'speed_limit_50',
    question: {
      ml: 'ചുവന്ന വൃത്തത്തിൽ "50" എന്ന് എഴുതിയിരിക്കുന്ന ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a red circle with the number "50" inside signify?',
    },
    options: {
      ml: ['കുറഞ്ഞ വേഗത 50 കി.മീ/മണിക്കൂർ', 'പരമാവധി വേഗപരിധി മണിക്കൂറിൽ 50 കി.മീ', '50 മീറ്റർ ദൂരപരിധി', '50 കിലോ ഭാരപരിധി'],
      en: ['Minimum Speed 50 km/h', 'Maximum Speed Limit 50 km/h', '50 Metre Distance', '50 Ton Weight Limit'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മണിക്കൂറിൽ 50 കിലോമീറ്ററിലധികം വേഗതയിൽ വാഹനം ഓടിക്കാൻ പാടില്ല എന്ന് നിഷ്കർഷിക്കുന്ന പരമാവധി വേഗപരിധിയാണിത്.',
      en: 'It indicates the maximum legal speed limit of 50 km/h on that road.',
    },
  },
  {
    id: 9,
    category: 'mandatory_signs',
    signType: 'compulsory_turn_left',
    question: {
      ml: 'നീല വൃത്തത്തിൽ ഇടത്തോട്ട് അമ്പടയാളം കാണിക്കുന്ന ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a blue circular sign with a white arrow pointing left indicate?',
    },
    options: {
      ml: ['ഇടത്തോട്ട് തിരിയരുത്', 'ഇടത്തോട്ട് നിർബന്ധിത തിരിവ് (Compulsory Turn Left)', 'ഇടതുവശത്ത് പാർക്കിംഗ്', 'ഇടതുവശത്ത് റോഡുണ്ട്'],
      en: ['Do not turn left', 'Compulsory Turn Left', 'Parking on left', 'Side road on left'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'നീല വൃത്തത്തിലുള്ള ചിഹ്നങ്ങൾ നിർബന്ധിത നിർദ്ദേശങ്ങളാണ്. ഡ്രൈവർ നിർബന്ധമായും ഇടത്തോട്ട് തിരിയണം.',
      en: 'Blue circular signs are mandatory regulatory instructions requiring drivers to turn left.',
    },
  },
  {
    id: 10,
    category: 'mandatory_signs',
    signType: 'pedestrians_prohibited',
    question: {
      ml: 'ചുവന്ന വൃത്തത്തിൽ നടന്നുപോകുന്ന കാൽനടയാത്രക്കാരനെ വെട്ടിയിരിക്കുന്ന ചിഹ്നം എന്താണ്?',
      en: 'What does a red circle with a crossed pedestrian symbol represent?',
    },
    options: {
      ml: ['കാൽനടക്കാർക്ക് പ്രവേശിക്കാം', 'കാൽനടയാത്രക്കാർക്ക് പ്രവേശനമില്ല', 'കാൽനട ക്രോസിംഗ്', 'നടപ്പാത ആരംഭിക്കുന്നു'],
      en: ['Pedestrians allowed', 'Pedestrians Prohibited', 'Pedestrian Crossing Ahead', 'Footpath Begins'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'എക്സ്പ്രസ് വേകളിലും പ്രധാന പാലങ്ങളിലും കാൽനടയാത്രക്കാരെ നിരോധിക്കുന്ന ചിഹ്നമാണിത്.',
      en: 'Pedestrians are prohibited from using this road, typical on expressways and flyovers.',
    },
  },

  // ─── 2. CAUTIONARY / WARNING SIGNS ───
  {
    id: 11,
    category: 'cautionary_signs',
    signType: 'right_hairpin_bend',
    question: {
      ml: 'ഈ ത്രികോണ ചിഹ്നത്തിൽ കാണുന്ന ട്രാഫിക് അടയാളം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this triangular traffic sign showing a sharp U-curve indicate?',
    },
    options: {
      ml: ['വലത്തോട്ട് വളവ്', 'വലത്തേക്ക് ഹെയർ പിൻ ബെൻഡ് (Right Hairpin Bend)', 'യു-ടേൺ എടുക്കാം', 'ഇടത്തോട്ട് വളവ്'],
      en: ['Right Hand Curve', 'Right Hairpin Bend Ahead', 'U-Turn Permitted', 'Left Curve'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മലയോര പാതകളിൽ വലതുവശത്തേക്ക് തിരിയുന്ന കുത്തനെയുള്ള ഹെയർപിൻ വളവിനെ മുന്നറിയിപ്പ് നൽകുന്നു.',
      en: 'Warns of a sharp, hairpin turn to the right ahead, requiring low gear and caution.',
    },
  },
  {
    id: 12,
    category: 'cautionary_signs',
    signType: 'steep_ascent',
    question: {
      ml: 'ഈ ത്രികോണ ചിഹ്നത്തിൽ ഒരു കാർ മുകളിലേക്ക് കയറുന്നത് കാണിക്കുന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a triangular warning sign with a vehicle climbing an incline indicate?',
    },
    options: {
      ml: ['കുത്തനെയുള്ള കയറ്റം (Steep Ascent)', 'കുത്തനെയുള്ള ഇറക്കം', 'കരിങ്കൽ റോഡ്', 'വഴുക്കലുള്ള റോഡ്'],
      en: ['Steep Ascent (Uphill Climb)', 'Steep Descent (Downhill)', 'Gravel Road', 'Slippery Road'],
    },
    correctAnswer: 0,
    explanation: {
      ml: 'മുന്നിൽ കുത്തനെയുള്ള കയറ്റം ഉണ്ടെന്നും ഉചിതമായ ലോവർ ഗിയർ തെരഞ്ഞെടുക്കണമെന്നും മുന്നറിയിപ്പ് നൽകുന്നു.',
      en: 'Warns of a steep uphill gradient ahead; drivers should select an appropriate lower gear.',
    },
  },
  {
    id: 13,
    category: 'cautionary_signs',
    signType: 'narrow_bridge',
    question: {
      ml: 'ഈ ത്രികോണ ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does this triangular sign with converging borders in the middle indicate?',
    },
    options: {
      ml: ['മുന്നിൽ വീതികൂടിയ റോഡ്', 'മുന്നിൽ വീതികുറഞ്ഞ പാലം (Narrow Bridge Ahead)', 'ഇരുവശവും റോഡുകൾ', 'റോഡ് അടച്ചിരിക്കുന്നു'],
      en: ['Broad road ahead', 'Narrow Bridge Ahead', 'Side roads both sides', 'Road closed'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'റോഡിനേക്കാൾ വീതികുറഞ്ഞ പാലം മുന്നിലുണ്ടെന്ന് സൂചിപ്പിക്കുന്നു; വേഗത കുറച്ച് ശ്രദ്ധയോടെ കടന്നുപോകണം.',
      en: 'Warns that the bridge ahead is narrower than the approaching road.',
    },
  },
  {
    id: 14,
    category: 'cautionary_signs',
    signType: 'pedestrian_crossing',
    question: {
      ml: 'ത്രികോണത്തിൽ കാൽനടയാത്രക്കാരൻ വരകളിലൂടെ നടന്നുപോകുന്നത് കാണിക്കുന്ന ചിഹ്നം എന്താണ്?',
      en: 'What does a triangular warning sign with a pedestrian walking on striped lines indicate?',
    },
    options: {
      ml: ['നടപ്പാത', 'കാൽനട ക്രോസിംഗ് (Pedestrian Crossing Ahead)', 'കളിസ്ഥലം', 'ആശുപത്രി'],
      en: ['Footpath Only', 'Pedestrian / Zebra Crossing Ahead', 'Playground', 'Hospital'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മുന്നിൽ കാൽനടയാത്രക്കാർ റോഡ് മുറിച്ചുകടക്കുന്ന സീബ്ര ക്രോസിംഗ് ഉണ്ടെന്നും വേഗത കുറയ്ക്കണമെന്നും സൂചിപ്പിക്കുന്നു.',
      en: 'Warns of a pedestrian zebra crossing ahead where pedestrians have right of way.',
    },
  },
  {
    id: 15,
    category: 'cautionary_signs',
    signType: 'school_ahead',
    question: {
      ml: 'സ്കൂൾ കുട്ടികൾ ഓടുന്നതായി കാണിക്കുന്ന ത്രികോണ ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a triangular sign showing school children with schoolbags indicate?',
    },
    options: {
      ml: ['പാർക്ക്', 'സ്കൂൾ മുന്നിൽ (School Ahead)', 'കുട്ടികളുടെ കളിസ്ഥലം', 'കാൽനട നിരോധിച്ചിരിക്കുന്നു'],
      en: ['Public Park', 'School Ahead (Slow Down)', 'Children Playground', 'Pedestrians Prohibited'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മുന്നിൽ സ്കൂൾ ഉള്ളതിനാൽ കുട്ടികൾ പെട്ടെന്ന് റോഡിലേക്ക് പ്രവേശിക്കാൻ സാധ്യതയുണ്ട്; വേഗത കുറയ്ക്കണം.',
      en: 'Warns that a school is nearby and children may unexpectedly cross; reduce speed immediately.',
    },
  },
  {
    id: 16,
    category: 'cautionary_signs',
    signType: 'level_crossing_guarded',
    question: {
      ml: 'റെയിൽവേ വേലി (Fence) അടയാളമുള്ള ത്രികോണ ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a triangular warning sign displaying a railway gate/fence indicate?',
    },
    options: {
      ml: ['കാവൽക്കാരൻ ഉള്ള ലെവൽ ക്രോസ് (Guarded Level Crossing)', 'കാവൽക്കാരൻ ഇല്ലാത്ത ലെവൽ ക്രോസ്', 'റെയിൽവേ സ്റ്റേഷൻ', 'ട്രെയിൻ കടന്നുപോകുന്ന വഴി'],
      en: ['Guarded Railway Level Crossing Ahead', 'Unguarded Railway Crossing', 'Railway Station', 'Train Depot'],
    },
    correctAnswer: 0,
    explanation: {
      ml: 'റെയിൽവേ വേലിയുടെ ചിഹ്നം കാവൽക്കാരൻ ഉള്ള (ഗേറ്റുള്ള) ലെവൽ ക്രോസിംഗിനെ സൂചിപ്പിക്കുന്നു.',
      en: 'A fence symbol indicates a manned/guarded railway level crossing with gates.',
    },
  },
  {
    id: 17,
    category: 'cautionary_signs',
    signType: 'level_crossing_unguarded',
    question: {
      ml: 'ആവി എൻജിന്റെ (Steam Engine) പടമുള്ള ത്രികോണ ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a triangular warning sign depicting a train locomotive engine signify?',
    },
    options: {
      ml: ['കാവൽക്കാരൻ ഉള്ള ലെവൽ ക്രോസ്', 'കാവൽക്കാരൻ ഇല്ലാത്ത ലെവൽ ക്രോസ് (Unguarded Level Crossing)', 'റെയിൽവേ മ്യൂസിയം', 'മെട്രോ സ്റ്റേഷൻ'],
      en: ['Guarded Level Crossing', 'Unguarded Railway Level Crossing Ahead (Proceed with Caution)', 'Railway Museum', 'Metro Station'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'കാവൽക്കാരോ ഗേറ്റോ ഇല്ലാത്ത ലെവൽ ക്രോസിംഗാണ്. വാഹനം നിർത്തി ഇരുവശവും നോക്കി ട്രെയിൻ വരുന്നില്ലെന്ന് ഉറപ്പുവരുത്തണം.',
      en: 'Indicates an unguarded crossing without gates. Drivers must stop, look both ways, and listen before crossing.',
    },
  },
  {
    id: 18,
    category: 'cautionary_signs',
    signType: 'roundabout',
    question: {
      ml: 'വൃത്താകൃതിയിൽ മൂന്ന് അമ്പടയാളങ്ങൾ ഉള്ള ത്രികോണ ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a triangular sign with three circular clockwise arrows indicate?',
    },
    options: {
      ml: ['യു-ടേൺ', 'റൗണ്ട് എബൗട്ട് / ട്രാഫിക് ദ്വീപ് (Roundabout Ahead)', 'വൺവേ റോഡ്', 'റോഡ് അവസാനിക്കുന്നു'],
      en: ['U-Turn Point', 'Roundabout Ahead', 'One Way Circuit', 'Road Ends'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മുന്നിൽ റൗണ്ട് എബൗട്ട് ജംഗ്ഷൻ ഉണ്ടെന്ന് മുന്നറിയിപ്പ് നൽകുന്നു; റൗണ്ട് എബൗട്ടിലുള്ള വാഹനങ്ങൾക്ക് മുൻഗണന നൽകണം.',
      en: 'Warns of a roundabout intersection ahead where traffic inside the roundabout has right of way.',
    },
  },

  // ─── 3. INFORMATIVE SIGNS & ROAD MARKINGS ───
  {
    id: 19,
    category: 'informative_signs',
    signType: 'hospital',
    question: {
      ml: 'നീല ചതുരത്തിൽ ചുവന്ന ക്രോസും ബെഡും കാണിക്കുന്ന ചിഹ്നം എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a blue rectangular sign showing a red cross with a bed indicate?',
    },
    options: {
      ml: ['വിശ്രമ സ്ഥലം', 'ആശുപത്രി (Hospital Ahead)', 'പ്രാഥമിക ശുശ്രൂഷ കേന്ദ്രം', 'ഹോട്ടൽ'],
      en: ['Resting Place', 'Hospital Ahead', 'First Aid Post', 'Hotel / Lodge'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മുന്നിൽ ആശുപത്രി സൗകര്യമുണ്ടെന്ന് സൂചിപ്പിക്കുന്ന ഇൻഫർമേറ്റീവ് ചിഹ്നമാണിത്.',
      en: 'Informative sign indicating that a hospital facility with inpatient beds is nearby.',
    },
  },
  {
    id: 20,
    category: 'road_markings',
    signType: 'broken_white_line',
    question: {
      ml: 'റോഡിന്റെ മധ്യഭാഗത്ത് കാണുന്ന ഇടവിട്ടുള്ള വെള്ള വരകൾ (Broken White Line) എന്തിനെ അർത്ഥമാക്കുന്നു?',
      en: 'What does a broken white line along the center of the road mean?',
    },
    options: {
      ml: ['യാതൊരു കാരണവശാലും വര മറികടക്കാൻ പാടില്ല', 'സുരക്ഷിതമായിരിക്കുമ്പോൾ ലെയ്ൻ മാറുകയോ ഓവർടേക്ക് ചെയ്യുകയോ ചെയ്യാം', 'പാർക്കിംഗ് സോൺ മാത്രം', 'വേഗത പരിധി അവസാനിച്ചു'],
      en: ['Never cross the line under any circumstances', 'You may change lanes or overtake when safe to do so', 'Designated parking zone', 'Speed limit ends'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഇടവിട്ടുള്ള വെള്ളവരകൾ ഉള്ളപ്പോൾ റോഡ് സുരക്ഷിതമാണെന്ന് ഉറപ്പുവരുത്തിയ ശേഷം ലെയ്ൻ മാറാനും മറികടക്കാനും അനുവാദമുണ്ട്.',
      en: 'Broken white lines permit lane changing and overtaking when the road ahead is clear and safe.',
    },
  },
  {
    id: 21,
    category: 'road_markings',
    signType: 'solid_white_line',
    question: {
      ml: 'റോഡിന്റെ മധ്യഭാഗത്തുള്ള തുടർച്ചയായ ഒറ്റ വെള്ള വര (Solid Continuous White Line) എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a solid continuous single white line along the center of the road signify?',
    },
    options: {
      ml: ['വര മുറിച്ച് കടക്കാൻ നിയന്ത്രണമില്ല', 'വര മുറിച്ച് കടക്കാനോ മറികടക്കാനോ പാടില്ല (Do not cross or straddle)', 'യുടേൺ എടുക്കാം', 'മുകളിൽ പറഞ്ഞവയെല്ലാം'],
      en: ['Free to cross and overtake', 'Do not cross or straddle the line to overtake', 'U-turn permitted', 'All of the above'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'തുടർച്ചയായ വെള്ള വരകൾ ഉള്ള റോഡിൽ ലെയ്ൻ മാറാനോ ഓവർടേക്ക് ചെയ്യാനോ ഈ വര മുറിച്ചുകടക്കാൻ പാടില്ല.',
      en: 'A solid continuous line prohibits crossing or straddling to overtake; vehicles must stay in their lane.',
    },
  },
  {
    id: 22,
    category: 'road_markings',
    signType: 'yellow_box_junction',
    question: {
      ml: 'റോഡ് ജംഗ്ഷനുകളിൽ മഞ്ഞ വരകൾ കൊണ്ടുള്ള ബോക്സ് അടയാളം (Yellow Box Junction) കൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?',
      en: 'What is the rule at a Yellow Box Junction marked with criss-cross yellow lines?',
    },
    options: {
      ml: ['ബോക്സിനുള്ളിൽ വാഹനം നിർത്തിയിടാം', 'മുന്നിലെ എക്സിറ്റ് ക്ലിയറാണെങ്കിൽ മാത്രമേ ബോക്സ് ജംഗ്ഷനിൽ പ്രവേശിക്കാവൂ', 'ബോക്സിൽ പാർക്കിംഗ് അനുവദിച്ചിരിക്കുന്നു', 'വേഗത കൂട്ടി കടന്നുപോകണം'],
      en: ['Vehicles may stop inside the box', 'Enter only if your exit road is clear and not blocked', 'Parking allowed inside yellow box', 'Accelerate through the box'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മുന്നിലെ റോഡ് തടസ്സപ്പെട്ടിട്ടുണ്ടെങ്കിൽ യെല്ലോ ബോക്സിനുള്ളിൽ കയറി വാഹനം നിർത്തരുത്. എക്സിറ്റ് വ്യക്തമാണെങ്കിൽ മാത്രമേ പ്രവേശിക്കാവൂ.',
      en: 'Drivers must not enter the yellow box unless their exit road is clear, preventing junction gridlock.',
    },
  },
  {
    id: 23,
    category: 'road_markings',
    signType: null,
    question: {
      ml: 'സീബ്ര ലൈനുകൾ (Zebra Crossing) ഉള്ള കാൽനട ക്രോസിംഗിൽ ഡ്രൈവർ എന്ത് ചെയ്യണം?',
      en: 'What must a driver do when approaching a pedestrian Zebra Crossing?',
    },
    options: {
      ml: ['ഹോൺ മുഴക്കി വേഗത്തിൽ കടന്നുപോകുക', 'കാൽനടക്കാർ റോഡ് മുറിച്ചുകടക്കാൻ തയ്യാറെടുക്കുകയാണെങ്കിൽ വാഹനം നിർത്തി അവർക്ക് വഴി നൽകണം', 'കാൽനടക്കാരോട് നിൽക്കാൻ കൈ കാണിക്കുക', 'വാഹനം റിവേഴ്സ് എടുക്കുക'],
      en: ['Sound horn and accelerate through', 'Slow down and stop to give pedestrians right of way to cross', 'Signal pedestrians to stop', 'Reverse the vehicle'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'സീബ്ര ക്രോസിംഗിൽ കാൽനടക്കാർക്ക് പൂർണ്ണ മുൻഗണനയുണ്ട്. അവർ റോഡ് മുറിച്ചുകടക്കാൻ തുടങ്ങിയാൽ വാഹനം നിർത്തി വഴി നൽകണം.',
      en: 'Pedestrians have absolute right of way at zebra crossings; drivers must stop safely to let them cross.',
    },
  },

  // ─── 4. SIGNALS & TRAFFIC POLICE GESTURES ───
  {
    id: 24,
    category: 'signals',
    signType: 'traffic_lights_amber',
    question: {
      ml: 'ഒരു ട്രാഫിക് സിഗ്നലിൽ മിന്നുന്ന ആംബർ ലൈറ്റ് (Flashing Amber Light) നിങ്ങൾ കാണുമ്പോൾ എന്തു ചെയ്യണം?',
      en: 'What should you do when you see a flashing amber traffic signal light?',
    },
    options: {
      ml: ['വാഹനം നിർത്തി കാത്തിരിക്കുക', 'വേഗത കുറച്ച് അതീവ ജാഗ്രതയോടെ സുരക്ഷിതമായി മുന്നോട്ട് പോകുക', 'വേഗത്തിൽ ഓടിച്ചു പോകുക', 'യൂ-ടേൺ എടുക്കുക'],
      en: ['Come to a permanent stop', 'Slow down, proceed with extreme caution and yield to crossing traffic', 'Accelerate rapidly', 'Take an immediate U-turn'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മിന്നുന്ന ആംബർ ലൈറ്റ് ജാഗ്രതാ നിർദ്ദേശമാണ്; വേഗത കുറച്ച് ഇരുവശത്തുനിന്നും വാഹനങ്ങൾ വരുന്നില്ലെന്ന് ഉറപ്പുവരുത്തി കടന്നുപോകണം.',
      en: 'A flashing amber signal indicates caution; slow down and proceed carefully, yielding to cross traffic.',
    },
  },
  {
    id: 25,
    category: 'signals',
    signType: 'police_stop_front',
    question: {
      ml: 'ട്രാഫിക് പോലീസ് ഉദ്യോഗസ്ഥൻ വലതുകൈ മുന്നോട്ട് ഉയർത്തി ഉള്ളംകൈ കാണിച്ച് നിൽക്കുന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a traffic police officer with his right hand raised vertically with palm facing front indicate?',
    },
    options: {
      ml: ['മുന്നിൽ നിന്നും വരുന്ന വാഹനങ്ങൾ നിർത്താൻ അഭ്യർത്ഥിക്കുന്നു (Stop vehicles from front)', 'പിന്നിൽ നിന്നും വരുന്ന വാഹനം നിർത്താൻ', 'വേഗത കൂട്ടാൻ നിർദ്ദേശിക്കുന്നു', 'വലത്തേക്ക് തിരിയാൻ ആവശ്യപ്പെടുന്നു'],
      en: ['Stop vehicles approaching from the front', 'Stop vehicles approaching from behind', 'Accelerate vehicles', 'Turn right immediately'],
    },
    correctAnswer: 0,
    explanation: {
      ml: 'പോലീസ് ഓഫീസറുടെ മുന്നിൽ നിന്നും വരുന്ന വാഹനങ്ങൾ നിർത്തണം എന്നാണ് ഈ കൈസിഗ്നലിന്റെ അർത്ഥം.',
      en: 'This hand signal instructs all vehicles approaching from the front of the officer to stop.',
    },
  },
  {
    id: 26,
    category: 'signals',
    signType: 'police_stop_rear',
    question: {
      ml: 'ട്രാഫിക് പോലീസ് ഉദ്യോഗസ്ഥൻ ഇടതുകൈ വശത്തേക്ക് നീട്ടി ഉള്ളംകൈ പുറകിലേക്ക് കാണിക്കുന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does an officer holding his arm horizontally with the palm facing backward indicate?',
    },
    options: {
      ml: ['പിന്നിൽ നിന്നും വരുന്ന വാഹനം നിർത്താൻ അഭ്യർത്ഥിക്കുന്നു (Stop vehicles from rear)', 'മുന്നിൽ നിന്നുള്ള വാഹനം നിർത്താൻ', 'ഇടത്തോട്ട് തിരിയാൻ', 'വാഹനം മറികടക്കാൻ'],
      en: ['Stop vehicles approaching from behind', 'Stop vehicles approaching from front', 'Turn left', 'Overtake vehicle'],
    },
    correctAnswer: 0,
    explanation: {
      ml: 'പോലീസ് ഓഫീസറുടെ പുറകിൽ നിന്നും വരുന്ന വാഹനങ്ങൾ നിർത്തണം എന്ന് സൂചിപ്പിക്കുന്നു.',
      en: 'This manual signal directs traffic approaching from behind the officer to come to a stop.',
    },
  },
  {
    id: 27,
    category: 'signals',
    signType: 'driver_hand_right_turn',
    question: {
      ml: 'ഒരു ഡ്രൈവർ വലതുകൈ ജന്നലിലൂടെ തിരശ്ചീനമായി പുറത്തേക്ക് നീട്ടി ഉള്ളംകൈ മുന്നോട്ട് പിടിക്കുന്നത് എന്തിനെ സൂചിപ്പിക്കുന്നു?',
      en: 'What does a driver extending their right arm horizontally out of the window signify?',
    },
    options: {
      ml: ['വാഹനം നിർത്താൻ ഉദ്ദേശിക്കുന്നു', 'വലത്തേക്ക് തിരിയാൻ ഉദ്ദേശിക്കുന്നു (Intending to Turn Right)', 'ഇടത്തേക്ക് തിരിയാൻ ഉദ്ദേശിക്കുന്നു', 'വേഗത കുറയ്ക്കാൻ ഉദ്ദേശിക്കുന്നു'],
      en: ['Intending to stop', 'Intending to turn right or change to the right lane', 'Intending to turn left', 'Intending to slow down'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഡ്രൈവർ വലത്തോട്ട് തിരിയാനോ അല്ലെങ്കിൽ വലത് ലെയ്നിലേക്ക് മാറാനോ ഉദ്ദേശിക്കുന്നു എന്ന് പിന്നിലുള്ളവർക്ക് നൽകുന്ന സിഗ്നൽ.',
      en: 'Driver hand signal indicating the clear intention to execute a right turn or pull out rightward.',
    },
  },

  // ─── 5. DRIVING RULES, MECHANICS & SAFETY ───
  {
    id: 28,
    category: 'driving_rules',
    signType: null,
    question: {
      ml: 'ഡ്രൈവിംഗിലെ "MSM" തത്വം എന്തിനെ പ്രതിനിധീകരിക്കുന്നു?',
      en: 'What does the standard driving routine acronym "MSM" stand for?',
    },
    options: {
      ml: ['Motor, Speed, Mirror', 'Mirror - Signal - Manoeuvre', 'Manage, Stop, Move', 'Monitor, Steer, Maintain'],
      en: ['Motor, Speed, Mirror', 'Mirror - Signal - Manoeuvre', 'Manage, Stop, Move', 'Monitor, Steer, Maintain'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഏതൊരു തിരിവും ലെയ്ൻ മാറ്റവും നടത്തുന്നതിന് മുൻപ് ആദ്യം കണ്ണാടി നോക്കുക (Mirror), സിഗ്നൽ നൽകുക (Signal), തുടർന്ന് വാഹനം തിരിക്കുക (Manoeuvre).',
      en: 'MSM stands for Mirror, Signal, Manoeuvre — the fundamental defensive driving procedure before any turn or lane change.',
    },
  },
  {
    id: 29,
    category: 'driving_rules',
    signType: null,
    question: {
      ml: '"ക്ലച്ച് റൈഡിംഗ്" (Clutch Riding) എന്നതുകൊണ്ട് അർത്ഥമാക്കുന്നത് എന്ത്?',
      en: 'What is meant by the term "Clutch Riding" in manual vehicle driving?',
    },
    options: {
      ml: ['ക്ലച്ച് ഒട്ടും ഉപയോഗിക്കാതിരിക്കുക', 'ക്ലച്ച് പെഡലിൽ എപ്പോഴും കാൽ വെച്ച് വാഹനം ഓടിക്കുന്നത്', 'ശരിയായ രീതിയിൽ ഗിയർ മാറ്റുന്നത്', 'വാഹനം ബ്രേക്ക് ചെയ്യുന്നത്'],
      en: ['Never using the clutch', 'Resting foot constantly on the clutch pedal while driving', 'Smooth gear shifting', 'Emergency braking'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'വാഹനം ഓടിക്കുമ്പോൾ ആവശ്യമില്ലാതെ ക്ലച്ച് പെഡലിൽ കാൽ വെച്ചിരിക്കുന്നത് ക്ലച്ച് പ്ലേറ്റിന്റെ തേയ്മാനത്തിനും കേടുപാടുകൾക്കും ഇടയാക്കും.',
      en: 'Resting your foot on the clutch pedal while moving causes excessive wear and early failure of clutch friction plates.',
    },
  },
  {
    id: 30,
    category: 'driving_rules',
    signType: null,
    question: {
      ml: 'കുത്തനെയുള്ള ഇറക്കത്തിലേക്ക് വാഹനം ഓടിക്കുമ്പോൾ ഏറ്റവും സുരക്ഷിതമായ മാർഗ്ഗം ഏതാണ്?',
      en: 'What is the safest procedure when driving down a steep incline or descent?',
    },
    options: {
      ml: ['ന്യൂട്രലിൽ ഇട്ട് ഫ്രീയായി വിടുക', 'കയറ്റം കയറാൻ ഉപയോഗിച്ച അതേ ലോവർ ഗിയർ ഉപയോഗിച്ച് എൻജിൻ ബ്രേക്കിംഗ് പ്രയോജനപ്പെടുത്തുക', 'ക്ലച്ച് പൂർണ്ണമായി ചവിട്ടിപ്പിടിക്കുക', 'ഇഗ്നിഷൻ ഓഫ് ചെയ്യുക'],
      en: ['Coast in neutral gear', 'Select an appropriate low gear utilizing engine compression braking', 'Keep clutch fully depressed', 'Switch off the engine ignition'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഇറക്കത്തിൽ ന്യൂട്രൽ ആക്കുകയോ ക്ലച്ച് ചവിട്ടുകയോ അരുത്. ലോവർ ഗിയറിലിട്ടാൽ എൻജിൻ ബ്രേക്കിംഗ് വഴി വാഹനം നിയന്ത്രണവിധേയമായിരിക്കും.',
      en: 'Never coast downhill in neutral or with the clutch pressed. Low gear provides engine braking to prevent brake overheating.',
    },
  },
  {
    id: 31,
    category: 'driving_rules',
    signType: null,
    question: {
      ml: 'രാത്രിയിൽ എതിരെ വാഹനം വരുമ്പോൾ നിങ്ങളുടെ വാഹനത്തിന്റെ ഹെഡ് ലൈറ്റ് ഏത് രീതിയിൽ ആയിരിക്കണം?',
      en: 'How should your headlights be adjusted when a vehicle approaches from the opposite direction at night?',
    },
    options: {
      ml: ['ഹൈ ബീമിൽ തന്നെ തുടരുക', 'ലോ ബീമിലേക്ക് മാറ്റണം (Dip to Low Beam)', 'ഹെഡ് ലൈറ്റ് പൂർണ്ണമായി ഓഫ് ചെയ്യുക', 'ഫോഗ് ലാമ്പ് തെളിക്കുക'],
      en: ['Keep on High Beam', 'Dip headlights immediately to Low Beam', 'Turn off headlights completely', 'Turn on roof hazard lights'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'എതിരെ വരുന്ന ഡ്രൈവറുടെ കാഴ്ച മറയാതിരിക്കാൻ (Dazzle) ഹെഡ് ലൈറ്റ് ലോ ബീമിലേക്ക് മാറ്റണം (ഡിപ്പ് ചെയ്യണം).',
      en: 'Always dip your headlights to low beam to avoid blinding the oncoming driver with glare.',
    },
  },
  {
    id: 32,
    category: 'driving_rules',
    signType: null,
    question: {
      ml: 'ആംബുലൻസോ ഫയർഫോഴ്സ് വാഹനമോ സൈറൺ മുഴക്കി പിന്നിൽ അടുത്തെത്തുമ്പോൾ നിങ്ങൾ എന്ത് ചെയ്യണം?',
      en: 'What should a driver do when an emergency vehicle (ambulance/fire engine) approaches with siren blaring?',
    },
    options: {
      ml: ['മുന്നോട്ട് വേഗത്തിൽ ഓടിച്ചു പോകുക', 'വാഹനം റോഡിന്റെ ഇടതുവശത്തേക്ക് ഒതുക്കി നിർത്തി തടസ്സമില്ലാതെ കടന്നുപോകാൻ വഴി നൽകണം', 'ഹോൺ മുഴക്കി മുന്നറിയിപ്പ് നൽകുക', 'പെട്ടെന്ന് റോഡിന് നടുവിൽ നിർത്തുക'],
      en: ['Speed up to stay ahead', 'Pull over safely to the left edge of the road and let it pass unobstructed', 'Sound your horn loudly', 'Stop immediately in the center lane'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'അടിയന്തര സേവന വാഹനങ്ങൾക്ക് എപ്പോഴും റോഡിൽ ഒന്നാം മുൻഗണന നൽകണം. വാഹനം ഇടതുവശത്തേക്ക് ഒതുക്കി വഴി നൽകണം.',
      en: 'Emergency vehicles on call have priority right of way. Safely steer to the left verge and stop until they pass.',
    },
  },
  {
    id: 33,
    category: 'driving_rules',
    signType: null,
    question: {
      ml: 'ഡ്രൈവിംഗിൽ "ബ്ലൈൻഡ് സ്പോട്ട്" (Blind Spot) എന്നതുകൊണ്ട് എന്താണ് അർത്ഥമാക്കുന്നത്?',
      en: 'What is a vehicle "Blind Spot" in driving terminology?',
    },
    options: {
      ml: ['രാത്രിയിൽ ഡ്രൈവർക്ക് ഉണ്ടാകുന്ന കാഴ്ചക്കുറവ്', 'റിയർവ്യൂ മിററിലൂടെയും സൈഡ് മിററിലൂടെയും കാണാൻ കഴിയാത്ത വാഹത്തിന് ചുറ്റുമുള്ള ഭാഗങ്ങൾ', 'റോഡിലെ കുഴികൾ', 'വിൻഡ് സ്ക്രീനിലെ പൊടി'],
      en: ['Night blindness of the driver', 'Areas around the vehicle that cannot be seen in the rearview and side mirrors', 'Potholes on the road', 'Dust on the windscreen'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'മിററുകളിൽ പതിയാത്ത വശങ്ങളിലെ ഭാഗങ്ങളാണ് ബ്ലൈൻഡ് സ്പോട്ടുകൾ. ലെയ്ൻ മാറുന്നതിന് മുൻപ് തോളിലൂടെ തിരിഞ്ഞു നോക്കുന്നത് (Shoulder Check) നിർബന്ധമാണ്.',
      en: 'Blind spots are zones outside your mirror field of view. A quick shoulder check verifies these areas before changing lanes.',
    },
  },

  // ─── 6. MOTOR VEHICLES ACT 1988 & KERALA RTO LAWS ───
  {
    id: 34,
    category: 'legal_rules',
    signType: null,
    question: {
      ml: 'മോട്ടോർ വാഹന നിയമം സെക്ഷൻ 185 പ്രകാരം രക്തത്തിൽ എത്ര മില്ലിഗ്രാമിൽ കൂടുതൽ മദ്യം കണ്ടെത്തിയാൽ ശിക്ഷാർഹമാണ്?',
      en: 'Under Section 185 of the Motor Vehicles Act 1988, what is the maximum permissible blood alcohol limit while driving?',
    },
    options: {
      ml: ['100 ml രക്തത്തിൽ 30 mg ൽ കൂടുതൽ', '100 ml രക്തത്തിൽ 50 mg ൽ കൂടുതൽ', '100 ml രക്തത്തിൽ 10 mg ൽ കൂടുതൽ', '100 ml രക്തത്തിൽ 60 mg ൽ കൂടുതൽ'],
      en: ['More than 30 mg per 100 ml of blood', 'More than 50 mg per 100 ml of blood', 'More than 10 mg per 100 ml of blood', 'More than 60 mg per 100 ml of blood'],
    },
    correctAnswer: 0,
    explanation: {
      ml: '100 മില്ലിലിറ്റർ രക്തത്തിൽ 30 മില്ലിഗ്രാമിൽ കൂടുതൽ ആൽക്കഹോൾ സാന്നിധ്യം കണ്ടെത്തിയാൽ വാഹനം ഓടിക്കുന്നത് ജയിൽശിക്ഷയും കനത്ത പിഴയും ലഭിക്കാവുന്ന കുറ്റമാണ്.',
      en: 'A breath analyzer / blood test detecting exceeding 30 mg alcohol per 100 ml blood constitutes punishable drunk driving.',
    },
  },
  {
    id: 35,
    category: 'legal_rules',
    signType: null,
    question: {
      ml: 'സ്വകാര്യ ലൈറ്റ് മോട്ടോർ വാഹനം (LMV - കാർ) ഓടിക്കുന്നതിനുള്ള ഡ്രൈവിംഗ് ലൈസൻസ് ലഭിക്കുന്നതിനുള്ള കുറഞ്ഞ പ്രായപരിധി എത്രയാണ്?',
      en: 'What is the minimum legal age required to obtain a driving license for a private Light Motor Vehicle (LMV / Car)?',
    },
    options: {
      ml: ['16 വയസ്സ്', '18 വയസ്സ് (18 Years)', '20 വയസ്സ്', '21 വയസ്സ്'],
      en: ['16 Years', '18 Years', '20 Years', '21 Years'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഗിയറില്ലാത്ത ഇരുചക്രവാഹനങ്ങൾക്ക് 16 വയസ്സും കാറുകൾക്കും മറ്റ് ലൈറ്റ് മോട്ടോർ വാഹനങ്ങൾക്കും കുറഞ്ഞ പ്രായം 18 വയസ്സുമാണ്.',
      en: 'Minimum legal age is 18 years for private cars (LMV), and 16 years for 50cc gearless two-wheelers with guardian consent.',
    },
  },
  {
    id: 36,
    category: 'legal_rules',
    signType: null,
    question: {
      ml: 'ഇലക്ട്രിക് പ്രൈവറ്റ് വാഹനങ്ങളുടെ (Electric Vehicles) നമ്പർ പ്ലേറ്റിന്റെ നിറം എങ്ങനെയായിരിക്കും?',
      en: 'What is the official color scheme for the registration number plate of private Electric Vehicles (EVs)?',
    },
    options: {
      ml: ['വെള്ള പശ്ചാത്തലത്തിൽ കറുത്ത അക്ഷരങ്ങൾ', 'പച്ച പശ്ചാത്തലത്തിൽ വെളുത്ത അക്ഷരങ്ങൾ (Green plate with White letters)', 'മഞ്ഞ പശ്ചാത്തലത്തിൽ കറുത്ത അക്ഷരങ്ങൾ', 'നീല പശ്ചാത്തലത്തിൽ വെളുത്ത അക്ഷരങ്ങൾ'],
      en: ['White background with black letters', 'Green background with white letters', 'Yellow background with black letters', 'Blue background with white letters'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഇന്ത്യയിൽ സ്വകാര്യ ഇലക്ട്രിക് വാഹനങ്ങൾക്ക് പച്ച പശ്ചാത്തലത്തിൽ വെള്ള അക്ഷരങ്ങളും, കൊമേർഷ്യൽ ഇലക്ട്രിക് വാഹനങ്ങൾക്ക് പച്ചയിൽ മഞ്ഞ അക്ഷരങ്ങളുമാണ്.',
      en: 'Private electric vehicles display a green registration plate with white lettering; commercial EVs display green with yellow lettering.',
    },
  },
  {
    id: 37,
    category: 'legal_rules',
    signType: null,
    question: {
      ml: 'ഒരു സ്വകാര്യ വാഹനം ഓടിക്കുമ്പോൾ ഡ്രൈവർ നിർബന്ധമായും കൈവശം വെക്കേണ്ട രേഖകൾ ഏതെല്ലാമാണ്?',
      en: 'Which mandatory documents must a driver carry (or have in DigiLocker/mParivahan) while operating a vehicle?',
    },
    options: {
      ml: ['ലൈസൻസ് മാത്രം', 'ഡ്രൈവിംഗ് ലൈസൻസ്, ആർ.സി ബുക്ക്, ഇൻഷുറൻസ് സർട്ടിഫിക്കറ്റ്, പൊല്യൂഷൻ സർട്ടിഫിക്കറ്റ് (PUCC)', 'ആധാർ കാർഡും റേഷൻ കാർഡും', 'പാസ്പോർട്ടും വോട്ടർ ഐഡിയും'],
      en: ['Driving license only', 'Driving License, Registration Certificate (RC), Valid Insurance, and PUC Certificate', 'Aadhaar card & Ration card', 'Passport & Voter ID'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ഡ്രൈവിംഗ് ലൈസൻസ്, ആർ.സി, വാലിഡ് ഇൻഷുറൻസ്, പുകപരിശോധന സർട്ടിഫിക്കറ്റ് (PUCC) എന്നിവ നിർബന്ധമായും കൈവശം ഉണ്ടായിരിക്കണം.',
      en: 'Motor Vehicle rules mandate valid Driving License, Registration Certificate (RC), Insurance Certificate, and Pollution Certificate (PUC).',
    },
  },
  {
    id: 38,
    category: 'legal_rules',
    signType: null,
    question: {
      ml: 'റോഡപകടത്തിൽ പെടുന്നവർക്ക് ഉടനടി അടിയന്തര ആംബുലൻസ് സഹായം ലഭ്യമാക്കുന്നതിനുള്ള ടോൾ ഫ്രീ നമ്പർ ഏതാണ്?',
      en: 'What is the emergency helpline number in India to dispatch ambulance services for road accident trauma care?',
    },
    options: {
      ml: ['100', '108 / 112', '101', '1091'],
      en: ['100', '108 / 112 (National Emergency Helpline)', '101', '1091'],
    },
    correctAnswer: 1,
    explanation: {
      ml: '108 ആംബുലൻസ് അടിയന്തര സേവനത്തിനും, 112 ദേശീയ അടിയന്തര ഹെൽപ്പ് ലൈൻ നമ്പറുമാണ്.',
      en: '108 is the designated medical ambulance toll-free emergency number, unified nationally under 112.',
    },
  },
  {
    id: 39,
    category: 'driving_rules',
    signType: null,
    question: {
      ml: 'റോഡപകടത്തിൽ പെട്ട ഒരാളെ സഹായിച്ച് ആശുപത്രിയിൽ എത്തിക്കുന്ന വ്യക്തിയെ (ഗുഡ് സമരിറ്റൻ) സംബന്ധിച്ച് ശരിയായ പ്രസ്താവന ഏതാണ്?',
      en: 'Under the Good Samaritan Law, what protection is afforded to a bystander who helps a road accident victim?',
    },
    options: {
      ml: ['പോലീസ് നിർബന്ധമായും കേസിൽ സാക്ഷിയാക്കണം', 'ചികിത്സാ ചിലവുകൾ അദ്ദേഹം നൽകണം', 'അദ്ദേഹത്തിന് യാതൊരുവിധ സിവിൽ അല്ലെങ്കിൽ ക്രിമിനൽ ബാധ്യതകളോ ഉപദ്രവങ്ങളോ ഉണ്ടാകരുത്', 'ആശുപത്രിയിൽ തടഞ്ഞുവെക്കണം'],
      en: ['Police must force them into legal testimony', 'They must pay victim hospital bills', 'They are fully protected from police harassment, civil, or criminal liabilities', 'They must be detained at the hospital'],
    },
    correctAnswer: 2,
    explanation: {
      ml: 'സുപ്രീം കോടതിയുടെ ഗുഡ് സമരിറ്റൻ നിയമപ്രകാരം അപകടത്തിൽ പെട്ടവരെ സഹായിക്കുന്നവരെ പോലീസ് പീഡിപ്പിക്കാനോ ആശുപത്രിയിൽ തടഞ്ഞുവെക്കാനോ പാടില്ല.',
      en: 'Supreme Court guidelines protect Good Samaritans from legal harassment, mandatory disclosure of identity, or hospital payment liabilities.',
    },
  },
  {
    id: 40,
    category: 'legal_rules',
    signType: null,
    question: {
      ml: 'കേരളത്തിൽ മോട്ടോർ വാഹന വകുപ്പ് നൽകുന്ന ലേണേഴ്സ് ലൈസൻസിന്റെ (LL) കാലാവധി എത്ര മാസമാണ്?',
      en: 'What is the legal validity period of a Learner\'s Driving License issued by the RTO in Kerala?',
    },
    options: {
      ml: ['3 മാസം', '6 മാസം (6 Months)', '1 വർഷം', '2 വർഷം'],
      en: ['3 Months', '6 Months', '1 Year', '2 Years'],
    },
    correctAnswer: 1,
    explanation: {
      ml: 'ലേണേഴ്സ് ലൈസൻസിന്റെ സാധുത 6 മാസമാണ്. എടുത്ത തീയതി മുതൽ 30 ദിവസങ്ങൾക്ക് ശേഷം ഡ്രൈവിംഗ് ടെസ്റ്റിന് അപേക്ഷിക്കാം.',
      en: 'A Learner\'s License is valid for 6 months. The candidate becomes eligible to book the practical driving test after 30 days of LL issue.',
    },
  },
];

// Helper to get 20 randomized, shuffled questions for an exam run
export function getRandomizedExam(count = 20) {
  const shuffled = [...EXAM_QUESTIONS].sort(() => Math.random() - 0.5);
  const selected = shuffled.slice(0, Math.min(count, EXAM_QUESTIONS.length));
  
  // Also shuffle options per question so option A/B/C/D is not predictable
  return selected.map((q, idx) => {
    // Keep track of original correct answer
    const originalCorrect = q.correctAnswer;
    const indices = [0, 1, 2, 3];
    indices.sort(() => Math.random() - 0.5);
    
    return {
      ...q,
      examIndex: idx + 1,
      options: {
        ml: indices.map((i) => q.options.ml[i]),
        en: indices.map((i) => q.options.en[i]),
      },
      correctAnswer: indices.indexOf(originalCorrect),
    };
  });
}
