import React, { useEffect, useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { exchangeAuthorizationCode } from './pkce'
import { useAuth } from './AuthContext'

export const AuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const { refreshSession } = useAuth()
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const code = searchParams.get('code')
    const state = searchParams.get('state') || ''
    const errorParam = searchParams.get('error')

    if (errorParam) {
      setError(searchParams.get('error_description') || errorParam || 'Authentication failed.')
      return
    }

    if (!code) {
      setError('Authorization code missing from identity callback.')
      return
    }

    const config = {
      clientId: 'policies',
      accountsPortalUrl: (import.meta.env.VITE_ACCOUNTS_URL || 'http://localhost:5174').replace(/\/+$/, ''),
      apiBaseUrl: (import.meta.env.VITE_API_BASE_URL || 'http://localhost:8000').replace(/\/+$/, ''),
      redirectUri: `${window.location.origin}/auth/callback`,
    }

    exchangeAuthorizationCode(config, code, state)
      .then(async (result) => {
        localStorage.setItem('policies_access_token', result.accessToken)
        await refreshSession()
        navigate(result.returnTo || '/', { replace: true })
      })
      .catch((err) => {
        setError(err instanceof Error ? err.message : 'Failed to complete authorization.')
      })
  }, [searchParams, navigate, refreshSession])

  if (error) {
    return (
      <div style={{ minHeight: '60vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '2rem' }}>
        <div style={{ maxWidth: '440px', textAlign: 'center', background: '#111827', color: '#f8fafc', padding: '2rem', borderRadius: '1rem', border: '1px solid #374151' }}>
          <div style={{ color: '#ef4444', marginBottom: '1rem', display: 'flex', justifyContent: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z" />
              <line x1="12" y1="9" x2="12" y2="13" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
          </div>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '0.5rem' }}>Authentication Error</h2>
          <p style={{ color: '#9ca3af', fontSize: '0.9rem', marginBottom: '1.5rem' }}>{error}</p>
          <button
            onClick={() => window.location.assign('/')}
            style={{ background: '#4f46e5', color: '#fff', border: 'none', padding: '0.6rem 1.25rem', borderRadius: '0.5rem', fontWeight: 600, cursor: 'pointer' }}
          >
            Back to Policies
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: '40px', height: '40px', border: '3px solid #e0e7ff', borderTopColor: '#4f46e5', borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
      <p style={{ color: '#9ca3af', marginTop: '1rem', fontSize: '0.9rem' }}>Connecting with Ascentracore Accounts…</p>
      <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
    </div>
  )
}
