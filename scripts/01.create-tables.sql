CREATE TABLE "Characters" (
  "Id" SMALLINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "Description" VARCHAR(60) NOT NULL,
  "Image" BYTEA NOT NULL
);

CREATE TABLE "Students" (
  "Id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "Name" VARCHAR(100) NOT NULL,
  "Email" VARCHAR(150) UNIQUE NOT NULL,
  "User" VARCHAR(50) UNIQUE NOT NULL,
  "Password" VARCHAR(64) NOT NULL,
  "Salt" VARCHAR(64) NOT NULL,
  "Birth" DATE,
  "Gender" VARCHAR(6),
  "Character_Id" SMALLINT,
  FOREIGN KEY ("Character_Id") REFERENCES "Characters" ("Id")
);

CREATE TABLE "Preferences" (
  "Id" SMALLINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "Sound" BOOLEAN DEFAULT TRUE,
  "Vibration" BOOLEAN DEFAULT TRUE,
  "Student_Id" INTEGER,
  FOREIGN KEY ("Student_Id") REFERENCES "Students" ("Id")
);

CREATE TABLE "Challenges" (
  "Id" INTEGER GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "Message" VARCHAR(300)
);

CREATE TABLE "BNCCSkills" (
  "Id" SMALLINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "SkillName" VARCHAR(15) UNIQUE NOT NULL,
  "Description" VARCHAR(300),
  "Challenge_Id" INTEGER,
  FOREIGN KEY ("Challenge_Id") REFERENCES "Challenges" ("Id")
);

CREATE TABLE "AnswerKeys" (
  "Id" SMALLINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "Response" VARCHAR(50) NOT NULL,
  "ResponsePattern" VARCHAR(50),
  "Help" VARCHAR(600),
  "Challenge_Id" INTEGER,
  FOREIGN KEY ("Challenge_Id") REFERENCES "Challenges" ("Id")
);

CREATE TABLE "Attempts" (
  "Id" SMALLINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "Correct" BOOLEAN NOT NULL,
  "Steps" SMALLINT NOT NULL,
  "Date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "StudentResponse" VARCHAR(150),
  "Student_Id" INTEGER,
  "Challenge_Id" INTEGER,
  FOREIGN KEY ("Student_Id") REFERENCES "Students" ("Id"),
  FOREIGN KEY ("Challenge_Id") REFERENCES "Challenges" ("Id")
);

CREATE TABLE "Scores" (
  "Id" SMALLINT GENERATED BY DEFAULT AS IDENTITY PRIMARY KEY,
  "Stars" SMALLINT NOT NULL,
  "Diamonds" SMALLINT NOT NULL,
  "Date" TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  "Student_Id" INTEGER,
  "Challenge_Id" INTEGER,
  FOREIGN KEY ("Student_Id") REFERENCES "Students" ("Id"),
  FOREIGN KEY ("Challenge_Id") REFERENCES "Challenges" ("Id")
);