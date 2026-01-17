"use client"
import type React from "react";
import { useRef, useState } from "react";

export type ScrambleHoverProps = {
  children: React.ReactNode;
  duration?: number; // total animation duration in ms
  speed?: number; // interval between scrambles in ms
  className?: string;
};

const CHARACTERS =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+-=<>?".split(
    ""
  );

function scrambleText(original: string) {
  return original
    .split("")
    .map((char) =>
      char === " "
        ? " "
        : CHARACTERS[Math.floor(Math.random() * CHARACTERS.length)]
    )
    .join("");
}

const ScrambleHover: React.FC<ScrambleHoverProps> = ({
  children,
  duration = 600,
  speed = 30,
  className = "",
}) => {
  const [isScrambling, setIsScrambling] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsScrambling(true);
    timeoutRef.current = setTimeout(() => {
      setIsScrambling(false);
    }, duration);
  };

  const handleMouseLeave = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsScrambling(false);
  };

  return (
    <span
      className={className}
      onBlur={handleMouseLeave}
      onFocus={handleMouseEnter}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        cursor: "pointer",
        display: "inline-block",
      }}
    >
      {children}
    </span>
  );
};

export default ScrambleHover;
