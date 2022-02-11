interface User {
  id: number,
  avatar: string,
  login: string,
  email: string;
  name: string,
  bio: string;
  html_url: string,
  blog: string,
  company: string,
  location: string,
  followers: number,
  following: number,
  public_gists: number,
  public_repos: number,
}

export default User;