import FinishedCardContent from "./finished-card-content";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function FinishedCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Finished Anime</CardTitle>
      </CardHeader>
      <CardContent>
        <FinishedCardContent />
      </CardContent>
    </Card>
  )
}