import { motion } from 'framer-motion';

const DataListCard = ({ items, columns, header, actions }) => {
  return (
    <div className="w-full flex flex-col items-center justify-center px-10 py-16">
      <table className="premium-table border-spacing-y-12 w-full max-w-7xl">
        <thead>
          <tr>
            <th className="text-left px-16">Performance Detail</th>
            {columns.map((column) => (
              <th key={column.label}>{column.label}</th>
            ))}
            {actions && <th className="px-12">Status</th>}
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <motion.tr
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.08 }}
              className="bg-white border-b border-slate-100 hover:bg-blue-50/30 transition-colors group shadow-sm rounded-[3.5rem]"
            >
              <td className="p-14 text-left rounded-l-[3.5rem]">{header(item)}</td>
              {columns.map((column) => (
                <td key={column.label} className="p-14">
                  <span className="text-5xl font-black italic text-slate-900 group-hover:text-blue-500 transition-colors">
                    {column.render(item)}
                  </span>
                </td>
              ))}
              {actions && <td className="p-14 rounded-r-[3.5rem]">{actions(item)}</td>}
            </motion.tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataListCard;
