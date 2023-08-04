import * as React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  QUERY_FOODLISTINGS_BY_STORE,
} from '../../utils/queries';
import {
  CREATEFOODLISTING,
  UPDATEFOODLISTING,
  DELETEFOODLISTING,
} from '../../utils/mutations'; // Updated the import path for mutations

// Define the createData function to generate row data
function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DonorInventory() {
  const { loading, error, data } = useQuery(QUERY_FOODLISTINGS_BY_STORE, {
    variables: { donorId: 'Restaurant Name' }, // Replace 'Restaurant Name' with the actual donorId
  });

  const [createFoodListing] = useMutation(CREATEFOODLISTING);
  const [updateFoodListing] = useMutation(UPDATEFOODLISTING);
  const [deleteFoodListing] = useMutation(DELETEFOODLISTING);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const foodListings = data.foodListingsByDonorId;

  // Check if foodListings is null or empty before rendering the table
  if (!foodListings || foodListings.length === 0) {
    return <p>No food listings available for this donor.</p>;
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {foodListings.map((row) => (
            <TableRow
              key={row._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.foodItem}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default DonorInventory;
