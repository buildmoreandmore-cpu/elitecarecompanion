'use client';

import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    google: typeof google;
  }
}

interface AddressInputProps {
  placeholder?: string;
  className?: string;
  onAddressSelect?: (address: string, details?: google.maps.places.PlaceResult) => void;
}

export default function AddressInput({
  placeholder = "Property Address",
  className = "",
  onAddressSelect
}: AddressInputProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const autocompleteRef = useRef<google.maps.places.Autocomplete | null>(null);

  useEffect(() => {
    if (typeof window !== 'undefined' && window.google && inputRef.current) {
      // Initialize Google Places Autocomplete
      autocompleteRef.current = new window.google.maps.places.Autocomplete(
        inputRef.current,
        {
          types: ['address'],
          componentRestrictions: { country: 'us' },
          fields: ['formatted_address', 'address_components', 'geometry']
        }
      );

      // Listen for place selection
      autocompleteRef.current.addListener('place_changed', () => {
        const place = autocompleteRef.current?.getPlace();
        if (place && place.formatted_address) {
          onAddressSelect?.(place.formatted_address, place);
        }
      });
    }

    return () => {
      if (autocompleteRef.current) {
        window.google?.maps?.event?.clearInstanceListeners(autocompleteRef.current);
      }
    };
  }, [onAddressSelect]);

  return (
    <input
      ref={inputRef}
      type="text"
      placeholder={placeholder}
      className={className}
      autoComplete="address-line1"
    />
  );
}