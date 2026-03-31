import { Star, ThumbsUp, ChevronRight, MessageCircleHeart } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-blue-50 via-white to-rose-50 flex items-center justify-center p-4 font-sans selection:bg-blue-100">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="max-w-md w-full bg-white/80 backdrop-blur-xl rounded-[2rem] shadow-[0_8px_40px_rgb(0,0,0,0.08)] p-8 sm:p-10 text-center border border-white"
      >
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
          className="w-20 h-20 bg-gradient-to-tr from-blue-600 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-8 shadow-lg shadow-blue-500/30 rotate-3"
        >
          <MessageCircleHeart className="w-10 h-10 text-white -rotate-3" />
        </motion.div>
        
        <div className="flex justify-center gap-1 mb-4">
          {[1, 2, 3, 4, 5].map((star) => (
            <motion.div
              key={star}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 + star * 0.1 }}
            >
              <Star className="w-7 h-7 text-amber-400 fill-amber-400 drop-shadow-sm" />
            </motion.div>
          ))}
        </div>

        <h1 className="text-3xl font-bold text-slate-900 mb-3 tracking-tight">
          How did we do?
        </h1>
        
        <p className="text-slate-500 mb-8 text-base leading-relaxed px-2">
          Your support means the world to us. If you enjoyed your experience, please take a moment to share it!
        </p>

        <div className="space-y-3">
          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-between w-full p-4 bg-white border-2 border-slate-100 hover:border-blue-500 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center group-hover:bg-blue-500 transition-colors duration-300">
                <Star className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-blue-700 transition-colors duration-300">Review on Google</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-blue-500 transition-colors duration-300" />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-between w-full p-4 bg-white border-2 border-slate-100 hover:border-red-500 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center group-hover:bg-red-500 transition-colors duration-300">
                <Star className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-red-700 transition-colors duration-300">Review on Yelp</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-red-500 transition-colors duration-300" />
          </motion.a>

          <motion.a
            href="#"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center justify-between w-full p-4 bg-white border-2 border-slate-100 hover:border-indigo-500 rounded-2xl transition-all duration-300 shadow-sm hover:shadow-md"
          >
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center group-hover:bg-indigo-500 transition-colors duration-300">
                <ThumbsUp className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-300" />
              </div>
              <span className="font-semibold text-slate-700 group-hover:text-indigo-700 transition-colors duration-300">Review on Facebook</span>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-300 group-hover:text-indigo-500 transition-colors duration-300" />
          </motion.a>
        </div>

        <div className="mt-10 pt-6 border-t border-slate-100/60">
          <p className="text-sm text-slate-400">
            Not completely satisfied?{' '}
            <a href="#" className="text-slate-600 hover:text-slate-900 font-medium underline decoration-slate-300 underline-offset-4 transition-colors">
              Give us private feedback
            </a>
          </p>
        </div>
      </motion.div>
    </div>
  );
}
