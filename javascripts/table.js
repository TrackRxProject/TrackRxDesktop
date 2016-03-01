var React = require('react');
import Table from 'material-ui/lib/table/table';
import TableHeaderColumn from 'material-ui/lib/table/table-header-column';
import TableRow from 'material-ui/lib/table/table-row';
import TableHeader from 'material-ui/lib/table/table-header';
import TableRowColumn from 'material-ui/lib/table/table-row-column';
import TableBody from 'material-ui/lib/table/table-body';

const DataTable = () => (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHeaderColumn>Name</TableHeaderColumn>
          <TableHeaderColumn>Age</TableHeaderColumn>
          <TableHeaderColumn>Doctor</TableHeaderColumn>
          <TableHeaderColumn>Prescriptions</TableHeaderColumn>
        </TableRow>
      </TableHeader>
    <TableBody>

      <TableRow>
        <TableRowColumn>Marco Botton</TableRowColumn>
        <TableRowColumn>38</TableRowColumn>
        <TableRowColumn>George Constanzo</TableRowColumn>
        <TableRowColumn>Percuset</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Marco Botton</TableRowColumn>
        <TableRowColumn>38</TableRowColumn>
        <TableRowColumn>George Constanzo</TableRowColumn>
        <TableRowColumn>Percuset</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Marco Botton</TableRowColumn>
        <TableRowColumn>38</TableRowColumn>
        <TableRowColumn>George Constanzo</TableRowColumn>
        <TableRowColumn>Percuset</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Marco Botton</TableRowColumn>
        <TableRowColumn>38</TableRowColumn>
        <TableRowColumn>George Constanzo</TableRowColumn>
        <TableRowColumn>Percuset</TableRowColumn>
      </TableRow>

      <TableRow>
        <TableRowColumn>Marco Botton</TableRowColumn>
        <TableRowColumn>38</TableRowColumn>
        <TableRowColumn>George Constanzo</TableRowColumn>
        <TableRowColumn>Percuset</TableRowColumn>
      </TableRow>

    </TableBody>
  </Table>
);

export default DataTable;
