import React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@material-ui/data-grid';
import { makeStyles } from '@material-ui/core/styles';
import { relative } from 'path';

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 50 },
    {
        field: 'name',
        headerName: 'Name',
        
        width: 150,
        
    },
    {
        field: 'power',
        headerName: 'Power',
        width: 350,
        editable: true
    },
    {
        field: 'descrip',
        headerName: 'Description',
        width: 380,
        editable: true
    },
    {
        field: 'comics_appeared_in',
        headerName: 'Comics appeared in:',
        type: 'number',
        width: 20, 
        editable: true
    },
    
];

const rows = [
    { id: 1, name: 'Wolverine', power: 'Supernatural healing ability, adamantium skeleton', descrip: 'Trained as a Supersoldier, vicious yet cool..', comics_appeared_in: '1645' },
    { id: 2, name: 'Storm', power: 'Flight, Weather Control', descrip: 'Egyptian orphan who became an X-Men Team Leader', comics_appeared_in: '1465' },
    { id: 3, name: 'Thor', power: 'Flight, Super Strength, Magic Hammer etc.', descrip: 'Norse God of Thunder', comics_appeared_in: '2045' },
    { id: 4, name: 'Hulk', power: 'Super Strength, powered by Gamma radiation', descrip: 'Big green guy, gets angry and smashes things', comics_appeared_in: '1865' },
    { id: 5, name: 'Groot', power: 'Extends branch hands to hit things', descrip: 'Walking, talking tree, likes to introduce himself.', comics_appeared_in: '620' },
    ];


export const DataTable = () => {
    return (
        <div style={{ height: 400, width: '1420px', color: 'white', background: 'white', opacity: '.80', textAlign: "center", marginLeft: 'auto', marginRight: "auto", marginTop: "40px", paddingBottom: "30px" }}>
            <h2>Drones in Inventory</h2>
            <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection/>
        </div>
    )
}