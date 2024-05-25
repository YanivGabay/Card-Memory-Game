import React from 'react';
import { useHighScores } from '../context/HighScoreContext';
import {  Paper, Container } from '@mui/material';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import ReturnHome from './ReturnHome';

function HighScores() {
    const { scores } = useHighScores();

    return (
        <Container maxWidth="sm" style={{ marginTop: '20px' }}>

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



            <ReturnHome />
        </Container>
    );
}

export default HighScores;
