import {
  generateUploadButton,
  generateUploadDropzone,
} from "@uploadthing/react";
import { ourFileRouter } from "./app/api/uploadthing/core";

// Exporta os componentes de upload
export const UploadButton = generateUploadButton<OurFileRouter>();
export const UploadDropzone = generateUploadDropzone<OurFileRouter>();

// Tipagem
export type OurFileRouter = typeof ourFileRouter;
