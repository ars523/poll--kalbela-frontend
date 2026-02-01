export interface IPartySeats {
  al: string;
  ao: string;
  bnp: string;
  jp: string;
  ji: string;
  [key: string]: string;
}

export interface IDistrictWiseItem {
  Id?: number;
  districtNo: number;
  electionNoBn?: string;
  electionNoEn?: number;
  maleVoter?: string;
  femaleVoter?: string;
  thirdGenderVoter?: string;
  totalVoter?: string;
  totalSeat?: string;
  partySeats: IPartySeats;
  // allow any additional fields from source
  [key: string]: any;
}

export interface IDistrictWise {
  districtNo: number;
  totalElections: number;
  elections: IDistrictWiseItem[];
}

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

export interface PreviousElectionParty {
  id: number;
  partyName: string;
  partyNameBn: string;
  totalVote: string;
  totalSeat: string;
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

export interface PreviousElectionResponse {
  data: PreviousElectionItem[];
}

export interface ElectionShortItem {
  Id: number;
  electionNumber: number;
  totalVoter?: number;
  maleVoter?: number;
  femaleVoter?: number;
  thirdGenderVoter?: number;
  totalCandidate?: number;
  independentCandidate?: number;
  totalSeat?: number;
  totalParty?: number;
}

export interface SeatShortItem {
  Id: number;
  seatNo: number;
  seatName: string;
  districtNo: number;
  districtNameBn: string;
  districtNameEn: string;
  totalVoter: string;
  maleVoter: string;
  femaleVoter: string;
  thirdGenderVoter: string;
  totalCandidate: string;
  independentCandidate: string;
  ModifiedBy?: string | null;
  ModifiedDate?: string | null;
  [key: string]: any;
}

export interface SeatShortResponse {
  SeatShortInfo: SeatShortItem[];
}

export interface IElectionCandidate {
  candidateId?: number;
  candidateName: string;
  candidateImage: string;
  partyName: string;
  partyLogo: string;
  displayOrder?: number;
  isWinner?: boolean;
}

export interface IElectionSeat {
  seatId: number;
  seatName: string;
  seatNumber: number;
  candidates: IElectionCandidate[];
}

export interface IElectionResponse {
  success: boolean;
  totalSeats: number;
  totalCandidates: number;
  lastUpdated: string;
  data: IElectionSeat[];
}

export interface IElectionCandidateItem extends IElectionCandidate {
  candidateId: number;
  partyId: number;
  partySymbol: string;
  votesReceived: number;
  votePercentage: number;
  winningStatus: number;
  winningStatusText: string;
  isWinner: boolean;
  isFinalized: boolean;
  [key: string]: any;
}

export interface IElectionSeatItem {
  seatId: number;
  seatName: string;
  seatNumber: number;
  divisionId: number;
  districtId: number;
  isResultFinalized: boolean;
  totalVotes: number;
  totalCandidates: number;
  candidates: IElectionCandidateItem[];
  [key: string]: any;
}

export interface IPartyResultItem
  extends Pick<
    IElectionCandidateItem,
    "partyId" | "partyName" | "partyLogo" | "partySymbol"
  > {
  seatsWon: number;
  percentage: number;
  [key: string]: any;
}

export interface IFormattedResultItem {
  title: string;
  number: number;
  textColor: string;
  color: string;
  logo?: string;
  [key: string]: any;
}

export interface VideoItem {
  id: number;
  cat_id: string;
  rpt: string;
  parent_cat_id: number;
  video_title: string;
  video_sum: string;
  video_path: string | null;
  embed_from: number;
  embed_code: string;
  cover_photo: string;
  cover_photo_from_server: string;
  front_display: number;
  body_hierarchy: number;
  sub_hierarchy: number | null;
  operator: string;
  entry_time: string;
  update_time: string;
  meta_title: string;
  meta_keyword: string;
  meta_description: string;
  ads_link: string;
  ads_image: string | null;
  publish: number;
  url: string;
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
