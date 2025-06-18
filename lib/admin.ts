import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2s9SsEmq3N5z9vY8PX36hf1pEll",
];

export const isAdmin = async () => {
  const { userId } = await auth();

  if (!userId) {
    return false;
  }

  return adminIds.includes(userId);
};
