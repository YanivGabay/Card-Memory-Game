import React from 'react'
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material'





/**
 * High Scores component.

 * @param {Array}  scores - scores[i].name and scores[i].score to get the scores from the context.

 * @returns {JSX.Element} The rendered game component.
 *

 */



const HighScoresTable = ({scores}) => {
   
  return (
    <TableContainer component={Paper}>
    <Table aria-label="simple table">
        <TableHead>
            <TableRow>
                <TableCell>Rank</TableCell>
                <TableCell align="right">Name</TableCell>
                <TableCell align="right">Score</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {scores.map((row, index) => (
                <TableRow key={row.name}>
                    <TableCell component="th" scope="row">
                        {index + 1}
                    </TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.score}</TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
</TableContainer>
  )
}

export default HighScoresTable