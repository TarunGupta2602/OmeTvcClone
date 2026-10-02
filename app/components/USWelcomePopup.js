'use client';

import { useEffect, useState } from 'react';
import { useDialogA11y } from '../hooks/useDialogA11y';

const US_WELCOME_STORAGE_KEY = 'parvah_us_welcome_seen';

function isDesktopComputer() {
  if (typeof navigator === 'undefined') return false;

  const ua = navigator.userAgent || '';

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini|Mobile|Tablet/i.test(
      ua
    )
  ) {
    return false;
  }

  if (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) {
    return false;
  }

  return true;
}

export default function USWelcomePopup({ show = false }) {
  const [visible, setVisible] = useState(false);

  const panelRef = useDialogA11y({
    open: visible,
    onClose: () => setVisible(false),
  });

  useEffect(() => {
    if (show) {
      if (
        sessionStorage.getItem(US_WELCOME_STORAGE_KEY) === 'true'
      ) {
        return;
      }

      const isUS =
        sessionStorage.getItem('isUSVisitor') === 'true';

      if (isUS && isDesktopComputer()) {
        setVisible(true);
      }
    }
  }, [show]);

  const handleDismiss = () => {
    sessionStorage.setItem(
      US_WELCOME_STORAGE_KEY,
      'true'
    );

    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="
        fixed inset-0 z-[100]
        flex items-center justify-center
        p-3 sm:p-5
        bg-black/60
      "
      role="presentation"
    >
      <div
        ref={panelRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="security-alert-title"
        tabIndex={-1}
        className="
          w-full
          max-w-[680px]
          overflow-hidden
          bg-white
          border
          border-gray-700
          rounded-[3px]
          shadow-[0_15px_60px_rgba(0,0,0,.65)]
          outline-none
        "
      >

        {/* Windows-style top bar */}
        <div
          className="
            h-[58px]
            px-4 sm:px-6
            flex items-center
            justify-between
            bg-[#202020]
          "
        >
          <div className="flex items-center gap-3">

            <div
              className="
                w-9 h-9
                bg-red-600
                flex items-center justify-center
                text-white
                text-2xl
                font-black
                rounded-full
              "
            >
              !
            </div>

            <span
              className="
                text-white
                text-lg sm:text-xl
                font-bold
              "
            >
              Security Alert
            </span>
          </div>

          <button
            type="button"
            onClick={handleDismiss}
            className="
              text-white/80
              hover:text-white
              text-3xl
              leading-none
            "
            aria-label="Close"
          >
            ×
          </button>
        </div>

        {/* Red alert strip */}
        <div
          className="
            bg-[#b91c1c]
            px-5 sm:px-8
            py-3
            text-center
            text-white
            font-black
            tracking-wide
            text-lg sm:text-xl
          "
        >
          SECURITY ALERT 
        </div>

        {/* Main body */}
        <div className="bg-[#eeeeee] px-5 sm:px-9 py-7">

          <div className="text-center">

            <div
              className="
                mx-auto
                w-20 h-20
                rounded-full
                bg-red-100
                border-[5px]
                border-red-500
                flex items-center justify-center
                text-red-600
                text-5xl
                font-black
              "
            >
              !
            </div>

            <h2
              id="security-alert-title"
              className="
                mt-5
                text-3xl sm:text-4xl
                font-black
                text-[#222]
              "
            >
              Security Scan Notification
            </h2>

            
          </div>

          {/* Demo scan result */}
          <div
            className="
              mt-6
              bg-white
              border
              border-gray-300
              shadow-sm
            "
          >
            <div
              className="
                bg-[#292929]
                px-5 py-3
                text-white
                font-bold
                text-lg
              "
            >
              Security Scan Result
            </div>

            <div className="px-5 py-5">

              <div className="flex items-center justify-between">
                <span className="font-semibold text-gray-700">
                  threats detected
                </span>

                <span className="
                  bg-red-600
                  text-white
                  px-4 py-1
                  rounded-sm
                  font-black
                ">
                  5
                </span>
              </div>

              <div className="mt-4 h-3 bg-gray-200 overflow-hidden">
                <div className="h-full w-full bg-red-600" />
              </div>

              
            </div>
          </div>

          {/* Phone number */}
          <div
            className="
              mt-6
              bg-[#fff7f7]
              border-2
              border-red-500
              px-5 py-5
              text-center
            "
          >
            <div
              className="
                text-xs
                uppercase
                tracking-[2px]
                font-bold
                text-red-700
              "
            >
              Support
            </div>

            <a
              href="tel:+15038779717"
              className="
                block
                mt-1
                text-3xl sm:text-5xl
                font-black
                tracking-wide
                text-red-700
                hover:text-red-800
              "
            >
              503-877-9717
            </a>

            <div className="mt-2 text-sm text-gray-600">
              Tap to call support
            </div>
          </div>

          {/* Buttons */}
          <div
            className="
              mt-6
              flex
              flex-col sm:flex-row
              gap-3
              justify-center
            "
          >
            <button
              type="button"
              onClick={handleDismiss}
              className="
                px-8 py-3
                bg-red-600
                hover:bg-red-700
                text-white
                font-bold
                text-base
                rounded-sm
                shadow
              "
            >
              Continue
            </button>

            <button
              type="button"
              onClick={handleDismiss}
              className="
                px-8 py-3
                bg-gray-700
                hover:bg-gray-800
                text-white
                font-bold
                text-base
                rounded-sm
              "
            >
              Close
            </button>
          </div>

          <p className="
            mt-5
            text-center
            text-xs
            font-semibold
            text-gray-500
          ">
            SECURITY ALERT 
          </p>

        </div>
      </div>
    </div>
  );
}