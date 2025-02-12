import React from 'react';
import WavyText from '@/components/WavyText';
import AnimalCard from '@/components/AnimalCard';
import { motion } from 'framer-motion';

const animals = [
  {
    name: "Амурский тигр",
    description: "Один из самых редких хищников планеты, обитающий на Дальнем Востоке России.",
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODQ0MTY5Mg&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    status: "Исчезающий вид"
  },
  {
    name: "Снежный барс",
    description: "Крупная кошка, обитающая в горных районах Центральной Азии.",
    image: "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODQ0MTcwNA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    status: "Уязвимый"
  },
  {
    name: "Белый медведь",
    description: "Крупнейший наземный хищник, находящийся под угрозой из-за изменения климата.",
    image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODQ0MTY5MA&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080",
    status: "Уязвимый"
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-[#F7F3EB] relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="fixed inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTcwODQ0MTY5Nw&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080"
          alt="Nature background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="min-h-screen flex flex-col items-center justify-center px-4 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="px-4 py-1 rounded-full bg-secondary text-secondary-foreground text-sm mb-6 inline-block">
              Важная миссия
            </span>
            <WavyText
              text="Защита Исчезающих Видов"
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            />
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto mb-8">
              Каждый вид важен для экосистемы нашей планеты. Вместе мы можем сохранить биоразнообразие для будущих поколений.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-primary text-white rounded-full text-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Узнать больше
            </motion.button>
          </motion.div>
        </section>

        {/* Animals Section */}
        <section className="px-4 py-20 bg-white/80 backdrop-blur-md">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Виды под угрозой исчезновения
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Познакомьтесь с удивительными животными, которым нужна наша помощь и защита.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {animals.map((animal, index) => (
                <AnimalCard key={index} {...animal} />
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Index;