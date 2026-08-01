const GlassCard = ({ children, className = "" }) => {
  return (
    <div
      className={`rounded-3xl border border-white/50 bg-slate-900/70 backdrop-blur-xl shadow-[0_25px_60px_rgba(0,0,0,0.12)] ${className}`}
    >
      {children}
    </div>
  );
};

export default GlassCard;
