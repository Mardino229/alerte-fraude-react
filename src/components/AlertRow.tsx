import React from 'react';
import { type Alert } from './AlertTable';

interface AlertRowProps {
  alert: Alert;
  onMarkResolved: (id: string) => void;
}

const AlertRow: React.FC<AlertRowProps> = ({ alert, onMarkResolved }) => {
  const isResolved = alert.status === 'resolved';
  
  const rowClass = isResolved 
    ? 'opacity-40 grayscale-[0.5] transition-all duration-500' 
    : 'hover:bg-surface-bright/20 transition-all duration-300';
  
  let riskColor = 'text-primary border-primary/20 bg-primary/10';
  if (alert.level === 'High') riskColor = 'text-tertiary border-tertiary/20 bg-tertiary/10';
  if (alert.level === 'Critical') riskColor = 'text-error border-error/20 bg-error/10';
  if (isResolved) riskColor = 'text-outline border-outline/20 bg-outline/5';

  return (
    <tr className={rowClass} >
      <td className={`px-8 py-6 font-mono text-xs ${isResolved ? 'line-through' : 'text-on-surface'}`}>
        {alert.id}
      </td>
      <td className="px-8 py-6">
        <div className="flex flex-col">
          <span className={`text-sm font-semibold ${isResolved ? 'line-through text-outline' : 'text-on-surface'}`}>
            {alert.title}
          </span>
          <span className="text-[10px] text-outline font-medium">{alert.type}</span>
        </div>
      </td>
      <td className="px-8 py-6 text-xs text-on-surface-variant">
        {alert.date}
      </td>
      <td className="px-8 py-6">
        <span className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase tracking-wider border ${riskColor}`}>
          {alert.level}
        </span>
      </td>
      <td className="px-8 py-6 text-right">
        {!isResolved ? (
          <button 
            onClick={() => onMarkResolved(alert.id)} 
            className="group flex items-center gap-2 ml-auto text-[11px] font-bold uppercase tracking-tighter text-primary-fixed-dim hover:text-primary transition-colors"
          >
            <span className="material-symbols-outlined text-base group-hover:scale-110 transition-transform">task_alt</span>
            Marquer comme traitée
          </button>
        ) : (
          <div className="flex items-center gap-2 ml-auto text-[11px] font-bold uppercase tracking-tighter text-outline">
            <span className="material-symbols-outlined text-base">check_circle</span>
            Traitée
          </div>
        )}
      </td>
    </tr>
  );
};

export default AlertRow;
