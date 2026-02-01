export interface FetchOptions {
  revalidateSeconds?: number;
}

function getFetchOpts(options?: FetchOptions) {
  const s = options?.revalidateSeconds;
  return s != null && s > 0
    ? ({ next: { revalidate: s } } as const)
    : { cache: "no-store" as const };
}

export async function fetchDistrictWiseInfo(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  try {
    const res = await fetch(
      "https://kalbela.ideahubbd.com/election/data/district-wise-info.json",
      opts
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch district data: ${res.status} ${res.statusText}`
      );
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching district-wise info:", error);
    return { data: [] };
  }
}

export async function fetchSeatWiseInfo(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/data/seat-wise-info.json",
    opts
  );
  return res.json();
}

export async function fetchSeatShortInfo(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/json/SeatShortInfo.json",
    opts
  );
  return res.json();
}

export async function fetchPreviousElectionInfo(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/data/previous-elections.json",
    opts
  );
  return res.json();
}

export async function fetchElectionShortInfo(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/data/election-short-info.json",
    opts
  );
  return res.json();
}

export async function fetchImportantCandidates(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/data/important-candidates.json",
    opts
  );
  return res.json();
}

export async function fetchfeaturedCandidates(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/data/featured-candidates.json",
    opts
  );
  return res.json();
}

export async function fetchVoteCountingAsCandidates(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/data/vote-counting-compress.json",
    opts
  );
  return res.json();
}

export async function fetchCurrentPartyResults(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  const res = await fetch(
    "https://kalbela.ideahubbd.com/election/data/party-results.json",
    opts
  );
  return res.json();
}

export interface FetchNewsListOptions extends FetchOptions {
  catId?: number;
  limit?: number;
}

export async function fetchNewsList(options?: FetchNewsListOptions) {
  const catId = options?.catId ?? 138;
  const limit = options?.limit ?? 3;
  const opts = getFetchOpts(options);
  const res = await fetch(
    `https://api.kalbela.com/news-list?cat_id=${catId}&limit=${limit}`,
    opts
  );
  return res.json();
}

export interface FetchSeatNewsListOptions extends FetchOptions {
  tags: string;
  catId?: number;
  limit?: number;
}

export async function fetchSeatNewsList(options: FetchSeatNewsListOptions) {
  const catId = options.catId ?? 138;
  const limit = options.limit ?? 3;
  const opts = getFetchOpts(options);
  const res = await fetch(
    `https://api.kalbela.com/news-list?cat_id=${catId}&tags=${options.tags}&limit=${limit}`,
    opts
  );
  return res.json();
}

export async function fetchElectionVideos(options?: FetchOptions) {
  const opts = getFetchOpts(options);
  try {
    const res = await fetch(
      "https://www.kalbela.com/json-feed/video/election.json",
      opts
    );
    if (!res.ok) {
      throw new Error(
        `Failed to fetch election videos: ${res.status} ${res.statusText}`
      );
    }
    return res.json();
  } catch (error) {
    console.error("Error fetching election videos:", error);
    return [];
  }
}
