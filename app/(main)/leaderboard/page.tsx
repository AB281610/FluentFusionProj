import Image from "next/image";
import { redirect } from "next/navigation";

import { FeedWrapper } from "@/components/feed-wrapper";
import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getTopTenUsers, getUserProgress, getUserSubscription } from "@/db/queries"
import {Separator} from "@/components/ui/separator";
import { Avatar } from "@/components/ui/avatar";
import { AvatarImage } from "@radix-ui/react-avatar";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

const LeaderboardPage = async () => {
const userProgressData = getUserProgress();
const userSubscriptionData=getUserSubscription();
const leaderboardData= getTopTenUsers();

const[
    userProgress,
    userSubscription,
    leaderboard,
] = await Promise.all([
    userProgressData,
    userSubscriptionData,
    leaderboardData,
]);

if(!userProgress || !userProgress.activeCourse) {
    redirect("/courses");
}

const isPro=!!userSubscription?.isActive;

return(
    <div className="flex flex-row-reverse gap-[48px] px-6">
    <StickyWrapper>
    <UserProgress 
       activeCourse={userProgress.activeCourse} 
       hearts={userProgress.hearts}
       points={userProgress.points}
       hasActiveSubscription={isPro}
       />
       {!isPro && (
            <Promo/>
        )}
        <Quests points={userProgress.points}/>
    </StickyWrapper>
    <FeedWrapper>
        <div className="w-full flex flex-col items-center">
        <Image
        src="/leaderboard.svg"
        alt="Leaderboard"
        height={90}
        width={90}
        />
        <h1 className="text-center font-bold text-netural-800 text-2xl my-6">
            Leaderboard
        </h1>
        <p className="text-muted-foreground text-center text-lgmb-6">
        See where you stand among the other learners in community.
        </p>
        </div>
        <Separator className="mb-4 h-0.5 rounded-full"/>
        {leaderboard.map((userProgress, index)=>(
            <div key={userProgress.userId}
            className="flex items-center w-full p-2 px-4 rounded-xl hover:bg-gray-200/50"
            >
                <p className="font-bold text-violet-900 mr-4">{index+1}</p>
                <Avatar
                className="border bg-violet-500 h-12 w12 ml-3 mr-6"
                >
                <AvatarImage
                src={userProgress.userImageSrc}
                />
                </Avatar>
                <p className="font-bold text-neutral-800 flex-1">
                    {userProgress.userName}
                </p>
                <p className="text-muted-foreground">
                    {userProgress.points} XP
                </p>
            </div>
        ))}
    </FeedWrapper>
    </div>
);
};

export default LeaderboardPage;