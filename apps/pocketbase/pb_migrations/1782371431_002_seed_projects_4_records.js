/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("projects");

  const record0 = new Record(collection);
    record0.id = "dwqx28cou5xd238";
    record0.set("title", "Personal Portfolio Website");
    record0.set("description", "Full-stack portfolio with dynamic project management, contact form, email notifications, responsive design, and admin dashboard");
    record0.set("technologies", ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS"]);
    record0.set("featured", true);
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
    record1.id = "25893whwhda5s1e";
    record1.set("title", "Library Management System");
    record1.set("description", "Database-driven app for managing books, members, lending/returns, inventory with CRUD operations");
    record1.set("technologies", ["React.js", "Node.js", "Express.js", "MySQL"]);
    record1.set("featured", true);
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
    record2.id = "duwfvn766tdzf2x";
    record2.set("title", "Student Management System");
    record2.set("description", "Web app for managing student records, attendance, academic details, and performance reports");
    record2.set("technologies", ["React.js", "Node.js", "Express.js", "MongoDB"]);
    record2.set("featured", true);
  try {
    app.save(record2);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record3 = new Record(collection);
    record3.id = "mubmbpeaxxqxzpe";
    record3.set("title", "E-Commerce Web Application");
    record3.set("description", "Responsive shopping platform with product listings, authentication, cart, orders, and payment integration");
    record3.set("technologies", ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe"]);
    record3.set("featured", true);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["mubmbpeaxxqxzpe", "duwfvn766tdzf2x", "25893whwhda5s1e", "dwqx28cou5xd238"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("projects", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
