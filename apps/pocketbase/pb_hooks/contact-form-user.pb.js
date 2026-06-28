/// <reference path="../pb_data/types.d.ts" />
onRecordAfterCreateSuccess((e) => {
  const email = e.record.get("email");
  const name = e.record.get("name");
  
  const userMessage = new MailerMessage({
    from: {
      address: $app.settings().meta.senderAddress,
      name: $app.settings().meta.senderName
    },
    to: [{ address: email }],
    subject: "We received your message",
    html: "<h2>Thank you for contacting us!</h2><p>Hi " + name + ",</p><p>We have received your message and will get back to you as soon as possible.</p><p>Best regards,<br>The Team</p>"
  });
  $app.newMailClient().send(userMessage);
  e.next();
}, "contacts");