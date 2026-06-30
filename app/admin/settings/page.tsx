"use client";

import { useState, useEffect } from "react";

export default function SettingsPage() {
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/settings")
      .then(res => res.json())
      .then(data => {
        setSettings(data);
        setLoading(false);
      });
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      await fetch("/api/settings", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(settings),
      });
      setMessage("Settings saved successfully!");
      setTimeout(() => setMessage(""), 3000);
    } catch (err) {
      setMessage("Error saving settings.");
    }
    setSaving(false);
  };

  const handleCompanyChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSettings({
      ...settings,
      company: { ...settings.company, [e.target.name]: e.target.value }
    });
  };

  const handleFounderChange = (index: number, e: React.ChangeEvent<HTMLInputElement>) => {
    const newFounders = [...settings.founders];
    newFounders[index][e.target.name] = e.target.value;
    setSettings({ ...settings, founders: newFounders });
  };

  if (loading) return <div style={{ padding: '24px', color: '#fff' }}>Loading settings...</div>;

  return (
    <div style={{ padding: '24px', maxWidth: '900px' }}>
      <h1 style={{ fontSize: '24px', fontWeight: '600', marginBottom: '8px', color: 'black' }}>Global Settings</h1>
      <p style={{ color: '#888', marginBottom: '32px' }}>Manage official emails, location, social URLs, and founder contact cards dynamically.</p>

      {message && <div style={{ padding: '12px', background: '#22c55e', color: '#fff', marginBottom: '20px', borderRadius: '8px' }}>{message}</div>}

      <form onSubmit={handleSubmit}>
        <div style={{ backgroundColor: '#1e1e1e', padding: '32px', borderRadius: '12px', border: '1px solid #333', marginBottom: '24px' }}>
          <h2 style={{ color: '#fff', fontSize: '18px', marginBottom: '24px' }}>Company Information</h2>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>Official Main Email (Receives Form Submissions)</label>
              <input type="email" name="mainEmail" value={settings.company.mainEmail} onChange={handleCompanyChange} style={inputStyle} required />
            </div>
            <div>
              <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>Headquarters Location</label>
              <input type="text" name="location" value={settings.company.location} onChange={handleCompanyChange} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>LinkedIn URL</label>
              <input type="url" name="linkedin" value={settings.company.linkedin} onChange={handleCompanyChange} style={inputStyle} />
            </div>
            <div>
              <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>Twitter URL</label>
              <input type="url" name="twitter" value={settings.company.twitter} onChange={handleCompanyChange} style={inputStyle} />
            </div>
          </div>
        </div>

        <div style={{ backgroundColor: '#1e1e1e', padding: '32px', borderRadius: '12px', border: '1px solid #333', marginBottom: '24px' }}>
          <h2 style={{ color: '#fff', fontSize: '18px', marginBottom: '24px' }}>Founders / Contact Cards</h2>
          
          {settings.founders.map((founder: any, index: number) => (
            <div key={index} style={{ marginBottom: '32px', paddingBottom: '32px', borderBottom: index === 0 ? '1px solid #333' : 'none' }}>
              <h3 style={{ color: '#aaa', fontSize: '14px', marginBottom: '16px' }}>Card {index + 1} ({founder.roleContext})</h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div>
                  <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>Full Name</label>
                  <input type="text" name="name" value={founder.name} onChange={(e) => handleFounderChange(index, e)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>Role</label>
                  <input type="text" name="role" value={founder.role} onChange={(e) => handleFounderChange(index, e)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>Email Address</label>
                  <input type="email" name="email" value={founder.email} onChange={(e) => handleFounderChange(index, e)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>Avatar Image URL (or ui-avatars url)</label>
                  <input type="text" name="avatar" value={founder.avatar} onChange={(e) => handleFounderChange(index, e)} style={inputStyle} />
                </div>
                <div>
                  <label style={{ display: 'block', color: '#ccc', fontSize: '12px', marginBottom: '8px' }}>LinkedIn URL</label>
                  <input type="url" name="linkedin" value={founder.linkedin || ''} onChange={(e) => handleFounderChange(index, e)} style={inputStyle} />
                </div>
              </div>
            </div>
          ))}
        </div>

        <button type="submit" disabled={saving} style={{ padding: '14px 28px', backgroundColor: '#0d6efd', color: '#fff', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '600', cursor: 'pointer' }}>
          {saving ? 'Saving...' : 'Save Global Settings'}
        </button>
      </form>
    </div>
  );
}

const inputStyle = {
  width: '100%',
  padding: '12px 16px',
  backgroundColor: '#2a2a2a',
  border: '1px solid #444',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '14px'
};
