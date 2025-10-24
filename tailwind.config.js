const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    container: {
      center: "true",
      padding: "2rem",
      screens: {
        sm: "340px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1400px",
      },
    },
    extend: {
      height: {
        93: "93%",
      },
      colors: {
        black: "var(--black)",
        white: "var(--white)",
        pink: "var(--pink)",
        red: "var(--red)",
        border: "var(--primary)",
        grey: "var(--grey)",
        background: "var(--background)",
        background2: "var(--background2)",
        btnText: "var(--btnText)",
        lightGreen: "var(--lightGreen)",
        darkGreen: "var(--darkGreen)",
        primary: "var(--primary)",
        darkBlue: "var(--darkBlue)",
        foreground: "var(--foreground)",
        lightBlue: "var(--lightBlue)",
        spanBlue: "var(--spanBlue)",
        hoverBg: "var(--hover-bg)",

        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
          background: "var(--secondary-bg)",
        },
        tertiary: {
          DEFAULT: "var(--tertiary)",
          foreground: "var(--tertiary-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        black40: "var(--black-40)",
        mattWhite: "var(--matt-white)",
        lightGrey: "var(--lightGrey)",
        grey600: "var(--grey600)",
        grey400: "var(--grey400)",
        darkRed: "var(--dark-red)",
        normalOrange: "var(--normal-orange)",
        lightOrange: "var(--light-orange)",
        checkBox: "var(--checkbox)",
        brownColor: "var(--brown)",
        tagsBg: "var(--tags-bg)",
        // darkBlue: "var(--dark-blue)",
        pendingColor: "var(--pending-color)",
        pendingBg: "var(--pending-bg)",
        rejectedColor: "var(--rejected-color)",
        rejectedBg: "var(--rejected-bg)",
        approvedBg: "var(--approved-bg)",
        completedBg: "var(--completed-bg)",
        completedColor: "var(--completed-color)",
        submittedBg: "var(--submitted-bg)",
        submittedColor: "var(--submitted-color)",
        waitingBg: "var(--waiting-bg)",
        darkGrey: "var(--dark-grey)",
        yellow: {
          DEFAULT: "var(--yellow)",
          foreground: "var(--yellow-foreground)",
        },
        green: {
          DEFAULT: "var(--green)",
          foreground: "var(--green-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
          grey: "var(--muted-grey)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        blue: "var(--blue)",
        soldOut: "var(--soldOut)",
      },
      borderRadius: {
        lg: "`var(--radius)`",
        md: "`calc(var(--radius) - 2px)`",
        sm: "calc(var(--radius) - 4px)",
        finesse: "38% 55% 45% 50%",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeIn: {
      '0%': { opacity: 0 },
      '100%': { opacity: 1 },
    },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
            "fadeIn": 'fadeIn 1s ease-in-out forwards',
      },
      fontFamily: {
        NRegular: "NRegular",
        NMedium: "NMedium",
        NBold: "NBold",
        SRegular: "SRegular",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("tailwind-scrollbar")],
};
