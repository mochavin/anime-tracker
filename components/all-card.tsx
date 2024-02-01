import { Suspense } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card"
import MyCardContent from "./my-card-content"

export default function AllCard({
  type,
}: {
  type: string
}) {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Finished Anime</CardTitle>
      </CardHeader>
      <CardContent>
        <Suspense fallback={<h1>Loading...</h1>}>
          <MyCardContent type={type} />
        </Suspense>
      </CardContent>
    </Card>
  )
}