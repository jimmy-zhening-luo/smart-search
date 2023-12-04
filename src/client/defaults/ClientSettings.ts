import type OpenAI from "openai";
import type { ChatModelSupport } from "../handlers/types/ChatTypes.js";
import type {
  ImageModelSupport,
  ImageShape,
  ImageCount,
} from "../handlers/types/ImageTypes.js";
import type { ReimageCount } from "../handlers/types/ReimageTypes.js";

// TODO: Create utility function to extract any string from OpenAI types
// TODO: Create utility function to extract string literals from OpenAI types

export type ConstSettingIds =
  // // Client Operations
  | "DEFAULT_INPUT_RELATIVE_PATH"
  | "DEFAULT_OUTPUT_RELATIVE_PATH"
  // // API Handlers
  // Chat
  | "DEFAULT_CHAT_MODEL"
  | "DEFAULT_CHAT_JSON_MODEL"
  | "DEFAULT_CHAT_VISION_MODEL"
  // Image
  | "DEFAULT_IMAGE_MODEL"
  | "DEFAULT_IMAGE_COUNT"
  | "DEFAULT_IMAGE_QUALITY"
  | "DEFAULT_IMAGE_STYLE"
  | "DEFAULT_IMAGE_SHAPE"
  | "DEFAULT_IMAGE_LANDSCAPE_DIMENSIONS"
  | "DEFAULT_IMAGE_PORTRAIT_DIMENSIONS"
  | "DEFAULT_IMAGE_SQUARE_DIMENSIONS"
  | "DEFAULT_IMAGE_RESPONSE_FORMAT"
  // Reimage
  | "DEFAULT_REIMAGE_MODEL"
  | "DEFAULT_REIMAGE_COUNT"
  | "DEFAULT_REIMAGE_DIMENSIONS"
  | "DEFAULT_REIMAGE_RESPONSE_FORMAT"
  // Speech
  | "DEFAULT_SPEECH_MODEL"
  | "DEFAULT_SPEECH_VOICE"
  | "DEFAULT_SPEECH_RESPONSE_FORMAT"
  // Transcribe
  | "DEFAULT_TRANSCRIBE_MODEL"
  // Translate
  | "DEFAULT_TRANSLATE_MODEL";

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
  DEFAULT_CHAT_MODEL: Extract<OpenAI.ChatCompletionCreateParamsNonStreaming["model"], string>;
  DEFAULT_CHAT_JSON_MODEL: Extract<Extract<ChatModelSupport["json"], OpenAI.ChatCompletionCreateParamsNonStreaming["model"]>, string>;
  DEFAULT_CHAT_VISION_MODEL: Extract<Extract<ChatModelSupport["vision"], OpenAI.ChatCompletionCreateParamsNonStreaming["model"]>, string>;
  // Image
  DEFAULT_IMAGE_MODEL: Extract<Extract<ImageModelSupport["hd"], OpenAI.ChatCompletionCreateParamsNonStreaming["model"]>, string>;
  DEFAULT_IMAGE_COUNT: Extract<ImageCount, OpenAI.Images.ImageGenerateParams["n"]>;
  DEFAULT_IMAGE_QUALITY: Extract<OpenAI.Images.ImageGenerateParams["quality"], string>;
  DEFAULT_IMAGE_STYLE: Extract<OpenAI.Images.ImageGenerateParams["style"], string>;
  DEFAULT_IMAGE_SHAPE: Extract<ImageShape, string>;
  DEFAULT_IMAGE_LANDSCAPE_DIMENSIONS: Extract<OpenAI.Images.ImageGenerateParams["size"], string>;
  DEFAULT_IMAGE_PORTRAIT_DIMENSIONS: Extract<OpenAI.Images.ImageGenerateParams["size"], string>;
  DEFAULT_IMAGE_SQUARE_DIMENSIONS: Extract<OpenAI.Images.ImageGenerateParams["size"], string>;
  DEFAULT_IMAGE_RESPONSE_FORMAT: Extract<OpenAI.Images.ImageGenerateParams["response_format"], string>;
  // Reimage
  DEFAULT_REIMAGE_MODEL: Extract<OpenAI.Images.ImageEditParams["model"], string>;
  DEFAULT_REIMAGE_COUNT: Extract<ReimageCount, OpenAI.Images.ImageEditParams["n"]>;
  DEFAULT_REIMAGE_DIMENSIONS: Extract<OpenAI.Images.ImageEditParams["size"], string>;
  DEFAULT_REIMAGE_RESPONSE_FORMAT: Extract<OpenAI.Images.ImageEditParams["response_format"], string>;
  // Speech
  DEFAULT_SPEECH_MODEL: Extract<OpenAI.Audio.SpeechCreateParams["model"], string>;
  DEFAULT_SPEECH_VOICE: Extract<OpenAI.Audio.SpeechCreateParams["voice"], string>;
  DEFAULT_SPEECH_RESPONSE_FORMAT: Extract<OpenAI.Audio.SpeechCreateParams["response_format"], string>;
  // Transcribe
  DEFAULT_TRANSCRIBE_MODEL: Extract<OpenAI.Audio.TranscriptionCreateParams["model"], string>;
  // Translate
  DEFAULT_TRANSLATE_MODEL: Extract<OpenAI.Audio.TranslationCreateParams["model"], string>;
}

export interface EnvSettings {
  // // OpenAI API
  OPENAI_API_KEY: string | null;
  OPENAI_ORG_ID: string | null;
  // // Client Operations
  INPUT_DIRECTORY: string;
  OUTPUT_DIRECTORY: string;
}
