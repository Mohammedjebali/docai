"use client";

import { useState, useEffect, useCallback } from "react";
import { type Lang, DEFAULT_LANG, STORAGE_KEY, getTranslations } from "./i18n";

export function useTranslation() {
  const [lang, setLangState] = useState<Lang>(DEFAULT_LANG);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored && ["fr", "en", "ar"].includes(stored)) {
      setLangState(stored);
    }
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const setLang = useCallback((newLang: Lang) => {
    localStorage.setItem(STORAGE_KEY, newLang);
    setLangState(newLang);
  }, []);

  function resolve(key: string): unknown {
    const dict = getTranslations(lang) as Record<string, unknown>;
    const keys = key.split(".");
    let current: unknown = dict;
    for (const k of keys) {
      if (current == null || typeof current !== "object") return key;
      current = (current as Record<string, unknown>)[k];
    }
    return current;
  }

  const t = useCallback(
    (key: string): string => {
      const val = resolve(key);
      return typeof val === "string" ? val : key;
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  const ta = useCallback(
    (key: string): string[] => {
      const val = resolve(key);
      return Array.isArray(val) ? val : [];
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [lang]
  );

  const isRTL = lang === "ar";
  const dir = isRTL ? "rtl" : "ltr";

  return { t, ta, lang, setLang, dir, isRTL };
}
