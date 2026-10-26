/**
 * Real W88 Pakistan lobby screenshots (public/).
 * Dimensions are intrinsic image sizes used for next/image aspect ratios.
 */
export type W88Shot = {
  src: string;
  alt: string;
  title: string;
  width: number;
  height: number;
};

export const W88_SHOTS = {
  signup: {
    src: '/w88-signup.webp',
    alt: 'W88 Pakistan signup screen with $50 100% Welcome Bonus and Continue with Email, Google, LINE and Telegram',
    title: 'Signup — $50 100% Welcome Bonus',
    width: 1024,
    height: 652,
  },
  register: {
    src: '/w88-register.webp',
    alt: 'W88 registration form with Username, Password, Currency, Full Name, Email, Mobile +92, Affiliate code and Newsletter',
    title: 'Register form',
    width: 1024,
    height: 652,
  },
  currency: {
    src: '/w88-currency.webp',
    alt: 'W88 currency selector with PKR Pakistani Rupee for Pakistan players',
    title: 'Pick PKR at signup',
    width: 1024,
    height: 652,
  },
  google: {
    src: '/w88-google-signin.webp',
    alt: 'W88 Continue with Google sign-in option',
    title: 'Continue with Google',
    width: 1024,
    height: 387,
  },
  deposit: {
    src: '/w88-deposit.webp',
    alt: 'W88 Deposit page with Bank Transfer after registration',
    title: 'Deposit — Bank Transfer',
    width: 1024,
    height: 409,
  },
  banking: {
    src: '/w88-banking.webp',
    alt: 'W88 Banking Details with Bank Account, EasyPaisa Phone Number and JazzCash Phone Number',
    title: 'Banking Details — JazzCash & EasyPaisa',
    width: 1024,
    height: 409,
  },
  menu: {
    src: '/w88-menu.webp',
    alt: 'W88 lobby menu: Sports, Casino, Slots, Fishing, Games, Esports, P2P, Poker, Promotions, Rewards, Refer A Friend, W Signature Club, Affiliate, Download',
    title: 'Lobby menu',
    width: 1024,
    height: 518,
  },
} as const satisfies Record<string, W88Shot>;

export type W88ShotKey = keyof typeof W88_SHOTS;
