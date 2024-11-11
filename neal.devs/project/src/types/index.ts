export interface Profile {
  id: string;
  name: string;
  age: number;
  location: string;
  bio: string;
  occupation: string;
  photos: string[];
  interests: string[];
  prompt1: {
    question: string;
    answer: string;
  };
  prompt2: {
    question: string;
    answer: string;
  };
  prompt3: {
    question: string;
    answer: string;
  };
}

export interface Match {
  id: string;
  userId: string;
  matchedUserId: string;
  timestamp: string;
  lastMessage?: {
    text: string;
    timestamp: string;
    senderId: string;
  };
}