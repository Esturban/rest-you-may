import { PricingCardRight } from "./PricingCardRight";
import { PricingPremiumMonth } from "./PricingPremiumMonth";

/* create pricing element */
export function PricingPremium(): JSX.Element {
  return (
    <div className="bg-white text-slate-900 m-4 p-8 rounded-xl shadow-2xl relative">
      <span className="uppercase px-3 py-1 bg-sky-200 text-sky-900 rounded-2xl text-sm">
        Subscription
      </span>
      <PricingPremiumMonth />
      <PricingCardRight />
    </div>
  );
}
