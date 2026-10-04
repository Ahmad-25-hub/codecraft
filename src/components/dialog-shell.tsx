"use client";

import { useEffect, useRef } from "react";

export function DialogShell({
  children,
  onClose,
  labelledBy,
  className = "",
}: {
  children: React.ReactNode;
  onClose: () => void;
  labelledBy: string;
  className?: string;
}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = "hidden";
    return () => {
      element?.close();
      document.body.style.overflow = previousOverflow;
      previousFocus?.focus();
    };
  }, []);
  return (
    <dialog
      ref={dialog}
      className={`studio-dialog ${className}`}
      aria-labelledby={labelledBy}
      onCancel={(event) => {
        event.preventDefault();
        onClose();
      }}
      onClick={(event) => {
        if (event.target === event.currentTarget) {
          const rect = event.currentTarget.getBoundingClientRect();
          if (
            event.clientX < rect.left ||
            event.clientX > rect.right ||
            event.clientY < rect.top ||
            event.clientY > rect.bottom
          )
            onClose();
        }
      }}
    >
      <button
        className="dialog-close eyebrow"
        onClick={onClose}
        aria-label="Close dialog"
        autoFocus
      >
        Close <span aria-hidden="true">×</span>
      </button>
      {children}
    </dialog>
  );
}
