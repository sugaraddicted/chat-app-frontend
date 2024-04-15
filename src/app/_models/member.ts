import { Photo } from "./photo"

export interface Member {
    id: string;
    username: string;
    name: string;
    bio: string;
    interests: string;
    photoUrl: string;
    photos: Photo[];
    age: number;
    created: Date;
    lastActive: Date;
  }