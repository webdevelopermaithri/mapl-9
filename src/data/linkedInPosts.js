// Latest LinkedIn post shown in the Media House hero.
// Newest post goes first in `linkedInPosts`. Each post's `slides` are the
// carousel pages (PDF pages exported as images) and `url` is the direct link
// to the LinkedIn post.

import maithriAvatar from '../assets/mediaHouse/linkedin/maithri-avatar.png';
import kanmoi1 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-01.jpg';
import kanmoi2 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-02.jpg';
import kanmoi3 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-03.jpg';
import kanmoi4 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-04.jpg';
import kanmoi5 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-05.jpg';
import kanmoi6 from '../assets/mediaHouse/linkedin/kanmoi/kanmoi-06.jpg';

export const linkedInPageUrl =
  'https://www.linkedin.com/company/maithriaquatech/posts/?feedView=all';

export const linkedInPosts = [
  {
    id: 'kanmoi-dubai-launch',
    author: {
      name: 'Maithri Aquatech',
      followers: '1,878 followers',
      avatar: maithriAvatar,
    },
    title: 'A proud milestone for Meghdoot',
    text:
      'KANMOI \u2014 water from air \u2014 launched in Dubai by Kanoo Machinery, ' +
      'built on a 500 LPD Meghdoot. \u{1F4A7}',
    slides: [
      { src: kanmoi1, alt: 'KANMOI launch in Dubai \u2014 ribbon cutting' },
      { src: kanmoi2, alt: 'Meet KANMOI \u2014 500 LPD Meghdoot at the Kanoo Dubai office' },
      { src: kanmoi3, alt: 'Before launch, Kanoo tested the water in-house' },
      { src: kanmoi4, alt: 'Starting at home \u2014 first bottles go to Kanoo employees' },
      { src: kanmoi5, alt: 'A first step, not the final one' },
      { src: kanmoi6, alt: 'The people behind the KANMOI launch' },
    ],
    url: 'https://www.linkedin.com/posts/maithriaquatech_a-proud-milestone-for-meghdoot-activity-7511037074289061888-24Xd?utm_source=share&utm_medium=member_desktop&rcm=ACoAACECmXcBNXk_ukmPx_o4p_2ww-4u45uWfKU',
  },
];
