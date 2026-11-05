// Vite's built-in types only cover lowercase extensions; some assets use uppercase.
declare module "*.PNG" {
  const src: string;
  export default src;
}
declare module "*.JPG" {
  const src: string;
  export default src;
}
declare module "*.JPEG" {
  const src: string;
  export default src;
}
