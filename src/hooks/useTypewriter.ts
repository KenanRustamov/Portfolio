import { useEffect, useRef, useState } from 'react';
import { CURSOR_BLINK_DURATION_MS, TYPING_LETTER_DELAY_MS } from '../constants/animation';

interface UseTypewriterOpts {
  textShort: string;
  textLong: string;
  expanded: boolean;
}

interface UseTypewriterReturn {
  displayText: string;
  isTyping: boolean;
  showCursor: boolean;
  completeTyping: () => void;
}

export function useTypewriter({ textShort, textLong, expanded }: UseTypewriterOpts): UseTypewriterReturn {
  const [displayText, setDisplayText] = useState<string>(textShort);
  const [isTyping, setIsTyping] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  const typingRef = useRef<NodeJS.Timeout | null>(null);
  const cursorRef = useRef<NodeJS.Timeout | null>(null);
  const firstRender = useRef(true);

  const clearTimers = () => {
    if (typingRef.current) clearTimeout(typingRef.current);
    if (cursorRef.current) clearTimeout(cursorRef.current);
    typingRef.current = null;
    cursorRef.current = null;
    setIsTyping(false);
    setShowCursor(false);
  };

  const completeTyping = () => {
    clearTimers();
    const target = expanded ? textLong : textShort;
    setDisplayText(target);
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    clearTimers();

    const target = expanded ? textLong : textShort;
    setDisplayText('');
    setIsTyping(true);
    setShowCursor(true);

    let current = '';
    const type = () => {
      if (current.length < target.length) {
        current = target.slice(0, current.length + 1);
        setDisplayText(current);
        typingRef.current = setTimeout(type, TYPING_LETTER_DELAY_MS);
      } else {
        setIsTyping(false);
        cursorRef.current = setTimeout(() => setShowCursor(false), CURSOR_BLINK_DURATION_MS);
      }
    };

    typingRef.current = setTimeout(type, 50);
    return clearTimers;
  }, [expanded]);

  return { displayText, isTyping, showCursor, completeTyping };
} 