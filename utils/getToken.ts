const endPoint = process.env.NEXT_PUBLIC_ENDPOINT;
const room_id =  process.env.NEXT_PUBLIC_ROOM_ID;
console.log(endPoint, room_id);

export const getToken = async (user_id:string, role:string) => {
  const response = await fetch(`${endPoint}api/token`,{
    method: "POST",
    body: JSON.stringify({
      user_id,
      role,
      type: 'app',
      room_id
    })
  });
  const {token} = await response.json();
  return token;
};