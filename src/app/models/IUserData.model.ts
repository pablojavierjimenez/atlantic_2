export interface IUserData {
  result: {
    succeeded: boolean;
    userName: string;
  };
  sessionToken: string;
  refreshToken: string;
}
