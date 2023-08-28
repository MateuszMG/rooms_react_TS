export const rooms = [
  {
    id: 1,
    name: 'Standard Double Room with a Sea View',
    price: {
      value: 23990,
      currencyCode: 'CZK',
    },
  },
  {
    id: 2,
    name: 'Standard Double Room',
    price: {
      value: 19990,
      currencyCode: 'CZK',
    },
  },
  {
    id: 3,
    name: 'Luxury Double Room',
    price: {
      value: 29990,
      currencyCode: 'CZK',
    },
  },
  {
    id: 4,
    name: 'Two Bedroom Apartment',
    price: {
      value: 41690,
      currencyCode: 'CZK',
    },
  },
];

export type Rooms = typeof rooms;

export const roomDetails = [
  {
    availabilityStatus: 'onRequest',
    price: {
      value: 23990,
      currencyCode: 'CZK',
    },
  },
  {
    availabilityStatus: 'available',
    price: {
      value: 20490,
      currencyCode: 'CZK',
    },
  },
  {
    availabilityStatus: 'soldOut',
    price: null,
  },
  {
    availabilityStatus: 'error',
    price: null,
  },
];

export type RoomDetails = typeof roomDetails;
