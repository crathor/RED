import React from 'react'

const RoomList = ({ rooms, subscribeToRoom, roomId }) => {
  const orderedRooms = [...rooms].sort((a, b) => a.id - b.id)
  return (
    <div className="rooms-list">
      <h3>Your Rooms:</h3>
      <ul>
        {orderedRooms.map(room => {
          const active = roomId === room.id ? 'active' : ''
          return (
            <li key={room.id} className={'room' + active}>
              <a href="#" onClick={() => subscribeToRoom(room.id)}>
                # {room.name}
              </a>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default RoomList
