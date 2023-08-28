import { RoomDetails } from '../data/roomDetails';
import { Room, Rooms } from '../data/rooms';

interface RoomWithDetails extends Room {
  details?: RoomDetails;
}

export const sortByPrice = (rooms: Rooms) =>
  rooms.sort((a, b) => b.price.value - a.price.value);

export const initDetailsProperties = (rooms: Rooms) =>
  rooms.map(
    (room): RoomWithDetails => ({
      ...room,
      details: undefined,
    }),
  );
