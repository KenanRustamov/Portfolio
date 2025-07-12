export const TYPING_LETTER_DELAY_MS = 15;
export const CURSOR_BLINK_DURATION_MS = 3000;

// Button animation timings
export const BUTTON_FADE_IN_DELAY = 0.9; // seconds
export const BUTTON_FADE_IN_DURATION = 0.4; // seconds
export const BUTTON_FADE_OUT_DURATION = 0.3; // seconds

// Image animation timings
export const STACK_IMAGE_DURATION = 0.4; // single stacked image
export const STACK_IMAGE_STAGGER = 0.2; // seconds between stacked images
export const SUMMARY_IMAGE_FADE_IN_DURATION =
  STACK_IMAGE_DURATION + 2 * STACK_IMAGE_STAGGER; // 0.8s total
export const SUMMARY_IMAGE_FADE_IN_DELAY = BUTTON_FADE_IN_DELAY - 0.3; // keep sync 

// Collapse logic (DataBlock)
export const COLLAPSE_RESET_DELAY_MS = 300; // matches BUTTON_FADE_OUT_DURATION seconds

// Exit stagger for stacked images
export const STACK_IMAGE_EXIT_STAGGER = 0.1; 