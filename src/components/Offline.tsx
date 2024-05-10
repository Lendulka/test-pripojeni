import { useState, useEffect } from 'react';

export const Offline = () => {
  const [isOnline, setIsOnline] = useState<boolean>(navigator.onLine);

  const handleOffline = () => {
    console.log("offline")
    setIsOnline(false)
  }

  const handleOnline = () => {
    console.log("online")
    setIsOnline(true)
  }

  useEffect(() => {
    console.log("mounted")

    window.addEventListener('offline', handleOffline)
    window.addEventListener('online', handleOnline)

    return () => {
      console.log("unmounted")
      window.removeEventListener('offline', handleOffline)
      window.removeEventListener('online', handleOnline)
    }
  }, [])

  return isOnline ? <p>Jste online!</p> : <p>Jste offline!</p>
};

export default Offline;