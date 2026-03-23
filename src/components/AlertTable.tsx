import React from 'react';
import AlertRow from './AlertRow';

export interface Alert {
  id: string;
  title: string;
  type: string;
  date: string;
  level: 'High' | 'Medium' | 'Critical';
  status: 'active' | 'resolved';
}

interface AlertTableProps {
  alerts: Alert[];
  onMarkResolved: (id: string) => void;
}

const AlertTable: React.FC<AlertTableProps> = ({ alerts, onMarkResolved }) => {

  return (
    <div className="bg-surface-container rounded-xl overflow-hidden border border-white/5">
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full border-collapse text-left">
          <thead className="bg-surface-container-high/50 border-b border-white/5">
            <tr>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-outline">Incident ID</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-outline">Type d'alerte</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-outline">Date & Heure</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-outline">Danger</th>
              <th className="px-8 py-4 text-[10px] uppercase tracking-widest font-bold text-outline text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-white/5">
            {alerts.map((alert) => (
              <AlertRow key={alert.id} alert={alert} onMarkResolved={onMarkResolved} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AlertTable;
