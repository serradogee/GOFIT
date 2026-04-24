import type { ReactNode } from 'react';

interface BaseModalProps {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: ReactNode;
}

const BaseModal = ({ isOpen, title, onClose, children }: BaseModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] bg-black/70 backdrop-blur-sm flex items-center justify-center px-4">
      <div className="w-full max-w-lg rounded-2xl border border-zinc-800 bg-zinc-900 shadow-2xl">
        <div className="flex items-center justify-between p-5 border-b border-zinc-800">
          <h3 className="text-lg font-black uppercase tracking-wide text-white">{title}</h3>
          <button onClick={onClose} className="text-zinc-400 hover:text-white text-sm font-black uppercase">
            Cerrar
          </button>
        </div>
        <div className="p-5">{children}</div>
      </div>
    </div>
  );
};

export default BaseModal;
