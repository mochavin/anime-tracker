import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import UnfinishedCardContent from "./unfinished-card-content";

export default function UnfinishedCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Unfinished Anime</CardTitle>
      </CardHeader>
      <CardContent>
        <UnfinishedCardContent />
      </CardContent>
    </Card>
  )
}