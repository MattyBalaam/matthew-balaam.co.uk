import { imageSizeFromFile } from "image-size/fromFile";
import { createFilter, type Plugin } from "vite";

const include = /^[^?]+\.(avif|gif|heif|jpeg|jpg|png|tiff|webp)(\?.*)?$/;
const exclude = "public/**/*";

const imageFilter = createFilter(include, exclude);

// super basic plugin to get metadata like image dimensions at build time
export function imageMetadata(): Plugin {
  return {
    name: "image-metadata",
    enforce: "pre",
    async load(id) {
      if (!imageFilter(id) || id.endsWith("?url")) return null;

      const metadata = await imageSizeFromFile(id);

      return {
        code: `
            import assetUrl from "${id}?url";
            export default assetUrl;
            export const metadata = ${JSON.stringify(metadata)};
          `,
        map: null,
      };
    },
  };
}
