/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("experience");

  const record0 = new Record(collection);
    record0.id = "wokin9azqoos6zk";
    record0.set("company", "Tech Company Name");
    record0.set("role", "Full Stack Developer Intern");
    record0.set("duration", "3 months");
    record0.set("description", "Developed and maintained web applications using MERN stack, collaborated with team on feature development");
    record0.set("startDate", "2024-01-01");
    record0.set("endDate", "2024-03-31");
  try {
    app.save(record0);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record1 = new Record(collection);
    record1.id = "gf1jpq19rx8fdbd";
    record1.set("company", "Self-Employed");
    record1.set("role", "Freelance Web Developer");
    record1.set("duration", "Ongoing");
    record1.set("description", "Building custom web solutions for clients, focusing on responsive design and performance optimization");
    record1.set("startDate", "2023-06-01");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["gf1jpq19rx8fdbd", "wokin9azqoos6zk"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("experience", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
