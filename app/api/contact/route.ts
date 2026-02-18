// app/api/contact/route.ts
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const name = String(body?.name ?? "").trim();
    const email = String(body?.email ?? "").trim();
    const subject = String(body?.subject ?? "").trim();
    const message = String(body?.message ?? "").trim();

    // Validación mínima (server-side)
    if (!name || !email || !message) {
      return NextResponse.json(
        { ok: false, error: "Faltan campos obligatorios." },
        { status: 400 }
      );
    }

    const to = process.env.CONTACT_TO_EMAIL;
    if (!to) {
      return NextResponse.json(
        { ok: false, error: "CONTACT_TO_EMAIL no está configurado." },
        { status: 500 }
      );
    }

    const safeSubject = subject ? subject : "Nuevo mensaje desde la web";

    await resend.emails.send({
      from: "Mily Peru Guide <onboarding@resend.dev>", // funciona para pruebas
      to: [to],
      replyTo: email,
      subject: `[Contacto] ${safeSubject}`,
      text: `Nuevo mensaje desde Mily Peru Guide

Nombre: ${name}
Email: ${email}
Asunto: ${safeSubject}

Mensaje:
${message}
`
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: "Error enviando el mensaje." },
      { status: 500 }
    );
  }
}
