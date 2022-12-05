export default function getImageURL (image) {
  return new URL(`../assets/img/${image}`,import.meta.url).href
}