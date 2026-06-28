/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("education");

  const record0 = new Record(collection);
    record0.id = "sqp533193pcf07o";
    record0.set("type", "Primary Education");
    record0.set("school", "Chinmaya Vidyalaya Therubali");
    record0.set("level", "Class 10");
    record0.set("grade", "80%");
    record0.set("duration", "Oct 2009 - May 2022");
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
  const seededRecordIds = ["sqp533193pcf07o"];
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
