/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("education");

  const record0 = new Record(collection);
    record0.id = "oitzc2573tgk8y0";
    record0.set("type", "Primary Education");
    record0.set("school", "Chinmaya Vidyalaya Therubali");
    record0.set("level", "Class 10");
    record0.set("grade", "80%");
    record0.set("startDate", "2009-10-01");
    record0.set("endDate", "2022-05-31");
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
    record1.id = "087kdvsg09435mh";
    record1.set("type", "Course");
    record1.set("institution", "ApnaCollege");
    record1.set("batch", "Sigma prime batch");
    record1.set("duration", "2 years");
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
  const seededRecordIds = ["087kdvsg09435mh", "oitzc2573tgk8y0"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("education", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
