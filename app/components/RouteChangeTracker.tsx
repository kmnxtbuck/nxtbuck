// src/components/RouteChangeTracker.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, Suspense } from 'react'
import { trackEvent } from '@/lib/analytics'

function RouteChangeTrackerLogic() {
  const pathname = usePathname()
  const searchParams = useSearchParams()
  // This ensures we don't duplicate the first load
  const isFirstLoad = useRef(true)

  useEffect(() => {
    if (isFirstLoad.current) {
      isFirstLoad.current = false
      return 
    }

    // Use observer pattern for page_view tracking
    trackEvent('page_view', {
      page_path: pathname,
      page_title: typeof document !== 'undefined' ? document.title : '',
    })
  }, [pathname, searchParams])

  return null
}

export default function RouteChangeTracker() {
  return (
    <Suspense fallback={null}>
      <RouteChangeTrackerLogic />
    </Suspense>
  )
}