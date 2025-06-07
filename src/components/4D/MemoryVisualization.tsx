import React from 'react';
import { motion } from 'framer-motion';
import { use4DContext } from '../../hooks/use4DContext';

export const MemoryVisualization: React.FC = () => {
  const { userMemory } = use4DContext();

  const getInteractionIntensityColor = (intensity: number) => {
    if (intensity > 0.7) return 'rgba(255, 255, 255, 0.8)';
    if (intensity > 0.4) return 'rgba(255, 255, 255, 0.5)';
    return 'rgba(255, 255, 255, 0.2)';
  };

  return (
    <div className="fixed bottom-4 left-4 w-48 h-24 pointer-events-none z-40">
      <div className="relative w-full h-full border border-gray-700 bg-black/80 backdrop-blur-sm p-2">
        <div className="text-xs text-gray-400 mb-1">Memory Trace</div>
        
        <div className="flex items-end space-x-0.5 h-12">
          {userMemory.interactions.slice(-15).map((interaction, index) => (
            <motion.div
              key={`${interaction.timestamp}-${index}`}
              className="flex-1 bg-white rounded-t"
              style={{
                backgroundColor: getInteractionIntensityColor(interaction.intensity),
                height: `${interaction.intensity * 100}%`,
                minHeight: '1px'
              }}
              initial={{ height: 0 }}
              animate={{ height: `${interaction.intensity * 100}%` }}
              transition={{ delay: index * 0.03 }}
            />
          ))}
        </div>

        <div className="flex justify-between text-xs text-gray-500 mt-1">
          <span>{userMemory.interactions.length}</span>
          <span>{Math.round(userMemory.preferences.adaptationLevel * 100)}%</span>
        </div>
      </div>
    </div>
  );
};