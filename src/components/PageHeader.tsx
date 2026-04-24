import type { ReactNode } from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  accent?: ReactNode;
}

const PageHeader = ({ title, subtitle, accent }: PageHeaderProps) => {
  return (
    <div className="p-8 bg-zinc-900 border-b border-zinc-800 text-center">
      <h2 className="text-4xl font-black italic uppercase tracking-tighter text-white leading-none flex items-center justify-center gap-2">
        {title} {accent}
      </h2>
      {subtitle ? (
        <p className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mt-2">{subtitle}</p>
      ) : null}
    </div>
  );
};

export default PageHeader;
