import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../components/ui/carousel";
import { motion, useInView } from "framer-motion";

import BasketballResults from "../components/other/ResultsCard";
import { Link } from "react-router-dom";
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
  const locationRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true });
  const resultsInView = useInView(resultsRef, { once: true, margin: "-100px" });
  const teamsInView = useInView(teamsRef, { once: true, margin: "-100px" });
  const galleryInView = useInView(galleryRef, { once: true, margin: "-100px" });
  const locationInView = useInView(locationRef, {
    once: true,
    margin: "-100px",
  });

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
            <Link to="/fixtures">
              <button className="text-white/70 hover:text-white text-lg font-righteous">
                View all results
              </button>
            </Link>
          </motion.div>

          <div className="space-y-6">
            <BasketballResults />
          </div>
        </div>
      </motion.section>

      {/* Teams Section */}
      <motion.section
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
      </motion.section>

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

      {/* Location Section */}
      <motion.section
        ref={locationRef}
        className="py-16 px-4"
        style={{ backgroundColor: "#FFFCFB" }}
      >
        <div className="max-w-6xl mx-auto">
          <motion.div
            className="flex items-center gap-4 mb-12"
            initial={{ opacity: 0, x: -50 }}
            animate={locationInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2
              className="font-righteous text-4xl"
              style={{ color: "#093FB4" }}
            >
              Find Us
            </h2>
            <div
              className="h-1 flex-1 max-w-32"
              style={{ backgroundColor: "#ED3500" }}
            ></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 30 }}
              animate={locationInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div
                className="cardinals-card-hover p-6 rounded-lg border-2"
                style={{
                  borderColor: "#FFD8D8",
                  backgroundColor: "rgba(255, 216, 216, 0.1)",
                }}
              >
                <h3
                  className="font-righteous text-2xl mb-4"
                  style={{ color: "#093FB4" }}
                >
                  🏀 Home Court
                </h3>
                <div className="space-y-3 text-lg">
                  <div className="flex items-start gap-3">
                    <span className="text-2xl">📍</span>
                    <div>
                      <p style={{ color: "#093FB4" }} className="font-semibold">
                        Waltham Forest Sports Centre
                      </p>
                      <p style={{ color: "#ED3500" }}>Chingford Road</p>
                      <p style={{ color: "#ED3500" }}>
                        Walthamstow, London E17 4JF
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">📞</span>
                    <p style={{ color: "#093FB4" }}>020 8496 3000</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">✉️</span>
                    <p style={{ color: "#093FB4" }}>
                      info@walthamforestcardinals.com
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">🕐</span>
                    <div>
                      <p style={{ color: "#093FB4" }} className="font-semibold">
                        Training Times:
                      </p>
                      <p style={{ color: "#ED3500" }}>
                        Mon & Wed: 7:00 PM - 9:00 PM
                      </p>
                      <p style={{ color: "#ED3500" }}>
                        Sat: 10:00 AM - 12:00 PM
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="h-96 rounded-lg overflow-hidden shadow-lg"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={locationInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2476.8234567890123!2d-0.0123456789!3d51.5987654321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sWaltham%20Forest%20Sports%20Centre!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Waltham Forest Cardinals Location"
              ></iframe>
            </motion.div>
          </div>
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
