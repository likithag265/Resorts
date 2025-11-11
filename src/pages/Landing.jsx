"use client";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <>
      <style>{`
@import url('https://fonts.googleapis.com/css2?family=Tenor+Sans&family=Prata&display=swap');

* {
  font-family: 'Tenor Sans', sans-serif;
  scroll-behavior: smooth;
}

.font-heading {
  font-family: 'Prata', serif;
  font-weight: 400;
  letter-spacing: 0.6px;
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

.fade-in-up {
  animation: fadeInUp 1.2s ease-out forwards;
}

.parallax {
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
}

@keyframes shine {
  0% { background-position: -200% center; }
  100% { background-position: 200% center; }
}

.wave-divider {
  position: relative;
  height: 80px;
  background: linear-gradient(to bottom, #fff 50%, #e0f7ff 50%);
}
.wave-divider::before {
  content: "";
  position: absolute;
  top: -20px;
  width: 100%;
  height: 100%;
  background: url('https://svgshare.com/i/xFz.svg') repeat-x;
  background-size: contain;
  animation: wave 10s linear infinite;
}
@keyframes wave {
  0% { background-position-x: 0; }
  100% { background-position-x: 1000px; }
}
      `}</style>

      <section className="relative flex flex-col items-center pb-48 text-center text-sm text-white max-md:px-2 overflow-hidden">
        <motion.div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage: "url('./landing/land0.jpeg')",
            filter: "brightness(1.15) contrast(1.1) saturate(1.3)",
          }}
          initial={{ scale: 1 }}
          animate={{ scale: 1.05 }}
          transition={{ duration: 30, repeat: Infinity, repeatType: "mirror" }}
        ></motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>

        <div className="relative z-10 w-full flex flex-col items-center fade-in-up">

          {/* ✅ UPDATED NAVBAR */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-between items-center px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-white/10 w-full bg-white/10 backdrop-blur-md sticky top-0 z-20 shadow-sm"
          >
            <Link to="/" className="text-2xl font-heading tracking-wide text-white drop-shadow-lg">
              EL-MARIO RESORT
            </Link>

            <div className="hidden md:flex gap-6 text-white font-medium">
              {[
                { name: "Home", link: "/" },
                { name: "About", link: "/about" },
                { name: "Packages", link: "/packages" },
                { name: "Testimonials", link: "/testimonials" }, // ✅ Added
                { name: "Add Review", link: "/add-review" }, // ✅ Added
                { name: "Contact", link: "/contact" },
              ].map((item, i) => (
                <Link
                  key={i}
                  to={item.link}
                  className="hover:text-[#1CC6E8] transition duration-200 relative group"
                >
                  {item.name}
                  <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-[#1CC6E8] group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>
          </motion.nav>

          {/* Guests */}
          <Link to="/testimonials">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center justify-center w-90  mt-24 md:mt-28 rounded-full border border-slate-300 text-xs bg-black/40 backdrop-blur-sm cursor-pointer hover:scale-105 transition-all duration-300"
            >
              <div className="flex justify-content  ">
                {[
                  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=50&q=80",
                  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=50&q=80",
                  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=50&q=80",
                ].map((img, i) => (
                  <img
                    key={i}
                    className={`size-6 m-0.1 rounded-full border-2 border-white ${i > 0 ? `-translate-x-${i * 2}` : ""}`}
                    src={img}
                    alt={`guest${i + 1}`}
                  />
                ))}
              </div>
              <p className="-translate-x-2 p-4">Loved by 500+ guests worldwide</p>
            </motion.div>
          </Link>

          {/* HERO TEXT */}
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 1 }}
            className="font-heading text-[48px]/[56px] md:text-6xl/[70px] mt-8 max-w-4xl text-white drop-shadow-[0_2px_10px_rgba(0,0,0,0.7)]"
          >
            Experience Paradise <br /> at EL-MARIO RESORT
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="text-base mt-4 max-w-xl text-gray-200"
          >
            Discover where luxury meets serenity — unwind in oceanfront villas, indulge in fine cuisine, and let the waves sing you to peace.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
         <br /> <br />   <Link
              to="/signup"
              className="mt-8 bg-gradient-to-r from-[#48D6E0] via-[#1CC6E8] to-[#009DC5] bg-[length:200%_auto] animate-shine text-white px-8 py-3 rounded-full font-medium shadow-lg hover:shadow-2xl hover:scale-110 transition-all duration-500"
            >
              Book Your Stay
            </Link>
          </motion.div>
        </div>
      </section>

      {/* 🌊 Wave Divider */}
      <div className="wave-divider"></div>

      {/* Rest of your landing stays same… */}
    </>
  );
}
