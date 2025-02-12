import React, { useState } from 'react';
import { motion } from 'framer-motion';

interface AnimalCardProps {
  name: string;
  description: string;
  image: string;
  status: string;
}

const AnimalCard: React.FC<AnimalCardProps> = ({ name, description, image, status }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const longDescription = `${description} Эти удивительные существа играют важную роль в поддержании баланса экосистемы. Их исчезновение может привести к необратимым последствиям для всей природы. Каждый из нас может внести свой вклад в их защиту и сохранение для будущих поколений.`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative h-[400px] perspective-1000"
      onHoverStart={() => setIsFlipped(true)}
      onHoverEnd={() => setIsFlipped(false)}
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <motion.div
        className="w-full h-full relative preserve-3d transition-all duration-500"
        animate={{ rotateY: isFlipped ? 180 : 0 }}
        transition={{ duration: 0.7 }}
      >
        {/* Передняя сторона */}
        <div className="absolute w-full h-full backface-hidden">
          <div className="h-full rounded-xl bg-white/80 backdrop-blur-sm shadow-lg overflow-hidden">
            <div className="aspect-w-16 aspect-h-9 overflow-hidden">
              <img
                src={image}
                alt={name}
                className="object-cover w-full h-48"
              />
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
                <span className="px-3 py-1 text-sm rounded-full bg-primary text-white">
                  {status}
                </span>
              </div>
              <p className="text-gray-600 line-clamp-2">{description}</p>
            </div>
          </div>
        </div>

        {/* Задняя сторона */}
        <div className="absolute w-full h-full backface-hidden rotate-y-180">
          <div className="h-full rounded-xl bg-white/90 backdrop-blur-sm shadow-lg p-6 flex flex-col justify-center">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{name}</h3>
            <p className="text-gray-600 overflow-auto max-h-[280px] scrollbar-thin scrollbar-thumb-primary scrollbar-track-transparent">
              {longDescription}
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimalCard;