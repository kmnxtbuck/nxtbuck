// src/components/RouteChangeTracker.tsx
'use client'

import { usePathname, useSearchParams } from 'next/navigation'
import { useEffect, useRef, Suspense } from 'react'

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

    if (typeof window !== 'undefined' && window.dataLayer) {
      window.dataLayer.push({
        event: 'virtual_page_view',
        page_path: pathname,
        page_title: document.title
      })
    }
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