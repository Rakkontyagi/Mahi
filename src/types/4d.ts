export interface TimeContext {
  hour: number;
  timeOfDay: 'morning' | 'afternoon' | 'evening' | 'night';
  season: 'spring' | 'summer' | 'monsoon' | 'winter';
  visitCount: number;
  lastVisit?: Date;
}

export interface UserMemory {
  id: string;
  interactions: Interaction[];
  preferences: UserPreferences;
  visitHistory: VisitRecord[];
  behaviorPatterns: BehaviorPattern[];
}

export interface Interaction {
  timestamp: Date;
  type: 'hover' | 'click' | 'scroll' | 'focus' | 'dwell';
  element: string;
  duration?: number;
  intensity: number;
}

export interface UserPreferences {
  preferredTimeOfDay: string;
  interactionStyle: 'explorer' | 'focused' | 'casual';
  contentInterest: string[];
  adaptationLevel: number;
}

export interface VisitRecord {
  timestamp: Date;
  duration: number;
  pagesVisited: string[];
  primaryAction?: string;
}

export interface BehaviorPattern {
  pattern: string;
  frequency: number;
  lastOccurrence: Date;
  confidence: number;
}

export interface QuantumState {
  probability: number;
  state: 'collapsed' | 'superposition' | 'entangled';
  timeline: 'past' | 'present' | 'future';
}

export interface TemporalContent {
  past: React.ReactNode;
  present: React.ReactNode;
  future: React.ReactNode;
  timeline: number;
}