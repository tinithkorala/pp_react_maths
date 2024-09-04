export const userRoles = {
  teacher: "teacher",
  student: "student",
};

export const REQUEST_STATUS = {
  IDLE: "idle",
  PENDING: "pending",
  FULFILLED: "fulfilled",
  REJECTED: "rejected",
};

export const ROLE_PHOTO_SELECTION = [
  {
    id: 1,
    title: "Tell us a bit more about yourself",
    subTitle: "Are you joining as a student or are you a teacher?",
    type: 'role',
  },
  {
    id: 2,
    title: "Make sure your everyone knows you",
    subTitle:
      "It helps if your profile picture is updated for everyone for everyone in your class",
    type: 'photo',
  },
];
