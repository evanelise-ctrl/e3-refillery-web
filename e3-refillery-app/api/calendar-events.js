const CALENDAR_ID = 'e3refillery@gmail.com';

export default async function handler(req, res) {
  const apiKey = process.env.GOOGLE_CALENDAR_API_KEY;
  if (!apiKey) {
    res.status(500).json({ error: 'Calendar API key is not configured' });
    return;
  }

  const timeMin = new Date().toISOString();
  const url = `https://www.googleapis.com/calendar/v3/calendars/${encodeURIComponent(CALENDAR_ID)}/events?key=${apiKey}&timeMin=${timeMin}&singleEvents=true&orderBy=startTime&maxResults=50`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    res.setHeader('Cache-Control', 's-maxage=60, stale-while-revalidate=300');
    res.status(response.status).json(data);
  } catch (error) {
    res.status(502).json({ error: 'Failed to fetch calendar events' });
  }
}
