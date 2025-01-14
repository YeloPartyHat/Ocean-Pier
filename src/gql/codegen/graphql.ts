/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type AffectedRows = {
  __typename?: 'AffectedRows';
  affected_rows: Scalars['Int']['output'];
};

export type Audio = {
  __typename?: 'Audio';
  author: Author;
  bitrate: Scalars['Int']['output'];
  contributors?: Maybe<Array<Maybe<Author>>>;
  duration: Scalars['Int']['output'];
  file: File;
  genre?: Maybe<Genre>;
  id: Scalars['Int']['output'];
  originalUrl: Scalars['String']['output'];
  thumbnail: Image;
  title: Scalars['String']['output'];
};

export type AudioInput = {
  _where: WithId;
  authorId?: InputMaybe<Scalars['Int']['input']>;
  genreId?: InputMaybe<Scalars['Int']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
};

export type AudioWhereInput = {
  genre?: InputMaybe<GenreWhereInput>;
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Author = {
  __typename?: 'Author';
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  provider: Provider;
};

export type AuthorInput = {
  _where: WithId;
  name?: InputMaybe<Scalars['String']['input']>;
  providerId?: InputMaybe<Scalars['Int']['input']>;
};

export type DownloadSettings = {
  __typename?: 'DownloadSettings';
  audioPath: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  imagePath: Scalars['String']['output'];
  metadataPath: Scalars['String']['output'];
  path: Scalars['String']['output'];
  updatedAt: Scalars['String']['output'];
  videoPath: Scalars['String']['output'];
};

export type DownloadSettingsInput = {
  audioPath?: InputMaybe<Scalars['String']['input']>;
  imagePath?: InputMaybe<Scalars['String']['input']>;
  metadataPath?: InputMaybe<Scalars['String']['input']>;
  path?: InputMaybe<Scalars['String']['input']>;
  videoPath?: InputMaybe<Scalars['String']['input']>;
};

export type File = {
  __typename?: 'File';
  id: Scalars['Int']['output'];
  location: Scalars['String']['output'];
};

export type GenericDownloadInput = {
  overrideOnCollision?: InputMaybe<Scalars['Boolean']['input']>;
  url: Scalars['String']['input'];
};

export type Genre = {
  __typename?: 'Genre';
  description: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type GenreInput = {
  _where: WithId;
  description?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type GenreWhereInput = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

export type Image = {
  __typename?: 'Image';
  file: File;
  height: Scalars['Int']['output'];
  id: Scalars['Int']['output'];
  width: Scalars['Int']['output'];
};

export type InitializeGenresInput = {
  overrideExisting?: InputMaybe<Scalars['Boolean']['input']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  download_audio: Audio;
  initialize_genres: Scalars['Boolean']['output'];
  update_audio: AffectedRows;
  update_settings: Settings;
};


export type MutationDownload_AudioArgs = {
  input: GenericDownloadInput;
};


export type MutationInitialize_GenresArgs = {
  input?: InputMaybe<InitializeGenresInput>;
};


export type MutationUpdate_AudioArgs = {
  input?: InputMaybe<AudioInput>;
};


export type MutationUpdate_SettingsArgs = {
  input?: InputMaybe<SettingsInput>;
};

export type Provider = {
  __typename?: 'Provider';
  domain: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  name: Scalars['String']['output'];
};

export type ProviderInput = {
  _where: WithId;
  domain?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Query = {
  __typename?: 'Query';
  audios: Array<Maybe<Audio>>;
  genres: Array<Maybe<Genre>>;
  settings: Settings;
};


export type QueryAudiosArgs = {
  where?: InputMaybe<AudioWhereInput>;
};

export type Settings = {
  __typename?: 'Settings';
  downloadSettingsId: Scalars['Int']['output'];
  downloads: DownloadSettings;
  id: Scalars['Int']['output'];
};

export type SettingsInput = {
  downloads?: InputMaybe<DownloadSettingsInput>;
};

export type WithId = {
  id: Scalars['Int']['input'];
};

export type UpdateAudioMutationVariables = Exact<{
  input?: InputMaybe<AudioInput>;
}>;


export type UpdateAudioMutation = { __typename?: 'Mutation', update_audio: { __typename?: 'AffectedRows', affected_rows: number } };

export type UpdateSettingsMutationVariables = Exact<{
  input?: InputMaybe<SettingsInput>;
}>;


export type UpdateSettingsMutation = { __typename?: 'Mutation', update_settings: { __typename?: 'Settings', id: number, downloads: { __typename?: 'DownloadSettings', id: number, updatedAt: string } } };

export type GetAudiosQueryVariables = Exact<{
  where?: InputMaybe<AudioWhereInput>;
}>;


export type GetAudiosQuery = { __typename?: 'Query', audios: Array<{ __typename?: 'Audio', id: number, title: string, bitrate: number, originalUrl: string, duration: number, genre?: { __typename?: 'Genre', id: number, name: string, description: string } | null, author: { __typename?: 'Author', id: number, name: string, provider: { __typename?: 'Provider', id: number, name: string, domain: string } }, file: { __typename?: 'File', id: number, location: string }, contributors?: Array<{ __typename?: 'Author', id: number, name: string } | null> | null, thumbnail: { __typename?: 'Image', width: number, height: number, id: number, file: { __typename?: 'File', id: number, location: string } } } | null> };

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = { __typename?: 'Query', genres: Array<{ __typename?: 'Genre', id: number, name: string, description: string } | null> };

export type GetSettingsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetSettingsQuery = { __typename?: 'Query', settings: { __typename?: 'Settings', id: number, downloads: { __typename?: 'DownloadSettings', id: number, updatedAt: string, audioPath: string, videoPath: string, imagePath: string, metadataPath: string, path: string } } };


export const UpdateAudioDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateAudio"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AudioInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_audio"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"affected_rows"}}]}}]}}]} as unknown as DocumentNode<UpdateAudioMutation, UpdateAudioMutationVariables>;
export const UpdateSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"UpdateSettings"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"SettingsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"update_settings"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"downloads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}}]}}]}}]}}]} as unknown as DocumentNode<UpdateSettingsMutation, UpdateSettingsMutationVariables>;
export const GetAudiosDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAudios"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"where"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AudioWhereInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"audios"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"Variable","name":{"kind":"Name","value":"where"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"genre"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}},{"kind":"Field","name":{"kind":"Name","value":"bitrate"}},{"kind":"Field","name":{"kind":"Name","value":"originalUrl"}},{"kind":"Field","name":{"kind":"Name","value":"author"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"provider"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"domain"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}},{"kind":"Field","name":{"kind":"Name","value":"contributors"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"duration"}},{"kind":"Field","name":{"kind":"Name","value":"thumbnail"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"width"}},{"kind":"Field","name":{"kind":"Name","value":"height"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"file"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"location"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAudiosQuery, GetAudiosQueryVariables>;
export const GetGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGenres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"description"}}]}}]}}]} as unknown as DocumentNode<GetGenresQuery, GetGenresQueryVariables>;
export const GetSettingsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetSettings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"settings"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"downloads"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"updatedAt"}},{"kind":"Field","name":{"kind":"Name","value":"audioPath"}},{"kind":"Field","name":{"kind":"Name","value":"videoPath"}},{"kind":"Field","name":{"kind":"Name","value":"imagePath"}},{"kind":"Field","name":{"kind":"Name","value":"metadataPath"}},{"kind":"Field","name":{"kind":"Name","value":"path"}}]}}]}}]}}]} as unknown as DocumentNode<GetSettingsQuery, GetSettingsQueryVariables>;