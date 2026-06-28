/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("certifications");

  const record0 = new Record(collection);
    record0.id = "2k8iuor3t0f2d7s";
    record0.set("title", "Full Stack Web Development");
    record0.set("issuer", "Udemy");
    record0.set("issueDate", "2024-03-15");
    record0.set("credentialURL", "https://udemy.com/certificate");
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
    record1.id = "5ax8frtpsoilyt6";
    record1.set("title", "React.js Mastery");
    record1.set("issuer", "Coursera");
    record1.set("issueDate", "2024-02-20");
    record1.set("credentialURL", "https://coursera.org/certificate");
  try {
    app.save(record1);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record2 = new Record(collection);
    record2.id = "ico9f27i35x2as6";
    record2.set("title", "Node.js & Express.js");
    record2.set("issuer", "Udemy");
    record2.set("issueDate", "2024-01-10");
    record2.set("credentialURL", "https://udemy.com/certificate");
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["ico9f27i35x2as6", "5ax8frtpsoilyt6", "2k8iuor3t0f2d7s"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("certifications", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
