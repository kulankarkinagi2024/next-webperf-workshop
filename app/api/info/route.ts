export async function GET() {
  // wait 500 ms to imitate a slow response
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return Response.json({ msg: '10 New places available!' })
}
