import { UserProgress } from "@/components/user-progress";
import { StickyWrapper } from "@/components/sticky-wrapper";
import { getUserProgress, getUserSubscription } from "@/db/queries"
import { redirect } from "next/navigation";
import { FeedWrapper } from "@/components/feed-wrapper";
import Image from "next/image";
import { Items } from "./items";
import { Promo } from "@/components/promo";
import { Quests } from "@/components/quests";

const ShopPage = async () => {
const userProgressData = getUserProgress();
const userSubscriptionData=getUserSubscription();

const[
    userProgress,
    userSubscription,
] = await Promise.all([
    userProgressData,
    userSubscriptionData
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
        src="/shop.svg"
        alt="Shop"
        height={90}
        width={90}
        />
        <h1 className="text-center font-bold text-netural-800 text-2xl my-6">
            Shop
        </h1>
        <p className="text-muted-foreground text-center text-lgmb-6">
        Spend your points on cool stuff.
        </p>
        </div>
        <Items 
        hearts={userProgress.hearts}
        points={userProgress.points}
        hasActiveSubscription={isPro}
        />
    </FeedWrapper>
    </div>
);
};

export default ShopPage;