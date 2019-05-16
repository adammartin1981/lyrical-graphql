/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_TITLE_AND_ID
// ====================================================

export interface GET_TITLE_AND_ID_songs {
  __typename: "SongType";
  title: string | null;
  id: string | null;
}

export interface GET_TITLE_AND_ID {
  songs: (GET_TITLE_AND_ID_songs | null)[] | null;
}
