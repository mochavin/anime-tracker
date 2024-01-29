import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

export default function UnfinishedCard() {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Unfinished Anime</CardTitle>
        {/* <CardDescription>Deploy your new project in one-click.</CardDescription> */}
      </CardHeader>
      <CardContent>
        Konten
      </CardContent>
      {/* <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button>
      </CardFooter> */}
    </Card>
  )
}