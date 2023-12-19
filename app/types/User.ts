export interface User {
  id: string,
  username: string,
  name: string,
  lastName: string,
  birthDate: string,
  country: string,
  state: string,
  streetAddress: string,
  postalCode: string,
  phone: string,
  preferredDeliveryType: 'mail' | 'pickup',
  userVerified: boolean,
  image: string
}