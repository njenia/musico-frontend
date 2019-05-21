import React from 'react'
import styled from 'styled-components'
import { ChevronLeft, ChevronRight, FirstPage, LastPage } from '@material-ui/icons';
import Typography from "@material-ui/core/Typography/Typography"

const Pagination = ({
  maxPage,
  currentPage,
  moveToPage
}) => (
  <PaginationContainer>
    <NavigationButton disabled={currentPage === 0} onClick={() => moveToPage(0)}>
      <FirstPage fontSize="large" />
    </NavigationButton>
    <NavigationButton disabled={currentPage === 0} onClick={() => moveToPage(currentPage - 1)}>
      <ChevronLeft fontSize="large" />
    </NavigationButton>
    <Typography variant="subtitle1">Page {currentPage + 1} / {maxPage + 1}</Typography>
    <NavigationButton disabled={currentPage === maxPage} onClick={() => moveToPage(currentPage + 1)}>
      <ChevronRight fontSize="large" />
    </NavigationButton>
    <NavigationButton disabled={currentPage === maxPage} onClick={() => moveToPage(maxPage)}>
      <LastPage fontSize="large" />
    </NavigationButton>
  </PaginationContainer>
)

const PaginationContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const NavigationButton = styled.div`
  opacity: ${props => props.disabled ? 0.25 : 1};
  pointer-events: ${props => props.disabled ? 'none' : 'default'};
  cursor: ${props => props.disabled ? 'default' : 'pointer'};
`

export default Pagination