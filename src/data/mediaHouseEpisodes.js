// Each real AquaTalks YouTube video gets a thumbnail pulled straight
// from YouTube's own image CDN (img.youtube.com), so the artwork is
// always the actual video's cover frame — no invented or stock
// photography. Clicking a card opens the real video on YouTube in a
// new tab. The same 4-video set (plus 4 "coming soon" slots) is used
// for both seasons below.
//
// NOTE: title / guest / role are placeholders — this build has no way
// to pull the real episode title or guest name from YouTube, so
// please replace the placeholder text with the actual details
// whenever you have them (duration can be added the same way).
function ytThumb(id) {
  return `https://img.youtube.com/vi/${id}/hqdefault.jpg`
}

const sharedEpisodes = [
  {
    ep: 'EP 01',
    title: 'AquaTalks — Episode 1',
    guest: 'Watch on YouTube',
    role: '',
    image: ytThumb('2A8psSR60wU'),
    url: 'https://youtu.be/2A8psSR60wU',
  },
  {
    ep: 'EP 02',
    title: 'AquaTalks — Episode 2',
    guest: 'Watch on YouTube',
    role: '',
    image: ytThumb('8mzl0hVlA2s'),
    url: 'https://youtube.com/shorts/8mzl0hVlA2s',
  },
  {
    ep: 'EP 03',
    title: 'AquaTalks — Episode 3',
    guest: 'Watch on YouTube',
    role: '',
    image: ytThumb('LgPypZV_liA'),
    url: 'https://youtube.com/shorts/LgPypZV_liA',
  },
  {
    ep: 'EP 04',
    title: 'AquaTalks — Episode 4',
    guest: 'Watch on YouTube',
    role: '',
    image: ytThumb('1kvcXhZPF8c'),
    url: 'https://youtu.be/1kvcXhZPF8c',
  },
  { ep: 'EP 05', vacant: true },
  { ep: 'EP 06', vacant: true },
  { ep: 'EP 07', vacant: true },
  { ep: 'EP 08', vacant: true },
]

export const seasons = {
  1: {
    label: 'SEASON 1 · 2023',
    title: 'The Water Century',
    description:
      "Eight conversations with the minds shaping humanity's most critical resource — from hydrologists to heads of state.",
    count: '8 EPISODES',
    episodes: sharedEpisodes,
  },
  2: {
    label: 'SEASON 2 · 2026',
    title: 'Built for the Thirsty World',
    description:
      'From the frontlines of deployment — defence commanders, green hydrogen pioneers, hospital CEOs and city-planners.',
    count: '0 EPISODES',
    episodes: [],
  },
}
