// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import latest from '../../data/latest.json'
export default (req, res) => {
  res.statusCode = 200
  res.json({ ...latest })
}
