import React from "react";

export type ButtonProps = {
  type: "button" | "submit" | "reset";
  onClick?: () => void;
  label: string;
  disabled?: boolean;
  width: string;
  fontSize: string;
  ariaLabel?: string;
  ariaDescribedBy?: string;
  className?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
};

export function Button({
  type,
  onClick,
  label,
  disabled = false,
  width,
  fontSize,
  ariaLabel,
  ariaDescribedBy,
  className,
  backgroundColor = "bg-blue-400",
  children,
}: ButtonProps) {
  const widthClass = `w-${width}`;
  const fontSizeClass = `text-${fontSize}`;

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel}
      aria-describedby={ariaDescribedBy}
      className={`${backgroundColor} text-white font-bold py-2 px-2 rounded 
        ${widthClass} ${fontSizeClass} ${className}`}
    >
      {label}
      {children}
    </button>
  );
}
