export interface ElectionInfo {
  id: number;
  electionNoBn: string;
  electionYearBn: string;
  electionNoEn: string;
  electionYearEn: string;
  totalVoter: string;
  totalCenter: string;
  winningCandidate: string;
  partyName: string;
  partyCode: string;
  symbol: string;
  winningVote: string;
  seatName: string;
}

export interface SeatInfo {
  seatNo: number;
  seatName: string;
  totalElections: number;
  elections: ElectionInfo[];
}

export interface NewsItem {
  author_id: number | null;
  author_full_name: string | null;
  author_url_display: string | null;
  author_designation: string | null;
  author_organization: string | null;
  author_img: string | null;
  id: number;
  hl1: string;
  hl1_color: string | null;
  hl2: string;
  hl_color: string | null;
  hl3: string;
  hl3_color: string | null;
  cat_id: string;
  parent_cat_id: number;
  dist_info: string | null;
  country_info: string | null;
  rpt: string;
  author: number;
  prefix_keyword: string | null;
  sum: string;
  dtl: string;
  dtl_url: string;
  tmp_photo: string;
  tmp_photo_caption: string;
  tags: string;
  spc_tags: string;
  rel_id_list: string;
  on_lead: number;
  lead_hierarchy: number;
  top_news: number | null;
  corner_news: number | null;
  hl_news: number;
  hl_news_hierarchy: number;
  publish_time: string;
  entry_time: string;
  img_url: string;
}

export interface NewsListMetadata {
  api_version: string;
  response_time: string;
  data_response_type: string;
  api_url: string;
  row_count: number;
  content_type: string;
  website: string;
}

export interface NewsListResponse {
  data: NewsItem[];
  metadata: NewsListMetadata;
}

export interface PreviousElectionParty {
  id: number;
  partyName: string;
  partyNameBn: string;
  totalVote: string;
  totalSeat: string;
}

export interface PreviousElectionResponse {
  data: PreviousElectionItem[];
}

export interface PreviousElectionDetail {
  electionNumber: number;
  totalParties: number;
  parties: PreviousElectionParty[];
}

export interface PreviousElectionItem {
  electionYear: number;
  elections: PreviousElectionDetail[];
}

// Root API Response
export interface ElectionDistrictResponse {
  success: boolean;
  totalDistricts: number;
  totalRecords: number;
  lastUpdated: string;
  data: DistrictElectionData[];
}

// District Level
export interface DistrictElectionData {
  districtNo: number;
  totalElections: number;
  elections: Election[];
}

// Election Level
export interface Election {
  id: number;
  electionNoBn: string; // "১২তম"
  electionNoEn: number; // 12
  maleVoter: string; // বাংলা সংখ্যা বা ""
  femaleVoter: string;
  thirdGenderVoter: string;
  totalVoter: string;
  totalSeat: string;
  partySeats: PartySeats;
}

// Party Seats
export interface PartySeats {
  al: string; // আওয়ামী লীগ
  ao: string; // অন্যান্য
  bnp: string;
  jp: string;
  ji: string;
}

// Root API Response
export interface ElectionSeatResponse {
  success: boolean;
  totalSeats: number;
  finalizedSeats: number;
  pendingSeats: number;
  totalCandidates: number;
  totalVotes: number;
  lastUpdated: string;
  data: Seat[];
}

// Seat / Constituency
export interface Seat {
  seatId: number;
  seatName: string;
  seatNumber: number;
  divisionId: number;
  districtId: number;
  isResultFinalized: boolean;
  totalVotes: number;
  totalCandidates: number;
  candidates: Candidate[];
}

// Candidate
export interface Candidate {
  candidateId: number;
  candidateName: string;
  candidateImage: string; // URL
  partyId: number;
  partyName: string;
  partyLogo: string; // URL (can be empty)
  partySymbol: string; // Symbol name / text
  votesReceived: number;
  votePercentage: number;
  winningStatus: number; // 0 = Pending, 1 = Won, 2 = Lost (assumption)
  winningStatusText: string;
  isWinner: boolean;
  isFinalized: boolean;
}

// kbv Vote API (https://kbv.ideahubbd.com/api/Vote/seatNumber?seatNumber=N)
export interface VoteSeatCandidate {
  candidateId: number;
  totalVote: number;
  votePercentage: number;
}

export interface VoteSeatData {
  seatNumber: number;
  totalVote: number;
  candidates: VoteSeatCandidate[];
}

export interface VoteSeatResponse {
  success: boolean;
  message: string;
  data: VoteSeatData;
}

// kbv POST Vote success response data
export interface VoteSuccessData {
  id: string;
  seatId: number;
  candidateId: number;
  voteCount: number;
  votePercentage: number;
  totalVote: number;
  createdAt: string;
  updatedAt: string;
}
