export const locations = () => {
  return [
    {
      id: 1,
      name: "Lagos",
      code: "LOS",
      currency_id: 1,
      image:
        "https://res.cloudinary.com/dxuwc0esc/image/upload/v1667817550/colic/flags/nigeria_m4nba2.svg",
    },
    {
      id: 2,
      name: "USA",
      code: "USA",
      currency_id: 2,
      image:
        "https://res.cloudinary.com/dxuwc0esc/image/upload/v1667817550/colic/flags/usa_trfjjs.svg",
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "UK",
      currency_id: 3,
      image:
        "https://res.cloudinary.com/dxuwc0esc/image/upload/v1667817550/colic/flags/uk_mx2bex.svg",
    },
    {
      id: 4,
      name: "Europe",
      code: "EUR",
      currency_id: 4,
      image:
        "https://res.cloudinary.com/dxuwc0esc/image/upload/v1667817550/colic/flags/europe_gi4ms6.svg",
    },
  ];
};

export const currencies = () => {
  return [
    {
      id: 1,
      image: null,
      symbol: "#",
      code: "ngn",
      label: "NGN",
    },
    {
      id: 2,
      image: null,
      symbol: "$",
      code: "usd",
      label: "USD",
    },
    {
      id: 3,
      image: null,
      symbol: "£",
      code: "gbp",
      label: "GBP",
    },
    {
      id: 4,
      image: null,
      symbol: "€",
      code: "eur",
      label: "EUR",
    },
  ];
};

export const activities = () => {
  return [
    {
      active: true,
      editable: true,
      tag: "income",
      title: "Income",
    },
    {
      active: true,
      editable: false,
      tag: "exchange_rate",
      title: "Rate (location to salary currency)",
    },
    {
      active: true,
      editable: true,
      tag: "income_location",
      title: "Income (converted)",
    },
    {
      active: true,
      editable: true,
      tag: "tax",
      title: "Tax",
    },
    {
      active: true,
      editable: false,
      tag: "tax_deduction",
      title: "Tax Deduction",
    },
    {
      active: true,
      editable: false,
      tag: "annual_net_income",
      title: "Net Income (Annual)",
    },
    {
      active: true,
      editable: false,
      tag: "monthly_net_income",
      title: "Net Income (Monthly)",
    },
    {
      active: true,
      editable: true,
      tag: "rent",
      title: "Rent (1 br Apartment)",
    },
    {
      active: true,
      editable: true,
      tag: "utilities",
      title: "Utilities (electricity, gas, water)",
    },
    {
      active: true,
      editable: true,
      tag: "internet",
      title: "Internet (home + mobile data)",
    },
    {
      active: true,
      editable: true,
      tag: "gym",
      title: "Help (cleaning, cooking, laundry)",
    },
  ];
};
export const validateAmount = (e) => {
  if (e.keyCode === 8) {
    return false;
  } else if (
    (e.keyCode < 48 || e.keyCode > 57) &&
    (e.keyCode !== 46 || this.value.indexOf(".") !== -1)
  ) {
    e.preventDefault();
  }
};
