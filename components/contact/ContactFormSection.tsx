// components/contact/ContactFormSection.tsx
"use client";

import { useState } from "react";
import { Send, Mail, User, MessageSquareText, Tag } from "lucide-react";
import { useTranslations } from "next-intl";

type Status = "idle" | "sending" | "success" | "error";

export default function ContactFormSection() {
  const t = useTranslations("Contact.form");

  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const disabled = status === "sending";

  const onChange = (key: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [key]: e.target.value }));
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok || !data?.ok) {
        setStatus("error");
        setErrorMsg(data?.error || t("errors.generic"));
        return;
      }

      setStatus("success");
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch {
      setStatus("error");
      setErrorMsg(t("errors.generic"));
    }
  }

  return (
    <section className="bg-zinc-50 py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Heading */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-rose-500">
            {t("eyebrow")}
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-zinc-900 md:text-3xl">
            {t("title")}
          </h2>
          <p className="mt-4 text-sm text-zinc-600 md:text-base">
            {t("subtitle")}
          </p>
        </div>

        {/* Form card */}
        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-zinc-100 bg-white p-6 shadow-sm md:p-8">
          <form onSubmit={onSubmit} className="grid gap-4">
            <div className="grid gap-4 md:grid-cols-2">
              {/* Name */}
              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800">
                  {t("fields.name")}
                </span>
                <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-rose-500">
                  <User className="h-4 w-4 text-zinc-500" />
                  <input
                    value={form.name}
                    onChange={onChange("name")}
                    required
                    disabled={disabled}
                    className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                    placeholder={t("placeholders.name")}
                  />
                </div>
              </label>

              {/* Email */}
              <label className="space-y-2">
                <span className="text-sm font-medium text-zinc-800">
                  {t("fields.email")}
                </span>
                <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-rose-500">
                  <Mail className="h-4 w-4 text-zinc-500" />
                  <input
                    value={form.email}
                    onChange={onChange("email")}
                    type="email"
                    required
                    disabled={disabled}
                    className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                    placeholder={t("placeholders.email")}
                  />
                </div>
              </label>
            </div>

            {/* Subject */}
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">
                {t("fields.subject")}
              </span>
              <div className="flex items-center gap-2 rounded-xl border border-zinc-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-rose-500">
                <Tag className="h-4 w-4 text-zinc-500" />
                <input
                  value={form.subject}
                  onChange={onChange("subject")}
                  disabled={disabled}
                  className="w-full bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                  placeholder={t("placeholders.subject")}
                />
              </div>
            </label>

            {/* Message */}
            <label className="space-y-2">
              <span className="text-sm font-medium text-zinc-800">
                {t("fields.message")}
              </span>
              <div className="rounded-xl border border-zinc-200 bg-white p-3 focus-within:ring-2 focus-within:ring-rose-500">
                <div className="mb-2 flex items-center gap-2">
                  <MessageSquareText className="h-4 w-4 text-zinc-500" />
                  <span className="text-xs text-zinc-500">{t("hint")}</span>
                </div>
                <textarea
                  value={form.message}
                  onChange={onChange("message")}
                  required
                  disabled={disabled}
                  rows={6}
                  className="w-full resize-none bg-transparent text-sm text-zinc-900 outline-none placeholder:text-zinc-400"
                  placeholder={t("placeholders.message")}
                />
              </div>
            </label>

            {/* Status */}
            {status === "success" && (
              <div className="rounded-xl bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
                {t("success")}
              </div>
            )}

            {status === "error" && (
              <div className="rounded-xl bg-rose-50 px-4 py-3 text-sm text-rose-800">
                {errorMsg || t("errors.generic")}
              </div>
            )}

            {/* Submit */}
            <button
              type="submit"
              disabled={disabled}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-rose-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-rose-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              <Send className="h-4 w-4" />
              {status === "sending" ? t("sending") : t("cta")}
            </button>

            {/* Privacy note */}
            <p className="text-center text-xs text-zinc-500">
              {t("privacy")}
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
