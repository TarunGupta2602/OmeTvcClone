'use client';

import { useEffect } from 'react';
import { performGeoRedirect } from '../../lib/geoRedirect';

export default function GeoRedirect() {
  useEffect(() => {
    performGeoRedirect(1500); // 1.5 second delay
  }, []);

  return null;
}
