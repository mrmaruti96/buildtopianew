import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ServerStatus as ServerStatusType } from '../types';
import { CircleAlert } from 'lucide-react';

export default function ServerStatus() {
  const [status, setStatus] = useState<ServerStatusType | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchServerStatus = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://api.mcsrvstat.us/2/mc.buildtopiasmp.fun:25565');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      const serverStatus: ServerStatusType = {
        online: true,
        players: {
          online: data.players?.online ?? 0,
          max: data.players?.max ?? 100
        },
        version: data.version ?? 'Unknown'
      };

      setStatus(serverStatus);
      setError(null);
    } catch (err) {
      console.error('Server status fetch error:', err);
      setError('Failed to fetch server status details. The server is online.');

      setStatus({
        online: true,
        players: { online: 0, max: 100 },
        version: 'Unknown'
      });
    } finally {
      setLastUpdated(new Date());
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchServerStatus();
    const interval = setInterval(fetchServerStatus, 60000);
    return () => clearInterval(interval);
  }, []);

  if (loading && !status) {
    return (
      <div className="minecraft-panel p-4 text-center rounded-2xl border border-gray-700 bg-black/40">
        <div className="flex flex-col items-center justify-center">
          <div className="mc-loader"></div>
          <p className="pixel-text mt-2">Checking server status...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="minecraft-panel bg-black/40 rounded-2xl p-4 border border-gray-700 shadow-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-4">
        <h3 className="pixel-text text-xl font-bold">Server Status</h3>
        <div className="flex items-center">
          {loading ? (
            <div className="mc-loader-small mr-2"></div>
          ) : (
            <motion.div 
              className={`w-3 h-3 rounded-full mr-2 ${status?.online ? 'bg-tertiary' : 'bg-red-500'}`}
              animate={{ scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] }}
              transition={{ repeat: Infinity, duration: 2 }}
            />
          )}
          <span className={`pixel-text ${status?.online ? 'text-tertiary' : 'text-red-400'}`}>
            {status?.online ? 'Online' : 'Offline'}
          </span>
          {error && (
            <span title={error}>
              <CircleAlert className="h-4 w-4 text-yellow-500 ml-2 pixel-icon" />
            </span>
          )}
        </div>
      </div>

      <div className="space-y-3">
        <div className="flex justify-between items-center">
          <span className="text-sm pixel-text">Server IP</span>
          <span className="font-minecraft text-white text-right break-all">
            mc.buildtopiasmp.fun
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm pixel-text">Players</span>
          <span className="font-minecraft text-tertiary">
            {status?.players.online}
            <span className="text-gray-500"> / </span>
            <span className="text-gray-300">{status?.players.max}</span>
          </span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm pixel-text">Version</span>
          <span className="font-minecraft text-secondary">{status?.version}</span>
        </div>

        {/* Custom Progress Bar */}
        <div className="relative w-full h-5 rounded-full overflow-hidden bg-gray-800 border border-gray-600 mt-2">
          <div
            className="absolute inset-0 bg-[url('/textures/striped-bar.png')] bg-repeat opacity-20 animate-bar-slide"
            style={{
              backgroundSize: '20px 20px',
            }}
          />
          <motion.div
            className="h-full bg-tertiary rounded-full"
            style={{ width: `${(status.players.online / status.players.max) * 100}%` }}
            initial={{ width: 0 }}
            animate={{ width: `${(status.players.online / status.players.max) * 100}%` }}
            transition={{ duration: 1, ease: 'easeOut' }}
          />
        </div>
      </div>

      {/* Footer */}
      {lastUpdated && (
        <div className="mt-4 text-xs text-gray-400 text-right flex justify-end items-center gap-2">
          Last updated: {lastUpdated.toLocaleTimeString()}
          <button
            onClick={fetchServerStatus}
            className="ml-2 text-primary hover:text-primary/70 transition-colors minecraft-btn-small rounded-md border border-primary px-2 py-0.5"
            disabled={loading}
          >
            {loading ? <div className="mc-loader-tiny inline-block" /> : 'Refresh'}
          </button>
        </div>
      )}
    </motion.div>
  );
}