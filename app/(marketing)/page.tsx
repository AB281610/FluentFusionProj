"use client"; 
{/*import { Button } from "@/components/ui/button";
import { ClerkLoaded, 
  ClerkLoading, 
  SignedIn, 
  SignedOut, 
  SignUpButton,
  SignInButton,
   } from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
export default function Home() {
  return (
    <div className= "max-w-[988px] mx-auto flex-l w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-2">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/heroimage.jpg" fill alt="Hero"/>
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice, and master new languages with FluentFusion.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin">
            </Loader>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="secondary" className="w-full">
                  Get Started!
                </Button>
              </SignUpButton>
              <SignInButton
              mode="modal"
              afterSignInUrl="/learn"
              afterSignUpUrl="/learn"
              >
                <Button size="lg" variant="primaryOutline" className="w-full">
                  I already have an account.
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>

            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
    
  )
}*/}
{/*
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/learn");
    }
  }, [isSignedIn, router]);

  return (
    <div className="max-w-[988px] mx-auto w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-4">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/heroimage.jpg" fill alt="Hero image" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice, and Master New Languages with FluentFusion.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <div className="flex flex-col gap-2 w-full">
                <SignUpButton mode="modal">
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started!
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    I Already Have an Account.
                  </Button>
                </SignInButton>
              </div>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href=" ">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
*/}

{/*import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  useUser,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser();

  useEffect(() => {
    if (isSignedIn) {
      router.push("/learn");
    }
  }, [isSignedIn, router]);

  const handleSignUp = () => {
    router.push("/sign-up");
  };

  const handleSignIn = () => {
    router.push("/sign-in");
  };

  return (
    <div className="max-w-[988px] mx-auto w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-4">
      <div className="relative w-[240px] h-[240px] lg:w-[424px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/heroimage.jpg" fill alt="Hero image" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice, and Master New Languages with FluentFusion.
        </h1>
        <div>
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <div className="flex flex-col gap-2 w-full">
                <Button size="lg" variant="secondary" className="w-full" onClick={handleSignUp}>
                  Get Started!
                </Button>
                <Button size="lg" variant="primaryOutline" className="w-full" onClick={handleSignIn}>
                  I Already Have an Account.
                </Button>
              </div>
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}*/}
import {
  ClerkLoaded,
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignUpButton,
  SignInButton,
  useUser ,
} from "@clerk/nextjs";
import { Loader } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

export default function Home() {
  const router = useRouter();
  const { isSignedIn } = useUser ();

  useEffect(() => {
    if (isSignedIn) {
      router.push(" ");
    }
  }, [isSignedIn, router]);

  return (
    <div className="max-w-[988px] mx-auto w-full flex flex-col lg:flex-row items-center justify-center p-4 gap-4">
      <div className="relative w-[200px] h-[240px] lg:w-[530px] lg:h-[424px] mb-8 lg:mb-0">
        <Image src="/heroimage.jpg" fill alt="Hero image" />
      </div>
      <div className="flex flex-col items-center gap-y-8">
        <h1 className="text-xl lg:text-3xl font-bold text-neutral-600 max-w-[480px] text-center">
          Learn, Practice, and Master New Languages with FluentFusion.
        </h1>
        <div className="flex flex-col items-center gap-y-3 max-w-[330px] w-full">
          <ClerkLoading>
            <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <div className="flex flex-col gap-2 w-full">
                <SignUpButton mode="modal">
                  <Button size="lg" variant="secondary" className="w-full">
                    Get Started!
                  </Button>
                </SignUpButton>
                <SignInButton mode="modal">
                  <Button size="lg" variant="primaryOutline" className="w-full">
                    I Already Have an Account.
                  </Button>
                </SignInButton>
              </div>
              {/* Uncomment if using Smart CAPTCHA */}
              {/* <div id="clerk-captcha"></div> */}
            </SignedOut>
            <SignedIn>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/learn">Continue Learning</Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}