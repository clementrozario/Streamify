export type MetricsData = {
  totalUsers:number;
    activeUsers:number;
    totalStreams:number;
    revenue:number;
    topArtist: string;
};

export type UserGrowth ={
  month:string;
  totalUsers:number;
  activeUsers:number;
}

export type RevenueItem = {
  source: string;
  value: number;
};

export type SongData = {
  name: string;
  artist: string;
  streams: number;
};

export type StreamEntry = {
  id: number;
  songName: string;
  artist: string;
  dateStreamed: string; 
  streamCount: number;
  userId: string;
};

// --------------------------------------------------------------//

export const metricsData: MetricsData = {
    totalUsers:45000,
    activeUsers:32400,
    totalStreams:1250000,
    revenue:850000,
    topArtist: "Taylor Swift"
};

export const userGrowthData:UserGrowth[] = [
        {month:"Jan",totalUsers:30000,activeUsers:22000},
        {month:"Feb",totalUsers:32000,activeUsers:23500},
        {month:"Mar",totalUsers:33500,activeUsers:24200},
        {month:"Apr",totalUsers:35000,activeUsers:25800},
        {month:"May",totalUsers:36200,activeUsers:26500},
        {month:"Jun",totalUsers:37800,activeUsers:27200},
        {month:"Jul",totalUsers:39500,activeUsers:28500},
        {month:"Aug",totalUsers:41200,activeUsers:29800},
        {month:"Sep",totalUsers:42000,activeUsers:30500},
        {month:"Oct",totalUsers:43000,activeUsers:31200},
        {month:"Nov",totalUsers:44200,activeUsers:31800},
        {month:"Dec",totalUsers:45000,activeUsers:32400},
];

export const revenueData:RevenueItem[] = [
    { source: "Subscriptions", value: 680000 },
    { source: "Advertisements", value: 120000 },
    { source: "Merchandise", value: 50000 }
  ];

export const topSongsData:SongData[] = [
    { name: "Blinding Lights", artist: "The Weeknd", streams: 68500 },
    { name: "Shape of You", artist: "Ed Sheeran", streams: 62300 },
    { name: "Levitating", artist: "Dua Lipa", streams: 58900 },
    { name: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", streams: 52400 },
    { name: "Dance Monkey", artist: "Tones and I", streams: 48700 }
  ];

  export const streamData:StreamEntry[] = [
    { id: 1, songName: "Blinding Lights", artist: "The Weeknd", dateStreamed: "2023-04-15", streamCount: 45670, userId: "U12345" },
    { id: 2, songName: "Shape of You", artist: "Ed Sheeran", dateStreamed: "2023-04-14", streamCount: 38290, userId: "U23456" },
    { id: 3, songName: "Levitating", artist: "Dua Lipa", dateStreamed: "2023-04-13", streamCount: 32430, userId: "U34567" },
    { id: 4, songName: "Uptown Funk", artist: "Mark Ronson ft. Bruno Mars", dateStreamed: "2023-04-12", streamCount: 29870, userId: "U45678" },
    { id: 5, songName: "Dance Monkey", artist: "Tones and I", dateStreamed: "2023-04-11", streamCount: 26540, userId: "U56789" },
    { id: 6, songName: "Stay", artist: "The Kid LAROI, Justin Bieber", dateStreamed: "2023-04-10", streamCount: 24980, userId: "U67890" },
    { id: 7, songName: "Someone You Loved", artist: "Lewis Capaldi", dateStreamed: "2023-04-09", streamCount: 23450, userId: "U78901" },
    { id: 8, songName: "Bad Guy", artist: "Billie Eilish", dateStreamed: "2023-04-08", streamCount: 21780, userId: "U89012" },
    { id: 9, songName: "Watermelon Sugar", artist: "Harry Styles", dateStreamed: "2023-04-07", streamCount: 20340, userId: "U90123" },
    { id: 10, songName: "Dynamite", artist: "BTS", dateStreamed: "2023-04-06", streamCount: 19870, userId: "U01234" }
  ];