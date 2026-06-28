/// <reference path="../pb_data/types.d.ts" />
migrate((app) => {
  const collection = app.findCollectionByNameOrId("skills");

  const record0 = new Record(collection);
    record0.id = "zuavsmfrh0ucsm4";
    record0.set("skillName", "JavaScript");
    record0.set("category", "Frontend");
    record0.set("proficiency", 90);
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
    record1.id = "e0q12jdjyn109u6";
    record1.set("skillName", "React.js");
    record1.set("category", "Frontend");
    record1.set("proficiency", 85);
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
    record2.id = "cnu5eultgf55iq2";
    record2.set("skillName", "HTML5");
    record2.set("category", "Frontend");
    record2.set("proficiency", 95);
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
    record3.id = "q5x6ldingweb72h";
    record3.set("skillName", "CSS3");
    record3.set("category", "Frontend");
    record3.set("proficiency", 90);
  try {
    app.save(record3);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record4 = new Record(collection);
    record4.id = "iquuolafry1be0m";
    record4.set("skillName", "Bootstrap");
    record4.set("category", "Frontend");
    record4.set("proficiency", 85);
  try {
    app.save(record4);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record5 = new Record(collection);
    record5.id = "gxxnt11n20fcuuu";
    record5.set("skillName", "Node.js");
    record5.set("category", "Backend");
    record5.set("proficiency", 80);
  try {
    app.save(record5);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record6 = new Record(collection);
    record6.id = "6whvybcsgrrqfnm";
    record6.set("skillName", "Express.js");
    record6.set("category", "Backend");
    record6.set("proficiency", 80);
  try {
    app.save(record6);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record7 = new Record(collection);
    record7.id = "23c566b5augs8is";
    record7.set("skillName", "REST API Development");
    record7.set("category", "Backend");
    record7.set("proficiency", 85);
  try {
    app.save(record7);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record8 = new Record(collection);
    record8.id = "o7ujilax359mb3n";
    record8.set("skillName", "MongoDB");
    record8.set("category", "Databases");
    record8.set("proficiency", 80);
  try {
    app.save(record8);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record9 = new Record(collection);
    record9.id = "ieg6hnneeovl3l2";
    record9.set("skillName", "MySQL");
    record9.set("category", "Databases");
    record9.set("proficiency", 75);
  try {
    app.save(record9);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record10 = new Record(collection);
    record10.id = "k76cd5acx6tjakr";
    record10.set("skillName", "Git");
    record10.set("category", "Tools");
    record10.set("proficiency", 90);
  try {
    app.save(record10);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record11 = new Record(collection);
    record11.id = "hjzb9wp82lz0xls";
    record11.set("skillName", "GitHub");
    record11.set("category", "Tools");
    record11.set("proficiency", 90);
  try {
    app.save(record11);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record12 = new Record(collection);
    record12.id = "n7lh8x1g0mq7t54";
    record12.set("skillName", "VS Code");
    record12.set("category", "Tools");
    record12.set("proficiency", 95);
  try {
    app.save(record12);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record13 = new Record(collection);
    record13.id = "70aqflro0ve9uox";
    record13.set("skillName", "Postman");
    record13.set("category", "Tools");
    record13.set("proficiency", 85);
  try {
    app.save(record13);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record14 = new Record(collection);
    record14.id = "42aabvum8txhm1j";
    record14.set("skillName", "MongoDB Atlas");
    record14.set("category", "Tools");
    record14.set("proficiency", 80);
  try {
    app.save(record14);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record15 = new Record(collection);
    record15.id = "kza1l9j7ek2qa4x";
    record15.set("skillName", "Vercel");
    record15.set("category", "Tools");
    record15.set("proficiency", 85);
  try {
    app.save(record15);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record16 = new Record(collection);
    record16.id = "hbf7zdagc4bzrdf";
    record16.set("skillName", "Render");
    record16.set("category", "Tools");
    record16.set("proficiency", 80);
  try {
    app.save(record16);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record17 = new Record(collection);
    record17.id = "viax9e8i7j5l3wo";
    record17.set("skillName", "Data Structures & Algorithms");
    record17.set("category", "Core Concepts");
    record17.set("proficiency", 75);
  try {
    app.save(record17);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record18 = new Record(collection);
    record18.id = "b7upp90wnmse6u9";
    record18.set("skillName", "OOP");
    record18.set("category", "Core Concepts");
    record18.set("proficiency", 80);
  try {
    app.save(record18);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record19 = new Record(collection);
    record19.id = "qx5n1w0ntu1h1fs";
    record19.set("skillName", "DBMS");
    record19.set("category", "Core Concepts");
    record19.set("proficiency", 75);
  try {
    app.save(record19);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record20 = new Record(collection);
    record20.id = "8iaqomwqhhzmlwa";
    record20.set("skillName", "Computer Networks");
    record20.set("category", "Core Concepts");
    record20.set("proficiency", 70);
  try {
    app.save(record20);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record21 = new Record(collection);
    record21.id = "geuoj813kvslabh";
    record21.set("skillName", "Operating Systems");
    record21.set("category", "Core Concepts");
    record21.set("proficiency", 70);
  try {
    app.save(record21);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record22 = new Record(collection);
    record22.id = "7vupigesv1tvwid";
    record22.set("skillName", "Software Engineering");
    record22.set("category", "Core Concepts");
    record22.set("proficiency", 75);
  try {
    app.save(record22);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record23 = new Record(collection);
    record23.id = "cpzo8mdwv0w2ym0";
    record23.set("skillName", "Python");
    record23.set("category", "Frontend");
    record23.set("proficiency", 75);
  try {
    app.save(record23);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record24 = new Record(collection);
    record24.id = "agfohh4sw4jmyvu";
    record24.set("skillName", "C");
    record24.set("category", "Frontend");
    record24.set("proficiency", 70);
  try {
    app.save(record24);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record25 = new Record(collection);
    record25.id = "eh26dpeik3mbps5";
    record25.set("skillName", "C++");
    record25.set("category", "Frontend");
    record25.set("proficiency", 70);
  try {
    app.save(record25);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record26 = new Record(collection);
    record26.id = "0qgpmdq6216q0xq";
    record26.set("skillName", "Java");
    record26.set("category", "Frontend");
    record26.set("proficiency", 70);
  try {
    app.save(record26);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }

  const record27 = new Record(collection);
    record27.id = "3tj1d4eu702d1ka";
    record27.set("skillName", "Responsive Web Design");
    record27.set("category", "Frontend");
    record27.set("proficiency", 90);
  try {
    app.save(record27);
  } catch (e) {
    if (e.message.includes("Value must be unique")) {
      console.log("Record with unique value already exists, skipping");
    } else {
      throw e;
    }
  }
}, (app) => {
  const seededRecordIds = ["3tj1d4eu702d1ka", "0qgpmdq6216q0xq", "eh26dpeik3mbps5", "agfohh4sw4jmyvu", "cpzo8mdwv0w2ym0", "7vupigesv1tvwid", "geuoj813kvslabh", "8iaqomwqhhzmlwa", "qx5n1w0ntu1h1fs", "b7upp90wnmse6u9", "viax9e8i7j5l3wo", "hbf7zdagc4bzrdf", "kza1l9j7ek2qa4x", "42aabvum8txhm1j", "70aqflro0ve9uox", "n7lh8x1g0mq7t54", "hjzb9wp82lz0xls", "k76cd5acx6tjakr", "ieg6hnneeovl3l2", "o7ujilax359mb3n", "23c566b5augs8is", "6whvybcsgrrqfnm", "gxxnt11n20fcuuu", "iquuolafry1be0m", "q5x6ldingweb72h", "cnu5eultgf55iq2", "e0q12jdjyn109u6", "zuavsmfrh0ucsm4"];
  for (const seededRecordId of seededRecordIds) {
    try {
      app.delete(app.findRecordById("skills", seededRecordId));
    } catch (error) {
      if (error.message.includes("no rows in result set")) {
        continue;
      }
      throw error;
    }
  }
})
