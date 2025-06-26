import React from "react";

export default function Footer() {
  return (
    <footer className="py-6 text-center bg-gray-900 dark:bg-gray-900 text-gray-400 text-sm border-t border-gray-800">
      &copy; {new Date().getFullYear()} RODGERS MARAGIA. All rights reserved.
    </footer>
  );
} 