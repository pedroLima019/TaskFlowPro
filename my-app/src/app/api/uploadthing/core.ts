import { createUploadthing, type FileRouter } from "uploadthing/next";

const f = createUploadthing();

export const ourFileRouter = {
  avatarUploader: f({
    image: { maxFileSize: "4MB" },
  }).onUploadComplete(async ({ file }) => {
    console.log("✅ Upload completo:", file.url);
    return { fileUrl: file.url };
  }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
