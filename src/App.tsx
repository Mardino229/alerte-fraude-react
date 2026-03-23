import React, { useState } from 'react';
import AlertTable, { type Alert } from './components/AlertTable';
import TableHeader from './components/TableHeader';

const App: React.FC = () => {
  const [alerts, setAlerts] = useState<Alert[]>([
    { id: 'FT-8921', title: 'Suspicion de Double Débit', type: 'Transactionnelle', date: '2023-11-24 14:32', level: 'High', status: 'active' },
    { id: 'AU-0442', title: 'Connexion IP Inhabituelle', type: 'Authentification', date: '2023-11-24 12:10', level: 'Medium', status: 'active' },
    { id: 'SY-1109', title: 'Injection SQL Bloquée par WAF', type: 'Système', date: '2023-11-24 09:45', level: 'Critical', status: 'active' }
  ]);
  
  const [currentFilter, setCurrentFilter] = useState<'all' | 'active' | 'resolved'>('all');


  const handleMarkResolved = (id: string) => {
    setAlerts(prev => prev.map(alert => 
      alert.id === id ? { ...alert, status: 'resolved' } : alert
    ));
  };

  
  const filteredAlerts = alerts.filter(alert => {
    if (currentFilter === 'all') return true;
    return alert.status === currentFilter;
  });

  const activeCount = alerts.filter(a => a.status === 'active').length;

  return (
    <div className="min-h-screen text-on-surface font-body selection:bg-primary/30">
      
      <main className="md:pt-24 pt-10 min-h-screen">
        <div className="max-w-7xl mx-auto p-4">
          
          <TableHeader activeCount={activeCount} />
          
          <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex bg-surface-container p-1 rounded-lg border border-white/5">
              <button 
                onClick={() => setCurrentFilter('all')}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${currentFilter === 'all' ? 'bg-surface-container-high text-primary shadow-lg' : 'text-outline hover:text-on-surface'}`}
              >
                Toutes
              </button>
              <button 
                onClick={() => setCurrentFilter('active')}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${currentFilter === 'active' ? 'bg-surface-container-high text-primary shadow-lg' : 'text-outline hover:text-on-surface'}`}
              >
                Actives
              </button>
              <button 
                onClick={() => setCurrentFilter('resolved')}
                className={`px-6 py-2 rounded-md text-sm font-semibold transition-all duration-300 ${currentFilter === 'resolved' ? 'bg-surface-container-high text-primary shadow-lg' : 'text-outline hover:text-on-surface'}`}
              >
                Traitées
              </button>
            </div>
          </div>

          
          <div className="grid grid-cols-1 gap-8">
            {filteredAlerts.length > 0 ? (
              <AlertTable alerts={filteredAlerts} onMarkResolved={handleMarkResolved} />
            ) : (
              <div className="flex flex-col items-center justify-center py-20 bg-surface-container rounded-xl border border-dashed border-outline-variant/30 mt-8">
                <span className="material-symbols-outlined text-6xl text-outline/30 mb-4">verified_user</span>
                <p className="text-on-surface-variant font-medium">Aucun incident ne correspond aux filtres actuels.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default App;
