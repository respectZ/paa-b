// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const reqMethod = req.method;
  const { kelas } = req.query;
  const { id } = req.query;
  console.log(id, kelas);

  switch (reqMethod) {
    case 'GET':
      res.status(200).json({ name: '[GET] PAA' });
      break;
    case 'POST':
      res.status(200).json({ name: '[POST] PAA' });
      break;
    default:
      res.status(200).json({ name: '[DEFAULT] PAA' });
      break;
  }
}
