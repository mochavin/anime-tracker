import { Suspense } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import UnfinishedCardContent from "./unfinished-card-content";

export default function UnfinishedCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Unfinished Anime</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<h1>Loading...</h1>}>
          <UnfinishedCardContent />
        </Suspense>
      </CardContent>
    </Card>
  )
}