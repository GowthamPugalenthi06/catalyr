import { useState, useRef, useEffect } from "react";
import React from "react";

interface DarkSelectProps {
  label: string;
  name: string;
  options: string[];
  required?: boolean;
}

const DarkSelect: React.FC<DarkSelectProps> = ({
  label,
  name,
  options,
  required = false,
}) => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-3">
        {label}
      </label>

      {/* Hidden input for Netlify */}
      <input type="hidden" name={name} value={value} required={required} />

      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="
          w-full bg-white/5 border border-white/10 rounded-2xl
          p-4 text-left text-white
          flex justify-between items-center
          focus:outline-none focus:border-white
        "
      >
        <span className={value ? "text-white" : "text-gray-500"}>
          {value || "Select an option"}
        </span>
        <span className="text-gray-400">▼</span>
      </button>

      {open && (
        <div
          className="
            absolute z-50 mt-3 w-full
            bg-black border border-white/10
            rounded-2xl shadow-2xl overflow-hidden
          "
        >
          {options.map((opt) => (
            <button
              key={opt}
              type="button"
              onClick={() => {
                setValue(opt);
                setOpen(false);
              }}
              className="
                w-full px-5 py-4 text-left
                text-white hover:bg-white hover:text-black
                transition-colors
              "
            >
              {opt}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default DarkSelect;
