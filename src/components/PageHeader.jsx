const PageHeader = ({ title, subtitle, accent }) => {
  return (
    <div className="p-16 bg-white border-b border-slate-100 text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.03),transparent_70%)] pointer-events-none" />
      <h2 className="text-7xl font-black italic uppercase tracking-tighter text-slate-900 leading-none flex flex-col md:flex-row items-center justify-center gap-4 z-10">
        {title} <span style={{ color: '#3B82F6' }}>{accent}</span>
      </h2>
      {subtitle ? (
        <p className="text-slate-400 text-[12px] font-black uppercase tracking-[0.6em] mt-8 z-10">{subtitle}</p>
      ) : null}
    </div>
  );
};

export default PageHeader;
