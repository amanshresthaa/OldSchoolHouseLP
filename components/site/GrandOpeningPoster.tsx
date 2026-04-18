import type { ComponentProps, SVGProps } from "react"
import Image from "next/image"

import { cn } from "@/lib/utils"

import logo from "@/images/logos/old-school-house-pub-stony-stratford-mk-logo.png"

type GrandOpeningPosterProps = ComponentProps<"article">

function MapPin(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M12 21s-6-5.2-6-11a6 6 0 1 1 12 0c0 5.8-6 11-6 11Z" />
      <circle cx="12" cy="10" r="2.5" />
    </svg>
  )
}

function Phone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M22 16.9v3a2 2 0 0 1-2.2 2A19.8 19.8 0 0 1 11.2 19a19.4 19.4 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4 2h3a2 2 0 0 1 2 1.7l.5 3a2 2 0 0 1-.6 1.8l-1.3 1.3a16 16 0 0 0 6.6 6.6l1.3-1.3a2 2 0 0 1 1.8-.6l3 .5A2 2 0 0 1 22 16.9Z" />
    </svg>
  )
}

function Globe(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20" />
      <path d="M12 2a15.3 15.3 0 0 1 0 20" />
      <path d="M12 2a15.3 15.3 0 0 0 0 20" />
    </svg>
  )
}

function Utensils(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <path d="M4 3v8" />
      <path d="M7 3v8" />
      <path d="M5.5 11v10" />
      <path d="M14 3c0 3 0 6 3 8v10" />
      <path d="M14 3v8" />
    </svg>
  )
}

