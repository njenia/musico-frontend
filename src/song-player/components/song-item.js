import React from 'react'
import styled from 'styled-components'

const SongItem = ({artist, title}) => (
  <SongItemContainer>
    <SongItemArtist>{artist}</SongItemArtist>
    <SongItemTitle>{title}</SongItemTitle>
  </SongItemContainer>
)

const SongItemContainer = styled.div`
  background-color: gray;
  padding: 10px 25px;
`

const SongItemArtist = styled.div`
  text-decoration: italic;
`

const SongItemTitle = styled.div`
  text-decoration: bold;
`


export default SongItem