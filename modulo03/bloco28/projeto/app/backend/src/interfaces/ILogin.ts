export type LoginData = {
  email: string;
  password: string;
};

interface Login {
  login(data: LoginData): Promise<string | void>;
}

export default Login;
