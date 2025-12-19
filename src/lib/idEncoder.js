// Simple ID encoding/decoding utility
const SECRET_KEY = "AA2025";

export const encodeId = (id) => {
  try {
    // Convert ID to string and add secret, then encode to base64
    const combined = `${SECRET_KEY}_${id}_${SECRET_KEY}`;
    const encoded = btoa(combined);
    // Make it URL-safe
    return encoded.replace(/\+/g, '-').replace(/\//g, '_').replace(/=/g, '');
  } catch (e) {
    console.error('Encode error:', e);
    return id; // Fallback to plain ID
  }
};

export const decodeId = (encodedId) => {
  try {
    // Reverse the URL-safe replacements
    let base64 = encodedId.replace(/-/g, '+').replace(/_/g, '/');
    
    // Add padding if needed
    while (base64.length % 4) {
      base64 += '=';
    }
    
    const decoded = atob(base64);
    const parts = decoded.split('_');
    
    // Verify the secret key and extract ID
    if (parts.length >= 3 && parts[0] === SECRET_KEY && parts[2] === SECRET_KEY) {
      const id = parseInt(parts[1]);
      return id;
    }
    
    console.warn('Invalid encoded ID format');
    return null;
  } catch (e) {
    console.error('Decode error:', e, 'for encodedId:', encodedId);
    return null;
  }
};
