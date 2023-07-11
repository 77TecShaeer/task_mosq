interface MosqueType {
  _id: string;
  masjidId: string;
  masjidName: string;
  masjidAddress: {
    description: string;
    street: string;
    zipcode: string;
    country: string;
    state: string;
    city: string;
    locality: string;
    phone: string;
    googlePlaceId: string;
  };
  masjidLocation: {
    type: string;
    coordinates: [number, number];
  };
  masjidTimings: {
    fajr: string;
    zuhr: string;
    asr: string;
    maghrib: string;
    isha: string;
    jumah: string;
  };
  masjidCreatedby: string;
  masjidModifiedby: string;
  masjidCreatedon: string;
  masjidModifiedon: string;
  masjidPic: any;
  Distance: any;
  notMasjid: boolean;
}
