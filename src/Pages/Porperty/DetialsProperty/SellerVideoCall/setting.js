import { AgoraVideoPlayer, createClient, createMicrophoneAndCameraTracks } from "agora-rtc-react";

const appId = "a0d71d6d47d74bb7a8522a1a86fc3364"
const token = "007eJxTYGhK7pXb6qr34P6VfkveWMGudf8jFpvX/OZgfXhnxeq3ET8VGBINUswNU8xSTMxTzE2SkswTLUyNjBINEy3M0pKNjc1MVnD/Sm4IZGQ4H+rHwsgAgSA+C0NuYmYeAwMAnXwgnQ=="



export const config = {mode: "rtc", codec: "vp8" ,appId:appId, token:token}

export const useClient = createClient(config);
export const useMicrophoneAndCameraTracks = createMicrophoneAndCameraTracks();
export const channelName = "main";