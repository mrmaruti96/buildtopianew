import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
      const response = await fetch('https://api.mcsrvstat.us/2/play.buildtopiasmp.fun:8004');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      if (data.online === true) {
        const serverStatus: ServerStatusType = {
          online: true,
          players: {
            online: data.players?.online ?? 0,
            max: data.players?.max ?? 100,
          },
          version: data.version ?? 'Unknown',
        };

        setStatus(serverStatus);
        setError(null);
      } else {
        setStatus({ online: false, players: { online: 0, max: 0 }, version: 'Unknown' });
        setError(null);
      }
    } catch (err) {
      console.error('Server status fetch error:', err);
      setStatus({ online: false, players: { online: 0, max: 0 }, version: 'Unknown' });
      setError('Failed to fetch server status.');
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
      <div className="minecraft-panel p-4 text-center rounded-2xl">
        <div className="flex flex-col items-center justify-center">
          <div className="mc-loader"></div>
          <p className="pixel-text mt-2">Checking server status...</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="minecraft-panel rounded-2xl p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="panel-header mb-2">
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

      <div className="panel-content text-sm">
        {status?.online ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="pixel-text">Server IP</div>
              <div className="text-right font-minecraft text-white break-words">
                play.buildtopiasmp.fun:8004
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2 mb-2">
              <div className="pixel-text">Players</div>
              <div className="text-right font-minecraft">
                <span className="text-tertiary">{status.players.online}</span>
                <span className="text-gray-500">/</span>
                <span className="text-gray-300">{status.players.max}</span>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="pixel-text">Version</div>
              <div className="text-right font-minecraft text-secondary">
                {status.version}
              </div>
            </div>

            <div className="relative w-full rounded-lg h-4 mt-3 overflow-hidden border border-gray-700 bg-gray-900">
              <div
                className="absolute inset-0 opacity-20 animate-bar-slide"
                style={{
                  backgroundImage: "url('/textures/striped-bar.png')",
                  backgroundRepeat: 'repeat',
                  backgroundSize: '30px 30px',
                }}
              ></div>
              <motion.div
                className="relative bg-tertiary h-4 rounded-lg"
                style={{
                  width: `${(status.players.online / status.players.max) * 100}%`,
                }}
                initial={{ width: 0 }}
                animate={{
                  width: `${(status.players.online / status.players.max) * 100}%`,
                }}
                transition={{ duration: 1, ease: 'easeOut' }}
              />
            </div>
          </motion.div>
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
        <div className="panel-footer text-xs text-gray-500 text-right mt-2">
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
