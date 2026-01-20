/**
 * Professional Color Palettes
 * 
 * Choose your preferred palette by uncommenting one option below.
 * Each palette is professionally designed with proper contrast.
 * 
 * Easy to switch: just change which palette is exported at the bottom!
 */

// ========== OPTION 1: Emerald Green (Modern & Fresh) ==========
const emeraldPalette = {
  primary: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',  // Main highlight
    500: '#10b981',
    600: '#059669',  // Hover state
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },
  accent: {
    50: '#f0fdf4',
    100: '#dcfce7',
    200: '#bbf7d0',
    300: '#86efac',
    400: '#4ade80',  // CTA buttons
    500: '#22c55e',
    600: '#16a34a',
    700: '#15803d',
    800: '#166534',
    900: '#14532d',
  },
  background: {
    primary: '#1a1a1a',      // Deep charcoal
    secondary: '#262626',    // Lighter charcoal
    tertiary: '#333333',     // Medium gray
    hover: '#404040',        // Hover state
  },
  text: {
    primary: '#f5f5f5',      // Near white
    secondary: '#d4d4d4',    // Light gray
    tertiary: '#a3a3a3',     // Muted gray
    inverse: '#1a1a1a',
  },
  border: {
    light: '#404040',
    default: '#525252',
    accent: '#34d399',
  },
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// ========== OPTION 2: Amber/Orange (Warm & Energetic) ==========
const amberPalette = {
  primary: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',  // Main highlight
    500: '#f59e0b',
    600: '#d97706',  // Hover state
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },
  accent: {
    50: '#fff7ed',
    100: '#ffedd5',
    200: '#fed7aa',
    300: '#fdba74',
    400: '#fb923c',  // CTA buttons
    500: '#f97316',
    600: '#ea580c',
    700: '#c2410c',
    800: '#9a3412',
    900: '#7c2d12',
  },
  background: {
    primary: '#18181b',      // Almost black
    secondary: '#27272a',    // Dark zinc
    tertiary: '#3f3f46',     // Medium zinc
    hover: '#52525b',        // Hover state
  },
  text: {
    primary: '#fafafa',      // Near white
    secondary: '#e4e4e7',    // Light zinc
    tertiary: '#a1a1aa',     // Muted zinc
    inverse: '#18181b',
  },
  border: {
    light: '#3f3f46',
    default: '#52525b',
    accent: '#fbbf24',
  },
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// ========== OPTION 3: Purple/Violet (Creative & Sophisticated) ==========
const purplePalette = {
  primary: {
    50: '#faf5ff',
    100: '#f3e8ff',
    200: '#e9d5ff',
    300: '#d8b4fe',
    400: '#c084fc',  // Main highlight
    500: '#a855f7',
    600: '#9333ea',  // Hover state
    700: '#7e22ce',
    800: '#6b21a8',
    900: '#581c87',
  },
  accent: {
    50: '#fdf4ff',
    100: '#fae8ff',
    200: '#f5d0fe',
    300: '#f0abfc',
    400: '#e879f9',  // CTA buttons
    500: '#d946ef',
    600: '#c026d3',
    700: '#a21caf',
    800: '#86198f',
    900: '#701a75',
  },
  background: {
    primary: '#0f0f0f',      // Deep black-gray
    secondary: '#1f1f1f',    // Dark gray
    tertiary: '#2e2e2e',     // Medium gray
    hover: '#3d3d3d',        // Hover state
  },
  text: {
    primary: '#fafafa',      // Near white
    secondary: '#e5e5e5',    // Light gray
    tertiary: '#a3a3a3',     // Muted gray
    inverse: '#0f0f0f',
  },
  border: {
    light: '#2e2e2e',
    default: '#3d3d3d',
    accent: '#c084fc',
  },
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// ========== OPTION 4: Rose/Pink (Bold & Modern) ==========
const rosePalette = {
  primary: {
    50: '#fff1f2',
    100: '#ffe4e6',
    200: '#fecdd3',
    300: '#fda4af',
    400: '#fb7185',  // Main highlight
    500: '#f43f5e',
    600: '#e11d48',  // Hover state
    700: '#be123c',
    800: '#9f1239',
    900: '#881337',
  },
  accent: {
    50: '#fdf2f8',
    100: '#fce7f3',
    200: '#fbcfe8',
    300: '#f9a8d4',
    400: '#f472b6',  // CTA buttons
    500: '#ec4899',
    600: '#db2777',
    700: '#be185d',
    800: '#9d174d',
    900: '#831843',
  },
  background: {
    primary: '#171717',      // Neutral black
    secondary: '#262626',    // Dark neutral
    tertiary: '#404040',     // Medium neutral
    hover: '#525252',        // Hover state
  },
  text: {
    primary: '#fafafa',      // Near white
    secondary: '#e5e5e5',    // Light neutral
    tertiary: '#a3a3a3',     // Muted neutral
    inverse: '#171717',
  },
  border: {
    light: '#404040',
    default: '#525252',
    accent: '#fb7185',
  },
  success: '#22c55e',
  warning: '#f59e0b',
  error: '#ef4444',
  info: '#3b82f6',
};

// ========== CURRENT PALETTE: Change this to switch themes! ==========
// Options: emeraldPalette, amberPalette, purplePalette, rosePalette

export const colors = emeraldPalette;  // 👈 CHANGE THIS LINE TO SWITCH THEMES

export default colors;
