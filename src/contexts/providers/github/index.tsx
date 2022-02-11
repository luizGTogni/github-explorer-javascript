import React, { createContext, useCallback, useState } from "react";

interface User {
  id: string;
  name: string;
  html_url: string;
  blog: string;
  company: string;
}

const GithubContext = createContext({
  loading: false,
  user: {} as User
})