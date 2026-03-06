const RATE_LIMIT = 50;
const WINDOW_SECONDS = 3600;

export async function isRateLimited(db: D1Database): Promise<boolean> {
  const result = await db
    .prepare(
      `SELECT COUNT(*) as count FROM registrations WHERE created_at > datetime('now', '-1 hour')`
    )
    .first<{ count: number }>();

  return (result?.count ?? 0) >= RATE_LIMIT;
}

export { RATE_LIMIT, WINDOW_SECONDS };
