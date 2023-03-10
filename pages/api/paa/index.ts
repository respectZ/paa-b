import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string,
  id: number
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const reqMethod = req.method;
  switch (reqMethod) {
    case 'GET':
      // res.status(200).json({ name: '[GET] PAA Index' });
      const hasil = <Data>{
        name: '[GET] PAA Index',
        id: 2
      }
      res.status(200).send(hasil)
      break;
    case 'POST':
      res.status(200).json({ name: '[POST] PAA Index', id: 2 });
      break;
    case 'DELETE':
      res.status(200).json({ name: '[DELETE] PAA Index', id: 2 });
      break;
    default:
      res.status(200).json({ name: '[DEFAULT] PAA Index', id: 2 });
      break;
  }
}
