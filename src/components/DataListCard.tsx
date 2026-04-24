import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export interface ListColumn<T> {
  label: string;
  render: (item: T) => ReactNode;
}

interface DataListCardProps<T extends { id: string }> {
  items: T[];
  columns: ListColumn<T>[];
  header: (item: T) => ReactNode;
  actions?: (item: T) => ReactNode;
}

const DataListCard = <T extends { id: string }>({
  items,
  columns,
  header,
  actions,
}: DataListCardProps<T>) => {
  return (
    <div className="flex flex-col items-center">
      {items.map((item, index) => (
        <motion.div
          key={item.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          className="w-full p-8 border-b border-zinc-900 flex flex-col items-center justify-center gap-6 text-center"
        >
          <div className="flex justify-center">{header(item)}</div>

          <div className="flex items-center justify-center gap-8 flex-wrap">
            {columns.map((column) => (
              <div key={column.label} className="flex flex-col items-center">
                <span className="text-[10px] font-black uppercase text-zinc-600 tracking-tighter">{column.label}</span>
                <span className="text-2xl font-black italic text-white">{column.render(item)}</span>
              </div>
            ))}
            {actions ? actions(item) : null}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default DataListCard;
