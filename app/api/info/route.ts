import api from '@/api'

export async function GET() {
  const msg = await api.infoBanner()
  return Response.json({ msg })
}
