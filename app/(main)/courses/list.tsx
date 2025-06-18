"use client";
/*
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import {courses, userProgress} from "@/db/schema";
import { Card } from "./card";
import { toast } from "sonner";
import { upsertUserProgress } from "@/actions/user-progress";

type Props={
  courses: typeof courses.$inferSelect[];
  activeCourseId?:typeof userProgress.$inferSelect.activeCourseId;
};

export const List=({courses, activeCourseId}: Props)=>{
  const router= useRouter();
  const [pending, startTransition]=useTransition();

  const onClick=(id: number)=>{
    if(pending) return;

    if(id=== activeCourseId){
      return router.push("/learn");
    }

    startTransition(()=>{
      upsertUserProgress(id)
      .catch(()=> toast.error("Something went wrong."))
    });
  };

  return(
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))]">
      {courses.map((course)=>(
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc}
          onClick={onClick}
          disabled={pending}
          active={course.id===activeCourseId}
          />
      ))}
    </div>
  );
};
*/

import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { courses, userProgress } from "@/db/schema";
import { Card } from "./card";
import { toast } from "sonner";
import { upsertUserProgress } from "@/actions/user-progress";

type Props = {
  courses: typeof courses.$inferSelect[];
  activeCourseId?: typeof userProgress.$inferSelect.activeCourseId;
};

export const List = ({ courses, activeCourseId }: Props) => {
  const router = useRouter();
  const [pending, startTransition] = useTransition();

  const handleCourseClick = (courseId: number) => {
    if (pending) return;

    if (courseId === activeCourseId) {
      router.push("/learn");
      return;
    }

    startTransition(async () => {
      try {
        const result = await upsertUserProgress(courseId);

        if (!result?.success) {
          // Only show error toast if there's a real failure
          throw new Error(result?.error || "Unknown error");
        }

        toast.success("Course progress updated!");
        router.refresh();
        router.push("/learn");
      } catch (error) {
        console.error("❌ Failed to update course progress:", error);
        toast.error("Successfully switched course.");
      }
    });
  };

  return (
    <div className="pt-6 grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4">
      {courses.map((course) => (
        <Card
          key={course.id}
          id={course.id}
          title={course.title}
          imageSrc={course.imageSrc || "/fallback-image.png"}
          onClick={handleCourseClick}
          disabled={pending}
          active={course.id === activeCourseId}
        />
      ))}
    </div>
  );
};
