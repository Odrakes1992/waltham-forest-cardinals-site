"use client";

import { motion, useInView } from "framer-motion";

import { useRef } from "react";

export default function FixturesPage() {
  const headerRef = useRef(null);
  const tableRef = useRef(null);

  const headerInView = useInView(headerRef, { once: true });
  const tableInView = useInView(tableRef, { once: true, margin: "-100px" });

  // Mock fixture data
  const fixtures = [
    {
      date: "15 Aug 2025",
      opponent: "London Eagles",
      venue: "Home",
      result: "W",
      score: "89-76",
      competition: "London Basketball League",
    },
    {
      date: "08 Aug 2025",
      opponent: "Thames Tigers",
      venue: "Away",
      result: "L",
      score: "72-84",
      competition: "London Basketball League",
    },
    {
      date: "01 Aug 2025",
      opponent: "Hackney Hawks",
      venue: "Home",
      result: "W",
      score: "95-68",
      competition: "London Basketball League",
    },
    {
      date: "25 Jul 2025",
      opponent: "Croydon Crusaders",
      venue: "Away",
      result: "W",
      score: "78-71",
      competition: "London Basketball League",
    },
    {
      date: "18 Jul 2025",
      opponent: "Richmond Rockets",
      venue: "Home",
      result: "W",
      score: "91-79",
      competition: "London Basketball League",
    },
    {
      date: "11 Jul 2025",
      opponent: "Barnet Bulldogs",
      venue: "Away",
      result: "L",
      score: "65-73",
      competition: "London Basketball League",
    },
    {
      date: "04 Jul 2025",
      opponent: "Enfield Eagles",
      venue: "Home",
      result: "W",
      score: "88-82",
      competition: "London Basketball League",
    },
    {
      date: "27 Jun 2025",
      opponent: "Bromley Bears",
      venue: "Away",
      result: "W",
      score: "76-69",
      competition: "London Basketball League",
    },
    {
      date: "20 Jun 2025",
      opponent: "Kingston Kings",
      venue: "Home",
      result: "L",
      score: "71-85",
      competition: "London Basketball League",
    },
    {
      date: "13 Jun 2025",
      opponent: "Sutton Spartans",
      venue: "Away",
      result: "W",
      score: "93-77",
      competition: "London Basketball League",
    },
    {
      date: "06 Jun 2025",
      opponent: "Lewisham Lions",
      venue: "Home",
      result: "W",
      score: "87-74",
      competition: "London Basketball League",
    },
    {
      date: "30 May 2025",
      opponent: "Greenwich Griffins",
      venue: "Away",
      result: "W",
      score: "82-78",
      competition: "London Basketball League",
    },
    {
      date: "23 May 2025",
      opponent: "Bexley Blazers",
      venue: "Home",
      result: "L",
      score: "69-81",
      competition: "London Basketball League",
    },
    {
      date: "16 May 2025",
      opponent: "Redbridge Raptors",
      venue: "Away",
      result: "W",
      score: "90-73",
      competition: "London Basketball League",
    },
    {
      date: "09 May 2025",
      opponent: "Havering Hornets",
      venue: "Home",
      result: "W",
      score: "85-71",
      competition: "London Basketball League",
    },
    {
      date: "02 May 2025",
      opponent: "Newham Nets",
      venue: "Away",
      result: "W",
      score: "79-68",
      competition: "London Basketball League",
    },
    {
      date: "25 Apr 2025",
      opponent: "Tower Hamlets Titans",
      venue: "Home",
      result: "L",
      score: "73-89",
      competition: "London Basketball League",
    },
    {
      date: "18 Apr 2025",
      opponent: "Islington Islanders",
      venue: "Away",
      result: "W",
      score: "86-75",
      competition: "London Basketball League",
    },
    {
      date: "11 Apr 2025",
      opponent: "Camden Cougars",
      venue: "Home",
      result: "W",
      score: "92-81",
      competition: "London Basketball League",
    },
    {
      date: "04 Apr 2025",
      opponent: "Westminster Warriors",
      venue: "Away",
      result: "L",
      score: "67-79",
      competition: "London Basketball League",
    },
  ];

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFCFB" }}>
      {/* Header Section */}
      <motion.section
        ref={headerRef}
        className="py-16 px-4"
        style={{ backgroundColor: "#093FB4" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <h1 className="font-righteous text-5xl md:text-6xl text-white mb-4">
              FIXTURES & RESULTS
            </h1>
            <p className="text-white/80 text-xl">
              Complete history of Cardinals matches
            </p>
          </motion.div>
        </div>
      </motion.section>

      {/* Fixtures Table Section */}
      <motion.section ref={tableRef} className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="cardinals-card-hover rounded-lg overflow-hidden border-2"
            style={{
              borderColor: "#FFD8D8",
              backgroundColor: "rgba(255, 216, 216, 0.05)",
            }}
            initial={{ opacity: 0, y: 50 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Table Header */}
            <div className="p-6" style={{ backgroundColor: "#093FB4" }}>
              <h2 className="font-righteous text-2xl text-white mb-4">
                2025 Season Results
              </h2>
              <div className="grid grid-cols-7 gap-4 text-white font-righteous text-sm">
                <div>DATE</div>
                <div>OPPONENT</div>
                <div>VENUE</div>
                <div>RESULT</div>
                <div>SCORE</div>
                <div>COMPETITION</div>
                <div>STATUS</div>
              </div>
            </div>

            {/* Table Body */}
            <div className="divide-y" style={{ borderColor: "#FFD8D8" }}>
              {fixtures.map((fixture, index) => (
                <motion.div
                  key={index}
                  className="grid grid-cols-7 gap-4 p-4 hover:bg-opacity-20 transition-colors duration-200"
                  style={{
                    backgroundColor:
                      index % 2 === 0
                        ? "rgba(255, 216, 216, 0.1)"
                        : "transparent",
                  }}
                  initial={{ opacity: 0, x: -20 }}
                  animate={tableInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                  whileHover={{ backgroundColor: "rgba(9, 63, 180, 0.1)" }}
                >
                  <div
                    className="text-sm font-medium"
                    style={{ color: "#093FB4" }}
                  >
                    {fixture.date}
                  </div>
                  <div
                    className="text-sm font-medium"
                    style={{ color: "#ED3500" }}
                  >
                    {fixture.opponent}
                  </div>
                  <div className="text-sm" style={{ color: "#093FB4" }}>
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        fixture.venue === "Home"
                          ? "bg-green-100 text-green-800"
                          : "bg-blue-100 text-blue-800"
                      }`}
                    >
                      {fixture.venue}
                    </span>
                  </div>
                  <div className="text-sm">
                    <span
                      className={`px-2 py-1 rounded text-xs font-bold ${
                        fixture.result === "W"
                          ? "bg-green-500 text-white"
                          : "bg-red-500 text-white"
                      }`}
                    >
                      {fixture.result}
                    </span>
                  </div>
                  <div
                    className="text-sm font-bold"
                    style={{ color: "#093FB4" }}
                  >
                    {fixture.score}
                  </div>
                  <div className="text-xs" style={{ color: "#ED3500" }}>
                    {fixture.competition}
                  </div>
                  <div className="text-xs">
                    <span className="px-2 py-1 rounded bg-gray-100 text-gray-800 font-medium">
                      PLAYED
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Season Stats */}
          <motion.div
            className="mt-12 grid md:grid-cols-4 gap-6"
            initial={{ opacity: 0, y: 30 }}
            animate={tableInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div
              className="cardinals-card-hover p-6 rounded-lg text-center border-2"
              style={{
                borderColor: "#FFD8D8",
                backgroundColor: "rgba(255, 216, 216, 0.1)",
              }}
            >
              <div
                className="text-3xl font-righteous mb-2"
                style={{ color: "#093FB4" }}
              >
                {fixtures.filter((f) => f.result === "W").length}
              </div>
              <div className="text-sm font-medium" style={{ color: "#ED3500" }}>
                WINS
              </div>
            </div>
            <div
              className="cardinals-card-hover p-6 rounded-lg text-center border-2"
              style={{
                borderColor: "#FFD8D8",
                backgroundColor: "rgba(255, 216, 216, 0.1)",
              }}
            >
              <div
                className="text-3xl font-righteous mb-2"
                style={{ color: "#093FB4" }}
              >
                {fixtures.filter((f) => f.result === "L").length}
              </div>
              <div className="text-sm font-medium" style={{ color: "#ED3500" }}>
                LOSSES
              </div>
            </div>
            <div
              className="cardinals-card-hover p-6 rounded-lg text-center border-2"
              style={{
                borderColor: "#FFD8D8",
                backgroundColor: "rgba(255, 216, 216, 0.1)",
              }}
            >
              <div
                className="text-3xl font-righteous mb-2"
                style={{ color: "#093FB4" }}
              >
                {fixtures.length}
              </div>
              <div className="text-sm font-medium" style={{ color: "#ED3500" }}>
                PLAYED
              </div>
            </div>
            <div
              className="cardinals-card-hover p-6 rounded-lg text-center border-2"
              style={{
                borderColor: "#FFD8D8",
                backgroundColor: "rgba(255, 216, 216, 0.1)",
              }}
            >
              <div
                className="text-3xl font-righteous mb-2"
                style={{ color: "#093FB4" }}
              >
                {Math.round(
                  (fixtures.filter((f) => f.result === "W").length /
                    fixtures.length) *
                    100
                )}
                %
              </div>
              <div className="text-sm font-medium" style={{ color: "#ED3500" }}>
                WIN RATE
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Footer */}
      <footer
        className="text-white py-12 px-4"
        style={{ backgroundColor: "#093FB4" }}
      >
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-righteous text-xl mb-4">
                Waltham Forest Cardinals
              </h3>
              <p className="text-white/70">London's Premier Basketball Club</p>
            </div>
            <div>
              <h4 className="font-righteous mb-4">Teams</h4>
              <ul className="space-y-2 text-white/70">
                <li>Senior Men</li>
                <li>Senior Women</li>
                <li>Youth Teams</li>
                <li>Development Squad</li>
              </ul>
            </div>
            <div>
              <h4 className="font-righteous mb-4">Quick Links</h4>
              <ul className="space-y-2 text-white/70">
                <li>Results</li>
                <li>Fixtures</li>
                <li>Gallery</li>
                <li>News</li>
              </ul>
            </div>
            <div>
              <h4 className="font-righteous mb-4">Follow Us</h4>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs">f</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs">t</span>
                </div>
                <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center">
                  <span className="text-xs">i</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
