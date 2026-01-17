import React, { useState, useEffect, useRef } from "react";
import { FaBell } from "react-icons/fa";

// 🔑 Change this key whenever notification content changes
const STORAGE_KEY = "notifications_v2";

export default function NotificationBell() {
  const [open, setOpen] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const containerRef = useRef(null);

  // 🔔 Base notifications (SOURCE OF TRUTH)
  const baseNotifications = [
    {
      id: 1,
      text: "Looking for Roles 🚀",
      read: false,
    },
    {
      id: 2,
      text:
        "I’m actively seeking research or engineering internships in mobile robotics, swarm robotics, drone systems, and intelligent control.",
      read: false,
    },
  ];

  // 🧠 Load from localStorage (only preserve read state)
  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);

    if (saved) {
      const savedArray = JSON.parse(saved);
      const savedMap = new Map(savedArray.map((n) => [n.id, n]));

      const merged = baseNotifications.map((n) => ({
        ...n,
        read: savedMap.get(n.id)?.read ?? false,
      }));

      setNotifications(merged);
    } else {
      setNotifications(baseNotifications);
    }
  }, []);

  // 💾 Persist read state
  useEffect(() => {
    if (notifications.length > 0) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(notifications));
    }
  }, [notifications]);

  const unreadCount = notifications.filter((n) => !n.read).length;

  // ❌ Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(e) {
      if (containerRef.current && !containerRef.current.contains(e.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  // ✔ Mark all as read when opened
  useEffect(() => {
    if (open && unreadCount > 0) {
      setNotifications((prev) =>
        prev.map((n) => ({ ...n, read: true }))
      );
    }
  }, [open, unreadCount]);

  return (
    <div ref={containerRef} className="relative">
      {/* Bell Button */}
      <button
        type="button"
        aria-expanded={open}
        aria-label="Notifications"
        onClick={() => setOpen((v) => !v)}
        className="relative rounded-full p-2 hover:bg-gray-700"
      >
        <FaBell className="text-2xl text-white cursor-pointer" />

        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 inline-flex h-4 w-4 items-center justify-center rounded-full bg-red-500 text-xs text-white">
            {unreadCount}
          </span>
        )}
      </button>

      {/* Dropdown */}
      {open && (
        <div className="absolute right-0 z-50 mt-2 w-96 max-w-md rounded-lg bg-gray-900 shadow-lg drop-shadow-[4px_4px_0_#7836cf]">
          <div className="p-3">
            <h4 className="mb-2 text-sm font-bold text-gray-200 drop-shadow-[1px_1px_0_#7836cf]">
              Notifications
            </h4>

            {notifications.length > 0 ? (
              <ul className="max-h-48 divide-y divide-gray-800 overflow-auto">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className={`py-2 text-sm whitespace-normal break-words ${
                      n.read ? "text-gray-400" : "text-white"
                    }`}
                  >
                    {n.text}
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-sm text-gray-400">No notifications.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
