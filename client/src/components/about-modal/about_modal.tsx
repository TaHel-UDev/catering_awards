import { GOALS } from "@/shared/content/content";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { X } from "lucide-react";

const AboutModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#111] border border-white/10 w-full max-w-4xl max-h-[90vh] overflow-y-auto pointer-events-auto shadow-2xl relative flex flex-col md:flex-row">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-neutral-400 hover:text-white transition-colors z-10 p-2"
              >
                <X size={24} />
              </button>

              {/* Left Side - Image/Decor */}
              <div className="hidden md:block w-1/3 bg-neutral-900 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://picsum.photos/id/431/600/800')] bg-cover bg-center opacity-40"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-[#111] via-transparent to-transparent"></div>
              </div>

              {/* Right Side - Content */}
              <div className="w-full md:w-2/3 p-8 md:p-12">
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-6 uppercase">О Премии</h2>
                <p className="text-neutral-300 font-light leading-relaxed mb-8 border-l-2 border-gold-500 pl-4">
                  Получение премии «Кейтеринг года» — это признание успеха компании в профессиональном сообществе, среди экспертов и коллег, клиентов и партнеров. А еще премия «Кейтеринг года» — это замечательная церемония награждения победителей, возможность обсудить актуальные вопросы в кругу профессионалов, и главное – приятно провести время с партнерами и коллегами.
                  <br /><br />Данная профессиональная премия по-прежнему остается уникальным событием для кейтеринг-индустрии, поскольку ни на территории СНГ, ни в большинстве стран Европы кейтеринги до сих пор не имеют собственной ежегодной премии.
                </p>

                <div className="space-y-6">
                  <h4 className="text-xs uppercase tracking-widest text-neutral-500 mb-4">Что дает номинация</h4>
                  <div className="grid sm:grid-cols-1 gap-4">
                    {GOALS.map((goal, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <goal.icon className="w-5 h-5 text-gold-500 shrink-0 mt-0.5" />
                        <span className="text-sm text-neutral-300">{goal.text}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-12 pt-8 border-t border-white/10 flex justify-end">
                  <Button onClick={onClose} variant="primary">Понятно</Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default AboutModal;