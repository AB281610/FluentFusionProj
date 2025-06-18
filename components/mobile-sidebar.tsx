import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar";

export const MobileSidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-white" />
      </SheetTrigger>
      <SheetContent className="left-0 p-0 z-[100]">
        {/* Add a visually hidden title for accessibility */}
        <SheetTitle className="sr-only">Sidebar</SheetTitle>
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};
