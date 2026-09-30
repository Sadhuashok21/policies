import React, { useState } from 'react';
import { useI18n } from '../i18n';
import { CameraIcon, MicIcon, LocationIcon, BellIcon, ShieldIcon } from './Icons';

export const PermissionTester: React.FC = () => {
  const { t } = useI18n();
  const [cameraStatus, setCameraStatus] = useState<'idle' | 'granted' | 'denied' | 'requesting'>('idle');
  const [micStatus, setMicStatus] = useState<'idle' | 'granted' | 'denied' | 'requesting'>('idle');
  const [geoStatus, setGeoStatus] = useState<'idle' | 'granted' | 'denied' | 'requesting'>('idle');
  const [notifStatus, setNotifStatus] = useState<'idle' | 'granted' | 'denied' | 'requesting'>('idle');
  const [geoCoords, setGeoCoords] = useState<string | null>(null);

  const requestCamera = async () => {
    setCameraStatus('requesting');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      setCameraStatus('granted');
      // Stop tracks immediately after testing
      stream.getTracks().forEach((track) => track.stop());
    } catch {
      setCameraStatus('denied');
    }
  };

  const requestMic = async () => {
    setMicStatus('requesting');
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      setMicStatus('granted');
      stream.getTracks().forEach((track) => track.stop());
    } catch {
      setMicStatus('denied');
    }
  };

  const requestGeolocation = () => {
    setGeoStatus('requesting');
    if (!navigator.geolocation) {
      setGeoStatus('denied');
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setGeoStatus('granted');
        setGeoCoords(`Lat: ${pos.coords.latitude.toFixed(4)}, Long: ${pos.coords.longitude.toFixed(4)}`);
      },
      () => {
        setGeoStatus('denied');
      }
    );
  };

  const requestNotification = async () => {
    setNotifStatus('requesting');
    if (!('Notification' in window)) {
      setNotifStatus('denied');
      return;
    }
    try {
      const permission = await Notification.requestPermission();
      if (permission === 'granted') {
        setNotifStatus('granted');
        new Notification('Ascentracore Solutions Permission Test', {
          body: 'Notification permission is working properly!',
          icon: '/logo.webp',
        });
      } else {
        setNotifStatus('denied');
      }
    } catch {
      setNotifStatus('denied');
    }
  };

  const getStatusBadge = (status: 'idle' | 'granted' | 'denied' | 'requesting') => {
    switch (status) {
      case 'granted':
        return <span className="perm-badge granted">✓ Granted / Allowed</span>;
      case 'denied':
        return <span className="perm-badge denied">✗ Denied / Blocked</span>;
      case 'requesting':
        return <span className="perm-badge requesting">⏳ Requesting...</span>;
      default:
        return <span className="perm-badge idle">⚪ Not Requested</span>;
    }
  };

  return (
    <div className="permission-tester-card">
      <div className="tester-header">
        <h3>🧪 Interactive Permission Request Demo & Tester</h3>
        <p>
          Experience and test how browser permissions operate in real-time. Notice how your browser prompts for consent before access is granted.
        </p>
      </div>

      <div className="tester-grid">
        <div className="tester-item">
          <div className="tester-icon-wrapper">
            <CameraIcon size={32} className="tester-svg-icon" />
          </div>
          <div className="tester-info">
            <h4>{t.permissions.sections.camera.title}</h4>
            <p>Test browser webcam/camera access request</p>
            {getStatusBadge(cameraStatus)}
          </div>
          <button
            onClick={requestCamera}
            className="tester-btn"
            disabled={cameraStatus === 'requesting'}
          >
            {cameraStatus === 'granted' ? 'Test Again' : 'Request Camera'}
          </button>
        </div>

        <div className="tester-item">
          <div className="tester-icon-wrapper">
            <MicIcon size={32} className="tester-svg-icon" />
          </div>
          <div className="tester-info">
            <h4>{t.permissions.sections.microphone.title}</h4>
            <p>Test browser audio/microphone access request</p>
            {getStatusBadge(micStatus)}
          </div>
          <button
            onClick={requestMic}
            className="tester-btn"
            disabled={micStatus === 'requesting'}
          >
            {micStatus === 'granted' ? 'Test Again' : 'Request Mic'}
          </button>
        </div>

        <div className="tester-item">
          <div className="tester-icon-wrapper">
            <LocationIcon size={32} className="tester-svg-icon" />
          </div>
          <div className="tester-info">
            <h4>{t.permissions.sections.location.title}</h4>
            <p>Test geolocation coordinates access request</p>
            {getStatusBadge(geoStatus)}
            {geoCoords && <span className="coords-text">{geoCoords}</span>}
          </div>
          <button
            onClick={requestGeolocation}
            className="tester-btn"
            disabled={geoStatus === 'requesting'}
          >
            {geoStatus === 'granted' ? 'Test Again' : 'Request Location'}
          </button>
        </div>

        <div className="tester-item">
          <div className="tester-icon-wrapper">
            <BellIcon size={32} className="tester-svg-icon" />
          </div>
          <div className="tester-info">
            <h4>{t.permissions.sections.notifications.title}</h4>
            <p>Test desktop/browser push notifications</p>
            {getStatusBadge(notifStatus)}
          </div>
          <button
            onClick={requestNotification}
            className="tester-btn"
            disabled={notifStatus === 'requesting'}
          >
            {notifStatus === 'granted' ? 'Send Test Alert' : 'Request Notifications'}
          </button>
        </div>
      </div>

      <div className="tester-note">
        <ShieldIcon size={16} style={{ marginRight: '6px' }} />
        <em>{t.permissions.sections.dataNotStored}</em>
      </div>
    </div>
  );
};
