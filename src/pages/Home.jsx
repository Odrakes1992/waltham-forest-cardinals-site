import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { motion, useInView } from "framer-motion";

import { useRef } from "react";

const ImageCarousel = () => {
  let teamsInView = true;
  return (
    <Carousel>
      <CarouselContent>
        <CarouselItem>
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden cardinals-card-hover cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={teamsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Collection of basketballs"
              fill
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h4 className="font-righteous text-2xl text-white mb-2">
                Senior Men
              </h4>
            </div>
          </motion.div>
        </CarouselItem>
        <CarouselItem>
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden cardinals-card-hover cursor-pointer"
            initial={{ opacity: 0, y: 50 }}
            animate={teamsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <img
              src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Collection of basketballs"
              fill
              className="object-cover object-left"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-6">
              <h4 className="font-righteous text-2xl text-white mb-2">
                Senior Men
              </h4>
            </div>
          </motion.div>
        </CarouselItem>
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default function HomePage() {
  const heroRef = useRef(null);
  const resultsRef = useRef(null);
  const teamsRef = useRef(null);
  const galleryRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-100px" });
  const teamsInView = useInView(teamsRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#FFFCFB" }}>
      {/* Hero Section */}
      <motion.section
        ref={heroRef}
        className="relative h-screen overflow-hidden"
      >
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Collection of basketballs"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 cardinals-gradient-overlay"></div>
        </div>
        <div className="relative z-10 flex items-center justify-center h-full px-4">
          <div className="max-w-6xl mx-auto text-center text-white">
            <motion.h1
              className="cardinals-hero-text text-6xl md:text-8xl lg:text-9xl mb-8 leading-tight"
              initial={{ opacity: 0, y: 50 }}
              animate={heroInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              WALTHAM FOREST
              <br />
              CARDINALS
            </motion.h1>
          </div>
        </div>
      </motion.section>

      {/* Results Section */}
      <motion.section
        ref={resultsRef}
        className="py-16 px-4"
        style={{ backgroundColor: "#093FB4" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={resultsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-righteous text-4xl text-white">Results</h2>
            <div
              className="h-1 flex-1 max-w-32"
              style={{ backgroundColor: "#ED3500" }}
            ></div>
            <button className="text-white/70 hover:text-white text-lg font-righteous">
              Fixtures
            </button>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              className="cardinals-card-hover rounded-lg p-6 border border-white/10"
              style={{ backgroundColor: "rgba(255, 252, 251, 0.1)" }}
              initial={{ opacity: 0, y: 30 }}
              animate={resultsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex justify-between items-center mb-4 text-white/70">
                <span>15 Aug 2025</span>
                <span>London Basketball League</span>
                <span>Waltham Forest, London</span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div
                    className="w-8 h-6 rounded flex items-center justify-center"
                    style={{ backgroundColor: "#ED3500" }}
                  >
                    <span className="text-white text-xs font-bold">🏀</span>
                  </div>
                  <span className="text-white font-bold text-2xl font-righteous">
                    CARDINALS
                  </span>
                  <span className="text-white font-bold text-4xl">89</span>
                </div>
                <div className="text-center">
                  <div className="text-white/70 mb-2">Senior Men</div>
                  <div className="text-white/50">vs</div>
                  <div
                    className="w-8 h-8 rounded-full flex items-center justify-center mt-2"
                    style={{ backgroundColor: "#ED3500" }}
                  >
                    <span className="text-white text-xs">W</span>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-white font-bold text-4xl">76</span>
                  <span className="text-white font-bold text-2xl font-righteous">
                    EAGLES
                  </span>
                  <div
                    className="w-8 h-6 rounded flex items-center justify-center"
                    style={{ backgroundColor: "#FFD8D8" }}
                  >
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#093FB4" }}
                    >
                      🦅
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Teams Section */}
      {/* <motion.section
        ref={teamsRef}
        className="py-16 px-4"
        style={{ backgroundColor: "#FFFCFB" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={teamsInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-righteous text-4xl"
              style={{ color: "#093FB4" }}
            >
              Teams
            </h2>
            <div
              className="h-1 flex-1 max-w-32"
              style={{ backgroundColor: "#ED3500" }}
            ></div>
          </motion.div>

          <motion.h3
            className="font-righteous text-2xl mb-8"
            style={{ color: "#093FB4" }}
            initial={{ opacity: 0, y: 20 }}
            animate={teamsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Cardinals Squads
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="relative h-96 rounded-lg overflow-hidden cardinals-card-hover cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={teamsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img
                src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Collection of basketballs"
                fill
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-righteous text-2xl text-white mb-2">
                  Senior Men
                </h4>
              </div>
            </motion.div>

            <motion.div
              className="relative h-96 rounded-lg overflow-hidden cardinals-card-hover cursor-pointer"
              initial={{ opacity: 0, y: 50 }}
              animate={teamsInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <img
                src="https://images.unsplash.com/photo-1574623452334-1e0ac2b3ccb4?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Collection of basketballs"
                fill
                className="object-cover object-left"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 to-transparent"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h4 className="font-righteous text-2xl text-white mb-2">
                  Senior Women
                </h4>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section> */}

      {/* Gallery Section */}
      {/* <motion.section
        ref={galleryRef}
        className="py-16 px-4"
        style={{ backgroundColor: "#FFD8D8" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={galleryInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-righteous text-4xl"
              style={{ color: "#093FB4" }}
            >
              Gallery
            </h2>
            <div
              className="h-1 flex-1 max-w-32"
              style={{ backgroundColor: "#ED3500" }}
            ></div>
          </motion.div>

          <div className="max-w-6xl">
            <ImageCarousel />
          </div>
        </div>
      </motion.section> */}

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
