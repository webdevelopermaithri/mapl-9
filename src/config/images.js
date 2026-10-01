/**
 * ------------------------------------------------------------------
 * IMAGE CONFIG — Philosophy page
 * ------------------------------------------------------------------
 * Every image on the Philosophy page is resolved from this single
 * file, and every image is a LOCAL asset imported from
 * src/assets/philosophy/ (no external URLs).
 *
 * To replace any picture, drop your real file into
 * src/assets/philosophy/ and repoint the import below — nothing
 * else in the codebase needs to change.
 * ------------------------------------------------------------------
 */
import heroSphere from "../assets/philosophy/hero-sphere.jpg";
import manifestoAir from "../assets/philosophy/manifesto-air.png";
import manifestoDandelion from "../assets/philosophy/manifesto-dandelion.jpg";
import manifestoRedefined from "../assets/philosophy/manifesto-redefined.jpg";

const images = {
  // Hero — the large circular "water sphere" visual.
  heroSphere,

  // Manifesto triptych
  manifestoAir,
  manifestoDandelion,
  manifestoRedefined,
};

export default images;
