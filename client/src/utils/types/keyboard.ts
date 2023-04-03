/**
 * [$]: WAI-ARIA Attribute Properties
 * https://www.w3.org/TR/wai-aria-1.1/
 */

/**
 * [$]: W3C.ORG - KEYBOARDEVENT.KEY
 * https://www.w3.org/TR/uievents-key/#named-key-attribute-value
 */

export type ConfigKeyboardCodes = {
  // [$]: 3.2. Modifier Keys
  // https://www.w3.org/TR/uievents-key/keys-modifier

  Alt: "Alt";
  AltGraph: "AltGraph";
  CapsLock: "CapsLock";
  Control: "Control";
  Fn: "Fn";
  FnLock: "FnLock";
  Meta: "Meta";
  NumLock: "NumLock";
  ScrollLock: "ScrollLock";
  Shift: "Shift";
  Symbol: "Symbol";
  SymbolLock: "SymbolLock";

  // [$]: 3.3. Whitespace Keys
  // https://www.w3.org/TR/uievents-key/keys-whitespace

  Enter: "Enter";
  Tab: "Tab";

  // [$]: 3.4. Navigation Keys
  // https://www.w3.org/TR/uievents-key/keys-navigation

  ArrowDown: "ArrowDown";
  ArrowLeft: "ArrowLeft";
  ArrowRight: "ArrowRight";
  ArrowUp: "ArrowUp";
  End: "End";
  Home: "Home";
  PageDown: "PageDown";
  PageUp: "PageUp";

  // [$]: 3.5. Editing Keys
  // https://www.w3.org/TR/uievents-key/keys-editing

  Backspace: "Backspace";
  Clear: "Clear";
  Copy: "Copy";
  Cut: "Cut";
  Delete: "Delete";
  EraseEof: "EraseEof";
  ExSel: "ExSel";
  Insert: "Insert";
  Paste: "Paste";
  Redo: "Redo";
  Undo: "Undo";

  // [$]: 3.6. UI Keys
  // https://www.w3.org/TR/uievents-key/keys-ui

  Accept: "Accept";
  Again: "Again";
  Attn: "Attn";
  Cancel: "Cancel";
  ContextMenu: "ContextMenu";
  Escape: "Escape";
  Execute: "Execute";
  Find: "Find";
  Help: "Help";
  Pause: "Pause";
  Play: "Play";
  Props: "Props";
  Select: "Select";
  ZoomIn: "ZoomIn";
  ZoomOut: "ZoomOut";

  // [$]: 3.7. Device Keys
  // https://www.w3.org/TR/uievents-key/keys-device

  BrightnessDown: "BrightnessDown";
  BrightnessUp: "BrightnessUp";
  Eject: "Eject";
  LogOff: "LogOff";
  Power: "Power";
  PowerOff: "PowerOff";
  PrintScreen: "PrintScreen";
  Hibernate: "Hibernate";
  Standby: "Standby";
  WakeUp: "WakeUp";

  // [$]: 3.8. IME and Composition Keys
  // https://www.w3.org/TR/uievents-key/keys-composition

  AllCandidates: "AllCandidates";
  Alphanumeric: "Alphanumeric";
  CodeInput: "CodeInput";
  Compose: "Compose";
  Convert: "Convert";
  Dead: "Dead";

  FinalMode: "FinalMode";
  GroupFirst: "GroupFirst";
  GroupLast: "GroupLast";
  GroupNext: "GroupNext";
  GroupPrevious: "GroupPrevious";
  ModeChange: "ModeChange";
  NextCandidate: "NextCandidate";
  NonConvert: "NonConvert";
  PreviousCandidate: "PreviousCandidate";
  Process: "Process";
  SingleCandidate: "SingleCandidate";

  // Keys specific to Korean keyboards:

  HangulMode: "HangulMode";
  HanjaMode: "HanjaMode";
  JunjaMode: "JunjaMode";

  // Keys specific to Japanese keyboards:

  Eisu: "Eisu";
  Hankaku: "Hankaku";
  Hiragana: "Hiragana";
  HiraganaKatakana: "HiraganaKatakana";
  KanaMode: "KanaMode";
  KanjiMode: "KanjiMode";
  Katakana: "Katakana";
  Romaji: "Romaji";
  Zenkaku: "Zenkaku";
  ZenkakuHankaku: "ZenkakuHankaku";

  // [$]: 3.9. General-Purpose Function Keys
  // https://www.w3.org/TR/uievents-key/keys-function

  F1: "F1";
  F2: "F2";
  F3: "F3";
  F4: "F4";
  F5: "F5";
  F6: "F6";
  F7: "F7";
  F8: "F8";
  F9: "F9";
  F10: "F10";
  F11: "F11";
  F12: "F12";
  Soft1: "Soft1";
  Soft2: "Soft2";
  Soft3: "Soft3";
  Soft4: "Soft4";

  // [$] 3.10. Multimedia Keys
  // https://www.w3.org/TR/uievents-key/keys-multimedia

  ChannelDown: "ChannelDown";
  ChannelUp: "ChannelUp";
  Close: "Close";
  MailForward: "MailForward";
  MailReply: "MailReply";
  MailSend: "MailSend";
  MediaClose: "MediaClose";
  MediaFastForward: "MediaFastForward";
  MediaPause: "MediaPause";
  MediaPlay: "MediaPlay";
  MediaPlayPause: "MediaPlayPause";
  MediaRecord: "MediaRecord";
  MediaRewind: "MediaRewind";
  MediaStop: "MediaStop";
  MediaTrackNext: "MediaTrackNext";
  MediaTrackPrevious: "MediaTrackPrevious";
  New: "New";
  Open: "Open";
  Print: "Print";
  Save: "Save";
  SpellCheck: "SpellCheck";

  // [$]: 3.11. Multimedia Numpad Keys
  // https://www.w3.org/TR/uievents-key/keys-multimedia-numpad

  Key11: "Key11"; // The 11 key found on media numpads that have buttons from 1 ... 12.
  Key12: "Key12"; // The 12 key found on media numpads that have buttons from 1 ... 12.

  // [$]: 3.12. Audio Keys
  // https://www.w3.org/TR/uievents-key/keys-audio

  AudioBalanceLeft: "AudioBalanceLeft";
  AudioBalanceRight: "AudioBalanceRight";
  AudioBassBoostDown: "AudioBassBoostDown";
  AudioBassBoostToggle: "AudioBassBoostToggle";
  AudioBassBoostUp: "AudioBassBoostUp";
  AudioFaderFront: "AudioFaderFront";
  AudioFaderRear: "AudioFaderRear";
  AudioSurroundModeNext: "AudioSurroundModeNext";
  AudioTrebleDown: "AudioTrebleDown";
  AudioTrebleUp: "AudioTrebleUp";
  AudioVolumeDown: "AudioVolumeDown";
  AudioVolumeUp: "AudioVolumeUp";
  AudioVolumeMute: "AudioVolumeMute";
  MicrophoneToggle: "MicrophoneToggle";
  MicrophoneVolumeDown: "MicrophoneVolumeDown";
  MicrophoneVolumeUp: "MicrophoneVolumeUp";
  MicrophoneVolumeMute: "MicrophoneVolumeMute";

  // Some of the keys defined in the media controller standards already
  // have appropriate keys defined in other sections of this specification.
  // These following table summarizes the key values that MUST be used:
  // https://www.w3.org/TR/uievents-key

  MediaNextTrack: "MediaNextTrack";
  MediaPreviousTrack: "MediaPreviousTrack";

  // [$]: 3.13. Speech Keys
  // https://www.w3.org/TR/uievents-key/keys-speech

  SpeechCorrectionList: "SpeechCorrectionList";
  SpeechInputToggle: "SpeechInputToggle";

  // [$]: 3.14. Application Keys
  // https://www.w3.org/TR/uievents-key/keys-apps

  LaunchApplication1: "LaunchApplication1";
  LaunchApplication2: "LaunchApplication2";
  LaunchCalendar: "LaunchCalendar";
  LaunchContacts: "LaunchContacts";
  LaunchMail: "LaunchMail";
  LaunchMediaPlayer: "LaunchMediaPlayer";
  LaunchMusicPlayer: "LaunchMusicPlayer";
  LaunchPhone: "LaunchPhone";
  LaunchScreenSaver: "LaunchScreenSaver";
  LaunchSpreadsheet: "LaunchSpreadsheet";
  LaunchWebBrowser: "LaunchWebBrowser";
  LaunchWebCam: "LaunchWebCam";
  LaunchWordProcessor: "LaunchWordProcessor";

  // [$]: 3.15. Browser Keys
  // https://www.w3.org/TR/uievents-key/keys-browser

  BrowserBack: "BrowserBack";
  BrowserFavorites: "BrowserFavorites";
  BrowserForward: "BrowserForward";
  BrowserHome: "BrowserHome";
  BrowserRefresh: "BrowserRefresh";
  BrowserSearch: "BrowserSearch";
  BrowserStop: "BrowserStop";

  // [$]: 3.16. Mobile Phone Keys
  // https://www.w3.org/TR/uievents-key/keys-mobile

  AppSwitch: "AppSwitch";
  Call: "Call";
  Camera: "Camera";
  CameraFocus: "CameraFocus";
  EndCall: "EndCall";
  GoBack: "GoBack";
  GoHome: "GoHome";
  HeadsetHook: "HeadsetHook";
  LastNumberRedial: "LastNumberRedial";
  Notification: "Notification";
  MannerMode: "MannerMode";
  VoiceDial: "VoiceDial";

  // [$]: 3.17. TV Keys
  // https://www.w3.org/TR/uievents-key/keys-tv

  TV: "TV";
  TV3DMode: "TV3DMode";
  TVAntennaCable: "TVAntennaCable";
  TVAudioDescription: "TVAudioDescription";
  TVAudioDescriptionMixDown: "TVAudioDescriptionMixDown";
  TVAudioDescriptionMixUp: "TVAudioDescriptionMixUp";
  TVContentsMenu: "TVContentsMenu";
  TVDataService: "TVDataService";
  TVInput: "TVInput";
  TVInputComponent1: "TVInputComponent1";
  TVInputComponent2: "TVInputComponent2";
  TVInputComposite1: "TVInputComposite1";
  TVInputComposite2: "TVInputComposite2";
  TVInputHDMI1: "TVInputHDMI1";
  TVInputHDMI2: "TVInputHDMI2";
  TVInputHDMI3: "TVInputHDMI3";
  TVInputHDMI4: "TVInputHDMI4";
  TVInputVGA1: "TVInputVGA1";
  TVMediaContext: "TVMediaContext";
  TVNetwork: "TVNetwork";
  TVNumberEntry: "TVNumberEntry";
  TVPower: "TVPower";
  TVRadioService: "TVRadioService";
  TVSatellite: "TVSatellite";
  TVSatelliteBS: "TVSatelliteBS";
  TVSatelliteCS: "TVSatelliteCS";
  TVSatelliteToggle: "TVSatelliteToggle";
  TVTerrestrialAnalog: "TVTerrestrialAnalog";
  TVTerrestrialDigital: "TVTerrestrialDigital";
  TVTimer: "TVTimer";

  // [$]: 3.18. Media Controller Keys
  // https://www.w3.org/TR/uievents-key/keys-media-controller

  AVRInput: "AVRInput";
  AVRPower: "AVRPower";
  ColorF0Red: "ColorF0Red";
  ColorF1Green: "ColorF1Green";
  ColorF2Yellow: "ColorF2Yellow";
  ColorF3Blue: "ColorF3Blue";
  ColorF4Grey: "ColorF4Grey";
  ColorF5Brown: "ColorF5Brown";
  ClosedCaptionToggle: "ClosedCaptionToggle";
  Dimmer: "Dimmer";
  DisplaySwap: "DisplaySwap";
  DVR: "DVR";
  Exit: "Exit";
  FavoriteClear0: "FavoriteClear0";
  FavoriteClear1: "FavoriteClear1";
  FavoriteClear2: "FavoriteClear2";
  FavoriteClear3: "FavoriteClear3";
  FavoriteRecall0: "FavoriteRecall0";
  FavoriteRecall1: "FavoriteRecall1";
  FavoriteRecall2: "FavoriteRecall2";
  FavoriteRecall3: "FavoriteRecall3";
  FavoriteStore0: "FavoriteStore0";
  FavoriteStore1: "FavoriteStore1";
  FavoriteStore2: "FavoriteStore2";
  FavoriteStore3: "FavoriteStore3";
  Guide: "Guide";
  GuideNextDay: "GuideNextDay";
  GuidePreviousDay: "GuidePreviousDay";
  Info: "Info";
  InstantReplay: "InstantReplay";
  Link: "Link";
  ListProgram: "ListProgram";
  LiveContent: "LiveContent";
  Lock: "Lock";
  MediaApps: "MediaApps";

  // Do not confuse this key value with the
  // Windows' VK_APPS / VK_CONTEXT_MENU key,
  // which is encoded as "ContextMenu".

  MediaAudioTrack: "MediaAudioTrack";
  MediaLast: "MediaLast";
  MediaSkipBackward: "MediaSkipBackward";
  MediaSkipForward: "MediaSkipForward";
  MediaStepBackward: "MediaStepBackward";
  MediaStepForward: "MediaStepForward";
  MediaTopMenu: "MediaTopMenu";
  NavigateIn: "NavigateIn";
  NavigateNext: "NavigateNext";
  NavigateOut: "NavigateOut";
  NavigatePrevious: "NavigatePrevious";
  NextFavoriteChannel: "NextFavoriteChannel";
  NextUserProfile: "NextUserProfile";
  OnDemand: "OnDemand";
  Pairing: "Pairing";
  PinPDown: "PinPDown";
  PinPMove: "PinPMove";
  PinPToggle: "PinPToggle";
  PinPUp: "PinPUp";
  PlaySpeedDown: "PlaySpeedDown";
  PlaySpeedReset: "PlaySpeedReset";
  PlaySpeedUp: "PlaySpeedUp";
  RandomToggle: "RandomToggle";
  RcLowBattery: "RcLowBattery";
  RecordSpeedNext: "RecordSpeedNext";
  RfBypass: "RfBypass";
  ScanChannelsToggle: "ScanChannelsToggle";
  ScreenModeNext: "ScreenModeNext";
  Settings: "Settings";
  SplitScreenToggle: "SplitScreenToggle";
  STBInput: "STBInput";
  STBPower: "STBPower";
  Subtitle: "Subtitle";
  Teletext: "Teletext";
  VideoModeNext: "VideoModeNext";
  Wink: "Wink";
  ZoomToggle: "ZoomToggle";

  // [$]: Unidentified
  Unidentified: "Unidentified";
};
