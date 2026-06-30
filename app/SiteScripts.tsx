"use client";

import { useEffect } from "react";

/**
 * Loads the original site's vanilla-JS framework (fine-min.js + common-min.js)
 * and the form validator (validation.js), then boots the page interactions.
 *
 * The framework registers `DOMContentLoaded` listeners and document-level
 * delegated events at parse time. Because we load it *after* React has hydrated
 * (so there is no hydration race), the native DOMContentLoaded has already
 * fired — we therefore dispatch a synthetic one so those listeners run, then
 * call the init routine (a trimmed copy of the original inline bootstrap with
 * the analytics / recaptcha / mixpanel calls removed).
 */
export default function SiteScripts() {
  useEffect(() => {
    const w = window as unknown as Record<string, unknown>;

    // Globals the framework expects (mirrors the original <head>).
    w.heading_animation = true;
    w.preloader = false;
    w.TRAITS_POST_ID = 22467;
    w.pageTemplate = "page-templates/all-cases.php";

    const loadScript = (src: string) =>
      new Promise<void>((resolve, reject) => {
        // Avoid double-injecting if the effect somehow runs twice.
        if (document.querySelector(`script[data-site-js="${src}"]`)) {
          resolve();
          return;
        }
        const s = document.createElement("script");
        s.src = src;
        s.async = false;
        s.dataset.siteJs = src;
        s.onload = () => resolve();
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
      });

    let cancelled = false;

    (async () => {
      try {
        // Order matters: fine-min defines el()/event() used by common-min.
        await loadScript("/js/fine-min.js");
        await loadScript("/js/common-min.js");
        await loadScript("/js/validation.js");
        if (cancelled) return;

        // Fire the listeners that the framework registered for DOMContentLoaded.
        document.dispatchEvent(new Event("DOMContentLoaded"));

        boot(w);
      } catch (err) {
        // Non-fatal: the static markup still renders, just without animations.
        console.error("[SiteScripts] init failed:", err);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return null;
}

/* Trimmed version of the original inline `initPageScripts()` — keeps the layout
   / animation / tab / slider / validation wiring, drops mixpanel + recaptcha. */
function boot(w: Record<string, unknown>) {
  const fn = (name: string) => w[name] as ((...a: unknown[]) => unknown) | undefined;

  try {
    const VanillaValidator = w.VanillaValidator as
      | (new (cfg: unknown) => unknown)
      | undefined;
    if (VanillaValidator) {
      // eslint-disable-next-line no-new
      new VanillaValidator({
        container: ".contact-form",
        validateOnFieldChanges: false,
        validationBy: "onclick",
        messages: {
          required: "Required",
          email: "Please enter it in the format: name@domain.com",
          maxLength: "Max 1000 chars",
          pattern: "Invalid data",
        },
        customValidates: {
          budget: {
            message: "Please select your approx. budget",
            fn: () => {
              const el = w.el as ((s: string) => { length: number }) | undefined;
              return !!el && el(".budget:checked").length > 0;
            },
          },
        },
        // Backend is mocked: validate visually, then trigger React submit.
        onFormSubmit: (_container: unknown, ev?: Event) => {
          if (ev && typeof ev.preventDefault === "function") ev.preventDefault();
          if (typeof window !== "undefined" && (window as any).triggerContactSubmit) {
             (window as any).triggerContactSubmit();
          }
        },
      });
    }
  } catch (e) {
    console.warn("[SiteScripts] validator init skipped:", e);
  }

  // Core layout / animation initializers (defined in common-min.js).
  ["initScrollByCss", "initMarqueue", "initScrollBlock", "initAllSliders", "initAllTabs"].forEach(
    (name) => {
      try {
        fn(name)?.();
      } catch (e) {
        console.warn(`[SiteScripts] ${name} failed:`, e);
      }
    }
  );

  // Reveal above-the-fold content (.isview -> .visible). isView() depends on
  // final element positions, so it must run AFTER layout settles — fonts,
  // videos and images all shift geometry, and running it too early measures
  // stale positions and reveals nothing.
  //
  // Keep this GENTLE: only call isView() (which idempotently adds .visible to
  // in-view elements), and only at a few layout-settled moments. Do NOT storm
  // synthetic scroll/resize events — that churns the reveal state and keeps
  // restarting the .3s opacity transition on slidetop/.scramble elements so
  // they never finish (mirrors how the original site behaves). The framework
  // binds isView to real scroll, which reveals the rest as the user scrolls.
  const reveal = () => {
    try {
      fn("isView")?.();
    } catch {
      /* noop */
    }
  };

  requestAnimationFrame(() => requestAnimationFrame(reveal));
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(reveal).catch(() => {});
  }
  if (document.readyState === "complete") {
    setTimeout(reveal, 0);
  } else {
    window.addEventListener("load", reveal, { once: true });
  }
  setTimeout(reveal, 600);
}
