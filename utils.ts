export const makeGoogleUrl = (lat: string, lng: string) =>
  `https://www.google.com/maps/@${lat},${lng},15z?entry=ttu`;

export type User = {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};

export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const json = await response.json();
    return json;
  } catch (err) {
    return console.log(err);
  }
};
