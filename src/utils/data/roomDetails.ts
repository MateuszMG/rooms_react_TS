type AvailabilityStatus = 'onRequest' | 'available' | 'soldOut' | 'error';

interface Price {
  value: number;
  currencyCode: string;
}

export interface RoomDetails {
  id: number;
  availabilityStatus: AvailabilityStatus;
  price: Price | null;
}

export const mockedRoomDetails: RoomDetails[] = [
  {
    id: 1,
    availabilityStatus: 'onRequest',
    price: {
      value: 23990,
      currencyCode: 'CZK',
    },
  },
  {
    id: 2,
    availabilityStatus: 'available',
    price: {
      value: 20490,
      currencyCode: 'CZK',
    },
  },
  { id: 3, availabilityStatus: 'soldOut', price: null },
  { id: 4, availabilityStatus: 'error', price: null },
];
