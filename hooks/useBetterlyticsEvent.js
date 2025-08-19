import { useCallback } from 'react'

export default function useBetterlyticsEvent() {
  const trackEvent = useCallback(async (eventName, properties = {}) => {
    if (typeof window === 'undefined') return
    const betterlytics = (await import('@betterlytics/tracker')).default
    betterlytics.event(eventName, properties)
  }, [])

  return trackEvent
}
