import { UUID } from "crypto";
import type { Theme } from "./theme";

export type User = {
  id: UUID;
  username: string;
  name: string;
  email: string;
  phoneNumber?: string | null;
  password: string;
  passwordUpdatedAt?: Date | null;
  bio?: string | null;
  theme?: Record<string, any> | null;
  website?: string | null;
  location?: string | null;
  photoUrl?: string | null;
  verified?: boolean | null;
  accountCreatedAt: Date;
  pinnedTweet?: string | null;
  coverPhotoUrl?: string | null;
  following: string[];
  followers: string[];
};

export type EditableData = Extract<
  keyof User,
  "bio" | "name" | "website" | "photoURL" | "location" | "coverPhotoURL"
>;
