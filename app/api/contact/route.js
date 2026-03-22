// import { NextResponse } from "next/server";
// import nodemailer from "nodemailer";

// export async function POST(req) {
//   const { name, email, company, message } = await req.json();

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS,
//     },
//   });

//   await transporter.sendMail({
//     from: email,
//     to: process.env.MAIL_USER,
//     subject: `New Portfolio Contact – ${name}`,
//     text: `
// Name: ${name}
// Email: ${email}
// Company: ${company}

// Message:
// ${message}
//     `,
//   });

//   return NextResponse.json({ success: true });
// }
