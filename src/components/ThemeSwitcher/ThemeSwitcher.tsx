import { useEffect } from 'react';
import { themeChange } from "theme-change";
import { MoonIcon, SunIcon } from '@heroicons/react/24/outline';

export default function ThemeSwitcher() {
  useEffect(() => {
    themeChange(false);
  }, []);

  return (
    <div className="btn-group">
      <button
        data-set-theme="dark"
        data-act-class="btn-accent"
        className="btn btn-sm"
      >
        <MoonIcon title="Dark theme" className="h-4 w-4" />
      </button>
      <button
        data-act-class="btn-accent"
        data-set-theme="light"
        className="btn btn-sm"
      >
        <SunIcon title="Light theme" className="h-4 w-4" />
      </button>
    </div>
  );
}
