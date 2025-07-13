import { useTheme } from '../../contexts/ThemeContext';
import { useMemo } from 'react';

interface GlassThemeValues {
  cardBg: string;
  cardBgHover: string;
  borderColor: string;
  borderColorHover: string;
  shadowColor: string;
  backdropBlur: string;
  backdropSaturate: string;
}

const useGlassTheme = (): GlassThemeValues => {
  const { theme } = useTheme();
  
  return useMemo(() => {
    const isLight = theme === 'light';
    
    return {
      cardBg: isLight 
        ? 'rgba(255, 255, 255, 0.7)' 
        : 'rgba(255, 255, 255, 0.04)',
      cardBgHover: isLight 
        ? 'rgba(255, 255, 255, 0.85)' 
        : 'rgba(255, 255, 255, 0.08)',
      borderColor: isLight 
        ? 'rgba(0, 0, 0, 0.1)' 
        : 'rgba(255, 255, 255, 0.12)',
      borderColorHover: isLight 
        ? 'rgba(0, 0, 0, 0.15)' 
        : 'rgba(255, 255, 255, 0.2)',
      shadowColor: isLight 
        ? 'rgba(0, 0, 0, 0.1)' 
        : 'rgba(0, 0, 0, 0.3)',
      backdropBlur: '40px',
      backdropSaturate: '170%'
    };
  }, [theme]);
};

export default useGlassTheme; 