function HelpCircle(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M9.1 9a3 3 0 1 1 5.2 2c-.7.7-1.3 1.1-1.3 2.5" />
      <circle cx="12" cy="17" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export function GrandOpeningPoster({
  className,
  ...props
}: GrandOpeningPosterProps) {
  return (
    <article
      id="grand-opening-poster"
      data-asset-mode="gif"
      className={cn(
        "relative aspect-[4/5] w-full overflow-hidden border-[4px] border-[#1b3022] bg-[#061b0e] shadow-2xl sm:border-[6px] lg:h-[1350px] lg:w-[1080px] lg:max-w-none lg:flex-none",
        className
      )}
      {...props}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
            #grand-opening-poster {
              font-family: var(--font-manrope), sans-serif;
            }

            #grand-opening-poster .font-serif {
              font-family: var(--font-newsreader), serif;
            }

            #grand-opening-poster .texture-overlay {
              background-image: url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.05'/%3E%3C/svg%3E");
              pointer-events: none;
            }

            @keyframes float {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-4px); }
            }

            @keyframes pulseSlow {
              0%, 100% { transform: scale(1); }
              50% { transform: scale(1.02); }
            }

            @keyframes wiggle {
              0%, 100% { transform: rotate(-8deg) scale(1); }
              50% { transform: rotate(-4deg) scale(1.05); }
            }

            @keyframes shimmer {
              to { background-position: 200% center; }
            }

            #grand-opening-poster .animate-float {
              animation: float 4s ease-in-out infinite;
            }

            #grand-opening-poster .animate-pulse-slow {
              animation: pulseSlow 2.5s ease-in-out infinite;
            }

            #grand-opening-poster .animate-wiggle {
              animation: wiggle 2s ease-in-out infinite;
              transform-origin: center;
            }

            #grand-opening-poster .animate-shimmer {
              background: linear-gradient(90deg, #d4a017 0%, #fcecae 20%, #d4a017 40%, #d4a017 100%);
              background-size: 200% auto;
              animation: shimmer 3s linear infinite;
            }
          `,
        }}
      />

      <div className="texture-overlay pointer-events-none absolute inset-0 z-0" />

      <div className="relative z-10 flex h-full flex-col justify-between p-2 font-sans text-white selection:bg-[#af2b3e] selection:text-white sm:p-4 md:p-8">
        <div className="relative z-10 flex shrink-0 flex-col items-center px-3 pt-2.5 text-center sm:px-4 sm:pt-3 md:pt-5">
          <div className="animate-float mb-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#d4a017] bg-white shadow-lg sm:mb-1.5 sm:h-12 sm:w-12 md:mb-2.5 md:h-16 md:w-16">
            <Image
              src={logo}
              alt="The Old School House logo"
              className="h-8 w-8 object-contain sm:h-10 sm:w-10 md:h-14 md:w-14"
              priority
            />
          </div>

          <p className="mb-0.5 text-[9px] font-extrabold tracking-[0.18em] text-[#af2b3e] uppercase drop-shadow-md sm:text-xs md:text-sm">
            🚨 The rumors are true...
          </p>

          <h1 className="px-1 font-serif text-[0.96rem] leading-[1.08] font-normal tracking-[-0.03em] text-[#d4a017] drop-shadow-lg sm:px-2 sm:text-[1.28rem] md:text-[1.6rem]">
            Yes, the secret is out—Lapen Inns has officially taken the keys to
            the Old School House, marking our 9th venue!
          </h1>
        </div>

        <div className="animate-pulse-slow relative z-10 my-1 flex w-full shrink-0 flex-col items-center justify-center border-y-2 border-[#f5d06b] bg-[#af2b3e] py-1.5 shadow-[0_10px_20px_rgba(0,0,0,0.4)] sm:my-2 sm:py-2.5 md:py-4">
          <p className="mb-0.5 text-[8px] font-semibold tracking-[0.15em] text-[#f5d06b] uppercase sm:text-[10px] md:text-xs">
            To celebrate & give back to the community
          </p>
          <h2 className="font-serif text-3xl leading-none font-normal tracking-[-0.04em] text-[#ffffff] drop-shadow-lg sm:text-5xl md:text-6xl">
            10% DISCOUNT
          </h2>
          <p className="mt-0.5 px-4 text-center text-[7.5px] font-semibold tracking-[0.18em] text-[#e4ddd4] uppercase sm:mt-1 sm:text-[9.5px] md:text-[11px]">
            On your entire first order when you come through our doors
          </p>
        </div>

        <div className="relative z-10 flex min-h-min shrink flex-col gap-0.5 px-4 text-center text-[#e4ddd4] sm:gap-1.5 sm:px-6 md:gap-2 md:px-8">
          <p className="text-[9.5px] leading-snug font-light opacity-90 sm:text-[11.5px] md:text-[13px]">
            As our 9th location, we know exactly what it takes to run a great
            pub—but we didn&apos;t just slap a new name on the building. Over
            the past 6 months, my team and I have poured massive investment into
            this project. We&apos;ve driven over 100 miles daily visiting every
            pub around Stony Stratford & Milton to see exactly what the local
            scene was missing.
          </p>
          <p className="mt-0.5 font-serif text-[10px] leading-tight font-normal tracking-[-0.01em] text-[#f5d06b] sm:mt-0 sm:text-[12px] md:text-sm">
            Now, we are bringing all of those missing pieces straight to the Old
            School House.
          </p>
        </div>

        <div className="relative z-10 mx-3 my-1 shrink-0 rounded-lg border border-[#d4a017]/30 bg-[#1b3022] p-2 shadow-inner sm:mx-4 sm:my-1.5 sm:p-3 md:mx-6 md:my-2 md:p-4">
          <div className="animate-wiggle absolute -right-2 -bottom-3 z-20 sm:-right-4 sm:-bottom-4 md:-right-5 md:-bottom-6">
            <div className="border border-white bg-[#af2b3e] px-2 py-1.5 text-center font-serif text-[9px] leading-[1.1] font-normal tracking-[-0.02em] text-white uppercase shadow-xl sm:border-2 sm:px-2.5 sm:py-2 sm:text-[12px] md:px-3 md:py-2.5 md:text-[15px]">
              See You
              <br />
              7 Days
              <br />
              From Today!
            </div>
          </div>

          <h3 className="mb-1 flex items-center justify-center gap-1.5 text-center font-serif text-[12px] font-normal tracking-[-0.02em] text-[#d4a017] sm:mb-2 sm:gap-2 sm:text-[15px] md:mb-3 md:text-lg">
            <Utensils className="h-3 w-3 text-[#af2b3e] sm:h-3.5 sm:w-3.5 md:h-4 md:w-4" />
            What exactly is on the menu?
          </h3>

          <div className="grid grid-cols-2 gap-x-2 gap-y-1 text-[8.5px] text-[#e4ddd4] sm:gap-y-1.5 sm:text-[10px] md:gap-y-2 md:text-xs">
            <div className="flex items-start gap-1 sm:gap-1.5">
              <HelpCircle className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#af2b3e] sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="leading-tight">A fully Nepalese menu?</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5">
              <HelpCircle className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#af2b3e] sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="leading-tight">Proper Sunday roast?</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5">
              <HelpCircle className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#af2b3e] sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="leading-tight">Classic English breakfast?</span>
            </div>
            <div className="flex items-start gap-1 sm:gap-1.5">
              <HelpCircle className="mt-0.5 h-2.5 w-2.5 shrink-0 text-[#af2b3e] sm:h-3 sm:w-3 md:h-3.5 md:w-3.5" />
              <span className="leading-tight">Hearty pub grub?</span>
            </div>
          </div>

          <p className="mt-1.5 text-center font-serif text-[10px] font-normal tracking-[-0.01em] text-[#f5d06b] italic sm:mt-2 sm:text-[12px] md:mt-3 md:text-sm">
            ...You&apos;re going to find out very soon. 🤫
          </p>
        </div>

        <div className="relative z-10 mt-auto shrink-0 px-3 pb-2 text-center sm:px-4 sm:pb-3 md:pb-5">
          <p className="mx-auto mb-1.5 max-w-[90%] text-[8.5px] leading-tight text-[#e4ddd4] sm:mb-2 sm:text-[10px] md:mb-3 md:max-w-[85%] md:text-[11px]">
            <span className="block">Check out the link below to visit our</span>
            <span className="block">
              website and book your table so your{" "}
              <strong className="text-[#f5d06b]">10% off voucher</strong> is
              locked in.
            </span>
            <span className="mt-0.5 block text-[#f5d06b]">
              👇 https://www.oldschoolhousestony.co.uk/
            </span>
          </p>

          <a
            href="https://www.oldschoolhousestony.co.uk/"
            target="_blank"
            rel="noreferrer"
            className="animate-shimmer inline-flex w-[95%] items-center justify-center rounded px-3 py-1 text-[9.5px] font-semibold tracking-[0.01em] text-[#061b0e] lowercase shadow-[0_0_15px_rgba(212,160,23,0.3)] transition-transform hover:scale-[1.02] sm:w-[85%] sm:py-1.5 sm:text-[11px] md:py-2 md:text-[13px]"
          >
            https://www.oldschoolhousestony.co.uk/
          </a>

          <div className="flex items-end justify-between border-t border-[#1b3022] pt-1.5 text-[6.5px] text-[#c4bdb5] sm:pt-2 sm:text-[8px] md:pt-3 md:text-[10px]">
            <div className="flex flex-col gap-[1px] text-left sm:gap-0.5">
              <span className="font-serif text-[8px] font-normal tracking-[-0.01em] text-[#f5d06b] italic sm:text-[9.5px] md:text-[12px]">
                – San & Lapen Inns team
              </span>
              <span className="flex items-center gap-0.5 sm:gap-1">
                <MapPin className="h-2 w-2 text-[#af2b3e] sm:h-2.5 sm:w-2.5" />
                London Rd, Stony Stratford
              </span>
            </div>
            <div className="flex flex-col gap-[1px] text-right sm:gap-0.5">
              <span className="flex items-center justify-end gap-0.5 sm:gap-1">
                <Phone className="h-2 w-2 text-[#af2b3e] sm:h-2.5 sm:w-2.5" />
                +44 7588 864819
              </span>
              <span className="flex items-center justify-end gap-0.5 sm:gap-1">
                <Globe className="h-2 w-2 text-[#af2b3e] sm:h-2.5 sm:w-2.5" />
                oldschoolhousestony.co.uk
              </span>
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}
