import { useTheme } from 'next-themes';
import { SunFill, MoonFill } from '@emotion-icons/bootstrap';

const DarkModeButton = () => {
  const { theme, setTheme } = useTheme();
  const handleClick = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <button type="button" className="px-2 rounded-lg" onClick={handleClick} title="Dark Mode Button">
        {theme === 'dark'
          ? <SunFill size={26} />
          : <MoonFill size={26} className="text-gray-700" />}
      </button>
    </>
  );
};

export default DarkModeButton;
