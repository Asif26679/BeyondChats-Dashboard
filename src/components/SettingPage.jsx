import { useState } from "react";

function SettingsPage() {
  const [name, setName] = useState("Asif");
  const [email, setEmail] = useState("asif@example.com");
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const handleSave = () => {
    // Simulate save
    alert("Settings saved!");
  };

  return (
    <div className="p-6 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>

      {/* Profile Settings */}
      <div className="mb-6">
        <label className="block text-sm font-medium mb-1">Name</label>
        <input
          className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label className="block text-sm font-medium mt-4 mb-1">Email</label>
        <input
          className="w-full px-4 py-2 border rounded dark:bg-gray-800 dark:text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      {/* Preferences */}
      <div className="mb-6">
        <label className="flex items-center justify-between mb-4">
          <span className="text-sm font-medium">Dark Mode</span>
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => setDarkMode(!darkMode)}
            className="h-5 w-5"
          />
        </label>

        <label className="flex items-center justify-between">
          <span className="text-sm font-medium">Enable Notifications</span>
          <input
            type="checkbox"
            checked={notifications}
            onChange={() => setNotifications(!notifications)}
            className="h-5 w-5"
          />
        </label>
      </div>

      {/* Save Button */}
      <button
        onClick={handleSave}
        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded"
      >
        Save Settings
      </button>
    </div>
  );
}

export default SettingsPage;
