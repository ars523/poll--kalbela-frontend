/**
 * Frontend-only: one vote per seat per day.
 * One key per day: kbv_YYYY-MM-DD → value: JSON { "seatNo": candidateId, ... }
 * Old keys (past days) are pruned so we only keep today's key.
 */

const PREFIX = "kbv_";

function getTodayDateKey(): string {
  const d = new Date();
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function getStorageKey(): string {
  return `${PREFIX}${getTodayDateKey()}`;
}

function getTodayMap(): Record<string, number> {
  if (typeof window === "undefined") return {};
  try {
    const raw = localStorage.getItem(getStorageKey());
    if (raw == null) return {};
    const parsed = JSON.parse(raw) as unknown;
    if (parsed == null || typeof parsed !== "object" || Array.isArray(parsed)) {
      return {};
    }
    const map: Record<string, number> = {};
    for (const [k, v] of Object.entries(parsed)) {
      const n = typeof v === "number" ? v : parseInt(String(v), 10);
      if (!Number.isNaN(n)) map[String(k)] = n;
    }
    return map;
  } catch {
    return {};
  }
}

function setTodayMap(map: Record<string, number>): void {
  if (typeof window === "undefined") return;
  try {
    localStorage.setItem(getStorageKey(), JSON.stringify(map));
  } catch {
    // ignore quota / private mode
  }
}

/** Remove old vote keys (past days) so we only keep today's. */
function pruneOldKeys(): void {
  if (typeof window === "undefined") return;
  try {
    const todayKey = getStorageKey();
    const keysToRemove: string[] = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key != null && key.startsWith(PREFIX) && key !== todayKey) {
        keysToRemove.push(key);
      }
    }
    keysToRemove.forEach((k) => localStorage.removeItem(k));
  } catch {
    // ignore
  }
}

/** Returns candidateId if user already voted in this seat today, else null. */
export function getVotedCandidateForSeatToday(seatNo: string): number | null {
  const map = getTodayMap();
  const id = map[String(seatNo)];
  return id != null ? id : null;
}

/** Call after successful vote: record that user voted for this candidate in this seat today. */
export function setVotedForSeatToday(seatNo: string, candidateId: number): void {
  const map = getTodayMap();
  map[String(seatNo)] = candidateId;
  setTodayMap(map);
  pruneOldKeys();
}
