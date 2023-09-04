import { useState } from 'react';

import { initDetailsProperties, sortByPrice } from '../../utils/helpers/rooms';
import { separateStringOnCapitalCase } from '../../utils/helpers/strings';

import { mockedRoomDetails } from '../../utils/data/roomDetails';
import { mockedRooms } from '../../utils/data/rooms';

import styles from './RoomList.module.scss';

const sortedMockedRooms = sortByPrice(mockedRooms);
const roomsWithDetails = initDetailsProperties(sortedMockedRooms);

export const RoomList = () => {
  const [rooms, setRooms] = useState(roomsWithDetails);

  const getDetails = (id: number) => {
    const details = mockedRoomDetails.find((details) => details.id === id);
    const updatedRooms = rooms.map((room) =>
      room.id === id ? { ...room, details } : room,
    );
    setRooms(updatedRooms);
  };

  const selectRoom = (name: String) => {
    console.log('Selected room: ' + name);
  };

  return (
    <div>
      {rooms.map(({ details, id, name, price }) => (
        <div key={id} className={styles.section}>
          <h2>{name}</h2>
          <p>
            {price.value} {price.currencyCode}
          </p>

          {details && (
            <p>
              Availability:&nbsp;
              {separateStringOnCapitalCase(details.availabilityStatus)}
            </p>
          )}
          {details?.price && <p>Checked price:&nbsp;{details.price.value}</p>}

          <div className={styles.buttonWrapper}>
            <button
              className={styles.button}
              disabled={details && details.availabilityStatus !== 'available'}
              onClick={() => {
                details ? selectRoom(name) : getDetails(id);
              }}
            >
              {details ? 'Book' : 'Check'}
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
