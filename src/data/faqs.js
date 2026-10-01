const faqs = [
  {
    question: 'How does Atmospheric Water Generation work?',
    answer:
      'Humid air is drawn across a proprietary heat-exchange core. Vapour condenses into pure H₂O, which then passes through multi-stage purification, UV polishing and optional re-mineralisation before dispensing.',
  },
  {
    question: 'What climates can MEGHDOOT® operate in?',
    answer:
      'Anywhere with ambient humidity above 30% RH and ambient temperature between 15°C and 45°C. We have units operating from Himalayan foothills to Gulf deserts.',
  },
  {
    question: 'How does the economics compare to conventional water?',
    answer:
      'At community scale, MEGHDOOT® typically becomes cost-competitive within 2–4 years when factoring tanker logistics, borewell deepening, treatment costs and externalities. At premium segments, it is already lower cost than bottled water.',
  },
  {
    question: 'Can you deploy off-grid or solar-only?',
    answer:
      'Yes. Every MEGHDOOT® platform is solar-ready. Full off-grid deployment with hybrid energy management is supported and common in defence and remote infrastructure deployments.',
  },
  {
    question: 'How does MEGHDOOT® AWG work?',
    answer:
      "The atmosphere holds a lot of moisture which is free for the taking. MEGHDOOT® AWG uses refrigeration techniques to condense this humidity from air. Air is drawn into the system through an electrostatic filter, and cooled coils in the air path create a temperature differential that causes condensation. The water then passes through various filters to remove solids, eliminate any odour, and remove bacterial content, before pure, cold drinking water is supplied through the dispenser tap.",
  },
  {
    question: 'Is the water produced from MEGHDOOT® really pure and safe?',
    answer:
      "MEGHDOOT® produces water to international standards and is 100% microbe-free. Our filtration process removes all external particles and dissolved organic pollutants, making the water completely pure, fully potable, and internationally compliant. It retains the water-soluble minerals essential for the body, and specially designed cartridges further enhance water quality — in select models, water is also remineralised with our proprietary mineral salt mixture.",
  },
  {
    question: 'Is taking water from the atmosphere harmful to the environment?',
    answer:
      "Not at all. Around 850 billion litres of water evaporate from the ocean every single day — nearly 60 days' worth of mankind's total water requirement. Moisture in the atmosphere is an everlasting source of water, so extracting it gives us pure drinking water while also helping to conserve groundwater.",
  },
  {
    question: 'Is there enough water in the air to produce water every day?',
    answer: 'There are 3.1 quadrillion gallons of water in the atmosphere at any given time.',
  },
  {
    question: 'Can I really get pure drinking water from air that may have so many impurities in it?',
    answer:
      'Absolutely. MEGHDOOT® only condenses the water vapour itself, generating the purest form of water. A 10-micron air filter removes suspended particles from incoming air, a sediment filter removes water-soluble substances, activated carbon filters eliminate any smell or taste, and UV treatment eliminates any bacteria present.',
  },
  {
    question: 'Is it expensive to produce water with an AWG?',
    answer:
      'The atmospheric water generator is extremely energy-efficient, using just 0.25 units of energy to produce one litre of the highest-quality water — on average, less than ₹2 per litre, which is very economical for the quality produced.',
  },
  {
    question: 'Does MEGHDOOT® AWG have special power requirements?',
    answer: 'MEGHDOOT® AWG units can operate on standard grid power, solar or wind power, or oil-powered generators.',
  },
  {
    question: 'Will water produced from the air in my home or office have a funny taste or smell?',
    answer:
      "Not at all. Air passes through filters that remove suspended particles before the water vapour is condensed into pure, safe water, and activated carbon inside the machine removes any residual dust or odour.",
  },
  {
    question: "Why do I need an AWG anyway? What's wrong with the water I get from my tap?",
    answer:
      'Numerous studies have raised concerns about impurities in public drinking-water supplies and their vulnerability to contamination. The only way to be absolutely certain your drinking water is pure and safe is to produce it yourself with an AWG.',
  },
  {
    question: "What about bottled water — isn't that safe and pure?",
    answer:
      'Some bottled water is really just reprocessed tap water, and government studies have found that over 30% of bottled water tested was unsafe for human consumption.',
  },
  {
    question: 'Is water produced by an AWG better than bottled water?',
    answer:
      "Yes. MEGHDOOT® AWG water is generated right before your eyes, whereas much bottled water is filtered city water processed in a plant, or 'spring' water with no guarantee of being contaminant-free.",
  },
  {
    question: 'Is water from an AWG as good as the water-cooler bottles I see in offices?',
    answer:
      'Even when the water in a 5-gallon bottle is good, the cooler itself is often the problem — if not cleaned and maintained regularly, bacteria and algae can build up in the reservoir. MEGHDOOT® AWG remains the purest option, with no heavy bottles to handle.',
  },
  {
    question: 'How does the cost and quality of bottled water compare with AWG water?',
    answer: 'MEGHDOOT® can produce water of equal or better quality far more economically than bottled water.',
  },
  {
    question: 'Are there any other benefits to having MEGHDOOT® AWG in my home or office?',
    answer:
      "It can generate anywhere from 40 litres to millions of litres per day of water that's pure and free of biological or chemical contamination. It consumes less power than comparable units, needs low maintenance, and begins producing water within an hour of installation — without requiring an existing water source. It's environmentally friendly (no water wastage, unlike RO or desalination systems), needs very little supervision or skilled personnel, and its raw material — air — is free.",
  },
  {
    question: 'What does pH mean for water?',
    answer:
      'pH indicates acidity or alkalinity. A value of 7 is neutral, below 7 is acidic, and above 7 is alkaline. The normal range for surface water is 6.5–8.5; MEGHDOOT® AWG water sits at around 7.2 pH.',
  },
  {
    question: 'What does alkalinity mean for water?',
    answer:
      "Alkalinity is water's capacity to neutralise acid — essentially a measure of its buffering ability, meaning acid can be added without significantly changing the water's pH.",
  },
  {
    question: 'What temperature and humidity does MEGHDOOT® AWG need to produce water?',
    answer:
      'Rated output is achieved at around 29°C (85°F) and 80% relative humidity, but the machines operate across a temperature range of 15°C–45°C and relative humidity levels of 25% and above.',
  },
  {
    question: 'How often do I need to change filters, and is it hard to do?',
    answer:
      'Carbon and sediment filters need to be changed every 4–6 months, and air filters should be cleaned by regular backwashing — a simple, low-skill process.',
  },
  {
    question: 'What is the cost of filters?',
    answer: 'Filter costs vary depending on the machine model.',
  },
  {
    question: "What is the machine's life span?",
    answer:
      "With proper use as specified in the owner's manual and regular maintenance, a MEGHDOOT® unit will operate for a minimum of 15 years.",
  },
  {
    question: 'What is the warranty on the machines?',
    answer:
      'Maithri Aquatech products carry a one-year warranty against manufacturer defects and workmanship from the date of purchase. Annual service contracts are available through Maithri Aquatech or its authorised service providers.',
  },
  {
    question: 'When will the machine start making water?',
    answer: 'Water is typically dispensed within 1–2 hours of start-up, depending on humidity and temperature conditions.',
  },
  {
    question: 'How will it operate in areas with no humidity?',
    answer:
      'Low-humidity conditions are a challenge for any atmospheric water system. In deserts or very hot, dry climates the unit may not produce water during the day, but it can still generate water at night due to the dew-point effect. The machine automatically shuts off when humidity drops below 25% RH.',
  },
  {
    question: 'Which places can a MEGHDOOT® AWG machine be set up?',
    answer:
      'MEGHDOOT® is ideal for schools and hostels, places of worship, railway stations, universities, bus stations, government offices, hospitals and healthcare centres, remote defence training facilities and monitoring camps, ocean-going vessels, remote lighthouses, offshore oil rigs and platforms, and remote telecom towers or electrical sub-stations.',
  },
  {
    question: 'Can MEGHDOOT® AWG have a hot water facility? If so, are two separate storage facilities required?',
    answer:
      'Yes, hot water facility can be provided if required (subject to order quantity), with storage planned according to the machine variant.',
  },
  {
    question: 'What happens if the MEGHDOOT® AWG reservoir is full — will the machine overflow?',
    answer: 'No. The machine has a water-level sensor that automatically cuts off operation once the reservoir or tank is full.',
  },
  {
    question: 'Will water standing in a full reservoir get stagnant or stale?',
    answer: 'No — water quality remains consistent even after 4 months in storage.',
  },
  {
    question: 'Does a unit always generate its rated output?',
    answer:
      'Output depends on the relative humidity and temperature of the surroundings; rated output is achieved at around 29°C (85°F) and 80% relative humidity.',
  },
  {
    question: 'What is the shelf life of the water generated?',
    answer: "Because it's microbe-free, the water can be stored for up to 6 months without any concern for bacterial growth.",
  },
  {
    question: 'Does the water have any essential minerals in it?',
    answer:
      'Yes — special cartridges provide traces of necessary minerals, and select models support remineralisation through our patented automated mineral-dosing technology using a proprietary mineral salt.',
  },
  {
    question: 'Are there any harmful by-products produced or generated?',
    answer: 'No, none at all.',
  },
  {
    question: 'Does the machine generate only normal or regular drinking water?',
    answer:
      'The core output is pure, mineral-enhanced drinking water, but with filtration adjustments the same platform can also produce alkaline water, dialysis-grade water, and distilled water for battery use.',
  },
  {
    question: 'How different is your AWG from other AWGs in the market?',
    answer:
      "MEGHDOOT®'s technology can generate water at relative humidity levels as low as 25%, and its power consumption is lower than comparable machines in the market.",
  },
  {
    question: 'Does the machine make any noise, and do I need protective gear when operating it?',
    answer: 'All MEGHDOOT® variants have a noise level of 70 dBA or lower — safe for human ears and requiring no protective gear.',
  },
  {
    question: 'Can the water generated be transferred to other tanks?',
    answer: 'Yes, the generated water can be transferred and stored in any food-grade external tank.',
  },
  {
    question: "Does the machine need to be turned off when there's no humidity?",
    answer:
      'No — MEGHDOOT® is equipped with a humidity sensor that automatically stops the machine when relative humidity drops below 25%, and this cut-off point can be adjusted as needed.',
  },
  {
    question: 'Are there any safety features in the machine?',
    answer: 'Yes — the machine automatically turns off for 10 minutes after every 90 minutes of use, to prevent damage to the unit.',
  },
  {
    question: 'Does one need any specific knowledge to use the machine?',
    answer: 'No. Anyone can operate it — simply plug it into a power source and turn it on; the machine handles the rest.',
  },
  {
    question: 'Does the machine display current temperature and humidity levels?',
    answer: 'Yes, the unit has a built-in display showing current temperature and humidity percentage.',
  },
  {
    question: 'How pure and safe is the water?',
    answer:
      'Because it never comes into contact with the ground, water generated from air is pure and cleaner than most bottled water available in the market.',
  },
];

export default faqs;
