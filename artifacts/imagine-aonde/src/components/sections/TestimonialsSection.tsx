import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";

interface Review {
  name: string;
  city: string;
  avatar: string;
  color: string;
  text: string;
  stars: number;
}

const reviews: Review[] = [
  {
    name: "Ana Carolina",
    city: "São Paulo, SP",
    avatar: "AC",
    color: "#EC4899",
    text: "Esse guia mudou completamente minha viagem! Economizei muito nos parques e descobri restaurantes incríveis que nunca teria encontrado sozinha.",
    stars: 5,
  },
  {
    name: "Juliana Ferreira",
    city: "Belo Horizonte, MG",
    avatar: "JF",
    color: "#A855F7",
    text: "Fui para Orlando pela primeira vez com minha família e o guia foi essencial. Cada dica fez diferença, desde os FastPasses até as melhores fotos.",
    stars: 5,
  },
  {
    name: "Mariana Costa",
    city: "Rio de Janeiro, RJ",
    avatar: "MC",
    color: "#60A5FA",
    text: "Vou de volta a Orlando e já comprei o guia de novo para relembrar as dicas. Vale muito mais do que o preço! Suporte incrível também.",
    stars: 5,
  },
  {
    name: "Patricia Lima",
    city: "Curitiba, PR",
    avatar: "PL",
    color: "#34D399",
    text: "Fiz a viagem dos meus sonhos usando o guia. As dicas do SeaWorld e da Universal foram as melhores — atrações que eu nem sabia que existiam!",
    stars: 5,
  },
  {
    name: "Fernanda Souza",
    city: "Salvador, BA",
    avatar: "FS",
    color: "#F59E0B",
    text: "Super completo e em português! Não precisei ficar pesquisando em mil lugares diferentes. Tudo que precisei estava no guia.",
    stars: 5,
  },
  {
    name: "Camila Oliveira",
    city: "Porto Alegre, RS",
    avatar: "CO",
    color: "#8B5CF6",
    text: "O guia é sempre atualizado, então mesmo viajando meses depois da compra, as informações estavam todas corretas. Amei!",
    stars: 5,
  },
];

const AUTO_ADVANCE_INTERVAL = 5000; // 5 seconds

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "prev">("next");
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const itemsPerSlide = 3;
  const totalSlides = Math.ceil(reviews.length / itemsPerSlide);

  const goToSlide = useCallback((index: number) => {
    const newIndex = ((index % totalSlides) + totalSlides) % totalSlides;
    setDirection(newIndex > currentIndex ? "next" : "prev");
    setCurrentIndex(newIndex);
  }, [currentIndex, totalSlides]);

  const goToNext = useCallback(() => {
    goToSlide(currentIndex + 1);
  }, [currentIndex, goToSlide]);

  const goToPrev = useCallback(() => {
    goToSlide(currentIndex - 1);
  }, [currentIndex, goToSlide]);

  // Auto-advance effect
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      goToNext();
    }, AUTO_ADVANCE_INTERVAL);

    return () => clearInterval(interval);
  }, [isAutoPlaying, goToNext]);

  // Pause auto-play on user interaction
  const handleManualNavigation = (action: () => void) => {
    setIsAutoPlaying(false);
    action();
    // Re-enable auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), AUTO_ADVANCE_INTERVAL * 2);
  };

  const currentReviews = reviews.slice(
    currentIndex * itemsPerSlide,
    currentIndex * itemsPerSlide + itemsPerSlide
  );

  const slideVariants = {
    enter: (direction: "next" | "prev") => ({
      x: direction === "next" ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: "next" | "prev") => ({
      x: direction === "next" ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <section id="depoimentos" className="py-20 section-soft">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-sm font-semibold text-purple-500 tracking-widest uppercase">Depoimentos</span>
          <h2 className="mt-3 text-4xl md:text-5xl font-serif font-bold" style={{ color: "#1F1F1F" }}>
            
          </h2>
          <p className="mt-4 text-gray-500 text-lg max-w-xl mx-auto">
            
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => handleManualNavigation(goToPrev)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Depoimento anterior"
          >
            <ChevronLeft className="w-6 h-6 text-purple-600" />
          </button>
          <button
            onClick={() => handleManualNavigation(goToNext)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 z-10 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center hover:bg-purple-50 transition-colors focus:outline-none focus:ring-2 focus:ring-purple-400"
            aria-label="Próximo depoimento"
          >
            <ChevronRight className="w-6 h-6 text-purple-600" />
          </button>

          {/* Testimonials Slides */}
          <div className="overflow-hidden px-8">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
              >
                {currentReviews.map((r, i) => (
                  <motion.div
                    key={`${currentIndex}-${i}`}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.08, duration: 0.5 }}
                    className="card-clean p-6 flex flex-col gap-4"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold shrink-0"
                          style={{ background: `linear-gradient(135deg, ${r.color}, ${r.color}88)` }}
                        >
                          {r.avatar}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-800 text-sm">{r.name}</p>
                          <p className="text-xs text-gray-400">{r.city}</p>
                        </div>
                      </div>
                      <Quote className="w-5 h-5 text-gray-200 shrink-0" />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(r.stars)].map((_, j) => (
                        <Star key={j} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="text-sm text-gray-600 leading-relaxed">"{r.text}"</p>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dot Indicators */}
          <div className="flex justify-center gap-2 mt-8" role="tablist" aria-label="Navegação de depoimentos">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => handleManualNavigation(() => goToSlide(index))}
                className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:ring-offset-2 ${
                  index === currentIndex
                    ? "bg-purple-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                role="tab"
                aria-selected={index === currentIndex}
                aria-label={`Ver depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
