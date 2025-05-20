import { useEffect, useState } from 'react';

type Block = {
  type: 'dirt' | 'stone' | 'grass' | 'wood' | 'leaves';
  x: number;
  y: number;
  opacity: number;
};

export default function MinecraftBackground() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    // Generate random Minecraft-like blocks for background
    const blockTypes: Block['type'][] = ['dirt', 'stone', 'grass', 'wood', 'leaves'];
    const newBlocks: Block[] = [];
    
    // Create 30 random background elements
    for (let i = 0; i < 30; i++) {
      newBlocks.push({
        type: blockTypes[Math.floor(Math.random() * blockTypes.length)],
        x: Math.random() * 100,
        y: Math.random() * 100,
        opacity: 0.05 + Math.random() * 0.1 // Low opacity
      });
    }
    
    setBlocks(newBlocks);
  }, []);

  // Block colors based on Minecraft textures
  const getBlockColor = (type: Block['type']) => {
    switch(type) {
      case 'dirt': return '#8B4513';
      case 'stone': return '#2F2F2F';
      case 'grass': return '#44cc44';
      case 'wood': return '#ff7700';
      case 'leaves': return '#2a9d2a';
    }
  };

  return (
    <div className="fixed inset-0 -z-20 overflow-hidden pointer-events-none">
      {blocks.map((block, index) => (
        <div 
          key={index}
          className="absolute w-16 h-16 transform -translate-x-1/2 -translate-y-1/2"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            backgroundColor: getBlockColor(block.type),
            opacity: block.opacity,
            backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAIAAACQkWg2AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDoxMUUwRjdGODQzOTExMUUyODNBQzk2RUVBQjREODUxQiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDoxMUUwRjdGOTQzOTExMUUyODNBQzk2RUVBQjREODUxQiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjExRTBGN0Y2NDM5MTExRTI4M0FDOTZERUFCNEQ4NTFCIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjExRTBGN0Y3NDM5MTExRTI4M0FDOTZERUFCNEQ4NTFCIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+BCuYQQAAADBJREFUeNpi/P//PwMMsDAwMDAxQADjEFGBRNWMMIeQoZqxWQsviKVMCxMDAwUACDAATxIrCkgGPxgAAAAASUVORK5CYII=")`
          }}
        />
      ))}
    </div>
  );
}
