import { Star, ChevronRight, MessageCircleHeart } from 'lucide-react';
import { motion } from 'motion/react';

const GoogleIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z" />
  </svg>
);

const YelpIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M23.58 14.88l-4.88-1.62c-.68-.23-1.44.07-1.77.68l-2 3.75c-.33.62-.18 1.39.36 1.8l3.8 2.9c.53.4 1.3.33 1.75-.18l2.9-3.3c.45-.5.33-3.8-.16-4.03zM12.44 12.47c-.72 0-1.3-.58-1.3-1.3V2.3c0-.72.58-1.3 1.3-1.3s1.3.58 1.3 1.3v8.87c0 .72-.58 1.3-1.3 1.3zM7.22 13.98l-4.88 1.62c-.68.23-.8 3.53-.13 4.04l2.9 3.3c.45.5 1.22.58 1.75.18l3.8-2.9c.54-.4.69-1.18.36-1.8l-2-3.75c-.33-.61-1.1-.91-1.8-.69zM15.65 2.45l-1.62 4.88c-.23.68.07 1.44.68 1.77l3.75 2c.62.33 1.39.18 1.8-.36l2.9-3.8c.4-.53.33-1.3-.18-1.75l-3.3-2.9c-.5-.45-3.8-.33-4.03.16zM2.55 9.08l4.88 1.62c.68.23 1.44-.07 1.77-.68l2-3.75c.33-.62.18-1.39-.36-1.8l-3.8-2.9c-.53-.4-1.3-.33-1.75.18l-2.9 3.3c-.45.5-.33 3.8.16 4.03z" />
  </svg>
);

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.469h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.469h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

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
                <GoogleIcon className="w-5 h-5 text-blue-600 group-hover:text-white transition-colors duration-300" />
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
                <YelpIcon className="w-5 h-5 text-red-600 group-hover:text-white transition-colors duration-300" />
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
                <FacebookIcon className="w-5 h-5 text-indigo-600 group-hover:text-white transition-colors duration-300" />
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
