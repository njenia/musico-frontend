import React from 'react'
import ListItem from "@material-ui/core/ListItem/ListItem"
import ListItemText from "@material-ui/core/ListItemText/ListItemText"
import { LibraryMusic } from '@material-ui/icons';
import ListItemIcon from "@material-ui/core/ListItemIcon/ListItemIcon"


const SongItem = ({artist, title, onSongClick}) => (
  <ListItem button onClick={onSongClick}>
    <ListItemIcon>
      <LibraryMusic />
    </ListItemIcon>
    <ListItemText primary={title} secondary={artist} />
  </ListItem>
)

export default SongItem