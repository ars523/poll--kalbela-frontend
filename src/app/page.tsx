import HeroPart from "@/components/specific/HeroPart";
import LiveTvWithTimeline from "@/components/specific/LiveTvWithTimeline";
import VoterInfo from "@/components/specific/VoterInfo";
import NewsPart from "@/components/specific/NewsPart";
import VideoPart from "../components/specific/VideoPart";
import MobileNavbar from "@/components/common/MobileNavbar";
import AutoRotateSqure from "@/components/common/AutoRotateSqure";
import StickyAd from "@/components/common/StickyAd";
import { generatePageMetadata } from "./config/metadata";
import { domain } from "./config/api/api";

export const metadata = generatePageMetadata(domain);
import {
  PreviousElectionItem,
  PreviousElectionResponse,
  ElectionSeatResponse,
  NewsListResponse,
} from "@/types";
import type { VideoItem } from "@/app/config/interfaces/interfaces";
import type { ElectionShortItem } from "@/app/config/interfaces/interfaces";
import {
  fetchPreviousElectionInfo,
  fetchVoteCountingAsCandidates,
  fetchNewsList,
  fetchElectionVideos,
  fetchElectionShortInfo,
} from "@/apis";
import KeyCandidates from "@/components/specific/KeyCandidates";
import BigFight from "@/components/specific/BigFight";
import SeatInfo from "@/components/specific/SeatInfo";
import ZilaInfo from "@/components/specific/ZilaInfo";
import PreviousDataPart from "@/components/specific/PreviousDataPart";
import HomeSearchSection from "@/components/specific/HomeSearchSection";

const CACHE_SECONDS = 30;

const EMPTY_NEWS: NewsListResponse = {
  data: [],
  metadata: {
    api_version: "",
    response_time: "",
    data_response_type: "",
    api_url: "",
    row_count: 0,
    content_type: "",
    website: "",
  },
};

const EMPTY_ELECTION_SHORT = { data: [] as ElectionShortItem[] };

const EMPTY_CANDIDATES: ElectionSeatResponse = {
  success: false,
  totalSeats: 0,
  finalizedSeats: 0,
  pendingSeats: 0,
  totalCandidates: 0,
  totalVotes: 0,
  lastUpdated: "",
  data: [],
};

function normNews(raw: unknown): NewsListResponse {
  const r = raw as NewsListResponse | null | undefined;
  if (r && Array.isArray(r.data)) return r;
  return EMPTY_NEWS;
}

function normElectionShort(raw: unknown): {
  data: ElectionShortItem[];
} {
  const r = raw as { data?: ElectionShortItem[] } | null | undefined;
  if (r && Array.isArray(r.data)) return { data: r.data };
  return EMPTY_ELECTION_SHORT;
}

function normVideos(raw: unknown): VideoItem[] {
  return Array.isArray(raw) ? raw : [];
}

function normCandidates(raw: unknown): ElectionSeatResponse {
  const r = raw as ElectionSeatResponse | null | undefined;
  if (r && typeof r === "object" && "data" in r) return r;
  return EMPTY_CANDIDATES;
}

function normPrevious(raw: unknown): PreviousElectionItem[] {
  const r = raw as PreviousElectionResponse | null | undefined;
  if (r && Array.isArray(r.data)) return r.data;
  return [];
}

export default async function Home() {
  const results = await Promise.allSettled([
    fetchPreviousElectionInfo({ revalidateSeconds: CACHE_SECONDS }),
    fetchVoteCountingAsCandidates({ revalidateSeconds: CACHE_SECONDS }),
    fetchNewsList({
      catId: 138,
      limit: 6,
      revalidateSeconds: CACHE_SECONDS,
    }),
    fetchNewsList({
      catId: 138,
      limit: 3,
      revalidateSeconds: CACHE_SECONDS,
    }),
    fetchElectionVideos({ revalidateSeconds: CACHE_SECONDS }),
    fetchElectionShortInfo({ revalidateSeconds: CACHE_SECONDS }),
  ]);

  const previousResultData = normPrevious(
    results[0].status === "fulfilled" ? results[0].value : null
  );
  const candidatesData = normCandidates(
    results[1].status === "fulfilled" ? results[1].value : null
  );
  const newsLive = normNews(
    results[2].status === "fulfilled" ? results[2].value : null
  );
  const newsPart = normNews(
    results[3].status === "fulfilled" ? results[3].value : null
  );
  const videos = normVideos(
    results[4].status === "fulfilled" ? results[4].value : null
  );
  const electionShortData = normElectionShort(
    results[5].status === "fulfilled" ? results[5].value : null
  );

  return (
    <div className="lg:mb-14 mb-10">
      <MobileNavbar />
      <HeroPart />
      <HomeSearchSection />
      {/* <SeatInfo />
      <ZilaInfo />
      <LiveTvWithTimeline newsData={newsLive} videoData={videos} />
      <VoterInfo electionShortData={electionShortData} />
      <AutoRotateSqure />
      <KeyCandidates candidatesData={candidatesData} />
      <NewsPart newsData={newsPart} />
      <VideoPart videoData={videos} />
      <PreviousDataPart previousResultData={previousResultData} /> */}
      {/* <StickyAd /> */}
    </div>
  );
}
