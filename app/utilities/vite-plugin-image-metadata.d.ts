declare module "*.gif" {
  const src: string;
  export default src;
  export const metadata: { width: number; height: number };
}
declare module "*.jpg" {
  const src: string;
  export default src;
  export const metadata: { width: number; height: number };
}
declare module "*.png" {
  const src: string;
  export default src;
  export const metadata: { width: number; height: number };
}

// Add other image types as required
