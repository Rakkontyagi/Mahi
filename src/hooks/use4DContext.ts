import { useState, useEffect, useCallback } from 'react';
import { TimeContext, UserMemory, Interaction } from '../types/4d';

export const use4DContext = () => {
  const [timeContext, setTimeContext] = useState<TimeContext>({
    hour: new Date().getHours(),
    timeOfDay: getTimeOfDay(new Date().getHours()),
    season: getCurrentSeason(),
    visitCount: 0
  });

  const [userMemory, setUserMemory] = useState<UserMemory>(() => {
    const stored = localStorage.getItem('4d-user-memory');
    return stored ? JSON.parse(stored) : {
      id: generateUserId(),
      interactions: [],
      preferences: {
        preferredTimeOfDay: 'afternoon',
        interactionStyle: 'explorer',
        contentInterest: [],
        adaptationLevel: 0.5
      },
      visitHistory: [],
      behaviorPatterns: []
    };
  });

  const recordInteraction = useCallback((interaction: Omit<Interaction, 'timestamp'>) => {
    const newInteraction: Interaction = {
      ...interaction,
      timestamp: new Date()
    };

    setUserMemory(prev => {
      const updated = {
        ...prev,
        interactions: [...prev.interactions.slice(-49), newInteraction]
      };
      localStorage.setItem('4d-user-memory', JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateTimeContext = useCallback(() => {
    const now = new Date();
    setTimeContext(prev => ({
      ...prev,
      hour: now.getHours(),
      timeOfDay: getTimeOfDay(now.getHours()),
      season: getCurrentSeason()
    }));
  }, []);

  const getPredictiveContent = useCallback((section: string) => {
    const recentInteractions = userMemory.interactions
      .filter(i => i.element.includes(section))
      .slice(-3);

    const interactionIntensity = recentInteractions.reduce((sum, i) => sum + i.intensity, 0) / recentInteractions.length || 0;
    
    return {
      priority: interactionIntensity > 0.6 ? 'high' : interactionIntensity > 0.3 ? 'medium' : 'low',
      adaptationLevel: Math.min(userMemory.preferences.adaptationLevel + (interactionIntensity * 0.05), 1)
    };
  }, [userMemory]);

  useEffect(() => {
    const interval = setInterval(updateTimeContext, 300000); // Update every 5 minutes
    return () => clearInterval(interval);
  }, [updateTimeContext]);

  useEffect(() => {
    setUserMemory(prev => ({
      ...prev,
      visitHistory: [...prev.visitHistory.slice(-9), {
        timestamp: new Date(),
        duration: 0,
        pagesVisited: [window.location.pathname]
      }]
    }));
  }, []);

  return {
    timeContext,
    userMemory,
    recordInteraction,
    getPredictiveContent,
    updateTimeContext
  };
};

function getTimeOfDay(hour: number): 'morning' | 'afternoon' | 'evening' | 'night' {
  if (hour >= 5 && hour < 12) return 'morning';
  if (hour >= 12 && hour < 17) return 'afternoon';
  if (hour >= 17 && hour < 22) return 'evening';
  return 'night';
}

function getCurrentSeason(): 'spring' | 'summer' | 'monsoon' | 'winter' {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'monsoon';
  if (month >= 9 && month <= 11) return 'summer';
  return 'winter';
}

function generateUserId(): string {
  return 'user_' + Math.random().toString(36).substr(2, 6) + Date.now().toString(36);
}