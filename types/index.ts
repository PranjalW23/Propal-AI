export interface User {
  id: string;
  username: string;
  email: string;
  password: string;
  phone?: string;
  createdAt: string;
}

export interface AuthState {
  isAuthenticated: boolean;
  user: User | null;
}

export interface STTProvider {
  name: string;
  value: string;
  models: STTModel[];
}

export interface STTModel {
  name: string;
  value: string;
  languages: STTLanguage[];
}

export interface STTLanguage {
  name: string;
  value: string;
}

export interface STTConfig {
  stt: STTProvider[];
}

export interface SelectedConfig {
  provider: string;
  model: string;
  language: string;
}