import React, { useEffect, useRef, useState } from "react";
// Mock animation library (replacing framer-motion)
import { motion, useInView } from "framer-motion";

// Mock results data
const mockResults = [
  {
    id: 1,
    date: "15 Aug 2025",
    league: "London Basketball League",
    location: "Waltham Forest, London",
    category: "Senior Men",
    homeTeam: {
      name: "CARDINALS",
      score: 89,
      emoji: "🏀",
      color: "#ED3500",
    },
    awayTeam: {
      name: "EAGLES",
      score: 76,
      emoji: "🦅",
      color: "#FFD8D8",
      textColor: "#093FB4",
    },
    result: "W",
  },
  {
    id: 2,
    date: "12 Aug 2025",
    league: "London Basketball League",
    location: "Greenwich, London",
    category: "Senior Men",
    homeTeam: {
      name: "CARDINALS",
      score: 72,
      emoji: "🏀",
      color: "#ED3500",
    },
    awayTeam: {
      name: "LIONS",
      score: 84,
      emoji: "🦁",
      color: "#FFD700",
      textColor: "#8B4513",
    },
    result: "L",
  },
  {
    id: 3,
    date: "08 Aug 2025",
    league: "London Basketball League",
    location: "Hackney, London",
    category: "Senior Men",
    homeTeam: {
      name: "CARDINALS",
      score: 95,
      emoji: "🏀",
      color: "#ED3500",
    },
    awayTeam: {
      name: "WOLVES",
      score: 88,
      emoji: "🐺",
      color: "#708090",
      textColor: "#FFFFFF",
    },
    result: "W",
  },
];

const ResultCard = ({ result, index, resultsInView }) => {
  return (
    <motion.div
      className="cardinals-card-hover rounded-lg p-4 sm:p-6 border border-white/10 mb-4"
      style={{ backgroundColor: "rgba(255, 252, 251, 0.1)" }}
      initial={{ opacity: 0, y: 30 }}
      animate={resultsInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
    >
      {/* Header info - stacks on mobile */}
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 text-white/70 text-sm gap-1 sm:gap-0">
        <span className="font-medium">{result.date}</span>
        <span className="hidden sm:block">{result.league}</span>
        <span className="text-xs sm:text-sm">{result.location}</span>
      </div>

      {/* League name for mobile */}
      <div className="block sm:hidden text-white/70 text-xs mb-3">
        {result.league}
      </div>

      {/* Main content - responsive layout */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        {/* Home team - left side */}
        <div className="flex items-center justify-between sm:justify-start gap-2 sm:gap-4 order-1">
          <div className="flex items-center gap-2 sm:gap-4">
            <div
              className="w-6 h-6 sm:w-8 sm:h-6 rounded flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: result.homeTeam.color }}
            >
              <span className="text-white text-xs font-bold">
                {result.homeTeam.emoji}
              </span>
            </div>
            <span className="text-white font-bold text-lg sm:text-2xl font-righteous">
              {result.homeTeam.name}
            </span>
          </div>
          <span className="text-white font-bold text-2xl sm:text-4xl">
            {result.homeTeam.score}
          </span>
        </div>

        {/* Center section - category and result */}
        <div className="text-center order-3 sm:order-2 py-2 sm:py-0">
          <div className="text-white/70 text-sm mb-1 sm:mb-2">
            {result.category}
          </div>
          <div className="text-white/50 text-sm sm:text-base mb-1 sm:mb-0">
            vs
          </div>
          <div
            className={`w-6 h-6 sm:w-8 sm:h-8 rounded-full flex items-center justify-center mt-1 sm:mt-2 mx-auto ${
              result.result === "W" ? "bg-green-600" : "bg-red-600"
            }`}
          >
            <span className="text-white text-xs font-bold">
              {result.result}
            </span>
          </div>
        </div>

        {/* Away team - right side */}
        <div className="flex items-center justify-between sm:justify-end gap-2 sm:gap-4 order-2 sm:order-3">
          <span className="text-white font-bold text-2xl sm:text-4xl order-2 sm:order-1">
            {result.awayTeam.score}
          </span>
          <div className="flex items-center gap-2 sm:gap-4 order-1 sm:order-2">
            <span className="text-white font-bold text-lg sm:text-2xl font-righteous">
              {result.awayTeam.name}
            </span>
            <div
              className="w-6 h-6 sm:w-8 sm:h-6 rounded flex items-center justify-center flex-shrink-0"
              style={{ backgroundColor: result.awayTeam.color }}
            >
              <span
                className="text-xs font-bold"
                style={{ color: result.awayTeam.textColor || "#FFFFFF" }}
              >
                {result.awayTeam.emoji}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const BasketballResults = ({ results = mockResults }) => {
  const [resultsInView, setResultsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setResultsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef}>
      <div className="space-y-4">
        {results.map((result, index) => (
          <ResultCard
            key={result.id}
            result={result}
            index={index}
            resultsInView={resultsInView}
          />
        ))}
      </div>
    </div>
  );
};

export default BasketballResults;
