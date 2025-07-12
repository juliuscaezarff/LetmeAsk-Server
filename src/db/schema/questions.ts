import { pgTable, uuid, text, timestamp } from "drizzle-orm/pg-core";
import { rooms } from "./rooms.ts";

export const questions = pgTable("questions", {
  id: uuid("id").primaryKey().defaultRandom(),
  roomId: uuid().references(() => rooms.id),
  question: text().notNull(),
  answer: text(),
  createdAt: timestamp().notNull().defaultNow(),
});
