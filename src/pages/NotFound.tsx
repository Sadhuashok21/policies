import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const NotFound: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname || '/404';

  return (
    <div
      style={{
        display: 'flex',
        minHeight: '80vh',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px',
        fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
        color: '#202124',
        backgroundColor: '#ffffff'
      }}
    >
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '32px',
          maxWidth: '900px'
        }}
      >
        <img
          src="https://cdn.ascentracoresolutions.com/status/404.webp"
          alt="404"
          style={{ width: '360px', height: '360px', maxWidth: '100%', objectFit: 'contain' }}
        />

        <div style={{ maxWidth: '440px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
            <img
              src="https://cdn.ascentracoresolutions.com/ascentra.webp"
              alt="logo"
              style={{ width: '48px', height: '48px', objectFit: 'contain' }}
            />
            <span style={{ fontSize: '20px', fontWeight: 700, color: '#111827' }}>
              Ascentracore Solutions
            </span>
          </div>

          <p style={{ fontSize: '18px', fontWeight: 600, color: '#374151', margin: '8px 0' }}>
            404 That&apos;s an error
          </p>

          <p style={{ fontSize: '15px', color: '#4b5563', margin: '16px 0', lineHeight: '1.6' }}>
            Your requested url <b style={{ color: '#2563eb', wordBreak: 'break-all' }}>{currentPath}</b> was not found on this server. We will fix soon.
          </p>

          <p style={{ fontSize: '14px', color: '#6b7280', margin: '12px 0' }}>
            Thank you for your patience.
          </p>

          <div style={{ display: 'flex', gap: '12px', marginTop: '24px', flexWrap: 'wrap' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 20px',
                backgroundColor: '#1e293b',
                color: '#ffffff',
                textDecoration: 'none',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 600
              }}
            >
              Go to Policies Home
            </Link>
            <button
              type="button"
              onClick={() => window.history.back()}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '10px 18px',
                backgroundColor: '#f1f5f9',
                color: '#334155',
                border: '1px solid #cbd5e1',
                borderRadius: '8px',
                fontSize: '14px',
                fontWeight: 500,
                cursor: 'pointer'
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;

