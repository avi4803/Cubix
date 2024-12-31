import { useState, useRef, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Video, Film, Clapperboard, Play, Pause, Volume2, VolumeX } from 'lucide-react';
import dehaat_new_year from '../assets/Videos/Dehaat_new_year.mp4';
import Firststep from '../assets/Videos/Firststep.mp4';
import Santa from '../assets/Videos/Santa.mp4';



const services = [
  {
    icon: Video,
    title: "TOPIC 1",
    description: "Professional video editing services",
    videoUrl: dehaat_new_year
  },
  {
    icon: Film,
    title: "TOPIC 2",
    description: "Complete post-production solutions",
    videoUrl: Firststep
  },
  {
    icon: Clapperboard,
    title: "TOPIC 3",
    description: "Social media content optimization",
    videoUrl: Santa
  }
];

const VideoCard = ({ service, index, handleMuteAll }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoadedData = useCallback(() => {
    setIsLoaded(true);
  }, []);

  const togglePlay = useCallback(() => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  }, [isPlaying]);

  const toggleMute = useCallback(() => {
    setIsMuted((prevMuted) => {
      const newMuted = !prevMuted;
      if (videoRef.current) {
        videoRef.current.muted = newMuted;
      }
      if (!newMuted) {
        handleMuteAll(index);
      }
      return newMuted;
    });
  }, [handleMuteAll, index]);

  useEffect(() => {
    const handleIntersection = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          videoRef.current.play();
          setIsPlaying(true);
        } else {
          videoRef.current.pause();
          setIsPlaying(false);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5
    });

    if (videoRef.current) {
      observer.observe(videoRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <motion.div
      key={index}
      className="relative aspect-[9/16] max-w-[400px] rounded-3xl bg-green-500 overflow-hidden"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
     transition={{ duration: 0.3, delay: index * 0.1 }}
      whileHover={{ 
        scale: 1.1,
        rotateY: 5,
      }}
    >
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
          <div className="w-8 h-8 border-4 border-gray-600 border-t-white rounded-full animate-spin" />
        </div>
      )}

      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={service.videoUrl}
        loop
        muted={isMuted}
        playsInline
        preload="auto"
        onLoadedData={handleLoadedData}
      />

      <button
        className="absolute top-4 right-4 p-2 rounded-full bg-black bg-opacity-50 text-white"
        onClick={toggleMute}
      >
        {isMuted ? <VolumeX className="w-6 h-6" /> : <Volume2 className="w-6 h-6" />}
      </button>

      <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 group-hover:bg-opacity-60">
        <h3 className="text-4xl font-bold text-white mt-8 flex self-center justify-center">{service.title}</h3>
        <p className="text-white text-center mb-6 px-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
        <div className="absolute inset-0 flex flex-col items-center justify-center mt-7">
          <motion.button
            className="p-4 rounded-full bg-white bg-opacity-20 backdrop-blur-sm hover:bg-opacity-30 transition-all duration-300 disabled:opacity-50"
            onClick={togglePlay}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            disabled={!isLoaded}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-white" />
            ) : (
              <Play className="w-8 h-8 text-white" />
            )}
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

const Video1 = () => {
  const handleMuteAll = useCallback((currentIndex) => {
    document.querySelectorAll('video').forEach((video, index) => {
      if (index !== currentIndex) {
        video.muted = true;
      }
    });
  }, []);

  return (
    <section className="py-20 bg-black text-white">
      <div className="container mx-auto px-4">
        <motion.h1 
          className="text-5xl md:text-7xl font-bold text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          VIDEO EDITING SERVICE
        </motion.h1>
        
        <div className="grid grid-cols-1 p-10 md:p-0 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <VideoCard key={index} service={service} index={index} handleMuteAll={handleMuteAll} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Video1;
