"use server";

const KBV_VOTE_URL = "https://kbv.ideahubbd.com/api/Vote";

export type VoteResult =
  | { success: true; message?: string }
  | { success: false; message: string };

export async function submitVote(
  seatNumber: number,
  candidateId: number,
  voteCount: number = 1
): Promise<VoteResult> {
  if (!seatNumber || !candidateId || voteCount < 1) {
    return { success: false, message: "অবৈধ ভোট তথ্য।" };
  }

  try {
    const res = await fetch(KBV_VOTE_URL, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        seatNumber: Number(seatNumber),
        candidateId: Number(candidateId),
        voteCount: Number(voteCount),
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const msg =
        (data?.message as string) ||
        `ভোট জমা হয়নি (${res.status})। আবার চেষ্টা করুন।`;
      return { success: false, message: msg };
    }

    if (data?.success === false) {
      return {
        success: false,
        message: (data?.message as string) || "ভোট জমা হয়নি।",
      };
    }

    return { success: true, message: (data?.message as string) || undefined };
  } catch (err) {
    console.error("submitVote error:", err);
    return {
      success: false,
      message: "ভোট জমা হয়নি। আবার চেষ্টা করুন।",
    };
  }
}
