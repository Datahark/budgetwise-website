"use client";

import { useEffect, useState } from "react";
import {
  applyActionCode,
  getAuth,
  initializeAuth,
  browserLocalPersistence,
} from "firebase/auth";
import { getApp, getApps, initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY!,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN!,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID!,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID!,
};

const app = getApps().length
  ? getApp()
  : initializeApp(firebaseConfig);

let auth;

try {
  auth = getAuth(app);
} catch {
  auth = initializeAuth(app, {
    persistence: browserLocalPersistence,
  });
}

type VerificationStatus =
  | "checking"
  | "success"
  | "invalid"
  | "expired"
  | "error";

export default function VerifyEmailPage() {
  const [status, setStatus] =
    useState<VerificationStatus>("checking");

  useEffect(() => {
    let cancelled = false;

    async function verifyEmail() {
      const params = new URLSearchParams(window.location.search);

      const mode = params.get("mode");
      const oobCode = params.get("oobCode");

      // A direct visit must never show success.
      if (mode !== "verifyEmail" || !oobCode) {
        if (!cancelled) {
          setStatus("invalid");
        }
        return;
      }

      try {
        await applyActionCode(auth, oobCode);

        if (!cancelled) {
          setStatus("success");
        }

        // Attempt to open the BudgetWise app.
        window.setTimeout(() => {
          window.location.href = "budgetwise://email-verified";
        }, 1500);
      } catch (error: any) {
        console.error("Email verification error:", error);

        if (cancelled) return;

        if (
          error?.code === "auth/expired-action-code" ||
          error?.code === "auth/invalid-action-code"
        ) {
          setStatus("expired");
        } else {
          setStatus("error");
        }
      }
    }

    verifyEmail();

    return () => {
      cancelled = true;
    };
  }, []);

  return (
    <main className="flex min-h-screen items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        {status === "checking" && (
          <>
            <h1 className="text-2xl font-semibold">
              Verifying your email…
            </h1>

            <p className="mt-3 text-gray-600">
              Please wait while we activate your BudgetWise account.
            </p>
          </>
        )}

        {status === "success" && (
          <>
            <h1 className="text-2xl font-semibold">
              Email verified successfully!
            </h1>

            <p className="mt-3 text-gray-600">
              Your BudgetWise account is now active.
            </p>

            <a
              href="budgetwise://email-verified"
              className="mt-6 inline-block rounded-lg bg-blue-600 px-6 py-3 text-white"
            >
              Open BudgetWise
            </a>
          </>
        )}

        {status === "invalid" && (
          <>
            <h1 className="text-2xl font-semibold">
              Invalid verification link
            </h1>

            <p className="mt-3 text-gray-600">
              Please open the verification link sent to your email address.
            </p>
          </>
        )}

        {status === "expired" && (
          <>
            <h1 className="text-2xl font-semibold">
              Verification link expired
            </h1>

            <p className="mt-3 text-gray-600">
              This link is invalid, expired, or has already been used.
              Please request a new verification email from BudgetWise.
            </p>
          </>
        )}

        {status === "error" && (
          <>
            <h1 className="text-2xl font-semibold">
              Verification failed
            </h1>

            <p className="mt-3 text-gray-600">
              We could not verify your email. Please try again or request
              another verification email.
            </p>
          </>
        )}
      </div>
    </main>
  );
}