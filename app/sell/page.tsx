import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { SelectCategory } from "../components/SelectCategory";
import { Textarea } from "@/components/ui/textarea";
import { TipTapEditor } from "../components/Editor";
import { UploadDropzone } from "../lib/uploadthing";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { JSONContent } from "@tiptap/react";

export default function SellRoute() {
  const [json, setJson] = useState<null | JSONContent>(null);
  return (
    <section className="max-w-7xl mx-auto px-4 md:px-8 mb-14">
      <Card>
        <form action="">
          <CardHeader>
            <CardTitle>Sell your products with ease</CardTitle>
            <CardDescription>
              Please describe your product in details!
            </CardDescription>
          </CardHeader>
          <CardContent className="flex flex-col gap-y-10">
            <div className="flex flex-col gap-y-2">
              <Label>Name</Label>
              <Input
                name="name"
                type="text"
                placeholder="Name of your Product"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Category</Label>
              <SelectCategory />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Price</Label>
              <Input name="price" type="number" placeholder="$100" />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Summary</Label>
              <Textarea
                name="smallDescription"
                placeholder="Please describe your product"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <input
                type="hidden"
                name="description"
                value={JSON.stringify(json)}
              />
              <Label>Description</Label>
              <TipTapEditor setJson={setJson} json={json} />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Product Images</Label>
              <UploadDropzone
                className="ut-label:text-[#7d3aec] ut-button:bg-[#7d3aec]"
                endpoint="imageUploader"
              />
            </div>
            <div className="flex flex-col gap-y-2">
              <Label>Product File</Label>
              <UploadDropzone
                className="ut-label:text-[#7d3aec] ut-button:bg-[#7d3aec]"
                endpoint="productFileUpload"
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button>Submit</Button>
          </CardFooter>
        </form>
      </Card>
    </section>
  );
}
