/// <reference types="@raycast/api">

/* 🚧 🚧 🚧
 * This file is auto-generated from the extension's manifest.
 * Do not modify manually. Instead, update the `package.json` file.
 * 🚧 🚧 🚧 */

/* eslint-disable @typescript-eslint/ban-types */

type ExtensionPreferences = {}

/** Preferences accessible in all the extension's commands */
declare type Preferences = ExtensionPreferences

declare namespace Preferences {
  /** Preferences accessible in the `add-note` command */
  export type AddNote = ExtensionPreferences & {}
  /** Preferences accessible in the `add-reminder` command */
  export type AddReminder = ExtensionPreferences & {}
  /** Preferences accessible in the `add-url` command */
  export type AddUrl = ExtensionPreferences & {}
  /** Preferences accessible in the `use-template` command */
  export type UseTemplate = ExtensionPreferences & {}
  /** Preferences accessible in the `search-note` command */
  export type SearchNote = ExtensionPreferences & {}
}

declare namespace Arguments {
  /** Arguments passed to the `add-note` command */
  export type AddNote = {
  /** Enter note text or URL */
  "content": string
}
  /** Arguments passed to the `add-reminder` command */
  export type AddReminder = {}
  /** Arguments passed to the `add-url` command */
  export type AddUrl = {}
  /** Arguments passed to the `use-template` command */
  export type UseTemplate = {}
  /** Arguments passed to the `search-note` command */
  export type SearchNote = {}
}

