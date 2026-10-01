// Uses react-icons (already a project dependency) instead of lucide-react,
// so the Water subsection doesn't require adding a new package.
import { FiDroplet, FiActivity, FiSun } from 'react-icons/fi'
import { FaAtom, FaRecycle } from 'react-icons/fa'

export const iconMap = {
  droplet: FiDroplet,
  gauge: FiActivity,
  atom: FaAtom,
  sun: FiSun,
  recycle: FaRecycle,
}

// Deliberately painterly, low-saturation gradients that echo the
// canyon / water / plant photography from the brief, without
// depending on external image hosting.
export const photoMap = {
  canyon: 'linear-gradient(180deg, #b56a52 0%, #8a5a63 28%, #3a4f78 62%, #1f345c 100%)',
  splash: 'linear-gradient(180deg, #0d6b73 0%, #17939a 45%, #b7e4e2 100%)',
  'droplet-teal': 'linear-gradient(180deg, #0f7e8c 0%, #12a9ad 55%, #eaf9f6 100%)',
  'dusk-forest': 'linear-gradient(180deg, #d7a24a 0%, #b97b4a 45%, #4b4038 100%)',
  industrial: 'linear-gradient(180deg, #35505f 0%, #4c7079 55%, #9db6ba 100%)',
}
