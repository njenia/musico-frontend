import React from 'react'
import styled from 'styled-components'
import { ChevronLeft, ChevronRight } from '@material-ui/icons';


const Pagination = ({ maxPage, currentPage, onMoveOneLeftClick, onMoveOneRightClick }) => (
  <PaginationContainer>
    <MoveOneLeft disabled={currentPage === 0} onClick={onMoveOneLeftClick} />
    Page {currentPage + 1}
    <MoveOneRight disabled={currentPage === maxPage} onClick={onMoveOneRightClick} />
  </PaginationContainer>
)

const PaginationContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
`

const MoveOneLeft = styled(ChevronLeft)`
  color: ${props => props.disabled ? 'gray' : 'black'};
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

const MoveOneRight = styled(ChevronRight)`
  color: ${props => props.disabled ? 'gray' : 'black'};
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

export default Pagination