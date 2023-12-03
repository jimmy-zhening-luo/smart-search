import type OpenAI from "openai";

export type ConstSettingIds =
  // // Client Operations
  | "DEFAULT_INPUT_RELATIVE_PATH"
  | "DEFAULT_OUTPUT_RELATIVE_PATH"
  // // API Handlers
  // Chat
  | "DEFAULT_CHAT_MODEL"
  // Speech
  | "DEFAULT_SPEECH_MODEL"
  | "DEFAULT_SPEECH_VOICE"
  | "DEFAULT_SPEECH_RESPONSE_FORMAT"
  | "DEFAULT_SPEECH_SPEED";

export type EnvSettingIds =
  // // OpenAI API
  | "OPENAI_API_KEY"
  | "OPENAI_ORG_ID"
  // // Client Operations
  | "INPUT_DIRECTORY"
  | "OUTPUT_DIRECTORY";

export interface ConstSettings {
  // // Client Operations
  DEFAULT_INPUT_RELATIVE_PATH: string;
  DEFAULT_OUTPUT_RELATIVE_PATH: string;
  // // API Handlers
  // Chat
  DEFAULT_CHAT_MODEL: OpenAI.ChatCompletionCreateParamsNonStreaming["model"];
  // Speech
  DEFAULT_SPEECH_MODEL: OpenAI.Audio.SpeechCreateParams["model"];
  DEFAULT_SPEECH_VOICE: OpenAI.Audio.SpeechCreateParams["voice"];
  DEFAULT_SPEECH_RESPONSE_FORMAT: Exclude<OpenAI.Audio.SpeechCreateParams["response_format"], undefined>;
  DEFAULT_SPEECH_SPEED: OpenAI.Audio.SpeechCreateParams["speed"];
}

export interface EnvSettings {
  // // OpenAI API
  OPENAI_API_KEY: string | null;
  OPENAI_ORG_ID: string | null;
  // // Client Operations
  INPUT_DIRECTORY: string;
  OUTPUT_DIRECTORY: string;
}
