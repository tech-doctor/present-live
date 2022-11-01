// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ name: 'John Doe' })
}



// const getToken = async (user_id:any) => {
//     const response = await fetch(`${endPoint}api/token`,{
//       method: "POST",
//       body: JSON.stringify({
//         user_id,
//         role: 'recruiter',
//         type: 'app',
//         room_id: "635f87d14208780bf667249f"
//       })
//     });
//     const {token} = await response.json();
//     return token;
//   };
