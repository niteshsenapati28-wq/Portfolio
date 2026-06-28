/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("user");

  const record0 = new Record(collection);
    record0.id = "n9erpvxwm95myu8";
    record0.set("name", "Nitesh Sen");
    record0.set("title", "Full Stack Developer | MERN Stack Developer | Software Engineering Student");
    record0.set("bio", "Passionate Full Stack Developer with strong skills in web development, database management, and software engineering. Enjoys building responsive, user-friendly, and scalable web applications using modern technologies. Continuously learning and improving problem-solving abilities.");
    record0.set("resumeURL", "https://your-resume-url.com/resume.pdf");
    record0.set("socialLinks", "{'github': 'https://github.com/yourusername', 'linkedin': 'https://linkedin.com/in/yourprofile', 'email': 'your.email@example.com', 'phone': '+91 XXXXXXXXXX'}");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["n9erpvxwm95myu8"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("user", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
