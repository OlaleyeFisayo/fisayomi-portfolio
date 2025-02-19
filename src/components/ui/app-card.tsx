import { PropsWithChildren } from "react";
import { Card } from "./card";

interface AppCardProps extends PropsWithChildren {}

export default function AppCard({ children }: AppCardProps) {
  return (
    <Card className="bg-black2 border-[1px] border-black3 shadow">
      {children}
    </Card>
  );
}
