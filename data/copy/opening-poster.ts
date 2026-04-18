export interface OpeningPosterCopy {
  kicker: string
  headline: string
  offerEyebrow: string
  offerTitle: string
  offerBody: string
  storyBody: string
  storyHighlight: string
  menuHeading: string
  menuQuestions: string[]
  menuTease: string
  stamp: string
  ctaBody: string
  ctaLabel: string
  closing: string
  signature: string
  phone: string
  websiteHref: string
  websiteLabel: string
  addressShort: string
  addressFull: string
}

export const openingPosterCopy: OpeningPosterCopy = {
  kicker: "🚨 The rumors are true...",
  headline:
    "Yes, the secret is out—Lapen Inns has officially taken the keys to the Old School House!",
  offerEyebrow: "To celebrate & give back to the community",
  offerTitle: "10% DISCOUNT",
  offerBody: "On your entire first order when you come through our doors",
  storyBody:
    "We didn't just slap a new name on the building. Over the past 6 months, my team and I have poured massive investment into this project. We've driven over 100 miles daily visiting every pub around Stony Stratford & Milton to see exactly what the local scene was missing.",
  storyHighlight:
    "Now, we are bringing all of those missing pieces straight to the Old School House.",
  menuHeading: "What exactly is on the menu?",
  menuQuestions: [
    "A fully Nepalese menu?",
    "Proper Sunday roast?",
    "Classic English breakfast?",
    "Hearty pub grub?",
  ],
  menuTease: "...You're going to find out very soon. 🤫",
  stamp: "See You\n7 Days\nFrom Today!",
  ctaBody:
    "Click the link below to visit our website and book your table so your 10% off voucher is locked in.",
  ctaLabel: "Book Your Table Now",
  closing: "– San & Lapen Inns team",
  signature: "The Old School House, London Rd, Stony Stratford",
  phone: "+44 7588 864819",
  websiteHref: "https://www.oldschoolhousestony.co.uk/",
  websiteLabel: "oldschoolhousestony.co.uk",
  addressShort: "London Rd, Stony Stratford",
  addressFull:
    "The Old School House, London Rd, Stony Stratford, Milton Keynes MK11 1JA",
}
