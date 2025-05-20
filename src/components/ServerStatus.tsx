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
      const response = await fetch('https://api.mcsrvstat.us/2/Panda.xyle.host:6016');
      
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      
      const data = await response.json();

      // Always show the server as online per client's request
      // We'll still try to get player count and version if available
      const serverStatus: ServerStatusType = {
        online: true, // Force online status
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
      
      // Assume server is online despite fetch errors
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
      <div className="minecraft-panel p-4 text-center rounded-xl">
        <div className="flex flex-col items-center justify-center">
          <div className="mc-loader"></div>
          <p className="pixel-text mt-2">Checking server status...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      className="minecraft-panel rounded-xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="panel-header">
        <h3 className="pixel-text text-lg font-bold">Server Status</h3>
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
          <<span className={`pixel-text ${status?.online ? 'text-tertiary' : 'text-red-400'}`}>
  {status?.online ? 'Online' : 'Offline'}
</span>
{error && (
  <span title={error}>
    <CircleAlert className="h-4 w-4 text-yellow-500 ml-2 pixel-icon" />
  </span>
)}
        </div>
      </div>

      <div className="panel-content">
        {status?.online ? (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="text-sm pixel-text">Server IP</div>
                <div className="text-right font-minecraft text-primary">
                  Panda.xyle.host:6016
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2 mb-2">
                <div className="text-sm pixel-text">Players</div>
                <div className="text-right font-minecraft">
                  <span className="text-tertiary">{status.players.online}</span>
                  <span className="text-gray-500">/</span>
                  <span className="text-gray-300">{status.players.max}</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="text-sm pixel-text">Version</div>
                <div className="text-right font-minecraft text-secondary">{status.version}</div>
              </div>
              <div className="relative w-full bg-gray-800/50 rounded-md h-4 mt-3 overflow-hidden mc-progress-bg">
                <motion.div 
                  className="absolute top-0 left-0 h-full w-full bg-tertiary opacity-20"
                  animate={{ x: ['-100%', '100%'] }}
                  transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
                />
                <motion.div 
                  className="relative bg-tertiary h-4 mc-progress rounded-sm" 
                  style={{ width: `${(status.players.online / status.players.max) * 100}%` }}
                  initial={{ width: 0 }}
                  animate={{ width: `${(status.players.online / status.players.max) * 100}%` }}
                  transition={{ duration: 1, ease: "easeOut" }}
                />
              </div>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-6 text-center"
          >
            <div className="pixel-text text-red-400 mb-2">Server Offline</div>
            <p className="text-sm text-gray-400">
              The server appears to be down or unreachable. Please check later or contact an administrator.
            </p>
          </motion.div>
        )}
      </div>

      {lastUpdated && (
        <div className="panel-footer text-xs text-gray-500 text-right">
          Last updated: {lastUpdated.toLocaleTimeString()}
          <button 
            onClick={fetchServerStatus} 
            className="ml-2 text-primary hover:text-primary/70 transition-colors minecraft-btn-small rounded-lg"
            disabled={loading}
          >
            {loading ? <div className="mc-loader-tiny inline-block"></div> : 'Refresh'}
          </button>
        </div>
      )}
    </motion.div>
  );
}
